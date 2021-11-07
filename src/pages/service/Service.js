import React, { useState } from "react";
import "./service.css";
import Grid from "@mui/material/Grid";
import { Container, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useSpring, config, animated } from "react-spring";
const Service = () => {
  const [flip, set] = useState(false);
  const { number } = useSpring({
    reset: true,
    reverse: flip,
    from: { number: 0 },
    number: 30,
    delay: 200,
    config: config.molasses,
    onRest: () => set(flip),
  });

  const [trainers, setTrainers] = useState(false);
  const { trane } = useSpring({
    reset: true,
    reverse: trainers,
    from: { trane: 0 },
    trane: 100,
    delay: 200,
    config: config.molasses,
    onRest: () => setTrainers(trainers),
  });

  const [equipment, setEquipment] = useState(false);
  const { best } = useSpring({
    reset: true,
    reverse: equipment,
    from: { best: 0 },
    best: 300,
    delay: 200,
    config: config.molasses,
    onRest: () => setEquipment(equipment),
  });
  const [satisFied, setSatisFied] = useState(false);
  const { client } = useSpring({
    reset: true,
    reverse: satisFied,
    from: { client: 0 },
    client: 10,
    delay: 200,
    config: config.molasses,
    onRest: () => setSatisFied(satisFied),
  });

  return (
    <div className="service-container">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography
              style={{ color: "white", fontWeight: 700 }}
              variant="h2"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
                <AddIcon></AddIcon>
              </div>
            </Typography>
            <Typography style={{ color: "white" }} variant={"p"}>
              YEARS OF EXPERIENCED
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              style={{ color: "white", fontWeight: 700 }}
              variant="h2"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <animated.div>{trane.to((n) => n.toFixed(0))}</animated.div>
                <AddIcon></AddIcon>
              </div>
            </Typography>
            <Typography style={{ color: "white" }} variant={"p"}>
              FITNESS TRAINERS
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              style={{ color: "white", fontWeight: 700 }}
              variant="h2"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <animated.div>{best.to((n) => n.toFixed(0))}</animated.div>
                <AddIcon></AddIcon>
              </div>
            </Typography>
            <Typography style={{ color: "white" }} variant={"p"}>
              BEST EQUIPMENTS
            </Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography
              style={{ color: "white", fontWeight: 700 }}
              variant="h2"
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <animated.div>{client.to((n) => n.toFixed(0))}</animated.div> K
                <AddIcon></AddIcon>
              </div>
            </Typography>
            <Typography style={{ color: "white" }} variant={"p"}>
              SATISFIED CLIENTS
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Service;
