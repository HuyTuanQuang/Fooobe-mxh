import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./fuctionareatgn.css";
import { Table } from "reactstrap";
import FuctionAreaTGNSub from "./FuctionAreaTGNSub";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import Axios from "axios";
import { Link } from "react-router-dom";

function FuctionAreaTGN({
  accTGN,
  userTGN,
  keyAPI,
  bgMau,
  PATH,
  TOKEN,
  setUpdateUser,
  setUpdateAcc,
  setWarning,
}) {
  const [areaArray, setAreaArray] = useState(userTGN);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [code, setCode] = useState(false);
  const [randomX, setRandomX] = useState(null);
  const [text, setText] = useState("1");
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
  function fillIndexArr(index) {
    if (accTGN !== null && accTGN !== "undefined") {
      return index.area === accTGN.area;
    }
  }
  useEffect(() => {
    const arr = userTGN;
    if (userTGN !== null) {
      const len = arr.length;
      for (let i = len - 1; i >= 0; i--) {
        for (let j = 1; j <= i; j++) {
          if (
            Math.round(
              (Number(arr[j - 1].EXP) / 100 +
                Number(arr[j - 1].TN) +
                Number(arr[j - 1].ELO) +
                Number(arr[j - 1].AM) +
                Number(arr[j - 1].XL) +
                Number(arr[j - 1].SP) / 100) /
                7.3273
            ) <
            Math.round(
              (Number(arr[j].EXP) / 100 +
                Number(arr[j].TN) +
                Number(arr[j].ELO) +
                Number(arr[j].AM) +
                Number(arr[j].XL) +
                Number(arr[j].SP) / 100) /
                7.3273
            )
          ) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
          }
        }
      }

      setAreaArray(arr.filter(fillIndexArr));
    }
  }, [userTGN, accTGN]);

  const handleClose = () => {
    setOpen1(false);
    setOpen2(false);
  };
  const handOpen1 = () => {
    setOpen1(true);
  };
  const handOpen2 = () => {
    setOpen2(true);
  };

  const memberEvent = (event, value) => {
    if (accTGN !== null) {
      Axios.post(keyAPI.apiTGNEventArea, {
        id: PATH,
        token: TOKEN,
        idz: PATH,
        ev: value,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              console.log("");
            } else {
              setOpen1(!open1);
              if (data.resul === "out") {
                setUpdateUser(accTGN.tgn_stt+Math.floor(Math.random() * 100000));
                setUpdateAcc(accTGN.tgn_stt+Math.floor(Math.random() * 100000));
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
  useEffect(() => {
    if (accTGN !== null && code === true) {
      Axios.post(keyAPI.apiTGNEventArea, {
        id: PATH,
        token: TOKEN,
        idz: accTGN.area,
        ev: "rand",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
            } else {
              if (data.resul !== 400 && data.resul !== 401) {
                setRandomX(data.resul);
              } else {
                if (data.resul === 401) {
                  setTimeout(setOpen2(false), 2000);
                  setTimeout(setWarning(401), 4000);
                }
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
  }, [code]);

  const converToNumber = (evt) => {
    var theEvent = evt || window.event;

    // Handle paste
    if (theEvent.type === "paste") {
      key = evt.clipboardData.getData("text/plain");
    } else {
      // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
    }
    var regex = /[0-9]/;
    if (!regex.test(key)) {
      theEvent.returnValue = false;
      if (theEvent.preventDefault) theEvent.preventDefault();
    }
  };
  const onChaga = (event) => {
    setText(event.target.value);
  };

  const onClickAddArea = () => {
    if (accTGN !== null) {
      Axios.post(keyAPI.apiTGNEventArea, {
        id: PATH,
        token: TOKEN,
        idz: text,
        ev: "add",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
            } else {
              if (data.resul !== 400 && data.resul !== 402) {
                setUpdateUser(Math.floor(Math.random() * 100000));
                setUpdateAcc(Math.floor(Math.random() * 100000));
              } else {
                if (data.resul === 402) {
                  setTimeout(setWarning(402), 4000);
                }
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
    <div>
      {accTGN !== null && accTGN.area !== "0" ? (
        <div>
          <div className="fuction-area-tgn-top">
            <div className="fuction-area-tgn-top-header">
              Thế Giới Ngầm - Khu Vực{" " + accTGN.area}
            </div>
            <div className="fuction-area-tgn-top-title">
              Cộng đồng công khai • {areaArray.length} thành viên
            </div>
            <div className="fuction-area-tgn-top-button">
              <div className="fuction-area-tgn-top-button-item">
                {accTGN.area_account !== '3' && (
                  <Button
                    variant="outlined"
                    style={{ textTransform: "none" }}
                    onClick={handOpen2}
                  >
                    Mời +
                  </Button>
                )}
              </div>
              <div className="fuction-area-tgn-top-button-item">
                <Button
                  variant="outlined"
                  color="primary"
                  style={{ textTransform: "none" }}
                >
                  Yêu cầu
                </Button>
              </div>
              <div className="fuction-area-tgn-top-button-item">
                <Button
                  variant="outlined"
                  color="secondary"
                  style={{ textTransform: "none" }}
                  onClick={handOpen1}
                >
                  Rời
                </Button>
              </div>
            </div>
          </div>
          <Dialog
            open={open2}
            onClose={handleClose}
            style={{ zIndex: "50000" }}
          >
            <DialogContent className={classes.titleStyle}>
              Tạo mã mời thành viên
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
            <DialogContent className={classes.textStylex}>
              {code === false ? (
                <Button
                  className={classes.boxStyle}
                  variant="contained"
                  color="primary"
                  onClick={(event) => {
                    setCode(!code);
                  }}
                >
                  Tạo mã mời
                </Button>
              ) : randomX === null ? (
                <div style={{ display: "flex", color: "rgb(116, 116, 116)" }}>
                  <div className="fuction-area-tgn-top-button-random-code-1"></div>
                  <div className="fuction-area-tgn-top-button-random-code-2"></div>
                  <div className="fuction-area-tgn-top-button-random-code-3"></div>
                  <div className="fuction-area-tgn-top-button-random-code-2"></div>
                  <div className="fuction-area-tgn-top-button-random-code-4"></div>
                  <div className="fuction-area-tgn-top-button-random-code-3"></div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      display: "flex",
                      color: "rgb(116, 116, 116)",
                      cursor: "pointer",
                    }}
                  >
                    Click để sao chép!
                  </div>
                  <div
                    style={{
                      display: "flex",
                      color: "rgb(116, 116, 116)",
                      font: "800 40px system-ui",
                      cursor: "pointer",
                    }}
                    onClick={(event) => {
                      navigator.clipboard.writeText(
                        event.currentTarget.textContent
                      );
                    }}
                  >
                    {randomX}
                  </div>
                </div>
              )}
            </DialogContent>
          </Dialog>
          <Dialog
            open={open1}
            onClose={handleClose}
            style={{ zIndex: "50000" }}
          >
            <DialogContent className={classes.titleStyle}>
              Bái bai khu vực
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
              {accTGN.PGD > 100000
                ? "Bạn có chắc muốn rời khỏi khu " + accTGN.area + " không?"
                : "Rất tiếc, bạn không đủ điều kiện để rời khu."}
            </DialogContent>
            <DialogActions>
              {accTGN.PGD > 100000 ? (
                <Button
                  className={classes.boxStyle}
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={(event) => {
                    memberEvent(event, "out");
                  }}
                >
                  Rời
                </Button>
              ) : (
                <Button
                  className={classes.boxStyle}
                  variant="contained"
                  color="primary"
                  disableElevation
                  disabled
                >
                  Rời
                </Button>
              )}
            </DialogActions>
          </Dialog>
          <div className="fuction-area-tgn-bottom">
            <Table striped>
              <thead>
                <tr>
                  <th className="fuction-area-tgn-bottom-td">Rank</th>
                  <th className="fuction-area-tgn-bottom-td">Thanh viên</th>
                  <th className="fuction-area-tgn-bottom-td">The World</th>
                  <th className="fuction-area-tgn-bottom-td">Pzo</th>
                  <th className="fuction-area-tgn-bottom-td">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {areaArray.map((val) => {
                  return (
                    <FuctionAreaTGNSub
                      setUpdateUser={setUpdateUser}
                      TOKEN={TOKEN}
                      PATH={PATH}
                      keyAPI={keyAPI}
                      accTGN={accTGN}
                      bgMau={bgMau}
                      areaArray={areaArray}
                      val={val}
                    />
                  );
                })}
              </tbody>
            </Table>
          </div>
        </div>
      ) : (
        <div>
          <div className="fuction-area-tgn-none-title">
            Vui lòng nhập mã mời để có thể tham gia một khu vực
          </div>
          <div className="fuction-area-tgn-none-button">
            <div>
              <input
                type="text"
                className="fuction-area-tgn-none-button-input"
                maxLength="6"
                onChange={onChaga}
                onKeyPress={(event) => {
                  converToNumber(event);
                }}
              />
            </div>
            <div className="fuction-area-tgn-none-button-button">
              {" "}
              <Button onClick={onClickAddArea} className={classes.buttonNone}>
                Tham gia
              </Button>{" "}
            </div>
            <div>
              <Link>Tìm hiểu thêm</Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FuctionAreaTGN;
