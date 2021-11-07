import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ArticleIcon from "@mui/icons-material/Article";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import { useParams } from "react-router";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

const Booking = () => {
  const { id } = useParams();
  const [booking, setbooking] = useState();
  useEffect(() => {
    fetch(`http://localhost:5000/booking/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setbooking(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handlebookNow = () => {
    console.log("click book now");
  };
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Please! Confirm Your booking?.</h1>
      </div>

      <div>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}></Grid>
            <Grid
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                backgroundColor: "gainsboro",
                borderRadius: "10px",
              }}
              item
              xs={12}
              sm={12}
              md={4}
            >
              {" "}
              <Card
                style={{ textAlign: "center" }}
                className="booking?-card"
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
                      ${booking?.price}
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
                      {booking?.trial}
                    </Typography>
                  </Box>
                  <Typography variant="h5" style={{ marginTop: "14px" }}>
                    {booking?.name}
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
                      <Typography variant="body2">
                        {booking?.booking}
                      </Typography>
                      <Typography variant="body2">
                        {booking?.traning}
                      </Typography>
                      <Typography variant="body2">
                        {booking?.tranePlans}
                      </Typography>
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
                      <Typography variant="body2">
                        {booking?.resorce}
                      </Typography>
                      <Typography variant="body2">{booking?.videio}</Typography>
                      <Typography variant="body2">{booking?.howto}</Typography>
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
                      <Typography variant="body2">
                        {booking?.knowlgde}
                      </Typography>
                      <Typography variant="body2">
                        {booking?.knlresorce}
                      </Typography>
                      <Typography variant="body2">
                        {booking?.article}
                      </Typography>
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
                      <Typography variant="body2">{booking?.certi}</Typography>
                      <Typography variant="body2">{booking?.trainers}</Typography>
                    </Box>
                  </Box> */}
                </CardContent>
                <CardActions style={{ display: "inline-block" }}>
                  <Button
                    onClick={handlebookNow}
                    style={{ backgroundColor: "#E53C35", color: "white" }}
                    variant="outlined"
                  >
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}></Grid>
            <Grid item xs={8}></Grid>
          </Grid>
        </Box>
      </div>
    </>
  );
};

export default Booking;
