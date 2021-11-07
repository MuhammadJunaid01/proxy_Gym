import React from "react";
import "./about.css";
import Box from "@mui/material/Box";
import aboutimage from "../../../images/about.png";
import Grid from "@mui/material/Grid";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const AboutUs = () => {
  return (
    <div className="about-container">
      <Fade left>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sm={12}>
              <img className="about-image" src={aboutimage} alt="" />
            </Grid>
            <Grid item xs={12} md={6} sm={12}>
              <div className="about-information">
                <h5>INFORMATION ABOUT US</h5>
              </div>
              <div className="about-trainingCenter ">
                <h1>
                  PROXY A <span className="style-info-about">CROSSFIT</span>
                  <br />
                  WORKOUT TRAINING CENTER
                </h1>
              </div>
              <div className="about-details">
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ArrowRightAltIcon></ArrowRightAltIcon>

                <Link style={{ textDecoration: "none" }} to="/navigation">
                  <h5>MENS FITNESS AND WORKOUT</h5>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "none",
                }}
              >
                <ArrowRightAltIcon></ArrowRightAltIcon>

                <Link style={{ textDecoration: "none" }} to="/navigation">
                  <h5>WOMENS FITNESS AND WORKOUT</h5>
                </Link>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <ArrowRightAltIcon></ArrowRightAltIcon>

                <Link style={{ textDecoration: "none" }} to="/navigation">
                  <h5>PERSONAL TRAINING</h5>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </div>
  );
};

export default AboutUs;
