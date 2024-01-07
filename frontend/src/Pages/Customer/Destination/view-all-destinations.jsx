import React, { useEffect, useState } from "react";
import Header from "../../../Components/Header";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../../Components/Footer";
import { useQuery } from "react-query";

function Destinations() {

  const darkmode = useSelector((state) => state.darkmode.darkmode);

//   const { data, isLoading, error, isError } = useQuery({
//     queryFn: () => getAllForgottenLuggages(customeremail),
//   });

  const navigate = useNavigate();
  const handleDarkmode = () => {
    if (darkmode) {
      return "white";
    } else {
      return "black";
    }
  };


  return (
    <div>
      <Header />
     
   
      <Footer/>
    </div>
  );
}

export default Destinations;
