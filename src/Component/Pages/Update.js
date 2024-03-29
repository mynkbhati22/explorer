import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Admin.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const URL = "https://maalblockchainapi.in.ngrok.io";

function Update() {
  const [blocknummber, setBlockNumber] = useState();
  const [mineraddress, setMinerAddress] = useState();
  const [blocktranscations, setBlockTranscations] = useState();
  const [Reward, setReward] = useState();
  const [timeforseconds, setTimeforSeconds] = useState();

  const { id } = useParams();
  console.log(id);

  // UPDATING BLOCK

  const updatingvblock = async (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${URL}/api/updatingblockcards/${id}`, {
          blocknummber: blocknummber,
          mineraddress: mineraddress,
          timeforseconds: timeforseconds,
          blocktranscations: blocktranscations,
          Reward: Reward,
        })

        .then((res) => {
          console.log(res);
          toast.success("Updated Block Successfully!");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-explorer container-update">
        <div className="admin-container">
          <div>
            <h4 className="block-heading">BLOCK</h4>
          </div>
          <Form onSubmit={updatingvblock}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Enter Block Number</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter block nummber"
                value={blocknummber}
                onChange={(e) => setBlockNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Enter Miner Address</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter miner address"
                value={mineraddress}
                onChange={(e) => setMinerAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>No. of Transaction Made</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter no of transcations"
                value={blocktranscations}
                onChange={(e) => setBlockTranscations(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Reward</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter no rewards"
                value={Reward}
                onChange={(e) => setReward(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Time"
                value={timeforseconds}
                onChange={(e) => setTimeforSeconds(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Updated Block
            </Button>
          </Form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={6000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </>
  );
}

export default Update;
