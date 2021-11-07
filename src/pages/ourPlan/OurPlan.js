import React, { useEffect, useState } from "react";
import "./plan.css";
import { Container, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import AccessibleIcon from "@mui/icons-material/Accessible";
import { Link } from "react-router-dom";
const OurPlan = () => {
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );
  const [plans, setPlans] = useState([]);
  const [isloading, setIsloading] = useState(false);
  useEffect(() => {
    fetch("http://localhost:5000/bestPrice")
      .then((res) => res.json())
      .then((data) => {
        setPlans(data);
        setIsloading(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleboking = (id) => {
    console.log(id);
  };
  return (
    <div className="ourPlan-container">
      <Container>
        <div className="plan-info">
          <h5>OUR PLAN</h5>
          <h1>
            Best <span className="price-option">price options</span>
          </h1>
        </div>

        <Grid container spacing={2}>
          {plans?.map((plan) => (
            <Grid key={plan._id} item xs={12} sm={12} md={4}>
              <Card
                style={{ textAlign: "center" }}
                className="plan-card"
                sx={{ minWidth: 275 }}
              >
                <CardContent>
                  <Box
                    style={{
                      backgroundColor: "#F7F7F7",
                      paddingBottom: "14px",
                    }}
                  >
                    <Typography
                      sx={{ lineHeight: "none", m: 0 }}
                      style={{
                        textAlign: "center",
                        marginBottom: "0px",
                        color: "gray",
                      }}
                      variant="h2"
                    >
                      ${plan.price}
                    </Typography>
                    <br />
                    <Typography
                      style={{
                        textAlign: "center",
                        color: "black",
                        marginTop: "0px",
                      }}
                      sx={{ fontSize: 40, mt: 1, lineHeight: 0.5 }}
                      gutterBottom
                    >
                      {plan.trial}
                    </Typography>
                  </Box>
                  <Typography variant="h5" style={{ marginTop: "14px" }}>
                    {plan.name}
                    <hr />
                  </Typography>
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <CalendarTodayIcon />
                    </Typography>
                    <Box>
                      <Typography variant="body2">{plan.plans}</Typography>
                      <Typography variant="body2">{plan.traning}</Typography>
                      <Typography variant="body2">{plan.tranePlans}</Typography>
                    </Box>
                  </Box>
                  {/* repeat */}
                  <br />
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <OndemandVideoIcon />
                    </Typography>
                    <Box>
                      <Typography variant="body2">{plan.resorce}</Typography>
                      <Typography variant="body2">{plan.videio}</Typography>
                      <Typography variant="body2">{plan.howto}</Typography>
                    </Box>
                  </Box>
                  <br />
                  <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <ArticleIcon />
                    </Typography>
                    <Box>
                      <Typography variant="body2">{plan.knowlgde}</Typography>
                      <Typography variant="body2">{plan.knlresorce}</Typography>
                      <Typography variant="body2">{plan.article}</Typography>
                    </Box>
                  </Box>
                  <br />
                  {/* <Box
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <AccessibleIcon />
                    </Typography>
                    <Box>
                      <Typography variant="body2">{plan.certi}</Typography>
                      <Typography variant="body2">{plan.trainers}</Typography>
                    </Box>
                  </Box> */}
                </CardContent>
                <CardActions style={{ display: "inline-block" }}>
                  <Link to={`/boking/${plan._id}`}>
                    <Button
                      onClick={() => handleboking(plan._id)}
                      style={{ backgroundColor: "#E53C35", color: "white" }}
                      variant="outlined"
                    >
                      View More
                    </Button>
                  </Link>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default OurPlan;
