import React, { useEffect, useState } from "react";
import "./fuctionmarkettgn.css";
import FuctionMarketTGNBag from "./FuctionMarketTGNBag";
import FuctionMarketTGNHistory from "./FuctionMarketTGNHistory";
import FuctionMarketTGNHome from "./FuctionMarketTGNHome";
import FuctionMarketTGNList from "./FuctionMarketTGNList";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function FuctionMarketTGN({
  userTGN,
  accTGN,
  TOKEN,
  PATH,
  keyAPI,
  bgMau,
  setUpdateAcc,
}) {
  const [hiden, setHiden] = React.useState("home");
  const [listMarket, setListMarket] = useState(null);
  const [updatePro, setUpdatePro] = useState(0);
  const [listPro, setListPro] = useState(null);
  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNEventMarket, {
        id: PATH,
        token: TOKEN,
        ev: "all",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul !== 400) {
                setListMarket(data.resul);
              }
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
  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNEventMarket, {
        id: PATH,
        token: TOKEN,
        ev: "buy",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul !== 400) {
                setListPro(data.resul);
              }
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
  }, [keyAPI, updatePro]);
  return (
    <div>
      <div className="fuction-market-tgn-top">
        <div className="fuction-market-tgn-top-header">Thế Giới Ngầm</div>
        <div className="fuction-market-tgn-top-title">
          Cộng đồng công khai • {userTGN.length} thành viên
        </div>
        <div
          style={{
            width: "100%",
            height: "0.1px",
            backgroundColor: "rgb(230, 230, 230)",
          }}
        ></div>
        <div className="fuction-market-tgn-top-button">
          <div
            className="fuction-market-tgn-top-button-layout"
            onClick={() => {
              setHiden("home");
            }}
          >
            <div className="fuction-market-tgn-top-button-css">Chợ</div>
            <div
              style={
                bgMau === "white"
                  ? hiden === "home"
                    ? {
                        width: "100%",
                        height: "1.4px",
                        backgroundColor: "rgb(30, 173, 255)",
                      }
                    : {
                        width: "100%",
                        height: "1.4px",
                        backgroundColor: "white",
                      }
                  : hiden === "home"
                  ? {
                      width: "100%",
                      height: "1.4px",
                      backgroundColor: "rgb(30, 173, 255)",
                    }
                  : {
                      width: "100%",
                      height: "1.4px",
                      backgroundColor: "#242526",
                    }
              }
            ></div>
          </div>
          <div
            className="fuction-market-tgn-top-button-layout"
            onClick={() => {
              setHiden("list");
            }}
          >
            <div className="fuction-market-tgn-top-button-css">Danh sách</div>
            <div
              style={
                bgMau === "white"
                  ? hiden === "list"
                    ? {
                        width: "100%",
                        height: "1.4px",
                        backgroundColor: "rgb(30, 173, 255)",
                      }
                    : {
                        width: "100%",
                        height: "1.4px",
                        backgroundColor: "white",
                      }
                  : hiden === "list"
                  ? {
                      width: "100%",
                      height: "1.4px",
                      backgroundColor: "rgb(30, 173, 255)",
                    }
                  : {
                      width: "100%",
                      height: "1.4px",
                      backgroundColor: "#242526",
                    }
              }
            ></div>
          </div>
          <div
            className="fuction-market-tgn-top-button-layout"
            onClick={() => {
              setHiden("bag");
            }}
          >
            <div className="fuction-market-tgn-top-button-css">Nhà</div>
            <div
              style={
                bgMau === "white"
                  ? hiden === "bag"
                    ? {
                        width: "100%",
                        height: "1.4px",
                        backgroundColor: "rgb(30, 173, 255)",
                      }
                    : {
                        width: "100%",
                        height: "1.4px",
                        backgroundColor: "white",
                      }
                  : hiden === "bag"
                  ? {
                      width: "100%",
                      height: "1.4px",
                      backgroundColor: "rgb(30, 173, 255)",
                    }
                  : {
                      width: "100%",
                      height: "1.4px",
                      backgroundColor: "#242526",
                    }
              }
            ></div>
          </div>
          <div
            className="fuction-market-tgn-top-button-layout"
            onClick={() => {
              setHiden("history");
            }}
          >
            <div className="fuction-market-tgn-top-button-css">Lịch sử</div>
            <div
              style={
                bgMau === "white"
                  ? hiden === "history"
                    ? {
                        width: "100%",
                        height: "1.4px",
                        backgroundColor: "rgb(30, 173, 255)",
                      }
                    : {
                        width: "100%",
                        height: "1.4px",
                        backgroundColor: "white",
                      }
                  : hiden === "history"
                  ? {
                      width: "100%",
                      height: "1.4px",
                      backgroundColor: "rgb(30, 173, 255)",
                    }
                  : {
                      width: "100%",
                      height: "1.4px",
                      backgroundColor: "#242526",
                    }
              }
            ></div>
          </div>
        </div>
        <div
          style={{
            width: "100%",
            height: "0.1px",
            backgroundColor: "rgb(230, 230, 230)",
          }}
        ></div>
      </div>
      {listMarket !== null && listPro !== null ? (
        <div className="fuction-market-tgn-bottom">
          {hiden === "home" && (
            <FuctionMarketTGNHome
              listPro={listPro}
              PATH={PATH}
              TOKEN={TOKEN}
              bgMau={bgMau}
              keyAPI={keyAPI}
              accTGN={accTGN}
              setUpdateAcc={setUpdateAcc}
              setUpdatePro={setUpdatePro}
            />
          )}
          {hiden === "bag" && (
            <FuctionMarketTGNBag
              listPro={listPro}
              PATH={PATH}
              TOKEN={TOKEN}
              bgMau={bgMau}
              keyAPI={keyAPI}
              setUpdatePro={setUpdatePro}
              accTGN={accTGN}
            />
          )}
          {hiden === "list" && <FuctionMarketTGNList listMarket={listMarket} />}
          {hiden === "history" && <FuctionMarketTGNHistory accTGN={accTGN} listPro={listPro}/>}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default FuctionMarketTGN;
