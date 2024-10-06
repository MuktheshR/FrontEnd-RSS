import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";
import "./Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!"),
  username: Yup.string().required("Username is required!"),
});

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();
  //const fromUrl = _get(location, "state.from.pathname", "/defaultPathIfNotPresent");

  const notify = () => {
    toast.success("Admin Logged In Successfully!!!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const error = () => {
    toast.error("Invalid Credentials!!!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  const signInSuccess = (userData) => {
    history.push("/adminTrainList");
  };

  const signInFailure = () => {
    history.push("/login");
  };

  const login = (userData) => {
    fetch("http://localhost:8682/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          alert("Your user ID and password are not correct");
          signInFailure();
          error();
        } else {
          signInSuccess();
          notify();
        }
      })
      .catch((err) => {
        console.error(err);
        signInFailure();
        error();
      });
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={(values, { resetForm }) => {
        const userData = { ...values };
        resetForm();
        login(userData);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="booking-container">
            <h1 className="booking">ADMIN LOGIN</h1>
            <hr />
            <div className="inner">
              <label><b>Username</b></label>
              <Field name="username" type="text" placeholder="Enter username" />
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}
              <label><b>Password</b></label>
              <Field name="password" type="password" placeholder="Password" />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
              <button className="btn btn-success" type="submit">
                Sign In
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
