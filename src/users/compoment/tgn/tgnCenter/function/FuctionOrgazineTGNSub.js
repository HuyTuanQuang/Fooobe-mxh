import React, { useEffect, useState } from "react";
import FuctionOrgazineTGNSubManage from "./FuctionOrgazineTGNSubManage";
import FuctionOrgazineTGNSubNoti from "./FuctionOrgazineTGNSubNoti";
import FuctionOrgazineTGNSubProfile from "./FuctionOrgazineTGNSubProfile";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function FuctionOrgazineTGNSub({ index, val, setIndex, PATH, TOKEN, keyAPI, accTGN,  setUpdateAcc }) {
  const [tabs, setTabs] = useState(0);
  const [allMem, setAllMem] = useState(null);
  const [mem, setMem] = useState(null);
  const [hight, setHight] = useState(0);
  useEffect(() => {
    setIndex(val.tgn_org_stt);
  });
  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNEventOrgazine, {
        id: PATH,
        token: TOKEN,
        ev: "all",
        ts: val.tgn_org_stt,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul === 400) {
                setAllMem(null);
              } else {
                setAllMem(data.resul);
              }
            }
          } else {
            setAllMem(null);
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

      //
      Axios.post(keyAPI.apiTGNEventOrgazine, {
        id: PATH,
        token: TOKEN,
        ev: "mem",
        ts: val.tgn_org_stt,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul === 400) {
                setMem(null);
              } else {
                setMem(data.resul[0]);
              }
            }
          } else {
            setMem(null);
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
  }, [keyAPI, index, hight]);
  return (
    <div className="fuction-orgazine-tgn-sub">
      <div className="fuction-orgazine-tgn-sub-top">
        <div
          className="fuction-orgazine-tgn-sub-top-layout"
          onClick={() => {
            setTabs(0);
          }}
        >
          <div className="fuction-orgazine-tgn-sub-top-1">Giới thiệu</div>
          <div
            className="fuction-orgazine-tgn-sub-top-2"
            style={
              tabs === 0
                ? {
                    backgroundColor: "rgb(115, 222, 255)",
                    width: "100%",
                    height: "2px",
                  }
                : { backgroundColor: "white", width: "100%", height: "2px" }
            }
          ></div>
        </div>
        <div
          className="fuction-orgazine-tgn-sub-top-layout"
          onClick={() => {
            setTabs(1);
          }}
        >
          <div className="fuction-orgazine-tgn-sub-top-1">Thông báo</div>
          <div
            style={
              tabs === 1
                ? {
                    backgroundColor: "rgb(115, 222, 255)",
                    width: "100%",
                    height: "2px",
                  }
                : { backgroundColor: "white", width: "100%", height: "2px" }
            }
          ></div>
        </div>
        {(mem !== null && mem.position === "admin") ||
        (mem !== null && mem.position === "member") ? (
          <div
            className="fuction-orgazine-tgn-sub-top-layout"
            onClick={() => {
              setTabs(2);
            }}
          >
            <div className="fuction-orgazine-tgn-sub-top-1">Quản lý</div>
            <div
              style={
                tabs === 2
                  ? {
                      backgroundColor: "rgb(115, 222, 255)",
                      width: "100%",
                      height: "2px",
                    }
                  : { backgroundColor: "white", width: "100%", height: "2px" }
              }
            ></div>
          </div>
        ) : null}
      </div>
      <div className="fuction-orgazine-tgn-sub-bot">
        {tabs === 0 && <FuctionOrgazineTGNSubProfile setAllMem={setAllMem} setHight={setHight} setUpdateAcc={setUpdateAcc} accTGN={accTGN}  val={val} mem={mem} allMem={allMem} PATH={PATH} TOKEN={TOKEN} keyAPI={keyAPI} />}
        {tabs === 1 && <FuctionOrgazineTGNSubNoti  />}
        {tabs === 2 && <FuctionOrgazineTGNSubManage setHight={setHight} setUpdateAcc={setUpdateAcc} accTGN={accTGN}  val={val} mem={mem} allMem={allMem} PATH={PATH} TOKEN={TOKEN} keyAPI={keyAPI} />}
      </div>
    </div>
  );
}

export default FuctionOrgazineTGNSub;
