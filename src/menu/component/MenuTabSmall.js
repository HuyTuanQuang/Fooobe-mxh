import React, { useEffect, useState } from "react";
import PeopleIcon from "@material-ui/icons/People";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ShopIcon from "@material-ui/icons/Shop";
import HomeIcon from "@material-ui/icons/Home";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Link } from "react-router-dom";
import { FaFacebookMessenger as MessengerIcon } from "react-icons/fa";
import { ImSearch } from "react-icons/im";
import Headroom from "react-headroom";
import { useCookies } from "react-cookie";
import logo from "../../fooobe.PNG";

function MenuTabSmall({
  bgMau,
  setBgMau,
  keyAPI,
  dataAcc,
  value,
  setValue,
  handScroll,
}) {
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim"]);
  const onClickChange = (event, values) => {
    setValue(values);
    if (values === 0) {
      document.title = "Fooobe";
    } else if (values === 1) {
      document.title = "Bạn bè | Fooobe";
    } else if (values === 2) {
      document.title = "Watch | Fooobe";
    } else if (values === 3) {
      document.title = "Play | Fooobe";
    } else if (values === 4) {
      document.title = "Thông báo | Fooobe";
    } else if (values === 5) {
      document.title = "Fooobe";
    } else if (values === 6) {
      document.title = "Search | Fooobe";
    } else if (values === 7) {
      document.title = "Messenger | Fooobe";
    }
  };
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [count, setCount] = useState(0);
  const [messNoti, setMessNoti] = useState(11);
  const [homeNoti, setHomeNoti] = useState(11);
  const [friendNoti, setFriendNoti] = useState(11);
  const [Notification, setNotification] = useState(11);

  // Scroolll

  // useEffect(() => {
  //   window.onscroll = function (ev) {
  //     const currentScrollTop2 =
  //       document.documentElement.scrollTop || document.body.scrollTop;
  //     if (currentScrollTop2 > 80) {
  //       if (currentScrollTop2 > lastScrollTop) {
  //         document.getElementById("scroll-top").style.marginTop = "-40px";
  //         setLastScrollTop(currentScrollTop2 - 10);
  //       } else {
  //         document.getElementById("scroll-top").style.marginTop = "0px";
  //         setLastScrollTop(currentScrollTop2);
  //       }
  //     } else {
  //       document.getElementById("scroll-top").style.marginTop = "0px";
  //     }
  //   };
  // }, [handScroll]);
  const onScrollBottom = () => {
    document.getElementById("scroll-top").style.marginTop = "-40px";
  };
  const onScrollTop = () => {
    document.getElementById("scroll-top").style.marginTop = "0px";
  };

  return (
    <div>
      {cookies.fo_uim != null ? (
        <div
          id="scroll-top"
          className="menusmall"
          style={
            bgMau === "white"
              ? {
                  backgroundColor: "white",
                  boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
                  webkitTransition: "all .5s ease-in-out",
                  mozTransition: "all .5s ease-in-out",
                  oTransition: "all .5s ease-in-out",
                  transition: "all .5s ease-in-out",
                }
              : {
                  backgroundColor: "#242526",
                  boxShadow: "0px 1px 1px rgba(116, 116, 116, 0.7)",
                  webkitTransition: "all .5s ease-in-out",
                  mozTransition: "all .5s ease-in-out",
                  oTransition: "all .5s ease-in-out",
                  transition: "all .5s ease-in-out",
                }
          }
        >
          {/* <Headroom
            onPin={onScrollTop}
            onUnpin={onScrollBottom}
            style={{
              webkitTransition: "all .8s ease-in-out",
              mozTransition: "all .8s ease-in-out",
              oTransition: "all .8s ease-in-out",
              transition: "all .8s ease-in-out",
            }}
          > */}
            <div
              className="menusmall-top"
              style={
                value === 0 || value === 6 || value === 7
                  ? { display: "block" }
                  : { display: "none" }
              }
            >
              {value === 6 && (
                <div style={{ width: "100%", height: "100%" }}></div>
              )}
              {value === 7 && (
                <div style={{ width: "100%", height: "100%" }}></div>
              )}
              {value === 0 && (
                <div style={{ width: "100%", height: "100%" }}>
                  <div
                    className="menusmall-top-left"
                    style={
                      bgMau === "white"
                        ? { color: "#9ef1f2" }
                        : { color: "white" }
                    }
                  >
                    Fooobe
                  </div>
                  <div className="menusmall-top-right">
                    <Link
                      to="/search"
                      className="menusmall-top-icon"
                      onClick={(event) => {
                        onClickChange(event, 6);
                      }}
                    >
                      <ImSearch
                        style={
                          value === 6
                            ? { color: "#9ef1f2" }
                            : { color: "white" }
                        }
                      />
                    </Link>
                    <Link
                      to="/messenger"
                      className="menusmall-top-icon"
                      onClick={(event) => {
                        onClickChange(event, 7);
                      }}
                    >
                      <MessengerIcon
                        style={
                          value === 7
                            ? { color: "#9ef1f2" }
                            : { color: "white" }
                        }
                      />
                      {messNoti > 0 && (
                        <div className="menusmall-top-noti">
                          {messNoti < 10 ? messNoti : "9+"}
                        </div>
                      )}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          {/* </Headroom> */}
          {value !== 6 && (
            <div className="menusmall-bottom">
              <div
                className="menusmall-tabs"
                onClick={(event) => {
                  onClickChange(event, 0);
                }}
              >
                <Link to="/newstory" className="menusmall-tab">
                  <HomeIcon
                    style={
                      value === 0
                        ? { color: "#9ef1f2" }
                        : { color: "rgb(129, 122, 122)" }
                    }
                  />
                  {homeNoti > 0 && (
                    <div className="menusmall-tab-icon">
                      {homeNoti < 10 ? homeNoti : "9+"}
                    </div>
                  )}
                </Link>
                <div
                  className="menusmall-hr"
                  style={
                    bgMau === "white"
                      ? value === 0
                        ? { backgroundColor: "#9ef1f2" }
                        : { backgroundColor: "white" }
                      : value === 0
                      ? { backgroundColor: "#9ef1f2" }
                      : { backgroundColor: "#242526" }
                  }
                ></div>
              </div>

              <div
                className="menusmall-tabs"
                onClick={(event) => {
                  onClickChange(event, 1);
                }}
              >
                <Link to="/friends" className="menusmall-tab">
                  <PeopleIcon
                    style={
                      value === 1
                        ? { color: "#9ef1f2" }
                        : { color: "rgb(129, 122, 122)" }
                    }
                  />
                  {friendNoti > 0 && (
                    <div className="menusmall-tab-icon">
                      {friendNoti < 10 ? friendNoti : "9+"}
                    </div>
                  )}
                </Link>
                <div
                  className="menusmall-hr"
                  style={
                    bgMau === "white"
                      ? value === 1
                        ? { backgroundColor: "#9ef1f2" }
                        : { backgroundColor: "white" }
                      : value === 1
                      ? { backgroundColor: "#9ef1f2" }
                      : { backgroundColor: "#242526" }
                  }
                ></div>
              </div>
              <div
                className="menusmall-tabs"
                onClick={(event) => {
                  onClickChange(event, 2);
                }}
              >
                <Link to="/watch" className="menusmall-tab">
                  <YouTubeIcon
                    style={
                      value === 2
                        ? { color: "#9ef1f2" }
                        : { color: "rgb(129, 122, 122)" }
                    }
                  />
                </Link>
                <div
                  className="menusmall-hr"
                  style={
                    bgMau === "white"
                      ? value === 2
                        ? { backgroundColor: "#9ef1f2" }
                        : { backgroundColor: "white" }
                      : value === 2
                      ? { backgroundColor: "#9ef1f2" }
                      : { backgroundColor: "#242526" }
                  }
                ></div>
              </div>
              <div
                className="menusmall-tabs"
                onClick={(event) => {
                  onClickChange(event, 3);
                }}
              >
                <Link to="/play" className="menusmall-tab">
                  <ShopIcon
                    style={
                      value === 3
                        ? { color: "#9ef1f2" }
                        : { color: "rgb(129, 122, 122)" }
                    }
                  />
                </Link>
                <div
                  className="menusmall-hr"
                  style={
                    bgMau === "white"
                      ? value === 3
                        ? { backgroundColor: "#9ef1f2" }
                        : { backgroundColor: "white" }
                      : value === 3
                      ? { backgroundColor: "#9ef1f2" }
                      : { backgroundColor: "#242526" }
                  }
                ></div>
              </div>
              <div
                className="menusmall-tabs"
                onClick={(event) => {
                  onClickChange(event, 4);
                }}
              >
                <Link to="/notifications" className="menusmall-tab">
                  <NotificationsIcon
                    style={
                      value === 4
                        ? { color: "#9ef1f2" }
                        : { color: "rgb(129, 122, 122)" }
                    }
                  />
                  {Notification > 0 && (
                    <div className="menusmall-tab-icon">
                      {Notification < 10 ? Notification : "9+"}
                    </div>
                  )}
                </Link>
                <div
                  className="menusmall-hr"
                  style={
                    bgMau === "white"
                      ? value === 4
                        ? { backgroundColor: "#9ef1f2" }
                        : { backgroundColor: "white" }
                      : value === 4
                      ? { backgroundColor: "#9ef1f2" }
                      : { backgroundColor: "#242526" }
                  }
                ></div>
              </div>
              <div
                className="menusmall-tabs"
                onClick={(event) => {
                  onClickChange(event, 5);
                }}
              >
                <Link to="/tab-menu" className="menusmall-tab">
                  <div
                    className="menusmall-avatar"
                    style={
                      value === 5
                        ? { border: "2px solid #9ef1f2" }
                        : { border: "2px solid rgb(129, 122, 122)" }
                    }
                  >
                    <img
                      style={{
                        width: "18.5px",
                        height: "18.5px",
                        borderRadius: "100%",
                        marginTop: "-10.8px",
                      }}
                      src={`/foanime/${dataAcc.avatar}`}
                    />
                    <div
                      className="menusmall-icons"
                      style={
                        value === 5
                          ? {
                              border: "1px solid #9ef1f2",
                              backgroundColor: "white",
                            }
                          : {
                              border: "1px solid rgb(255, 255, 255)",
                              backgroundColor: "rgb(129, 122, 122)",
                            }
                      }
                    >
                      <MoreHorizIcon
                        style={
                          value === 5
                            ? {
                                fontSize: "10px",
                                marginTop: "-18px",
                                marginLeft: "-0.1px",
                                color: "#9ef1f2",
                              }
                            : {
                                fontSize: "10px",
                                marginTop: "-18px",
                                marginLeft: "-0.1px",
                                color: "white",
                              }
                        }
                      />
                    </div>
                  </div>
                </Link>
                <div
                  className="menusmall-hr"
                  style={
                    bgMau === "white"
                      ? value === 5
                        ? { backgroundColor: "#9ef1f2" }
                        : { backgroundColor: "white" }
                      : value === 5
                      ? { backgroundColor: "#9ef1f2" }
                      : { backgroundColor: "#242526" }
                  }
                ></div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          className="menutab"
          style={{ backgroundColor: "white", display: "flex" }}
        >
          <div className="menuLogo">
            <a href="/login">
              <img
                src={logo}
                style={{
                  height: "60px",
                  width: "60px",
                  marginTop: "5px",
                  marginLeft: "30px",
                }}
              />
            </a>
          </div>
          <div
            style={{
              width: "80%",
              height: "100%",
              lineHeight: "70px",
              fontSize: "20px",
            }}
          >
            Chào mừng bạn đến với fooobe
          </div>
          <div
            style={{
              width: "20%",
              height: "100%",
              lineHeight: "70px",
              fontSize: "16px",
              color: "black",
            }}
          >
            <a style={{ textDecoration: "none", color: "blue" }} href="/login">
              Điều khoản sử dụng
            </a>{" "}
            |{" "}
            <a href="/login" style={{ textDecoration: "none", color: "blue" }}>
              Hỏi đáp
            </a>{" "}
            |{" "}
            <a href="/login" style={{ textDecoration: "none", color: "blue" }}>
              Liên hệ
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default MenuTabSmall;
