import React, { useState } from "react";
import Navbaroffcanvas from "./Navbaroffcanvas";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Navbar.css";
import { Grid } from "@mui/material";
import transactionsvg from "../Images/transaction.svg";
import blocksvg from "../Images/block.svg";
import polygonsvg from "../Images/polygon.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import logo512 from "../Images/logo512.png";

function Navbar() {
  const [show, setShow] = useState(false);
  const [nav1, setNav1] = useState(false);
  const [nav2, setNav2] = useState(false);
  const [nav3, setNav3] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Grid container className="navbar">
        <Grid item xl={3} lg={3} md={9} sm={9} xs={9} className="d-flex">
          <span><img src={logo512} className="logo-image" alt="" /> </span>
          <span className="logo-name"> MAAL Blockchain</span>
        </Grid>
        <Grid item xl={9} lg={9} md={3} sm={3} xs={3} className="toggle-btn">
          <Navbaroffcanvas />
        </Grid>

        <Grid
          item
          xl={9}
          lg={9}
          md={9}
          sm={9}
          xs={3}
          className="navbar-desktop"
        >
          <ul className="nav-list">
            <li>
              <img src={blocksvg} alt="" /> Blocks{" "}
            </li>
            <li>
              <span
                onClick={() => {
                  setNav1(!nav1);
                  setNav2(false);
                  setNav3(false);
                }}
              >
                <img src={transactionsvg} alt="" /> Transactions{" "}
                <IoMdArrowDropdown />{" "}
              </span>
              <>
                {nav1 ? (
                  <ul className="transaction-list">
                    <li>Validated</li>
                    <li>Pending</li>
                  </ul>
                ) : (
                  ""
                )}
              </>
            </li>
    
            <li>
              <span
                onClick={() => {
                  setNav2(!nav2);
                  setNav1(false);
                  setNav3(false);
                }}
              >
                <img src={polygonsvg} alt="" /> Tokens <IoMdArrowDropdown />
              </span>
              <>
                {nav2 ? (
                  <ul className="transaction-list">
                    <li>All</li>
                    <li>MAAL</li>
                  </ul>
                ) : (
                  ""
                )}
              </>
            </li>
            <li>
              <span
                onClick={() => {
                  setNav3(!nav3);
                  setNav2(false);
                  setNav1(false);
                }}
              >
                Resources <IoMdArrowDropdown />
              </span>
              <>
                {nav3 ? (
                  <ul className="transaction-list">
                    <li><a href="https://kesavi-web-solutions.gitbook.io/mal-blockchain-validator-system/" target="_blank">MAAL Ecosystem Doc</a></li>
                  </ul>
                ) : (
                  ""
                )}
              </>
            </li>
            <li>
              {" "}
              <span className="search">
                {" "}
                <FiSearch />{" "}
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search by address, token symbol, name, transaction, or block number"
                />{" "}
              </span>
            </li>
          </ul>
        </Grid>
      </Grid>
    </>
  );
}

export default Navbar;
