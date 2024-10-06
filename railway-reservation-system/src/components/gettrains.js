import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Modal } from "react-bootstrap";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchService from "../Services/SearchService";
import "./Search.css";
import get from "lodash.get";

const Search = () => {
  const [Trains, setTrains] = useState([]);
  const [sourceStation, setsourceStation] = useState("");
  const [destinationStation, setdestinationStation] = useState("");
  const [TrainDetails,setTrainDetails] = useState("");
  



  const searchTrain = (e) => {
    e.preventDefault();

    SearchService.getTrainsByRoute(sourceStation, destinationStation)
      .then((response) => {
        console.log(response);
        setTrains(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const getAvailableTrains = (e) => {
    e.preventDefault();

  SearchService.getAllDetails()
  .then((response)=>{
    console.log(response);
    setTrainDetails(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
};

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  return (
    <form>
      <div className="search-container">
        <h1 className="searching">WELCOME</h1>
        <div className="form-searching">         
        <hr></hr>
        <button className="btn btn-success" onClick={(e) => searchTrain(e)}>
            Search Trains
        </button>
          
        </div>
      </div>
      <div class="container ">
        <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded">
          <div class="row ">
            { <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">                      
                </form>
              </div>
            </div>
             }
            <div
              class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"
              style={{ color: "#D2691E" }}
            >

            </div>
          </div>
          <div class="row">
            <div class="table-responsive ">
              <table class="table table-striped table-hover table-bordered">
              
          <hr></hr>
          
          <button className="btn btn-success" onClick={(e) => getAvailableTrains(e)}>
            Search Trains
          </button>
                <thead>
                  <tr>
                    <th>TrainNo </th>
                    <th>TrainName </th>
                    <th>SourceStation </th>
                    <th>DestinationStation </th>
                    <th>ArrivalTime </th>
                    <th>DepartureTime </th>
                    <th>Duration </th>
                    <th>NoOfSeats </th>
                    <th>FirstClass </th>
                    <th>SecondClass </th>
                    <th>ThirdClass </th>
                    <th>Sleeper </th>
                    <th>Actions </th>
                  </tr>
                </thead>
                <tbody>
                  {TrainDetails.map((TrainDetails) => (
                    <tr key={TrainDetails.trainNo}>
                      <td> {TrainDetails.trainNo} </td>
                      <td> {TrainDetails.trainName} </td>
                      <td> {TrainDetails.sourceStation} </td>
                      <td>{TrainDetails.destinationStation}</td>
                      <td>{TrainDetails.arrivalTime}</td>
                      <td>{TrainDetails.deptTime}</td>
                      <td>{TrainDetails.duration}</td>
                      <td>{TrainDetails.noOfSeats}</td>
                      <td> {TrainDetails.firstClassACFare} </td>
                      <td> {TrainDetails.twoTierAcFare} </td>
                      <td> {TrainDetails.threeTierAcFare} </td>
                      <td> {TrainDetails.sleeperFare} </td>
                      <td>
                        {" "}
                   
          {/* <Link className="btn btn-info" to={"./userlogin"}>
    Logout </Link> */}
                        <Link className="btn btn-info" to="/booking">
                          {" "}
                          Book{" "}
                          
                        </Link>
                      </td>
                  
                    </tr>
                        
                  ))}
                  
                </tbody>
              </table>
   
                    
            </div>
            
          </div>
          <Link className="btn btn-info" to={"./userlogin"}>
                        Logout </Link>
                        
          {/* <!--- Model Box ---> */}
          <div className="model_box">
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body></Modal.Body>

              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

            {/* Model Box Finish*/}
          </div>
        </div>
       
      </div>
    </form>
  );
  
};

export default Search;
