import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Admin.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const URL = "https://maalblockchainapi.in.ngrok.io";

function TranscationUpdate() {
  const [timeforseconds, setTimeforSeconds] = useState();
  const [transcationsuccess, setTranscationsuccess] = useState();
  const [transfertranscation, setTransferTranscation] = useState();
  const [transcationfee, setTranscationFee] = useState();
  const [fromwalletaddress, setFomWalletAddress] = useState();
  const [towalletaddress, setToWalletAddress] = useState();

  const addtranscations = (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      axios
        .post(
          `${URL}/api/addingtranscation}`,
          {
            timeforseconds: timeforseconds,
            transcationsuccess: transcationsuccess,
            transfertranscation: transfertranscation,
            transcationfee: transcationfee,
            fromwalletaddress: fromwalletaddress,
            towalletaddress: towalletaddress,
          },
          config
        )
        .then((res) => {
          console.log(res);
          toast.success("Created Successfully!");
        });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-explorer container-update  my-3">
        <div className="admin-container">
          <div>
            <h4 className="block-heading">FOR TRANSCATION</h4>
          </div>
          <Form onSubmit={addtranscations}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Transcation Status</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Transfer Transaction"
                value={transcationsuccess}
                onChange={(e) => setTranscationsuccess(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Transfer Transaction</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Transfer Transaction"
                value={transfertranscation}
                onChange={(e) => setTransferTranscation(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Transaction Fee</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Transaction Fee"
                value={transcationfee}
                onChange={(e) => setTranscationFee(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Wallet from</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Wallet from"
                value={fromwalletaddress}
                onChange={(e) => setFomWalletAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Wallet to</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Wallet to"
                value={towalletaddress}
                onChange={(e) => setToWalletAddress(e.target.value)}
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
              Create Transaction
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

export default TranscationUpdate;
