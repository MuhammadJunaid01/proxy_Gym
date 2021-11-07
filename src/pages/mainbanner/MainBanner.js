import { Button } from "@mui/material";
import React from "react";
import Fade from "react-reveal/Fade";
import "./Mainbanner.css";
const MainBanner = () => {
  return (
    <div className="mainbanner-container">
      <div className="info-banner">
        <Fade left>
          <h1 className="hard-info">
            HARD ROCK GAME
            <span className="taime-infobanner">TAIME TO CHALLENGE</span>
          </h1>
        </Fade>
        <div className="knowmore">
          <Button style={{ width: "160px", color: "white" }} variant="outlined">
            KNOW MORE
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
