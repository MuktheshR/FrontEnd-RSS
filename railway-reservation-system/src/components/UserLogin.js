import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { useHistory, useLocation } from "react-router-dom";
import * as Yup from "yup";
import _get from "lodash.get";
import "./UserLogin.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure()

const LoginSchema = Yup.object().shape({
  password: Yup.string().required("Password is required!"),
  username: Yup.string().required("username is required!"),
});

const UserLogin = () => {

  /**To Show Add Toastify Text */
  const notify = () => {
    toast.success( " LoggedIn Successfully!!!", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const error = () =>
  {
    toast.error("Invalid Credentials!!!", {
      position: "top-center",
      autoClose: 1000,
    });
  };

  const [username] = useState("");
  const [password] = useState("");
  const history = useHistory();
  const location = useLocation();
  const fromUrl = _get(location, "state.from.pathname");

  const signInSuccess = (userData) => {
    if (fromUrl) {
      history.push(fromUrl);
    } else {
      history.push("/search");
    }
  };




  const login = (userData) => {
      fetch("http://localhost:8682/auth", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username: userData.username,
        password: userData.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.error) {
          alert("your userId and password is not correct");
        } else {
          const userData = {
            token: response,
            name: username,
            password:password
          };
          signInSuccess(userData);
          console.log(response);
        }
      })
      .catch((err) => {
        error();
        console.log(err);
      });
  };
  return (
    <Formik
    initialValues={{
      username: "",
      password: "",
    }}
    validationSchema={LoginSchema}
    onSubmit={async (values, { resetForm }) => {
      try {
        const userData = { ...values };
        resetForm();
        notify();
        login(userData);
      } catch (err) {
        console.error(err);
      }
    }}
  >
    {() => (
      <Form>
         <div className="user-container">
         <h1 className="user">USER LOGIN</h1>
         <hr></hr>
          <div className="inner">
            <label><b>User Name</b></label>
            <Field name="username" type="text" placeholder="Enter username" />
            <label><b>Password</b></label>
            <Field name="password" type="password" placeholder="Password" />
            <button
              className="btn btn-success"
              type="submit"
              onClick={() => {}}
            >
              Login
            </button>
          </div>
        </div>
      </Form>
    )}
  </Formik>
  
);
};
<td>
                        {" "}
                        <Link className="btn btn-info" to="/search">
                          {" "}
                          Book{" "}
                        </Link>
                      </td>
export default UserLogin;
