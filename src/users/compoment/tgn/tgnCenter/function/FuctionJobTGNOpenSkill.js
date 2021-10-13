import { Button } from "@material-ui/core";
import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function FuctionJobTGNOpenSkill({ value, accTGN, TOKEN, PATH, keyAPI, setUpdateAcc }) {
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
    textStylex: {
      color: "black",
      marginTop: "0px",
      marginBottom: "30px",
      display: "flex",
      justifyContent: "center",
    },
    titleStyle: {
      color: "black",
      marginTop: "-10px",
      marginBottom: "-10px",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
    buttonNone: {
      maxWidth: "100%",
      minWidth: "100%",
      backgroundColor: "rgb(183, 238, 255)",
      marginTop: "5px",
      marginBottom: "5px",
    },
  }));
  const classes = useStyles();
  const [open, setOpen] = useState(value.OPENSKILL);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleClose = () => {
    setOpen1(false);
    setOpen2(false);
  };
  const eventOpenSkillLove = () => {
    if (value !== null) {
      Axios.post(keyAPI.apiTGNEventJob, {
        id: PATH,
        token: TOKEN,
        idz: value.tgn_skill_stt,
        ev: "open",
        ad: value.price
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if(data.resul === 'open'){
                setOpen('1');
                setOpen1(false);
                setUpdateAcc(accTGN.PGD+Math.floor(Math.random() * 100000))
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
    <div style={{ marginTop: "5px" }}>
      {open === "1" ? (
        <Button
          variant="outlined"
          color="default"
          onClick={() => {
            setOpen2(true);
          }}
        >
          Xem hướng dẫn
        </Button>
      ) : (
        <Button
          variant="outlined"
          color="default"
          onClick={() => {
            setOpen1(true);
          }}
        >
          {value.price + " PGD"}
        </Button>
      )}
      <Dialog open={open1} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          Mở khóa hướng dẫn kỹ năng
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
          {accTGN.PGD > Number(value.price)
            ? "Bạn có chắc muốn bỏ ra " +
              value.price +
              " PGD để mở hướng dẫn kỹ năng này không?"
            : "Rất tiếc, bạn không đủ tiền để mở kỹ năng này."}
        </DialogContent>
        <DialogActions>
          {accTGN.PGD > Number(value.price) ? (
            <div>
              <Button
                className={classes.boxStyle}
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleClose}
                style={{ marginRight: "5px" }}
              >
                Hủy
              </Button>
              <Button
                className={classes.boxStyle}
                variant="contained"
                color="primary"
                disableElevation
                onClick={eventOpenSkillLove}
              >
                Đồng ý
              </Button>
            </div>
          ) : (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              disableElevation
              onClick={handleClose}
            >
              Hủy
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Dialog open={open2} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          Hướng dẫn sử dụng kỹ năng{" " + value.name}
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
          {value.note !== null
            ? value.note
            : "Rất tiếc, chưa có hướng dẫn sử dụng kỹ năng này."}
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.boxStyle}
            variant="contained"
            color="primary"
            disableElevation
            onClick={handleClose}
          >
            Hủy
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FuctionJobTGNOpenSkill;
