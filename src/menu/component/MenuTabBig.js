import React, { useState } from "react";
import logo from "../../fooobe.PNG";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PeopleIcon from "@material-ui/icons/People";
import YouTubeIcon from "@material-ui/icons/YouTube";
import ShopIcon from "@material-ui/icons/Shop";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import Badge from "@material-ui/core/Badge";
import LogoMess from "../../logoMess.png";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useCookies } from "react-cookie";
import MenuPCTabBig from "./MenuPCTabBig";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "@material-ui/lab/Skeleton";
//

function MenuTabBig({
  bgMau,
  setBgMau,
  keyAPI,
  dataAcc,
  value,
  setValue,
  TOKEN,
  PATH,
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

  //
  const useStyles = makeStyles((theme) => ({
    tab: {
      width: "100%",
      height: "70px",
      // "&:hover": {
      //   backgroundColor: "#7d7f7f",
      //   borderRadius: "10px",
      //   height: "60px",
      //   marginTop: "5px",
      // },
    },
    chip: {
      margin: theme.spacing(0.5),
      backgroundColor: "white",
      height: "40px",
      borderRadius: "20px",
      color: "#43e4f7",
      "&:hover": {
        backgroundColor: "#E8fffd",
      },
    },
    chip2: {
      margin: theme.spacing(0.5),
      backgroundColor: "#242526",
      height: "40px",
      borderRadius: "20px",
      color: "#43e4f7",
      "&:hover": {
        backgroundColor: "white",
      },
    },
    avata: {
      maxWidth: "30px",
      minWidth: "30px",
      maxHeight: "30px",
      minHeight: "30px",
      border: "1px solid grey",
    },
  }));
  //
  const classes = useStyles();
  const handleClick = () => {
    console.info("Fooobe.com");
  };
  //
  const [play, setPlay] = useState(false);
  const [play2, setPlay2] = useState(false);
  const [play3, setPlay3] = useState(false);
  const [openContainer, setOpenContainer] = useState(true);
  const [openTabSetting, setOpenTabSetting] = useState(false);

  const clickToSet1 = () => {
    setOpenContainer(true);
    setOpenTabSetting(false);
    setPlay(!play);
    setPlay2(false);
    setPlay3(false);
  };
  const clickToSet2 = () => {
    setOpenContainer(true);
    setOpenTabSetting(false);
    setPlay(false);
    setPlay2(!play2);
    setPlay3(false);
  };
  const clickToSet3 = () => {
    setOpenContainer(true);
    setOpenTabSetting(false);
    setPlay(false);
    setPlay2(false);
    setPlay3(!play3);
  };

  return (
    <div id="menubignavbar">
      {cookies.fo_uim != null ? (
        <div
          className="menutab"
          style={
            bgMau === "white"
              ? {
                  backgroundColor: "rgba(255, 255, 255, 0.951)",
                }
              : {
                  backgroundColor: "#242526",
                }
          }
        >
          <div className="menuLogo">
            <a href="/login">
              <LazyLoadImage
                style={{
                  height: "60px",
                  width: "60px",
                  marginTop: "5px",
                  marginLeft: "30px",
                }}
                src={logo}
                placeholder={
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    style={{
                      height: "60px",
                      width: "60px",
                      marginTop: "5px",
                      marginLeft: "30px",
                      borderRadius: "100%",
                    }}
                  />
                }
              />
            </a>
          </div>
          <div className="menuSearch">
            <input
              type="text"
              name="Seach"
              placeholder="   Search . . ."
              style={
                bgMau === "white"
                  ? { backgroundColor: "#f0f2f5" }
                  : { backgroundColor: "#3a3b3c" }
              }
            />
          </div>
          <div className="menuTabs">
            <Tabs
              value={value}
              variant="fullWidth"
              indicatorColor="secondary"
              textColor="secondary"
              aria-label="icon label tabs example"
            >
              <Link
                to="/newstory"
                style={
                  bgMau === "white"
                    ? {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "25%",
                        color: "#31ac91",
                      }
                    : {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "25%",
                        color: "#b6ecf1",
                      }
                }
              >
                <Tab
                  className={classes.tab}
                  icon={<HomeIcon fontSize="large" />}
                  onChange={(event) => {
                    onClickChange(event, 0);
                  }}
                />
              </Link>
              <Link
                to="/friends"
                style={
                  bgMau === "white"
                    ? {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "25%",
                        color: "#31ac91",
                      }
                    : {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "25%",
                        color: "#b6ecf1",
                      }
                }
              >
                <Tab
                  className={classes.tab}
                  icon={<PeopleIcon fontSize="large" />}
                  onChange={(event) => {
                    onClickChange(event, 1);
                  }}
                />
              </Link>
              <Link
                to="/watch"
                style={
                  bgMau === "white"
                    ? {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "25%",
                        color: "#31ac91",
                      }
                    : {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "25%",
                        color: "#b6ecf1",
                      }
                }
              >
                <Tab
                  className={classes.tab}
                  icon={<YouTubeIcon fontSize="large" />}
                  onChange={(event) => {
                    onClickChange(event, 2);
                  }}
                />
              </Link>
              <Link
                to="/marketplace"
                style={
                  bgMau === "white"
                    ? {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "25%",
                        color: "#31ac91",
                      }
                    : {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "25%",
                        color: "#b6ecf1",
                      }
                }
              >
                <Tab
                  className={classes.tab}
                  icon={<ShopIcon fontSize="large" />}
                  onChange={(event) => {
                    onClickChange(event, 3);
                  }}
                />
              </Link>
            </Tabs>
          </div>

          <div className="account">
            <Link
              to="/profile"
              style={{
                textDecoration: "none",
                fontWeight: "bold",
                textShadow: "1px 1px black",
              }}
            >
              <Chip
                style={{
                  marginTop: "15px",
                }}
                avatar={
                  <Avatar
                    className={classes.avata}
                    src={`/foanime/${dataAcc.avatar}`}
                  />
                }
                className={bgMau === "white" ? classes.chip : classes.chip2}
                label={dataAcc.lastname}
                onClick={handleClick}
              />
            </Link>
            <IconButton
              style={
                play3
                  ? {
                      height: "40px",
                      width: "40px",
                      borderRadius: "25px",
                      backgroundColor: "#ffff5c",
                      marginTop: "15px",
                      marginLeft: "5%",
                      fontWeight: "bold",
                    }
                  : {
                      height: "40px",
                      width: "40px",
                      borderRadius: "25px",
                      backgroundColor: "#ffffc2",
                      marginTop: "15px",
                      marginLeft: "5%",
                      fontWeight: "bold",
                    }
              }
              onClick={clickToSet3}
            >
              <Badge
                color="secondary"
                badgeContent={1}
                style={{
                  fontWeight: "bold",
                }}
              >
                <img
                  src={LogoMess}
                  style={{
                    height: "30px",
                    width: "30px",
                    margin: "2.5px",
                  }}
                />
              </Badge>
            </IconButton>
            {play3 && (
              <div
                id="popupmenu3"
                style={{
                  width: "300px",
                  minHeight: "300px",
                  backgroundColor: "white",
                  position: "absolute",
                  marginTop: "65px",
                  marginRight: "15px",
                  boxShadow: "0px 8px 8px 8px rgba(0, 0, 0, 0.07)",
                  borderRadius: "10px",
                }}
              ></div>
            )}
            <IconButton
              style={
                play2
                  ? {
                      height: "40px",
                      width: "40px",
                      borderRadius: "25px",
                      backgroundColor: "#ffff5c",
                      marginTop: "15px",
                      marginLeft: "2%",
                      fontWeight: "bold",
                    }
                  : {
                      height: "40px",
                      width: "40px",
                      borderRadius: "25px",
                      backgroundColor: "#ffffc2",
                      marginTop: "15px",
                      marginLeft: "2%",
                      fontWeight: "bold",
                    }
              }
            >
              <Badge
                color="secondary"
                badgeContent={30}
                style={{
                  fontWeight: "bold",
                  marginTop: "-5px",
                  paddingTop: "5px",
                }}
                onClick={clickToSet2}
              >
                <NotificationsIcon style={{ color: "#9ef1f2" }} />
              </Badge>
            </IconButton>
            {play2 && (
              <div
                id="popupmenu2"
                style={{
                  width: "300px",
                  minHeight: "300px",
                  backgroundColor: "white",
                  position: "absolute",
                  marginTop: "65px",
                  marginRight: "15px",
                  boxShadow: "0px 8px 8px 8px rgba(0, 0, 0, 0.07)",
                  borderRadius: "10px",
                }}
              ></div>
            )}
            <IconButton
              style={
                play
                  ? {
                      height: "40px",
                      width: "40px",
                      borderRadius: "25px",
                      backgroundColor: "#ffff5c",
                      marginTop: "15px",
                      marginLeft: "2%",
                      marginRight: "5%",
                      fontWeight: "bold",
                    }
                  : {
                      height: "40px",
                      width: "40px",
                      borderRadius: "25px",
                      backgroundColor: "#ffffc2",
                      marginTop: "15px",
                      marginLeft: "2%",
                      marginRight: "5%",
                      fontWeight: "bold",
                    }
              }
              onClick={clickToSet1}
            >
              <ArrowDropDownIcon style={{ fontSize: 40, color: "#9ef1f2" }} />
            </IconButton>
            {play && (
              <div
                id="popupmenu1"
                style={
                  bgMau === "white"
                    ? {
                        width: "400px",
                        minHeight: "300px",
                        backgroundColor: "white",
                        position: "absolute",
                        marginTop: "65px",
                        marginRight: "15px",
                        boxShadow: "0px 8px 8px 8px rgba(0, 0, 0, 0.07)",
                        borderRadius: "10px",
                      }
                    : {
                        width: "400px",
                        minHeight: "300px",
                        backgroundColor: "#2c2c2c",
                        position: "absolute",
                        marginTop: "65px",
                        marginRight: "15px",
                        boxShadow: "0px 8px 8px 8px rgba(0, 0, 0, 0.07)",
                        borderRadius: "10px",
                      }
                }
              >
                <MenuPCTabBig
                  openContainer={openContainer}
                  openTabSetting={openTabSetting}
                  setOpenContainer={setOpenContainer}
                  setOpenTabSetting={setOpenTabSetting}
                  dataAcc={dataAcc}
                  setBgMau={setBgMau}
                  bgMau={bgMau}
                  TOKEN={TOKEN}
                  PATH={PATH}
                  keyAPI={keyAPI}
                />
              </div>
            )}
          </div>
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

export default MenuTabBig;
