import React, { useState, useEffect,Link } from "react";
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

const URL = "https://maalblockchainapi.in.ngrok.io";

export default function BasicTable() {
  const [blockcards, setBlockcards] = useState([]); //FOR GETTING API DATA

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

  return (
    <>
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
                    <TableCell align="center">{res.mineraddress}</TableCell>
                    <TableCell align="center">
                      {res.blocktranscations}
                    </TableCell>
                    <TableCell align="center">{res.Reward}</TableCell>
                    <TableCell align="center">
                    <Link to="/update">  <Button variant="info">Update</Button></Link>
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
    </>
  );
}
