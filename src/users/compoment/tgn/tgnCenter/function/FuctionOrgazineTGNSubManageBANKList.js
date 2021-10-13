import React from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import { Button } from "reactstrap";

function FuctionOrgazineTGNSubManageBANKList({
  val,
  mem,
  PATH,
  TOKEN,
  keyAPI,
  setHight,
}) {
  const actionMemPVP = (value) => {
    if (PATH !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNEventOrgazine, {
        id: PATH,
        token: TOKEN,
        ev: value,
        ts: val.tgn_mem_org_stt,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              setHight(Math.floor(Math.random() * 100000));
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
  };
  return (
    <div
      className="fuction-orgazine-tgn-pvp-list-contained"
      style={{ color: "black" }}
    >
      <div className="fuction-orgazine-tgn-pvp-list-contained-avt">
        <img src={`/foanime/${val.AVATAR}`} />
      </div>
      <div className="fuction-orgazine-tgn-pvp-list-contained-name">
        {val.NAME}
      </div>
      <div className="fuction-orgazine-tgn-pvp-list-contained-position">
        {val.position === "admin" && "Sếp"}{" "}
        {val.position === "member" && "Giao dịch viên"}{" "}
        {val.position === "user" && "Người dùng Fooobe"}
      </div>
      <div className="fuction-orgazine-tgn-pvp-list-contained-button">
        {mem.position === "admin" &&
          (val.position === "user" && val.position !== "admin" ? (
            <Button
              color="info"
              className="fuction-orgazine-tgn-pvp-list-contained-button-css"
              onClick={() => actionMemPVP("addlevelmempvp")}
            >
              Thêm
            </Button>
          ) : (
            val.position !== "admin" && (
              <Button
                color="info"
                className="fuction-orgazine-tgn-pvp-list-contained-button-css"
                onClick={() => actionMemPVP("removelevelmempvp")}
              >
                Gỡ
              </Button>
            )
          ))}{" "}
        {mem.position === "admin" &&
          (val.position === "user" && val.position !== "admin" ? (
            <Button
              color="danger"
              className="fuction-orgazine-tgn-pvp-list-contained-button-css"
              onClick={() => actionMemPVP("deletelevelmempvp")}
            >
              Xóa
            </Button>
          ) : (
            val.position !== "admin" && (
              <Button
                color="danger"
                className="fuction-orgazine-tgn-pvp-list-contained-button-css"
                onClick={() => actionMemPVP("deletelevelmempvp")}
              >
                Xóa
              </Button>
            )
          ))}{" "}
      </div>
    </div>
  );
}

export default FuctionOrgazineTGNSubManageBANKList;
