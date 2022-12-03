import React from "react";
import "./Footer.css";
import logo512 from  "../Images/logo512.png";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container-explorer">
          <p className="polygon-heading"> <img src={logo512} className="logo-image-footer " />MAAL Blockchain</p>
          <p className="footer-text">
            MAAL is the native coin built on layer 2 blockchain technology.
            MaalCoin has a massive utility driven ecosystem that currently
            comprises of 20+ unique projects, featuring an NFT , MetaVerse,
            Decentralized and centralized Exchange, Web 3.0 and smart staking
            solutions.
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
