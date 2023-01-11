import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { 
    Home,
    Patient,
    ListPatient
} from "../pages";

const MenuContent = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/patients" element={<Patient />} >
            <Route path="" element={<ListPatient/>} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default MenuContent;
