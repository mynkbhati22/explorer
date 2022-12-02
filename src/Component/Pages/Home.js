import React from "react";
import { Grid, Box } from "@mui/material";
import "./Home.css";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import chart from "../Images/chart.png";

function Home() {
  return (
    <>
      <Navbar />
      <Box className="chart-section">
        <Grid className="container-explorer section-margin">
          <Grid container>
            {/* ///////////////chart///////////////////////// */}

            <Grid item lg={5} md={12} sm={12} xs={12}>
              <img src={chart} alt="" className="chart-image" />
              <div className="gas-tracker-box">
                <div className="gas-tracker">
                  <span className="gas-tracker-text">
                    Gas tracker <br />
                    0.4 Gwei
                  </span>
                </div>
                <div className="daily-transaction">
                  <span className="gas-tracker-text">
                    Daily Transactions <br />0
                  </span>
                </div>
              </div>
            </Grid>
            <Grid
              item
              lg={7}
              md={12}
              sm={12}
              xs={12}
              className="average-text-section-box"
            >
              <Grid container className="row average-text-section py-3 pl-3 ">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  <Box className="average-time">
                    <div className="text-average">Average block time</div>

                    <div className="time-explorer">2.0 seconds</div>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  {" "}
                  <Box className="average-time">
                    <div className="text-average">Average block time</div>

                    <div className="time-explorer">2.0 seconds</div>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  {" "}
                  <Box className="average-time">
                    <div className="text-average">Average block time</div>

                    <div className="time-explorer">2.0 seconds</div>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  {" "}
                  <Box className="average-time">
                    <div className="text-average">Average block time</div>

                    <div className="time-explorer">2.0 seconds</div>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* /////////////////////////////////////////////////////////////// */}

      <Box className="Block-section">
        <Grid className="container-explorer section-margin">
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className="Block-section-margin">
                <div className="block-text-section">
                  <div className="block-text">Blocks</div>
                  <div className="button-block">
                    <Button className="view-all-block">View All Blocks</Button>
                  </div>
                </div>
                <Grid container spacing={2} className="view-box-container">
                <Grid item lg={3} md={3} sm={12} xs={12}>
                <div className="view-box">
                  {" "}
                  <div className="block-num">16095052</div>
                  <div className="hash-box-num">
                    96 Transactions &nbsp; 28 minutes ago <br /> <br />
                    Miner{" "}
                    <span className="hash-num">
                      {" "}
                      0xF2f5C73fa04406b1995e397B55c24..
                    </span>{" "}
                    <br />
                    Reward 0.024999608605706074 ETH
                  </div>
                </div>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                <div className="view-box">
                  {" "}
                  <div className="block-num">16095052</div>
                  <div className="hash-box-num">
                    96 Transactions &nbsp; 28 minutes ago <br /> <br />
                    Miner{" "}
                    <span className="hash-num">
                      {" "}
                      0xF2f5C73fa04406b1995e397B55c24..
                    </span>{" "}
                    <br />
                    Reward 0.024999608605706074 ETH
                  </div>
                </div>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                <div className="view-box">
                  {" "}
                  <div className="block-num">16095052</div>
                  <div className="hash-box-num">
                    96 Transactions &nbsp; 28 minutes ago <br /> <br />
                    Miner{" "}
                    <span className="hash-num">
                      {" "}
                      0xF2f5C73fa04406b1995e397B55c24..
                    </span>{" "}
                    <br />
                    Reward 0.024999608605706074 ETH
                  </div>
                </div>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                <div className="view-box">
                  {" "}
                  <div className="block-num">16095052</div>
                  <div className="hash-box-num">
                    96 Transactions &nbsp; 28 minutes ago <br /> <br />
                    Miner{" "}
                    <span className="hash-num">
                      {" "}
                      0xF2f5C73fa04406b1995e397B55c24..
                    </span>{" "}
                    <br />
                    Reward 0.024999608605706074 ETH
                  </div>
                </div>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                <div className="view-box">
                  {" "}
                  <div className="block-num">16095052</div>
                  <div className="hash-box-num">
                    96 Transactions &nbsp; 28 minutes ago <br /> <br />
                    Miner{" "}
                    <span className="hash-num">
                      {" "}
                      0xF2f5C73fa04406b1995e397B55c24..
                    </span>{" "}
                    <br />
                    Reward 0.024999608605706074 ETH
                  </div>
                </div>
                </Grid>
                </Grid>
                {/*      <Grid container>
                  <Grid item xl={3} lg={3} md={4} sm={6} xs={12}></Grid>
                  <Grid item xl={3} lg={3} md={4} sm={6} xs={12}></Grid>
                  <Grid item xl={3} lg={3} md={4} sm={6} xs={12}></Grid>
                  <Grid item xl={3} lg={3} md={4} sm={6} xs={12}></Grid>
                </Grid> */}
              </div>
              <div className="Block-section-margin">
                <div className="block-text-section">
                  <div className="block-text">Transactions</div>
                  <div className="button-block">
                    <Button className="view-all-block">
                      View All Transactions
                    </Button>
                  </div>
                </div>
                <div className="transaction-box">
                  <Grid container>
                    <Grid
                      item
                      xl={2}
                      lg={2}
                      md={2}
                      sm={12}
                      xs={12}
                      className="transaction-success-border"
                    >
                      <div className="transaction-success">
                        <div className="transaction-success-text">
                          {" "}
                          <span className="transaction-word">
                            {" "}
                            Transaction{" "}
                          </span>{" "}
                          <br />
                          <span className="success-text"> Success </span>{" "}
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xl={7}
                      lg={7}
                      md={7}
                      sm={12}
                      xs={12}
                      className="transaction-hash-box"
                    >
                      <p className="transaction-hash">
                        {" "}
                        <p>
                          <span className="hash-value">
                            0x43962d00bb793c6662b971572d656bef3019836f8ae52c9d413d57a23e283aa6{" "}
                          </span>
                          <span className="transfer-text">Transfer</span>
                        </p>
                        <p>
                          0x228466F2C715CbEC05dEAbfAc040ce3619d7CF0B →
                          0x5AfD10c68c9fd02018E0683C40c14a781548abf7
                        </p>
                        <p>10 Ether 0.000008295282996 TX Fee</p>
                      </p>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                      <div className="transaction-hash-time">
                        {" "}
                        Block #6847954
                        <br />
                        2day ago
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="transaction-box">
                  <Grid container>
                    <Grid
                      item
                      xl={2}
                      lg={2}
                      md={2}
                      sm={12}
                      xs={12}
                      className="transaction-success-border"
                    >
                      <div className="transaction-success">
                        <div className="transaction-success-text">
                          {" "}
                          <span className="transaction-word">
                            {" "}
                            Transaction{" "}
                          </span>{" "}
                          <br />
                          <span className="success-text"> Success </span>{" "}
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xl={7}
                      lg={7}
                      md={7}
                      sm={12}
                      xs={12}
                      className="transaction-hash-box"
                    >
                      <p className="transaction-hash">
                        {" "}
                        <p>
                          0x43962d00bb793c6662b971572d656bef3019836f8ae52c9d413d57a23e283aa6{" "}
                          <span className="transfer-text">Transfer</span>
                        </p>
                        <p>
                          0x228466F2C715CbEC05dEAbfAc040ce3619d7CF0B →
                          0x5AfD10c68c9fd02018E0683C40c14a781548abf7
                        </p>
                        <p>10 Ether 0.000008295282996 TX Fee</p>
                      </p>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                      <div className="transaction-hash-time">
                        {" "}
                        Block #6847954
                        <br />
                        2day ago
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="transaction-box">
                  <Grid container>
                    <Grid
                      item
                      xl={2}
                      lg={2}
                      md={2}
                      sm={12}
                      xs={12}
                      className="transaction-success-border"
                    >
                      <div className="transaction-success">
                        <div className="transaction-success-text">
                          {" "}
                          <span className="transaction-word">
                            {" "}
                            Transaction{" "}
                          </span>{" "}
                          <br />
                          <span className="success-text"> Success </span>{" "}
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xl={7}
                      lg={7}
                      md={7}
                      sm={12}
                      xs={12}
                      className="transaction-hash-box"
                    >
                      <p className="transaction-hash">
                        {" "}
                        <p>
                          0x43962d00bb793c6662b971572d656bef3019836f8ae52c9d413d57a23e283aa6{" "}
                          <span className="transfer-text">Transfer</span>
                        </p>
                        <p>
                          0x228466F2C715CbEC05dEAbfAc040ce3619d7CF0B →
                          0x5AfD10c68c9fd02018E0683C40c14a781548abf7
                        </p>
                        <p>10 Ether 0.000008295282996 TX Fee</p>
                      </p>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                      <div className="transaction-hash-time">
                        {" "}
                        Block #6847954
                        <br />
                        2day ago
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className="transaction-box">
                  <Grid container>
                    <Grid
                      item
                      xl={2}
                      lg={2}
                      md={2}
                      sm={12}
                      xs={12}
                      className="transaction-success-border"
                    >
                      <div className="transaction-success">
                        <div className="transaction-success-text">
                          {" "}
                          <span className="transaction-word">
                            {" "}
                            Transaction{" "}
                          </span>{" "}
                          <br />
                          <span className="success-text"> Success </span>{" "}
                        </div>
                      </div>
                    </Grid>
                    <Grid
                      item
                      xl={7}
                      lg={7}
                      md={7}
                      sm={12}
                      xs={12}
                      className="transaction-hash-box"
                    >
                      <p className="transaction-hash">
                        {" "}
                        <p>
                          0x43962d00bb793c6662b971572d656bef3019836f8ae52c9d413d57a23e283aa6{" "}
                          <span className="transfer-text">Transfer</span>
                        </p>
                        <p>
                          0x228466F2C715CbEC05dEAbfAc040ce3619d7CF0B →
                          0x5AfD10c68c9fd02018E0683C40c14a781548abf7
                        </p>
                        <p>10 Ether 0.000008295282996 TX Fee</p>
                      </p>
                    </Grid>
                    <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                      <div className="transaction-hash-time">
                        {" "}
                        Block #6847954
                        <br />
                        2day ago
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}

export default Home;
