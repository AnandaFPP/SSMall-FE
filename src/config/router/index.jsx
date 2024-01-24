import React from "react";
import Home from "../../pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace="true" />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
