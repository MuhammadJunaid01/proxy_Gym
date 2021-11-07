import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./expert.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Trainer from "./trainer/Trainer";
import CircularProgress from "@mui/material/CircularProgress";

const MeetOurExpert = () => {
  const [trainers, setTrainers] = useState();
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/trainers")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        setIsloading(true);
      });
  }, []);
  return (
    <div className="expert-container">
      <Container>
        <div className="expert-info">
          <h5>OUR TEAM</h5>
          <h1>
            Meet Our <span className="expertHead-design">Expert</span>
          </h1>
        </div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {trainers?.map((trainer) => (
              <Grid item xs={12} md={3} sm={12}>
                <Trainer
                  key={trainer._id}
                  trainer={trainer}
                  loader={isloading}
                ></Trainer>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </div>
  );
};

export default MeetOurExpert;
