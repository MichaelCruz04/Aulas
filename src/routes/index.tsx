import React from "react";
import { Route, Routes as RoutesRRD } from "react-router-dom";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <RoutesRRD>
      <Route path="/" element={<Home />} />
    </RoutesRRD>
  );
};
export default Routes;
