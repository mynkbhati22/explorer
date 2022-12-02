import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import "./Home.css";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
import chart from "../Images/chart.png";
import { Chart } from "react-google-charts";
import axios from "axios";
import moment from "moment";
import AppWebsiteVisits from "./AppWebsiteVisits";
import Slider from "react-slick";

const URL = "https://maalblockchainapi.in.ngrok.io";

var currentTime = new Date().getTime() / 1000;
// var formatted = moment(currentTime).format("hh:MM:ss");

function Home() {
  const [blockcards, setBlockcards] = useState([]); //FOR GETTING API DATA
  const [counter, setCounter] = useState(1014); //FOR INCREASING COUNTING

  // FOR CALLING API

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

  // FOR INCREASING COUNTING

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 3200);

    return () => {
      clearInterval(interval);
    };
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 100,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Box className="chart-section">
        <Grid className="container-explorer section-margin">
          <Grid container>
            {/* ///////////////chart///////////////////////// */}

            <Grid item lg={5} md={12} sm={12} xs={12} className="appex">
              <AppWebsiteVisits
                chartLabels={[
                  "01/01/2003",
                  "02/01/2003",
                  "03/01/2003",
                  "04/01/2003",
                  "05/01/2003",
                  "06/01/2003",
                  "07/01/2003",
                  "08/01/2003",
                  "09/01/2003",
                  "10/01/2003",
                  "11/01/2003",
                ]}
                chartData={[
                  {
                    name: "Tx/day",
                    type: "line",
                    fill: "solid",
                    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                  },
                ]}
              />
              {/*  <img src={chart} alt="" className="chart-image" /> */}
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

                    <div className="time-explorer">0 seconds</div>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  {" "}
                  <Box className="average-time">
                    <div className="text-average">Total transaction</div>

                    <div className="time-explorer">0</div>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  {" "}
                  <Box className="average-time">
                    <div className="text-average">Total blocks</div>

                    <div className="time-explorer">{counter}</div>
                  </Box>
                </Grid>
                <Grid item lg={3} md={3} sm={12} xs={12}>
                  {" "}
                  <Box className="average-time">
                    <div className="text-average">Wallet addresses</div>

                    <div className="time-explorer">0</div>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* /////////////////////////////// BLOCK SECTION //////////////////////////////// */}

      <Box className="Block-section">
        <Grid className="container-explorer section-margin">
          <Grid container>
            <Grid item lg={12} md={12} sm={12} xs={12}>
              <div className="Block-section-margin position-relative">
                <div className="block-text-section">
                  <div className="block-text">Blocks</div>
                  <div className="button-block">
                    {/*   <Button className="view-all-block">View All Blocks</Button> */}
                  </div>
                </div>
                <Grid container spacing={2} className="view-box-container">
          
                  {blockcards && blockcards.length > 0 ? (
                    blockcards.map((res, index) => {
                      return (
                        <Grid item lg={3} md={3} sm={12} xs={12} className="animation-box" key={index}>
                          <div className="view-box">
                            {" "}
                            <div className="block-num">{res.blocknummber}</div>
                            <div className="hash-box-num">
                              {res.blocktranscations} Transactions &nbsp;{" "}
                              {currentTime} seconds ago <br /> <br />
                              Miner{" "}
                              <span className="hash-num">
                                {" "}
                                {Number(res.mineraddress).toFixed(27)}...
                              </span>{" "}
                              <br />
                              Reward {res.Reward} MAAL
                            </div>
                          </div>
                        </Grid>
                      );
                    })
                  ) : (
                    <div className="nodatatoshow">
                      <h5 className="nodata"> NO BLOCK TO SHOW</h5>
                    </div>
                  )}
           

                  {/* <div>
                    <Slider {...settings}>
                      <div>
                        {blockcards && blockcards.length > 0
                          ? blockcards.map((res, index) => {
                              return (
                                <div className="view-box" key={index}>
                                  {" "}
                                  <div className="block-num">
                                    {res.blocknummber}
                                  </div>
                                  <div className="hash-box-num">
                                    {res.blocktranscations} Transactions &nbsp;{" "}
                                    {currentTime} seconds ago <br /> <br />
                                    Miner{" "}
                                    <span className="hash-num">
                                      {" "}
                                      {Number(res.mineraddress).toFixed(27)}...
                                    </span>{" "}
                                    <br />
                                    Reward {res.Reward}
                                  </div>
                                </div>
                              );
                            })
                          : "NO BLOCK TO SHOW"}
                      </div>

                   .
                    </Slider>
                  </div> */}
                  {/* <Grid item lg={3} md={3} sm={12} xs={12}>
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
                  </Grid> */}
                </Grid>
              </div>

              <div className="Block-section-margin position-relative">
                <div className="block-text-section">
                  <div className="block-text">Transactions</div>
                  <div className="button-block">
                    {/*           <Button className="view-all-block">
                      View All Transactions
                    </Button> */}
                  </div>
                </div>
                {blockcards && blockcards.length > 0 ? (
                  blockcards.map((res, index) => {
                    return (
                      <div className="transaction-box" key={index}>
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
                                  {res.transcationsuccess}
                                </span>{" "}
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
                                  {res.transfertranscation}{" "}
                                </span>
                                <span className="transfer-text">Transfer</span>
                              </p>
                              <p>
                                {res.fromwalletaddress} → {res.towalletaddress}
                              </p>
                              <p> $ {res.transcationfee} MAAL TX Fee</p>
                            </p>
                          </Grid>
                          <Grid item xl={3} lg={3} md={3} sm={12} xs={12}>
                            <div className="transaction-hash-time">
                              {" "}
                              {res.blocknummber}
                              <br />
                              {res.time}
                            </div>
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })
                ) : (
                  <div className="nodatatoshow">
                    <h5 className="nodata"> NO TRANSCATIONS TO SHOW</h5>
                  </div>
                )}

                {/* <div className="transaction-box">
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
                </div> */}
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
