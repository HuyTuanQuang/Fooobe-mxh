import React, { useEffect, useState } from "react";
import TGNMenuAdmin from "./function/TGNMenuAdmin";
import TGNMenuUser from "./function/TGNMenuUser";
import "./menuleft.css";
import { RiExchangeFundsLine } from "react-icons/ri";
import { useCookies } from "react-cookie";
import Axios from "axios";

function TGNProfile({ trans, bgMau, keyAPI, dataAcc, accTGN, userTGN, accessTGN }) {
  
  const [menuLeft, setMenuLeft] = useState(false);
  return (
    <div
      className="container-tgn-left"
      style={
        bgMau === "white"
          ? {
              color: "black",
            }
          : {
              color: "white",
            }
      }
    >
      {accTGN !== null ? (
        <div>
          <div className="tgn-left-manage">
            <div className="tgn-left-manage-title">
              {menuLeft === false ? "Bạn đang cần gì?" : "Quản lý TGN"}
            </div>
            {accessTGN && (
              <div
                className="tgn-left-manage-button"
                onClick={() => {
                  setMenuLeft(!menuLeft);
                }}
              >
                <RiExchangeFundsLine />
              </div>
            )}
          </div>
          <div
            style={
              bgMau === "white"
                ? {
                    width: "94%",
                    margin: "0 auto",
                    height: "0.1px",
                    backgroundColor: "rgb(230, 230, 230)",
                    zIndex: "1",
                  }
                : {
                    width: "94%",
                    margin: "0 auto",
                    height: "0.1px",
                    backgroundColor: "#4e4e4e",
                    zIndex: "1",
                  }
            }
          ></div>
          <div className="tgn-left-fuction">
            {menuLeft === false ? (
              <TGNMenuUser
                trans={trans}
                bgMau={bgMau}
                keyAPI={keyAPI}
                dataAcc={dataAcc}
                accTGN={accTGN}
              />
            ) : (
              <TGNMenuAdmin
                trans={trans}
                bgMau={bgMau}
                keyAPI={keyAPI}
                dataAcc={dataAcc}
                accTGN={accTGN}
              />
            )}
          </div>
        </div>
      ) : (
        <div
          style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        >
          Chưa đăng ký
        </div>
      )}
    </div>
  );
}

export default TGNProfile;
