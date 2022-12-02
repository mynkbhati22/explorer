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
import TranscationTable from "./TranscationTable";

const URL = "https://maalblockchainapi.in.ngrok.io";

function Admin() {
  // adding blocks

  const [blocknummber, setBlockNumber] = useState();
  const [mineraddress, setMinerAddress] = useState();
  const [blocktranscations, setBlockTranscations] = useState();
  const [timeforseconds, setTimeforSeconds] = useState();
  const [Reward, setReward] = useState();

  // FOR ADDING TRANSCATION

  const [transcationsuccess, setTranscationsuccess] = useState();
  const [transcationblocknummber, setTBlockNumber] = useState();
  const [transfertranscation, setTransferTranscation] = useState();
  const [transcationfee, setTranscationFee] = useState();
  const [fromwalletaddress, setFomWalletAddress] = useState();
  const [towalletaddress, setToWalletAddress] = useState();
  const [time, setTime] = useState();

  // adding blocks

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
          timeforseconds: timeforseconds,
        },
        config
      );
      toast.success("Created Block Successfully");
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // adding transcations

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
          `${URL}/api/addingtranscation`,
          {
            transcationsuccess: transcationsuccess,
            transfertranscation: transfertranscation,
            transcationblocknummber: transcationblocknummber,
            transcationfee: transcationfee,
            fromwalletaddress: fromwalletaddress,
            towalletaddress: towalletaddress,
            time: time,
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
      {/* ADDING BLOCK FEILDS */}

      <div className="container-explorer">
        <div className="admin-container">
          <div>
            <h4 className="block-heading">FOR BLOCK</h4>
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
                placeholder="Enter miner address"
                value={mineraddress}
                onChange={(e) => setMinerAddress(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Time in seconds</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Enter no of transcations"
                value={timeforseconds}
                onChange={(e) => setTimeforSeconds(e.target.value)}
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

            <Button variant="primary" type="submit">
              Create a Block
            </Button>
          </Form>
        </div>

        <Table />
      </div>

      {/* ADDING TRANSCATION FEILDS */}

      <div className="container-explorer  my-3">
        <div className="admin-container">
          <div>
            <h4 className="block-heading">FOR TRANSCATION</h4>
          </div>
          <Form onSubmit={addtranscations}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label> Transaction Status</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Transfer Status"
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
              <Form.Label>Block Number</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="block number"
                value={transcationblocknummber}
                onChange={(e) => setTBlockNumber(e.target.value)}
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
              Create Transaction
            </Button>
          </Form>
        </div>
        <TranscationTable />
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
