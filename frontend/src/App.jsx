import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import SignIn from './Pages/Authentication/SignIn';
import 'react-toastify/dist/ReactToastify.css';
import ForgetPassword from './Pages/Authentication/ForgetPassword';
import SignUp from './Pages/Authentication/SignUp';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
        <Route path="/" element={<SignIn/>} />
        <Route path="/forgot" element={<ForgetPassword/>} />
        <Route path="/signup" element={<SignUp/>} />
     </Routes>
     </BrowserRouter>
     </div>
  );
}

export default App;
