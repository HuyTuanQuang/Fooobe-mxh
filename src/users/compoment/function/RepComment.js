import React, { useState } from "react";
import Moment from "react-moment";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect, Link, useLocation, useHistory } from "react-router-dom";
import LikeIcon from "../../../img/like.png";
import HeartIcon from "../../../img/tym.png";
import HahaIcon from "../../../img/haha.png";
import AngryIcon from "../../../img/angry.png";
import WowIcon from "../../../img/wow.png";
import SadIcon from "../../../img/sad.png";
import SelectMenu from "@material-ui/icons/MoreHoriz";
import IconButton from "@material-ui/core/IconButton";
import SettingComment from "./supports/SettingComment";
import { Markup } from "interweave";
import { useCookies } from "react-cookie";
import Axios from "axios";
import TickGreen from "../../../img/tickgreen.ico";

var moment = require("moment-timezone");

function RepComment({
  value,
  index,
  setHideComment,
  bgMau,
  dataAcc,
  keyAPI,
  valueStory,
}) {
  let history = useHistory();
  const [hideSetting, setHideSetting] = useState(false);
  const [displaySett, setDisplaySett] = useState(false);
  const [idzSett, setIdzSett] = useState(null);
  const [displayRepMobie, setDisplayRepMobile] = useState(false);
  const [reactions, setReactions] = useState(value.TYPEREACT);
  const [showLess, setShowLess] = React.useState(true);
  const [countReactions, setCountReactions] = useState(
    Number(value.COUNTREACT)
  );
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);

  const useStyles = makeStyles((theme) => ({
    custoTootil: {
      maxWidth: 500,
      fontWeight: "bold",
      float: "left",
    },
    arrow: {
      color: "rgba(85, 84, 84, 0.705)",
    },
    function: {
      width: "100%",
      height: "40px",
      textTransform: "none",
      fontFamily: "Tahoma",
      textAlign: "left",
      borderRadius: "10px",
    },
  }));
  const classes = useStyles();
  const hideRepLyComment = () => {
    setHideComment(true);
  };
  const onOpenSetting = () => {
    setHideSetting(true);
  };
  const onOffSetting = () => {
    setHideSetting(false);
  };
  const openSettingRepComment = () => {
    if (displaySett === false) {
      setDisplaySett(true);
      setIdzSett("OpenSettingComment" + value.STT);
    } else {
      setIdzSett(null);

      setDisplaySett(false);
    }
  };
  const settingMobilex = () => {
    const ida = "settingRepMobile" + value.STT;

    if (displayRepMobie === false) {
      document.getElementById(ida).style.display = "block";
      setDisplayRepMobile(true);
    } else {
      document.getElementById(ida).style.display = "none";
      setDisplayRepMobile(false);
    }
  };
  //

  const reactUpdate = (event, values, extent) => {
    const timez = new Date();

    var times = moment
      .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
      .tz("Asia/Saigon")
      .format("YYYY/MM/DD HH:mm:ss");
    Axios.post(keyAPI.apiInsertReactionsRepComment, {
      id: dataAcc.id,
      comment_stt: value.STT,
      time_react: times,
      reactions: values,
      token: cookies.fo_token,
      events: extent,
    })
      .then(({ data }) => {
        if (data.resul === 1) {
          setReactions(values);
          setCountReactions(countReactions + 1);
        } else if (data.resul === 2) {
          setReactions(values);
        } else if (data.resul === 3) {
          setReactions(null);
          setCountReactions(countReactions - 1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Close các menu
  // document.onclick = function (event) {
  //   var hasParent = false;
  //   const idz = "settingRepComment" + value.STT;
   
  //     // for (
  //     //   var node = event.target;
  //     //   node != document.body;
  //     //   node = node.parentNode
  //     // ) {
  //     //     if (node.id == idz) {
  //       if(event.composedPath().includes(idz) === false){
  //           hasParent = true;
  //         }
        
  //     // }
    
  //   if (hasParent) {
  //   } else {
  //     setDisplaySett(false);
  //   }
  // };
  //Nhấp link phân biệt có phải link fooobe
  const hastagx = document.getElementsByClassName("hastage" + value.STT);
  for (var i = 0; i < hastagx.length; i++) {
    const textHTML = document.getElementsByClassName("hastage" + value.STT)[i]
      .innerHTML;
    const textPure = document.getElementsByClassName("hastage" + value.STT)[i]
      .innerText;
    document.getElementsByClassName("hastage" + value.STT)[
      i
    ].innerHTML = `<a href="/hastag/${textPure.slice(1)}/" class="${
      "foahree" + value.STT
    }" style="text-decoration: none;">${textHTML}</a>`;
  }
  const articlesx = document.getElementsByClassName("foahree" + value.STT);
  for (var i = 0; i < articlesx.length; i++) {
    const lea = document.getElementsByClassName("foahree" + value.STT)[i].href;
    articlesx[i].addEventListener("click", function (event) {
      event.preventDefault();
      if (getDomainx(lea) == "fooobe.com") {
        let newUrl = new URL(lea);
        if (newUrl.pathname.length > 3) {
          history.push(newUrl.pathname);
        } else {
          history.push("/");
        }
      } else {
        window.open(lea, "_blank");
      }
    });
  }
  function getDomainx(url) {
    url = url.replace(/(https?:\/\/)?(www.)?/i, "");

    if (url.indexOf("/") !== -1) {
      return url.split("/")[0];
    }

    return url;
  }

  const btnAdd = document.querySelector("#task24" + value.STT);

  if (btnAdd !== null) {
    btnAdd.addEventListener("click", function () {
      setShowLess(true);
    });
  }
  function createMarkupCommentTextFO() {
    if (value.FAKECOMMENT !== "") {
      var newText = value.FAKECOMMENT.slice(90, 100);
      if (value.FAKECOMMENT.slice(0, 90).indexOf(newText) === -1) {
        var hashText = value.CONTENT.indexOf(newText);
        if (hashText !== -1) {
          return value.CONTENT.slice(0, hashText + 9)
            .concat(
              `<a style="color: #aeafaf; cursor: pointer; text-decoration: none;" id="${
                "task24" + value.STT
              }">... Xem thêm</a>`
            )
            .replaceAll(
              `class="lxvs42t"`,
              `class="lxvs42t foahree${value.STT}" `
            )
            .replaceAll(
              `class="hastag_hashtag__3d_91"`,
              `class="hastag_hashtag__3d_91 hastage${value.STT}" `
            );
        } else {
          const sellText = value.CONTENT.slice(1210, 1320).indexOf(">");
          if (sellText !== -1) {
            return value.CONTENT.slice(
              0,
              value.CONTENT.slice(0, 1320).lastIndexOf(">") + 1
            )
              .concat(
                `<a style="color: #aeafaf; cursor: pointer; text-decoration: none;" id="${
                  "task24" + value.STT
                }">... Xem thêm</a>`
              )
              .replaceAll(
                `class="lxvs42t"`,
                `class="lxvs42t foahree${value.STT}" `
              )
              .replaceAll(
                `class="hastag_hashtag__3d_91"`,
                `class="hastag_hashtag__3d_91 hastage${value.STT}" `
              );
          } else {
            const endText = value.CONTENT.slice(1210, 1320).indexOf("<");
            if (endText !== -1) {
              return value.CONTENT.slice(
                0,
                value.CONTENT.slice(0, 1320).lastIndexOf("<")
              )
                .concat(
                  `<a style="color: #aeafaf; cursor: pointer; text-decoration: none;" id="${
                    "task24" + value.STT
                  }">... Xem thêm</a>`
                )
                .replaceAll(
                  `class="lxvs42t"`,
                  `class="lxvs42t foahree${value.STT}" `
                )
                .replaceAll(
                  `class="hastag_hashtag__3d_91"`,
                  `class="hastag_hashtag__3d_91 hastage${value.STT}" `
                );
            } else {
              return value.CONTENT.replaceAll(
                `class="lxvs42t"`,
                `class="lxvs42t foahree${value.STT}" `
              ).replaceAll(
                `class="hastag_hashtag__3d_91"`,
                `class="hastag_hashtag__3d_91 hastage${value.STT}" `
              );
            }
          }
        }
      }
    }
  }

  return (
    <div key={index}>
      <div
        className="rep-comment-style-container"
        onMouseOver={onOpenSetting}
        onMouseOut={onOffSetting}
      >
        <div className="rep-comment-style-container-left">
          <img src={process.env.PUBLIC_URL + `../foanime/${value.AVATAR}`} />
        </div>
        <div
          className={
            bgMau === "white"
              ? "rep-comment-style-container-right"
              : "rep-comment-style-container-right2"
          }
        >
          <div className="rep-comment-style-container-right-title">
            <div className="rep-comment-style-container-right-title-name">
              <Link
                className="rep-comment-style-container-right-title-name-a"
                to="/"
                style={
                  bgMau === "white" ? { color: "black" } : { color: "white" }
                }
              >
                {value.FRISTNAME + " " + value.LASTNAME}
              </Link>
            </div>
            <div className="rep-comment-style-container-right-title-pro">
              <span
                className="homestory-title-name-tick-span"
                style={{ position: "relative" }}
              >
                {value.ACCESSCONFIG === "yes" ? (
                  <img
                    className="images-hover-opacity"
                    src={TickGreen}
                    style={{
                      width: "13px",
                      height: "13px",
                      marginRight: "5px",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      display: "none",
                    }}
                  ></div>
                )}
                <div className="homestory-title-name-tick-real-popup">
                  Tài khoản này đã được xác thực bởi Fooobe
                </div>
              </span>
              {valueStory.id === value.ID && (
                <div style={{ display: "flex", alignItems: "center" }}>
                  {" "}
                  <div className="comment-style-container-right-cmt-title-pro-1 comment-style-container-right-cmt-title-pro-pro">
                    •
                  </div>{" "}
                  <div
                    className="comment-style-container-right-cmt-title-pro-2 comment-style-container-right-cmt-title-pro-pro"
                    style={
                      bgMau === "white"
                        ? { color: "rgb(236, 6, 6)" }
                        : { color: "white" }
                    }
                  >
                    Tác giả
                  </div>
                </div>
              )}
            </div>
          </div>
          <div
            className="rep-comment-style-container-right-content"
            style={bgMau === "white" ? { color: "black" } : { color: "white" }}
          >
            {value.FAKECOMMENT === "" ? (
              <Markup
                content={value.CONTENT.replaceAll(
                  `class="lxvs42t"`,
                  `class="lxvs42t foahree${value.STT}" `
                ).replaceAll(
                  `class="hastag_hashtag__3d_91"`,
                  `class="hastag_hashtag__3d_91 hastage${value.STT}" `
                )}
              />
            ) : (
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      showLess === false
                        ? createMarkupCommentTextFO()
                        : value.CONTENT.replaceAll(
                            `class="lxvs42t"`,
                            `class="lxvs42t foahree${value.STT}" `
                          ).replaceAll(
                            `class="hastag_hashtag__3d_91"`,
                            `class="hastag_hashtag__3d_91 hastage${value.STT}" `
                          ),
                  }}
                ></span>
                {/* {showLess && <a
              style={{ color: "blue", cursor: "pointer"}}
              onClick={() => setShowLess(false) }
              id="text"
            >
              Ẩn bớt
            </a>} */}
              </span>
            )}
          </div>
          {countReactions > 0 ? (
            <div className="comment-style-container-right-cmt-reacts">
              {countReactions}{" "}
              <img
                style={{
                  width: "15px",
                  height: "15px",
                  marginRight: "3px",
                  marginBottom: "3px",
                }}
                src={
                  reactions === "like"
                    ? LikeIcon
                    : reactions === "wow"
                    ? WowIcon
                    : reactions === "haha"
                    ? HahaIcon
                    : reactions === "love"
                    ? HeartIcon
                    : reactions === "sad"
                    ? SadIcon
                    : reactions === "angry"
                    ? AngryIcon
                    : LikeIcon
                }
              />
            </div>
          ) : (
            <div style={{ display: "none" }}></div>
          )}
        </div>

        <div
          className="setting-menu-reight-cmt"
          id={"settingRepComment" + value.STT}
        >
          <IconButton
            style={{ width: "17px", height: "17px" }}
            onClick={openSettingRepComment}
          >
            <SelectMenu
              style={
                hideSetting === true
                  ? bgMau === "white"
                    ? { color: "#424242", display: "block" }
                    : { color: "#d3d4d4", display: "block" }
                  : bgMau === "white"
                  ? { color: "#424242", display: "none" }
                  : { color: "#d3d4d4", display: "none" }
              }
            />
          </IconButton>
          <div
            id={"OpenSettingRepComment" + value.STT}
            style={
              displaySett === true
                ? bgMau === "white"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      display: "block",
                    }
                  : {
                      backgroundColor: "#424242",
                      color: "white",
                      display: "block",
                    }
                : bgMau === "white"
                ? { backgroundColor: "white", color: "black", display: "none" }
                : {
                    backgroundColor: "#424242",
                    color: "white",
                    display: "none",
                  }
            }
            className="setting-menu-reight-cmt-setting-menu"
          >
            {/* <SettingComment bgMau={bgMau} classes={classes} value={value} /> */}
          </div>
        </div>
      </div>
      {value.STICKER !== "" && (
        <div>
          {" "}
          <img
            style={{
              height: "90%",
              width: "90%",
              marginTop: "10px",
              marginLeft: "10%",
            }}
            src={process.env.PUBLIC_URL + `../sticker/${value.STICKER}`}
          />{" "}
        </div>
      )}
      {value.IMAGEVIDEO !== "" && (
        <div>
          <img
            style={{
              height: "90%",
              width: "90%",
              marginTop: "10px",
              marginLeft: "10%",
            }}
            src={process.env.PUBLIC_URL + `../files/${value.IMAGEVIDEO}`}
          />
        </div>
      )}
      <div className="rep-comment-style-fuction">
        <span class="fo-react-box">
          {reactions === "angry" ? (
            <a
              className="rep-comment-style-fuction-a nbsp"
              style={
                bgMau === "white" ? { color: "#ff7451" } : { color: "#ff7451" }
              }
              onClick={(event) => reactUpdate(event, "angry", "del")}
            >
              Phẫn nộ
            </a>
          ) : reactions === "like" ? (
            <a
              className="rep-comment-style-fuction-a nbsp"
              style={
                bgMau === "white" ? { color: "#04dde5" } : { color: "#04dde5" }
              }
              onClick={(event) => reactUpdate(event, "like", "del")}
            >
              Thích
            </a>
          ) : reactions === "haha" ? (
            <a
              className="rep-comment-style-fuction-a nbsp"
              style={
                bgMau === "white" ? { color: "#fffc00" } : { color: "#fffc00" }
              }
              onClick={(event) => reactUpdate(event, "haha", "del")}
            >
              Haha
            </a>
          ) : reactions === "sad" ? (
            <a
              className="rep-comment-style-fuction-a nbsp"
              style={
                bgMau === "white" ? { color: "#ffb80d" } : { color: "#ffb80d" }
              }
              onClick={(event) => reactUpdate(event, "sad", "del")}
            >
              Buồn
            </a>
          ) : reactions === "love" ? (
            <a
              className="rep-comment-style-fuction-a nbsp"
              style={
                bgMau === "white" ? { color: "#fb7ca3" } : { color: "#fb7ca3" }
              }
              onClick={(event) => reactUpdate(event, "love", "del")}
            >
              Yêu thích
            </a>
          ) : reactions === "wow" ? (
            <a
              className="rep-comment-style-fuction-a nbsp"
              style={
                bgMau === "white" ? { color: "#5cd673" } : { color: "#5cd673" }
              }
              onClick={(event) => reactUpdate(event, "wow", "del")}
            >
              Wow
            </a>
          ) : (
            <a
              className="rep-comment-style-fuction-a nbsp"
              style={
                bgMau === "white" ? { color: "#717272" } : { color: "#f0f2f2" }
              }
            >
              Thích
            </a>
          )}
          <div class="fo-react-toolfo-react-box"></div>
          <button
            class="fo-reaction-like"
            onClick={(event) => reactUpdate(event, "like", "add")}
          >
            <span class="fo-legend-reaction">Thích</span>
          </button>
          <button
            class="fo-reaction-love"
            onClick={(event) => reactUpdate(event, "love", "add")}
          >
            <span class="fo-legend-reaction">Yêu thích</span>
          </button>
          <button
            class="fo-reaction-haha"
            onClick={(event) => reactUpdate(event, "haha", "add")}
          >
            <span class="fo-legend-reaction">Haha</span>
          </button>
          <button
            class="fo-reaction-wow"
            onClick={(event) => reactUpdate(event, "wow", "add")}
          >
            <span class="fo-legend-reaction">Wow</span>
          </button>
          <button
            class="fo-reaction-sad"
            onClick={(event) => reactUpdate(event, "sad", "add")}
          >
            <span class="fo-legend-reaction">Buồn</span>
          </button>
          <button
            class="fo-reaction-angry"
            onClick={(event) => reactUpdate(event, "angry", "add")}
          >
            <span class="fo-legend-reaction">Phẫn nộ</span>
          </button>
        </span>
        <span
          style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        >
          &nbsp;•&nbsp;
        </span>
        <a
          className="rep-comment-style-fuction-b"
          style={
            bgMau === "white" ? { color: "#717272" } : { color: "#f0f2f2" }
          }
          onClick={hideRepLyComment}
        >
          Trả lời
        </a>
        <span
          className="mobileMenu"
          style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        >
          &nbsp;•&nbsp;
        </span>
        <a
          className="comment-style-container-right-cmt-rep-a comment-style-container-right-cmt-rep-aa mobileMenu"
          style={
            bgMau === "white" ? { color: "#717272" } : { color: "#f0f2f2" }
          }
          onClick={settingMobilex}
        >
          Xem thêm
        </a>
        <span
          className="ipad-comment2"
          style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        >
          &nbsp;•&nbsp;
        </span>
        <a>
          <Tooltip
            disableFocusListener
            classes={{
              tooltip: classes.custoTootil,
              arrow: classes.arrow,
            }}
            title={
              <Moment
                style={
                  bgMau === "white" ? { color: "white" } : { color: "#ffffff" }
                }
                locale="vi"
                format="LT"
                subtract={{ hours: 24 }}
                fromNow
              >
                {value.TIMECMT}
              </Moment>
            }
            placement="bottom"
            arrow
          >
            <a
              style={
                bgMau === "white"
                  ? {
                      color: "#363737",
                      fontSize: "14px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }
                  : {
                      color: "#f4f5f5",
                      fontSize: "14px",
                      textDecoration: "none",
                      cursor: "pointer",
                    }
              }
              className="ipad-comment2"
            >
              <Moment locale="vi" fromNow>
                {value.TIMECMT}
              </Moment>
            </a>
          </Tooltip>
        </a>
      </div>
      <div id={"settingRepMobile" + value.STT} className="style-menu-cmt-rep-x">
        <SettingComment classes={classes} bgMau={bgMau} value={value} />
      </div>
    </div>
  );
}

export default RepComment;
