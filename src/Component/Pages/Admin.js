import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Navbar from "./Navbar";
import Table from "./Table";
import Footer from "./Footer";
import "./Admin.css";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";

const URL = "https://maalblockchainapi.in.ngrok.io";

function Admin() {
  const [blocknummber, setBlockNumber] = useState();
  const [mineraddress, setMinerAddress] = useState();
  const [blocktranscations, setBlockTranscations] = useState();
  const [Reward, setReward] = useState();
  const [transcationsuccess, setTranscationsuccess] = useState();
  const [transfertranscation, setTransferTranscation] = useState();
  const [transcationfee, setTranscationFee] = useState();
  const [fromwalletaddress, setFomWalletAddress] = useState();
  const [towalletaddress, setToWalletAddress] = useState();
  const [time, setTime] = useState();

  const addBlockCard = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${URL}/api/blockcards`,
        {
          blocknummber: blocknummber,
          mineraddress: mineraddress,
          blocktranscations: blocktranscations,
          Reward: Reward,
          transcationsuccess: transcationsuccess,
          transfertranscation: transfertranscation,
          transcationfee: transcationfee,
          fromwalletaddress: fromwalletaddress,
          towalletaddress: towalletaddress,
          time: time,
        },
        config
      );
      toast.success("Created Block Successfully");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Navbar />
      <div className="container-explorer">
        <div className="admin-container">
          <div>
            <h4 className="block-heading">BLOCK</h4>
          </div>
          <Form onSubmit={addBlockCard}>
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
    {/*         <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Transaction Success</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Transaction Success"
                value={transcationsuccess}
                onChange={(e) => setTranscationsuccess(e.target.value)}
              />
            </Form.Group> */}
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
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create a Block
            </Button>
          </Form>
        </div>

        <Table />
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

export default Admin;
