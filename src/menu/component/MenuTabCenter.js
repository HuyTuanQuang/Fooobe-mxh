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
import MenuIcon from '@material-ui/icons/Menu';
import {CgSearch} from "react-icons/cg";
import { useCookies } from "react-cookie";


function MenuTabCenter({ bgMau, setBgMau, keyAPI, dataAcc, value, setValue }) {
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim"]);
  
  const onClickChange = (event, values) => {
    setValue(values);
    if(values === 0){
      document.title = 'Fooobe';
    }else if (values === 1) {
      document.title = 'Bạn bè | Fooobe';
    } else if (values === 2) {
      document.title = 'Watch | Fooobe';
    } else if (values === 3) {
      document.title = 'Play | Fooobe';
    } else if (values === 4) {
      document.title = 'Thông báo | Fooobe';
    } else if (values === 5) {
      document.title = 'Fooobe';
    } else if (values === 6) {
      document.title = 'Search | Fooobe';
    } else if (values === 7) {
      document.title = 'Messenger | Fooobe';
    } 
  };

  //
  const useStyles = makeStyles((theme) => ({
    tab: {
      minWidth: "100%",
      height: "70px",
      // "&:hover": {
      //   backgroundColor: "#7d7f7f",
      //   borderRadius: "10px",
      //   height: "60px",
      //   marginTop: "5px",
      // },
    },
  }));
  //
  const classes = useStyles();
  const handleClick = () => {
    console.info("Fooobe.com");
  };

  return (
    <div>
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
          <div className="menuSearch">
            <div class="search-box">
              <button class="btn-search" onClick={handleClick}>
                <CgSearch style={{marginTop:"-4px"}} />
              </button>
              <input
                type="text"
                class="input-search"
                placeholder=" Search..."
              />
            </div>
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
                        width: "20%",
                        color: "#31ac91",
                      }
                    : {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "20%",
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
                        width: "20%",
                        color: "#31ac91",
                      }
                    : {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "20%",
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
                        width: "20%",
                        color: "#31ac91",
                      }
                    : {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "20%",
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
                to="/play"
                style={
                  bgMau === "white"
                    ? {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "20%",
                        color: "#31ac91",
                      }
                    : {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "20%",
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
              <Link
                to="/tab-menu"
                style={
                  bgMau === "white"
                    ? {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "20%",
                        color: "#31ac91",
                      }
                    : {
                        textDecoration: "none",
                        fontWeight: "bold",
                        textShadow: "1px 1px black",
                        width: "20%",
                        color: "#b6ecf1",
                      }
                }
              >
                <Tab
                  className={classes.tab}
                  icon={<MenuIcon fontSize="large" />}
                  onChange={(event) => {
                    onClickChange(event, 5);
                  }}
                />
              </Link>
            </Tabs>
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

export default MenuTabCenter;
