import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { AiOutlineMenu } from "react-icons/ai";
import transactionsvg from "../Images/transaction.svg";
import blocksvg from "../Images/block.svg";
import polygonsvg from "../Images/polygon.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";


import "./Navbaroffcanvas.css";

export default function TemporaryDrawer() {
  const [nav1, setNav1] = useState(false);
  const [nav2, setNav2] = useState(false);
  const [nav3, setNav3] = useState(false);

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul className="sidebar-list-img">
        <li>
          {" "}
          <span>
            {" "}

          </span>
          <span>
            {" "}

          </span>
        </li>
      </ul>
      <ul className="nav-list-offcanvas">
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
              <img src={polygonsvg} alt="" /> Polygon Edge Faucet{" "}
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
                    <li>Ether</li>
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
                    <li>Polygon Edge Doc</li>
                    <li>Polygon Edge Repo</li>
                  </ul>
                ) : (
                  ""
                )}
              </>
            </li>
            <li>
              {" "}
         {/*      <span className="search">
                {" "}
                <FiSearch />{" "}
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search by address, token symbol, name, transaction, or block number"
                />{" "}
              </span> */}
            </li>
          </ul>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} id="toggle-Button">
            <AiOutlineMenu />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
