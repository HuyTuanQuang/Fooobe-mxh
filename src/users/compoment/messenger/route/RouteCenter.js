import React, {useState} from "react";
import Messenger from "../center/Messenger";
import "./mesSengerCenter.css";

function RouteCenter({ index }) {
  
  return (
    <div>
      <Messenger index={index} />
    </div>
  );
}

export default RouteCenter;
