import React from "react";
import MeetOurExpert from "../expert/MeetOurExpert";
import OurPlan from "../ourPlan/OurPlan";
import Service from "../service/Service";
import AboutUs from "./about us/AboutUs";

const Home = () => {
  return (
    <div>
      <AboutUs></AboutUs>
      <Service></Service>
      <MeetOurExpert></MeetOurExpert>
      <OurPlan></OurPlan>
    </div>
  );
};

export default Home;
