import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ToastContainer, toast } from "react-toastify";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const URL = "https://maalblockchainapi.in.ngrok.io";

export default function BasicTable() {
  const [blockcards, setBlockcards] = useState([]); //FOR GETTING API DATA

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    try {
      axios.get(`${URL}/api/getblockcards`).then((res) => {
        setBlockcards(res.data);
        console.log("gettingblockcards", res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  // API FOR DELETEING BLOCKCARDS

  const deleteBlockcards = (id) => {
    try {
      axios.delete(`${URL}/api/deleteblockcards/${id}`).then((res) => {
        console.log(res);
        toast.error("Deleted Successfully");
        window.location.reload();
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* TABLE FOR SEEING BLOCKCARDS */}

      <div id="table-transaction">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"> Block Number</TableCell>
                <TableCell align="center">Miner Address</TableCell>
                <TableCell align="center">No. of Transaction Made</TableCell>
                <TableCell align="center">Reward</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blockcards && blockcards.length > 0 ? (
                blockcards.map((res, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="res">
                      {res.blocknummber}
                    </TableCell>
                    <TableCell align="center">
                      {res.mineraddress
                        ? res.mineraddress
                        : "0x0000000000000000000000000000"}
                    </TableCell>
                    <TableCell align="center">
                      {res.blocktranscations}
                    </TableCell>
                    <TableCell align="center">{res.Reward}</TableCell>
                    <TableCell align="center">
                      <Link to={`/update/${res._id}/${res.blocknummber}`}>
                        {" "}
                        <Button variant="info">Update</Button>
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="danger"
                        onClick={() => deleteBlockcards(res._id)}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <div className="nodatatoshow">
                  <h5 className="nodata"> NO DATA TO SHOW</h5>
                </div>
              )}
            </TableBody>
          </Table>
        </TableContainer>
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
      </div>
    </>
  );
}
