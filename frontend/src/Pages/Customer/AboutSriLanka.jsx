import React, { useEffect, useState } from "react";
import Header from "../../Components/Header";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import DestinationCarouselImage from "../../Resources/DestinationCarousel.jpeg";
import SouvenierImage from "../../Resources/SouvenierCarousel.jpeg";
import HotelImage from "../../Resources/HotelCarousel.webp";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";

function AboutSriLanka() {
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  const navigate = useNavigate();
  const handleDarkmode = () => {
    if (darkmode) {
      return "white";
    } else {
      return "black";
    }
  };

  let flexingdirec;

  if (window.innerWidth <= 1024 && window.innerHeight <= 1366) {
    flexingdirec = "column";
  } else {
    flexingdirec = "row";
  }

  return (
    <div>
      <Header />
    
      <Footer/>
    </div>
  );
}

export default AboutSriLanka;
