import React, { useState } from "react";
import "../../StyleMenuHome/StyleBig.css";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { Link, useLocation } from "react-router-dom";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";

function PlayMenu(props) {
    const [valueTrend, setValueTrend] = useState(0);
  const [valueFollow, setValueFollow] = useState(0);
  const onClickTrend = (event, value) => {
    setValueTrend(value);
    setValueFollow(0);
  };
  const onClickFollow = (event, value) => {
    setValueTrend(0);
    setValueFollow(value);
  };
  return (
    <div className="menuHome">
      <Link
        onClick={(event) => {
          onClickTrend(event, 1);
        }}
        to="/newstory"
        style={
          valueTrend === 0
            ? {
                textDecoration: "none",
                fontWeight: "bold",
                width: "25%",
                color: "#fea7e0",
              }
            : {
                textDecoration: "none",
                fontWeight: "bold",
                width: "25%",
                color: "#ea154c",
              }
        }
      >
        <div
          className="menuHomeHover"
          style={{
            width: "100%",
            marginTop: "20px",
            borderRadius: "10px",
            display: "flex",
          }}
        >
          <TrendingUpIcon style={{ fontSize: 70, marginLeft: "10%" }} />
          <p style={{ fontSize: "20px", marginLeft: "10%" }}>Xu hướng</p>
        </div>
      </Link>
      <br />
      <div
        style={{
          width: "80%",
          marginLeft: "10%",
          height: "0.5px",
          backgroundColor: "#cecacb",
        }}
      ></div>
      <br />
      <Link
        onClick={(event) => {
          onClickFollow(event, 1);
        }}
        to="/play"
        style={
          valueFollow === 0
            ? {
                textDecoration: "none",
                fontWeight: "bold",
                width: "25%",
                color: "#fea7e0",
              }
            : {
                textDecoration: "none",
                fontWeight: "bold",
                width: "25%",
                color: "#ea154c",
              }
        }
      >
        <div
          className="menuHomeHover"
          style={{
            width: "100%",
            marginTop: "20px",
            borderRadius: "10px",
            display: "flex",
          }}
        >
          <PeopleOutlineIcon style={{ fontSize: 70, marginLeft: "10%" }} />
          <p style={{ fontSize: "20px", marginLeft: "10%" }}>Theo dõi</p>
        </div>
      </Link>
      <br />
      <div
        style={{
          width: "80%",
          marginLeft: "10%",
          height: "0.5px",
          backgroundColor: "#cecacb",
        }}
      ></div>
      <br />
    </div>
  );
}

export default PlayMenu;