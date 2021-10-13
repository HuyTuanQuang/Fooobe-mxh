import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useCookies } from "react-cookie";
import { Redirect, Link, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./style/StyleLogin.css";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
//
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";

function Login({ keyAPI, setTOKEN, setPATH, TOKEN, setFooobe }) {
  const valueForm = {
    email: "",
    pass: "",
    showPass: "false",
  };
  let history = useHistory();
  const [values, setValues] = useState(valueForm);
  const [Accoun, setAccoun] = useState(valueForm);
  const [checkAc, setCheckAc] = useState(true);
  const [eluma, setElume] = useState(1);
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [check, setCheck] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [alert, setAlert] = React.useState(
    "Vui lòng nhập tài khoản, mật khẩu!"
  );
  const onChage = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    if (name === "email") {
      const el = /\S+@\S+\.\S+/;
      const sd = /((09|03|07|08|05|02|01)+([0-9]{8,9})\b)/g;
      if (value.length > 5) {
        if (isNaN(value) === false) {
          if (!sd.test(value)) {
            document.getElementById("tkes").style.backgroundColor = "#ffbebe";
            setAlert("Vui lòng nhập số điện thoại đúng định dạng.");
            setCheck(false);
          } else {
            document.getElementById("tkes").style.backgroundColor = "#bef5ff";
            setElume(eluma + 2);
            setCheck(true);
          }
        } else {
          if (!el.test(value)) {
            document.getElementById("tkes").style.backgroundColor = "#ffbebe";
            setAlert("Vui lòng nhập email đúng định dạng.");
            setCheck(false);
          } else {
            document.getElementById("tkes").style.backgroundColor = "#bef5ff";
            setCheck(true);
            setElume(eluma + 2);
          }
        }
      } else {
        setAlert("Vui lòng nhập tài khoản.");
        setCheck(false);
        document.getElementById("tkes").style.backgroundColor = "white";
      }
    } else if (name === "pass") {
      if (value.length === 0) {
        setAlert("Vui lòng nhập mật khẩu.");
        setCheck2(false);
      } else {
        setCheck2(true);
      }
    }
  };
  const showPassword = () => {
    setValues({
      ...values,
      showPass: "true",
    });
  };
  const HidePassword = () => {
    setValues({
      ...values,
      showPass: "false",
    });
  };
  //

  useEffect(() => {
    if (values.email.length > 5) {
      Axios.post(keyAPI.apiCheckAccount, {
        email: values.email,
      })
        .then(({ data }) => {
          if (data.resul === 1) {
            setCheckAc(false);
          } else {
            setCheckAc(true);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [eluma]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (check === false || check2 === false) {
      setOpen(true);
    } else {
      Axios.post(keyAPI.apiCheckPass, {
        email: values.email,
        pass: values.pass,
      })
        .then(({ data }) => {
          if (data.resul === 0) {
            setAlert("Mật khẩu không chính xác");
            setOpen(true);
          } else {
            setOpen2(true);
            setFooobe(false);
            let d = new Date();
            d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
            setCookie("fo_uim", data.account[0].ID, {
              path: "/",
              expires: d,
            });
            setCookie("fo_token", data.token, {
              path: "/",
              expires: d,
            });
            setTOKEN(data.token);
            setPATH(data.account[0].ID);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
      backgroundColor: "black",
    },
  }));
  const classes = useStyles();

  if (
    cookies.fo_uim !== undefined &&
    cookies.fo_uim !== "undefined" &&
    cookies.fo_uim !== null &&
    cookies.fo_uim !== ""
  ) {
    return <Redirect to="/newstory" />
  }

  return (
    <div className="container-login">
      <div
        style={{
          marginTop: "50px",
          fontWeight: "bold",
          fontSize: "20px",
          width: "100%",
          textAlign: "center",
        }}
      >
        Đăng nhập
      </div>
      <form onSubmit={onSubmit}>
        <div className="container-login-email">
          <input
            type="text"
            className="container-login-email-input"
            placeholder="Phone number OR email ?"
            name="email"
            onChange={onChage}
            id="tkes"
            autoComplete="off"
          />
          <div className="container-login-email-icon">
            <PersonIcon className="container-login-email-icon-sub" />
          </div>
        </div>

        <div className="errorControll">
          {values.email.length > 8 ? (
            <div>
              {checkAc === true ? (
                <span
                  style={{
                    marginLeft: "15%",
                    marginRight: "15%",
                    fontSize: "12px",
                    color: "red",
                  }}
                >
                  Tài khoản "{values.email}" không tồn tại !
                </span>
              ) : (
                <span
                  style={{
                    marginLeft: "15%",
                    marginRight: "15%",
                    fontSize: "12px",
                    color: "green",
                  }}
                >
                  Tài khoản "{values.email}" là tài khoản tồn tại !
                </span>
              )}{" "}
            </div>
          ) : (
            <br />
          )}
        </div>
        <br />
        <div className="container-login-pass">
          <input
            type={values.showPass === "true" ? "text" : "password"}
            placeholder="Password !"
            name="pass"
            onChange={onChage}
          />
          <div className="container-login-pass-icon">
            <LockIcon className="container-login-pass-icon-sub" />
          </div>
          <div
            className="container-login-eye-icon"
            style={
              values.pass.length > 0
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {values.showPass === "false" ? (
              <IconButton
                className="container-login-eye-icon"
                onClick={showPassword}
              >
                <VisibilityOffIcon className="container-login-eye-icon-sub" />
              </IconButton>
            ) : (
              <IconButton
                className="container-login-eye-icon"
                onClick={HidePassword}
              >
                <VisibilityIcon className="container-login-eye-icon-sub" />
              </IconButton>
            )}
          </div>
        </div>
        <div className="Noti"></div>
        <div className="button-submit">
          <div className="button-submit-singn">
            <Link to="/singn" className="button-submit-singn-link">
              Chưa có tài khoản,
              <br /> đăng ký?
            </Link>
          </div>
          <div className="button-submit-login">
            <button style={{ cursor: "pointer" }} type="submit" color="primary">
              Đăng nhập
            </button>
          </div>
        </div>
      </form>
      {/* {
        Hộp thông báo
      } */}
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thông báo !"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alert}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
      <Backdrop className={classes.backdrop} open={open2} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export default Login;
