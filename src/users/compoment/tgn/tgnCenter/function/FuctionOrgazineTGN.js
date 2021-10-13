import React, { useEffect, useState } from "react";
import "./fuctionorgazinetgn.css";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import Axios from "axios";
import FuctionOrgazineTGNSub from "./FuctionOrgazineTGNSub";

function FuctionOrgazineTGN({
  accTGN,
  TOKEN,
  PATH,
  keyAPI,
  bgMau,
  setUpdateAcc,
}) {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNEventOrgazine, {
        id: PATH,
        token: TOKEN,
        ev: "org",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              setList(data.resul);
            }
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log("Truy vấn có vấn đề");
          } else if (error.request) {
            console.log("Không nhận được phản hồi");
          } else {
            console.log("I am Nhân by Fo");
          }
        });
    }
  }, [keyAPI]);
  return (
    <div
      className="fuction-orgazine-tgn"
      style={bgMau === "white" ? { color: "black" } : { color: "white" }}
    >
      <div className="fuction-orgazine-tgn-top">
        <div className="fuction-orgazine-tgn-top-scroll">
          {list !== null && list !== undefined ? (
            list.map((val) => {
              return (
                <Link
                  to={"/tgn/orgazine/" + val.path_name}
                  className="fuction-orgazine-tgn-top-chip"
                  style={
                    bgMau === "white"
                      ? index === val.tgn_org_stt
                        ? {
                            color: "black",
                            backgroundColor: "rgb(115, 227, 255)",
                          }
                        : {
                            color: "black",
                          }
                      : index === val.tgn_org_stt
                      ? {
                          color: "white",
                          backgroundColor: "rgb(115, 227, 255)",
                        }
                      : {
                          color: "white",
                        }
                  }
                >
                  {val.tgn_name}
                </Link>
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="fuction-orgazine-tgn-bot">
        <Switch>
          {list !== null && list !== undefined ? (
            list.map((val) => {
              return (
                <Route path={"/tgn/orgazine/" + val.path_name}>
                  <FuctionOrgazineTGNSub
                    accTGN={accTGN}
                    setUpdateAcc={setUpdateAcc}
                    index={index}
                    val={val}
                    setIndex={setIndex}
                    PATH={PATH}
                    TOKEN={TOKEN}
                    keyAPI={keyAPI}
                  />
                </Route>
              );
            })
          ) : (
            <div></div>
          )}
        </Switch>
      </div>
    </div>
  );
}

export default FuctionOrgazineTGN;
