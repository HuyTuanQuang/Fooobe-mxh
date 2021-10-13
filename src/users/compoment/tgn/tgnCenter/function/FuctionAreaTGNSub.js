import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";

function FuctionAreaTGNSub({
  val,
  areaArray,
  bgMau,
  accTGN,
  keyAPI,
  TOKEN,
  PATH,
  setUpdateUser,
}) {
  const [displa, setDispla] = useState(true);
  const [kickMember, setKickMember] = useState(false);
  const [upMember, setUpMember] = useState(false);
  const [dowMember, setDowMember] = useState(false);
  const [open, setOpen] = useState(false);
  const [levelArea, setLevelArea] = useState(val.area_account);

  const useStyles = makeStyles((theme) => ({
    boxStyle: {
      fontWeight: "bold",
      fontSize: "0.9rem",
      backgroundColor: "#23b4c5",
      textTransform: "none",
    },
    textStyle: {
      color: "black",
      marginTop: "-20px",
      marginBottom: "20px",
    },
    titleStyle: {
      color: "black",
      marginTop: "-10px",
      marginBottom: "-10px",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
  }));
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
    setDowMember(false);
    setUpMember(false);
    setKickMember(false);
  };

  function findIndexArr(index) {
    if (val !== null) {
      return index.id === val.id;
    }
  }
  const onDeleteMem = () => {
    setOpen(!open);
    setKickMember(!kickMember);
  };

  const onUpMem = () => {
    setOpen(!open);
    setUpMember(!upMember);
  };
  const onDowMem = () => {
    setOpen(!open);
    setDowMember(!dowMember);
  };

  const memberLevel = (event, value) => {
    if (accTGN !== null) {
      Axios.post(keyAPI.apiTGNEventArea, {
        id: PATH,
        token: TOKEN,
        idz: val.id,
        ev: value,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              console.log("");
            } else {
              setOpen(!open);
              setDowMember(false);
              setUpMember(false);
              setKickMember(false);
              if (data.resul === "dow") {
                setLevelArea("3");
              } else if (data.resul === "up") {
                setLevelArea("2");
              } else if (data.resul === "kick") {
                setUpdateUser(val.tgn_stt+Math.floor(Math.random() * 100000));
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
  };
  return (
    <tr style={displa === true ? {} : { display: "none" }}>
      <th className="fuction-area-tgn-bottom-td">
        {Number(areaArray.findIndex(findIndexArr)) + 1}
      </th>
      <td className="fuction-area-tgn-bottom-td">
        {val.FRISTNAME + " " + val.LASTTNAME}
      </td>
      <td className="fuction-area-tgn-bottom-td">{val.THEWORLD}</td>
      <td className="fuction-area-tgn-bottom-td">
        {Math.round(
          (Number(val.EXP) / 100 +
            Number(val.TN) +
            Number(val.ELO) +
            Number(val.AM) +
            Number(val.XL) +
            Number(val.SP) / 100) /
            7.3273
        )}
      </td>
      <td
        className="fuction-area-tgn-bottom-td"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Link
          to={"/tgn/profile/" + val.id}
          style={bgMau === "white" ? { color: "black" } : { color: "white" }}
          className="haveto"
        >
          Xem thông tin
        </Link>
        {accTGN.area_account === "1" ? (
          levelArea === "2" ? (
            <div
              style={
                bgMau === "white"
                  ? { color: "black", marginLeft: "5px" }
                  : { color: "white", marginLeft: "5px" }
              }
              className="haveto"
              onClick={onDowMem}
            >
              Hạ cấp
            </div>
          ) : levelArea === "3" ? (
            <div
              style={
                bgMau === "white"
                  ? { color: "black", marginLeft: "5px" }
                  : { color: "white", marginLeft: "5px" }
              }
              className="haveto"
              onClick={onUpMem}
            >
              Hành động
            </div>
          ) : (
            <div></div>
          )
        ) : accTGN.area_account === "2" ? (
          levelArea === "3" ? (
            <div
              style={
                bgMau === "white"
                  ? { color: "black", marginLeft: "5px" }
                  : { color: "white", marginLeft: "5px" }
              }
              className="haveto"
              onClick={onDeleteMem}
            >
              Kick
            </div>
          ) : (
            <div></div>
          )
        ) : (
          <div></div>
        )}
      </td>
      <Dialog open={open} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          {kickMember && "Xóa thành viên"}
          {dowMember && "Hạ cấp thành viên"}
          {upMember && "Hành động"}
        </DialogContent>
        <div
          style={{
            width: "100%",
            height: "0.1px",
            backgroundColor: "rgba(201, 192, 192, 0.966)",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        ></div>
        <DialogContent className={classes.textStyle}>
          {kickMember && "Bạn có chắc muốn xóa thành viên này không?"}
          {dowMember && "Bạn sắp sửa cắt chức thành viên này"}
          {upMember && "Lựa chọn một trong các hành động sau đây"}
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            style={{ textTransform: "none", fontWeight: "600" }}
            onClick={handleClose}
          >
            Hủy
          </Button>
          {kickMember && (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              disableElevation
              onClick={(event) => {
                memberLevel(event, "kick");
              }}
            >
              Xóa, kick
            </Button>
          )}
          {dowMember && (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              disableElevation
              onClick={(event) => {
                memberLevel(event, "dow");
              }}
            >
              Cắt chức
            </Button>
          )}
          {upMember && (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              disableElevation
              onClick={(event) => {
                memberLevel(event, "up");
              }}
            >
              Thăng chức
            </Button>
          )}
          {upMember && (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              disableElevation
              onClick={(event) => {
                memberLevel(event, "kick");
              }}
            >
              Kick
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </tr>
  );
}

export default FuctionAreaTGNSub;
