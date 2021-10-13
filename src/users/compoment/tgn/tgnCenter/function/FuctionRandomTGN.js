import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "./fuctionrandomtgn.css";
import Axios from "axios";
import { Table } from "reactstrap";

function FuctionRandomTGN({
  userTGN,
  accTGN,
  TOKEN,
  PATH,
  keyAPI,
  bgMau,
  setUpdateAcc,
}) {
  const [hiden, setHiden] = useState(false);
  const [btHiden, setbtHiden] = useState(false);
  const [rand, setRand] = useState(null);
  const [type, setType] = useState(null);
  const [reward, setReward] = useState(null);
  const [list, setList] = useState([]);
  const indexRandom = () => {
    if (PATH !== null && keyAPI !== "undefined" && hiden === true) {
      Axios.post(keyAPI.apiTGNEventRandom, {
        id: PATH,
        token: TOKEN,
        ev: "rand",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul === 400) {
                setRand(Math.floor(Math.random() * 1000) - 1);
                setType("lop");
                setReward("Chúc bạn may mắn lần sau");
                setUpdateAcc(Math.floor(Math.random() * 100000));
              } else {
                setRand(data.CODE);
                setReward(data.CONTENT);
                setType(data.TYPE);
                setUpdateAcc(Math.floor(Math.random() * 100000));
              }
            }
          } else {
            setRand(Math.floor(Math.random() * 1000) - 1);
            setType("lop");
            setReward("Chúc bạn may mắn lần sau");
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
  };
  useEffect(() => {
    setTimeout(indexRandom, 4000);
  }, [keyAPI, hiden]);
  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined" && accTGN !== null) {
      Axios.post(keyAPI.apiTGNEventRandom, {
        id: PATH,
        token: TOKEN,
        ev: "history",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul === 400) {
              } else {
                setList(
                  data.resul.sort((a, b) => {
                    a = new Date(a.time_post);
                    b = new Date(b.time_post);
                    return a > b ? -1 : a < b ? 1 : 0;
                  })
                );
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
  }, [accTGN]);
  const randomLuck = () => {
    setHiden(true);
    setbtHiden(true);
  };
  const testPrev = () => {
    setHiden(false);
    setbtHiden(false);
    setRand(null);
    setReward(null);
    setType(null);
  };
  return (
    <div class="fuction-random-tgn-container">
      <div class="fuction-random-tgn-container-random">
        {hiden ? (
          reward === null ? (
            <div style={{ display: "flex", color: "rgb(116, 116, 116)" }}>
              <div className="fuction-random-tgn-container-random-code-1"></div>
              <div className="fuction-random-tgn-container-random-code-2"></div>
              <div className="fuction-random-tgn-container-random-code-3"></div>
            </div>
          ) : (
            <div style={{ display: "flex", color: "rgb(116, 116, 116)" }}>
              <div className="fuction-random-tgn-container-random-code">
                {rand}
              </div>
            </div>
          )
        ) : (
          <div class="fuction-random-tgn-container-random-text">
            <span className="fuction-random-tgn-container-random-text-span-1">
              TÍCH
            </span>{" "}
            <span className="fuction-random-tgn-container-random-text-span-2">
              CỰC
            </span>{" "}
            <span className="fuction-random-tgn-container-random-text-span-3">
              BẤM
            </span>{" "}
            <span className="fuction-random-tgn-container-random-text-span-4">
              QUAY,
            </span>{" "}
            <span className="fuction-random-tgn-container-random-text-span-5">
              VẬN
            </span>{" "}
            <span className="fuction-random-tgn-container-random-text-span-6">
              MAY
            </span>{" "}
            <span className="fuction-random-tgn-container-random-text-span-7">
              SẼ
            </span>{" "}
            <span className="fuction-random-tgn-container-random-text-span-8">
              ĐẾN
            </span>
          </div>
        )}
      </div>
      <div class="fuction-random-tgn-container-reward">
        {reward === null ? (
          <span class="fuction-random-tgn-container-reward-unf"></span>
        ) : (
          <span class="fuction-random-tgn-container-reward-css">
            {reward === "Chúc bạn may mắn lần sau"
              ? "Chúc bạn may mắn lần sau"
              : type === "super"
              ? "Bạn nhận được siêu năng " + reward
              : type === "job"
              ? "Bạn nhận được nghề " + reward
              : type === "items"
              ? "Bạn nhận được vật phẩm " + reward
              : type === "lop"
              ? "Chúc bạn may mắn lần sau"
              : "Bạn nhận được " + reward + " " + type}
          </span>
        )}
      </div>
      <div class="fuction-random-tgn-container-button">
        {btHiden ? (
          reward === null ? (
            <button class="fuction-random-tgn-container-button-css" disabled>
              RESET
            </button>
          ) : (
            <button
              class="fuction-random-tgn-container-button-css"
              onClick={testPrev}
            >
              RESET
            </button>
          )
        ) : accTGN !== null && accTGN.PGD > 1000  ? (
          <button
            class="fuction-random-tgn-container-button-css"
            onClick={randomLuck}
          >
            THỬ LUÔN VẬN MAY
          </button>
        ) : (
          <button class="fuction-random-tgn-container-button-css" disabled>
            KHÔNG ĐỦ TIỀN, QUÁ NGHÈO
          </button>
        )}
      </div>
      <div class="fuction-random-tgn-container-history">
        <Table
          style={{
            backgroundColor: "pink",
            borderRadius: "10px",
            marginTop: "20px",
          }}
        >
          <thead>
            <tr>
              <th>STT</th>
              <th>Nội dung</th>
              <th>Random</th>
              <th>Thời gian</th>
            </tr>
          </thead>
          <tbody>
            {list !== undefined &&
              list.map((value, index) => {
                return (
                  <tr style={{ borderBottom: "0.1px solid white" }}>
                    <th scope="row">{list.length - index}</th>
                    <td>{value.NAME}</td>
                    <td>{value.code}</td>
                    <td>{value.time_post}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default FuctionRandomTGN;
