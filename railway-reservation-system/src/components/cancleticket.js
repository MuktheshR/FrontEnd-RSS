import React, { useState} from 'react'
import PaymentService from '../Services/PaymentService'
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { constant } from 'lodash';
import { toast } from "react-toastify";
import BookService from '../Services/BookService';
import SearchService from '../Services/SearchService';

const Cancleticket = () => {


    const [pnrNo, setpnrNo] = useState('');
    const [mailId, setMailId] = useState("");
   
    const history = useHistory();

    /**To Show Add Toastify Text */
  const notify = () => {
    toast.success("Train Updated Successfully", {
      position: "top-center",
      autoClose: 3000,
    });
  };

    const canclePayment = (e) => {
        e.preventDefault();  
        const PaymentDetails={
          mailId,
          pnrNo,
        };
            SearchService.cancleticket(PaymentDetails)
            .then((response) => {
               var e = JSON.stringify(response.data);
                alert(e);
                console.log(response);
                history.push('/TicketCancled')
            }).catch(error => {
                console.log(error)
            })
    
    
    }
        return (
            <div>

      <br></br>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
          <br></br><br></br>
            <h2 className="text-center">Ticket Cancelation Form</h2>
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label">PNR NO</label>

                  <input
                    type="text"
                    placeholder="Enter PNR No"
                    name="pnrNo"
                    className="form-control"
                    value={pnrNo}
                    onChange={(e) => setpnrNo(e.target.value)}>
                  </input>
                  <label>
            <b>EmailId</b>
          </label>
          <input
            type="text"
            name="mailId"
            id="mailId"
            placeholder="Enter Your MailId"
            required
            value={mailId}
            onChange={(e) => setMailId(e.target.value)}
          ></input>

                </div>

                <Link 
                className="btn btn-outline-danger btn-color btn-bg-color btn-sm col-xs-2" 
                onClick=
                {
                  (e) => canclePayment(e)
                } >
                cancleticket
                  </Link>
                <Link className="btn btn-outline-warning btn-color btn-bg-color btn-sm col-xs-2" to={"./search"}>
                        BACK </Link>
              </form>
            </div>

          </div>

        </div>
      </div>
      <br></br>
    </div>
        )
    
}
export default Cancleticket;
