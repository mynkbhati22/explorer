import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./Table.css";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const URL = "https://maalblockchainapi.in.ngrok.io";

export default function TranscationTable() {
  const [transactiondetails, setTranscationDetails] = useState([]); //FOR GETTING API DATA
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    try {
      axios.get(`${URL}/api/gettranscationstatus`).then((res) => {
        setTranscationDetails(res.data);
        console.log("gettingblockcards", res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div>
      {/* TABLE FOR SEEING TRANSCATION */}

      <div id="table-transaction">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center"> Transaction Status</TableCell>
                <TableCell align="center">Transaction Transfer</TableCell>
                <TableCell align="center">Transaction Fee</TableCell>
                <TableCell align="center">Transcation Transfer from</TableCell>
                <TableCell align="center">Transcation Transfer to</TableCell>
                <TableCell align="center">Update</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transactiondetails && transactiondetails.length > 0 ? (
                transactiondetails.map((res, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center" component="th" scope="res">
                      {res.transcationsuccess}
                    </TableCell>
                    <TableCell align="center">
                      {res.transfertranscation}
                    </TableCell>
                    <TableCell align="center">{res.transcationfee}</TableCell>
                    <TableCell align="center">
                      {res.fromwalletaddress}
                    </TableCell>
                    <TableCell align="center">{res.towalletaddress}</TableCell>
                    <TableCell align="center">{res.time}</TableCell>
                    <TableCell align="center">
                      <Link to={`/updatetranscationdetails/${res._id}`}>
                        {" "}
                        <Button variant="info">Update</Button>
                      </Link>
                    </TableCell>
                    <TableCell align="center">
                      <Button variant="danger">Delete</Button>
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
      </div>
    </div>
  );
}
