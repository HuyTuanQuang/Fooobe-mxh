import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import NextIcon from "../../img/next.png";
import { GoSignOut } from "react-icons/go";
import { MdSettings } from "react-icons/md";
import { GiMoon } from "react-icons/gi";
import { FiArrowLeft } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { FaQuestionCircle, FaGrinSquintTears } from "react-icons/fa";
import Axios from "axios";
import { useHistory } from "react-router-dom";
import { GrNext } from "react-icons/gr";
import { FcNext } from "react-icons/fc";

function MenuPCTabBig({
  dataAcc,
  openContainer,
  openTabSetting,
  setOpenContainer,
  setOpenTabSetting,
  setBgMau,
  bgMau,
  keyAPI,
  TOKEN,
  PATH,
}) {
  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    button: {
      width: "94%",
      textTransform: "none",
      margin: "3%",
      height: "80px",
    },
    button2: {
      width: "94%",
      textTransform: "none",
      margin: "3%",
      height: "50px",
    },
    button3: {
      width: "94%",
      textTransform: "none",
      margin: "3%",
    },
  }));
  //
  const classes = useStyles();
  const [openAccessibilitys, setOpenAccessibility] = useState(false);
  const [openMode, setOpenMode] = useState(bgMau === "white" ? false : true);
  const openAccessibility = () => {
    setOpenContainer(false);
    setOpenTabSetting(true);
    setOpenAccessibility(true);
  };

  const previewTab = () => {
    setOpenTabSetting(false);
    setOpenAccessibility(false);
    setOpenContainer(true);
  };

  const onChangeMode = () => {
    Axios.post(keyAPI.apiEventSetting, {
      id: PATH,
      token: TOKEN,
      ev: "changeMode",
      ts: bgMau === "white" ? "#242526" : "white",
    })
      .then(({ data }) => {
        if (data.check === "xp") {
          history.push("/logout");
        } else {
          if (typeof data !== undefined) {
            if (data.resul === "ok") {
              setOpenMode(!openMode);
              setBgMau(bgMau === "white" ? "#242526" : "white");
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
  };
  return (
    <div
      style={
        bgMau === "white"
          ? {
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              color: "black",
            }
          : {
              width: "100%",
              height: "100%",
              backgroundColor: "#2c2c2c",
              color: "white",
            }
      }
    >
      {openContainer && (
        <div>
          <Link to={"/" + dataAcc.id} style={{ textDecoration: "none" }}>
            <Button
              className={classes.button}
              style={
                bgMau === "white" ? { color: "black" } : { color: "white" }
              }
            >
              <div style={{ width: "23%", height: "74px" }}>
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "100px",
                    marginTop: "2px",
                    border: "0.1px solid rgb(221, 211, 211)",
                    marginLeft: "-10px",
                  }}
                  src={`/foanime/${dataAcc.avatar}`}
                />
              </div>
              <div style={{ width: "77%", height: "74px" }}>
                <div
                  style={{
                    width: "100%",
                    height: "50%",
                    textAlign: "left",
                    fontSize: "17px",
                    fontWeight: "600",
                    fontFamily:
                      "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                    paddingTop: "10px",
                  }}
                >
                  {dataAcc.fristname + " " + dataAcc.lastname}
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "50%",
                    color: "#65676b",
                    textAlign: "left",
                    fontFamily:
                      "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                  }}
                >
                  Xem trang cá nhân của bạn
                </div>
              </div>
            </Button>
          </Link>
          <div
            style={{
              height: "0.1px",
              width: "94%",
              backgroundColor: "rgb(221, 211, 211)",
              margin: "0 auto",
            }}
          ></div>
          <Button
            className={classes.button2}
            style={bgMau === "white" ? { color: "black" } : { color: "white" }}
          >
            <div style={{ width: "15%", height: "45px" }}>
              <div
                style={
                  bgMau === "white"
                    ? {
                        width: "37px",
                        height: "37px",
                        borderRadius: "25px",
                        marginTop: "4px",
                        border: "0.1px solid rgb(221, 211, 211)",
                        backgroundColor: "rgb(233, 222, 222)",
                        fontSize: "25px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "5.5px",
                      }
                    : {
                        width: "37px",
                        height: "37px",
                        borderRadius: "25px",
                        marginTop: "4px",
                        border: "0.1px solid #4d4d4d",
                        backgroundColor: "#4d4d4d",
                        fontSize: "25px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "5.5px",
                      }
                }
              >
                <FaGrinSquintTears />
              </div>
            </div>
            <div style={{ width: "85%", height: "45px" }}>
              <div
                style={{
                  width: "100%",
                  height: "50%",
                  textAlign: "left",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily:
                    "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                }}
              >
                Đóng góp ý kiến
              </div>
              <div
                style={{
                  width: "100%",
                  height: "50%",
                  color: "#65676b",
                  textAlign: "left",
                  fontFamily:
                    "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                }}
              >
                Góp phần cải thiện phiên bản Fooobe
              </div>
            </div>
          </Button>
          <div
            style={{
              height: "0.1px",
              width: "94%",
              backgroundColor: "rgb(221, 211, 211)",
              margin: "0 auto",
            }}
          ></div>
          <Link to="/setting" style={{ textDecoration: "none" }}>
            <Button
              className={classes.button2}
              style={
                bgMau === "white" ? { color: "black" } : { color: "white" }
              }
            >
              <div style={{ width: "15%", height: "45px" }}>
                <div
                  style={
                    bgMau === "white"
                      ? {
                          width: "37px",
                          height: "37px",
                          borderRadius: "25px",
                          marginTop: "4px",
                          border: "0.1px solid rgb(221, 211, 211)",
                          backgroundColor: "rgb(233, 222, 222)",
                          fontSize: "25px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          paddingTop: "5.5px",
                        }
                      : {
                          width: "37px",
                          height: "37px",
                          borderRadius: "25px",
                          marginTop: "4px",
                          border: "0.1px solid #4d4d4d",
                          backgroundColor: "#4d4d4d",
                          fontSize: "25px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          paddingTop: "5.5px",
                        }
                  }
                >
                  <MdSettings />
                </div>
              </div>
              <div style={{ width: "85%", height: "45px", display: "flex" }}>
                <div
                  style={{
                    width: "90%",
                    height: "100%",
                    textAlign: "left",
                    lineHeight: "45px",
                    fontSize: "15px",
                    fontWeight: "600",
                    fontFamily:
                      "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                  }}
                >
                  Cài đặt {"&"} quyền riêng tư
                </div>
                <div
                  style={{
                    width: "10%",
                    height: "100%",
                    textAlign: "left",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                  }}
                >
                  {bgMau === "white" ? (
                    <GrNext
                      style={{
                        color: "black",
                        width: "25px",
                        height: "80%",
                        fontSize: "20px",
                      }}
                    />
                  ) : (
                    <FcNext
                      style={{
                        color: "black",
                        width: "25px",
                        height: "80%",
                        fontSize: "20px",
                      }}
                    />
                  )}
                </div>
              </div>
            </Button>
          </Link>
          <Button
            className={classes.button2}
            style={bgMau === "white" ? { color: "black" } : { color: "white" }}
          >
            <div style={{ width: "15%", height: "45px" }}>
              <div
                style={
                  bgMau === "white"
                    ? {
                        width: "37px",
                        height: "37px",
                        borderRadius: "25px",
                        marginTop: "4px",
                        border: "0.1px solid rgb(221, 211, 211)",
                        backgroundColor: "rgb(233, 222, 222)",
                        fontSize: "25px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "5.5px",
                      }
                    : {
                        width: "37px",
                        height: "37px",
                        borderRadius: "25px",
                        marginTop: "4px",
                        border: "0.1px solid #4d4d4d",
                        backgroundColor: "#4d4d4d",
                        fontSize: "25px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "5.5px",
                      }
                }
              >
                <FaQuestionCircle />
              </div>
            </div>
            <div style={{ width: "85%", height: "45px", display: "flex" }}>
              <div
                style={{
                  width: "90%",
                  height: "100%",
                  textAlign: "left",
                  lineHeight: "45px",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily:
                    "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                }}
              >
                Trợ giúp {"&"} hỗ trợ
              </div>
              <div
                style={{
                  width: "10%",
                  height: "100%",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {bgMau === "white" ? (
                  <GrNext
                    style={{
                      color: "black",
                      width: "25px",
                      height: "80%",
                      fontSize: "20px",
                    }}
                  />
                ) : (
                  <FcNext
                    style={{
                      color: "black",
                      width: "25px",
                      height: "80%",
                      fontSize: "20px",
                    }}
                  />
                )}
              </div>
            </div>
          </Button>
          <Button
            className={classes.button2}
            onClick={openAccessibility}
            style={bgMau === "white" ? { color: "black" } : { color: "white" }}
          >
            <div style={{ width: "15%", height: "45px" }}>
              <div
                style={
                  bgMau === "white"
                    ? {
                        width: "37px",
                        height: "37px",
                        borderRadius: "25px",
                        marginTop: "4px",
                        border: "0.1px solid rgb(221, 211, 211)",
                        backgroundColor: "rgb(233, 222, 222)",
                        fontSize: "25px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "5.5px",
                      }
                    : {
                        width: "37px",
                        height: "37px",
                        borderRadius: "25px",
                        marginTop: "4px",
                        border: "0.1px solid #4d4d4d",
                        backgroundColor: "#4d4d4d",
                        fontSize: "25px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingTop: "5.5px",
                      }
                }
              >
                <GiMoon />
              </div>
            </div>
            <div style={{ width: "85%", height: "45px", display: "flex" }}>
              <div
                style={{
                  width: "90%",
                  height: "100%",
                  textAlign: "left",
                  lineHeight: "45px",
                  fontSize: "15px",
                  fontWeight: "600",
                  fontFamily:
                    "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                }}
              >
                Màn hình {"&"} trợ năng
              </div>
              <div
                style={{
                  width: "10%",
                  height: "100%",
                  textAlign: "left",
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {bgMau === "white" ? (
                  <GrNext
                    style={{
                      color: "black",
                      width: "25px",
                      height: "80%",
                      fontSize: "20px",
                    }}
                  />
                ) : (
                  <FcNext
                    style={{
                      color: "black",
                      width: "25px",
                      height: "80%",
                      fontSize: "20px",
                    }}
                  />
                )}
              </div>
            </div>
          </Button>
          <Link to="/logout" style={{ textDecoration: "none" }}>
            <Button
              className={classes.button2}
              style={
                bgMau === "white" ? { color: "black" } : { color: "white" }
              }
            >
              <div style={{ width: "15%", height: "45px" }}>
                <div
                  style={
                    bgMau === "white"
                      ? {
                          width: "37px",
                          height: "37px",
                          borderRadius: "25px",
                          marginTop: "4px",
                          border: "0.1px solid rgb(221, 211, 211)",
                          backgroundColor: "rgb(233, 222, 222)",
                          fontSize: "25px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          paddingTop: "5.5px",
                        }
                      : {
                          width: "37px",
                          height: "37px",
                          borderRadius: "25px",
                          marginTop: "4px",
                          border: "0.1px solid #4d4d4d",
                          backgroundColor: "#4d4d4d",
                          fontSize: "25px",
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          paddingTop: "5.5px",
                        }
                  }
                >
                  <GoSignOut />
                </div>
              </div>
              <div style={{ width: "85%", height: "45px", display: "flex" }}>
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    textAlign: "left",
                    lineHeight: "45px",
                    fontSize: "15px",
                    fontWeight: "600",
                    fontFamily:
                      "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                  }}
                >
                  Đăng xuất
                </div>
              </div>
            </Button>
          </Link>
        </div>
      )}
      {openTabSetting && (
        <div>
          {openAccessibilitys && (
            <div>
              <div
                style={{
                  width: "94%",
                  height: "70px",
                  margin: "0 auto",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    width: "37px",
                    borderRadius: "25px",
                    fontSize: "25px",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: "10px",
                    cursor: "pointer",
                  }}
                >
                  <FiArrowLeft style={bgMau === "white" ? {color:"black"}:{color:"white"}} onClick={previewTab} />
                </div>
                <div
                  style={{
                    width: "94%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    fontSize: "20px",
                    fontWeight: "600",
                  }}
                >
                  Màn hình {"&"} trợ năng
                </div>
              </div>
              <div>
                <div
                  style={{ width: "94%", margin: "0 auto", display: "flex" }}
                >
                  <div style={{ width: "15%" }}>
                    <div
                      style={
                        bgMau === "white"
                          ? {
                              width: "37px",
                              height: "37px",
                              borderRadius: "25px",
                              marginTop: "4px",
                              border: "0.1px solid rgb(221, 211, 211)",
                              backgroundColor: "rgb(233, 222, 222)",
                              fontSize: "25px",
                              display: "flex",
                              justifyContent: "space-around",
                              paddingTop: "5.5px",
                            }
                          : {
                              width: "37px",
                              height: "37px",
                              borderRadius: "25px",
                              marginTop: "4px",
                              border: "0.1px solid #4d4d4d",
                              backgroundColor: "#4d4d4d",
                              fontSize: "25px",
                              display: "flex",
                              justifyContent: "space-around",
                              paddingTop: "5.5px",
                            }
                      }
                    >
                      <FiSun />
                    </div>
                  </div>
                  <div style={{ width: "55%" }}>
                    <div
                      style={{
                        width: "100%",
                        height: "30%",
                        textAlign: "left",
                        fontSize: "15px",
                        fontWeight: "600",
                        fontFamily:
                          "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                      }}
                    >
                      Chế độ{bgMau === "white" ? " tối" : " sáng"}
                    </div>
                    <div
                      style={{
                        width: "100%",
                        height: "70%",
                        color: "#65676b",
                        textAlign: "left",
                        fontFamily:
                          "Segoe UI,Frutiger,Frutiger Linotype,Dejavu Sans,Helvetica Neue,Arial,sans-serif",
                        fontWeight: "400",
                      }}
                    >
                      Thay đổi chế độ phù hợp có thể giúp bạn cảm thấy bớt mỏi
                      mắt hơn khi dùng Fooobe -_-
                    </div>
                  </div>
                  <div
                    style={{
                      width: "20%",
                      height: "50%",
                      float: "right",
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                    <label className="switch-menu-tab-big">
                      <input
                        className="input-menu-tab-big"
                        type="checkbox"
                        checked={openMode}
                        onClick={onChangeMode}
                      />
                      <span className="slider-menu-tab-big round-menu-tab-big"></span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default MenuPCTabBig;
