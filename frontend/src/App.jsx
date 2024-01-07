import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./Pages/Authentication/SignIn";
import "react-toastify/dist/ReactToastify.css";
import ForgetPassword from "./Pages/Authentication/ForgetPassword";
import SignUp from "./Pages/Authentication/SignUp";
import Home from "./Pages/Customer/Home";
import { useSelector } from "react-redux";
import AboutSriLanka from "./Pages/Customer/AboutSriLanka";
import Destinations from "./Pages/Customer/Destination/view-all-destinations";
function App() {
  const loggedUser = useSelector((state) => state.auth.loggedUser);
  const darkmode = useSelector((state) => state.darkmode.darkmode);

  const handleCss = () => {
    if (darkmode) {
      return "AppDarkmode";
    } else {
      return "App";
    }
  };
  return (
    <div className={handleCss()}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/forgot" element={<ForgetPassword />} />
          <Route path="/signup" element={<SignUp />} />
          {loggedUser.role === "customer" && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/about-Sri-Lanka" element={<AboutSriLanka />} />
              <Route path="/destinations" element={<Destinations />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
