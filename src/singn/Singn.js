import React, { useEffect, useState } from "react";
import "./style/StyleSingn.css";
import Axios from "axios";
import { useCookies } from "react-cookie";
import { Redirect, Link, Route, Switch } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Singn({ keyAPI , PATH}) {
  const valueForm = {
    first: "",
    last: "",
    email: "",
    pass: "",
    gender: "Tùy chỉnh",
    birthday: "0",
    birthmonth: "0",
    birthyear: "0",
    showPass: "false",
  };
  const [values, setValues] = useState(valueForm);
  const [check, setCheck] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [check2, setCheck2] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [check3, setCheck3] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [check4, setCheck4] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [check5, setCheck5] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);
  const [check6, setCheck6] = React.useState(false);
  const [open6, setOpen6] = React.useState(false);
  const [check7, setCheck7] = React.useState(false);
  const [open7, setOpen7] = React.useState(false);
  const [open8, setOpen8] = React.useState(false);
  const [eluma, setElume] = useState(1);
  const [alert, setAlert] = React.useState("Vui lòng điền đủ thông tin!");
  const [alert2, setAlert2] = useState("");
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
            document.getElementById("tkes").style.border = "1px solid red";
            document.getElementById("tkes").style.boxShadow =
              "1px 1px 2px rgb(240, 61, 61), 0 0 5px rgb(201, 22, 22)";
            setAlert("Số điện thoại không đúng định dạng");
            setOpen(true);
            setCheck(false);
          } else {
            document.getElementById("tkes").style.border = "0.5px solid grey";
            document.getElementById("tkes").style.boxShadow =
              "1px 1px 2px black, 0 0 25px rgb(197, 252, 252),0 0 5px rgb(47, 223, 223)";
            setOpen(false);
            setCheck(true);
            setElume(eluma + 2);
            setAlert("Vui lòng điền đủ thông tin!");
          }
        } else {
          if (!el.test(value)) {
            document.getElementById("tkes").style.border = "1px solid red";
            setAlert("Email không đúng định dạng");
            setCheck(false);
            setOpen(true);
            document.getElementById("tkes").style.boxShadow =
              "1px 1px 2px rgb(240, 61, 61), 0 0 5px rgb(201, 22, 22)";
          } else {
            document.getElementById("tkes").style.border = "0.5px solid grey";
            document.getElementById("tkes").style.boxShadow =
              "1px 1px 2px black, 0 0 25px rgb(197, 252, 252),0 0 5px rgb(47, 223, 223)";
            setCheck(true);
            setOpen(false);
            setElume(eluma + 2);
            setAlert("Vui lòng điền đủ thông tin!");
          }
        }
      } else {
        setOpen(false);
        setCheck(false);
        setAlert("Vui lòng điền đủ thông tin!");
        document.getElementById("tkes").style.border = "0.5px solid grey";
        document.getElementById("tkes").style.boxShadow =
          "1px 1px 2px black, 0 0 25px rgb(197, 252, 252),0 0 5px rgb(47, 223, 223)";
      }
    } else if (name === "first") {
      const tx = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]+/;
      const tx2 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890 ]+/;
      if (value.length < 2) {
        setAlert("Họ tên không đúng định dạng");
        setOpen2(true);
        setCheck2(false);
        document.getElementById("tkes").style.border = "0.5px solid grey";
        document.getElementById("tkfirst").style.boxShadow =
          "1px 1px 2px black, 0 0 25px rgb(197, 252, 252),0 0 5px rgb(47, 223, 223)";
      } else if (tx2.test(value.substr(0, 2))) {
        document.getElementById("tkfirst").style.border = "1px solid red";
        document.getElementById("tkfirst").style.boxShadow =
          "1px 1px 2px rgb(240, 61, 61), 0 0 5px rgb(201, 22, 22)";
        setAlert("Không sử dụng ký tự đặc biệt");
        setOpen2(true);
        setCheck2(false);
      } else if (tx.test(value)) {
        document.getElementById("tkfirst").style.border = "1px solid red";
        document.getElementById("tkfirst").style.boxShadow =
          "1px 1px 2px rgb(240, 61, 61), 0 0 5px rgb(201, 22, 22)";
        setAlert("Không sử dụng ký tự đặc biệt");
        setOpen2(true);
        setCheck2(false);
      } else {
        setOpen2(false);
        setCheck2(true);
        setAlert("Vui lòng điền đủ thông tin!");
        document.getElementById("tkes").style.border = "0.5px solid grey";
        document.getElementById("tkes").style.boxShadow =
          "1px 1px 2px black, 0 0 25px rgb(197, 252, 252),0 0 5px rgb(47, 223, 223)";
      }
    } else if (name === "last") {
      const tx = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890]+/;
      const tx2 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?1234567890 ]+/;
      if (value.length < 2) {
        setAlert("Họ tên không đúng định dạng");
        setOpen3(true);
        setCheck3(false);
        document.getElementById("tkes").style.border = "0.5px solid grey";
        document.getElementById("tklast").style.boxShadow =
          "1px 1px 2px black, 0 0 25px rgb(197, 252, 252),0 0 5px rgb(47, 223, 223)";
      } else if (tx2.test(value.substr(0, 2))) {
        document.getElementById("tklast").style.border = "1px solid red";
        document.getElementById("tklast").style.boxShadow =
          "1px 1px 2px rgb(240, 61, 61), 0 0 5px rgb(201, 22, 22)";
        setAlert("Không sử dụng ký tự đặc biệt");
        setOpen3(true);
        setCheck3(false);
      } else if (tx.test(value)) {
        document.getElementById("tklast").style.border = "1px solid red";
        document.getElementById("tklast").style.boxShadow =
          "1px 1px 2px rgb(240, 61, 61), 0 0 5px rgb(201, 22, 22)";
        setAlert("Không sử dụng ký tự đặc biệt");
        setOpen3(true);
        setCheck3(false);
      } else {
        setOpen3(false);
        setCheck3(true);
        setAlert("Vui lòng điền đủ thông tin!");
        document.getElementById("tklast").style.border = "0.5px solid grey";
        document.getElementById("tklast").style.boxShadow =
          "1px 1px 2px black, 0 0 25px rgb(197, 252, 252),0 0 5px rgb(47, 223, 223)";
      }
    } else if (name === "pass") {
      if (value.length === 0) {
        document.getElementById("tklast").style.border = "1px solid red";
        setAlert("Vui lòng nhập mật khẩu.");
        setOpen4(true);
        setCheck4(false);
      } else {
        setAlert("Vui lòng điền đủ thông tin!");
        setOpen4(false);
        setCheck4(true);
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
  const hideDiagrow = () => {
    setAlert("Vui lòng điền đủ thông tin");
    setOpen5(false);
    setOpen6(false);
    setOpen7(false);
  };
  const handleClose = () => {
    window.location.reload();
  };
  const handleTooltipClose = () => {
    setOpen(false);
  
  };
  const useStyles = makeStyles((theme) => ({
    custoTootil: {
      maxWidth: 500,
      backgroundColor: "pink",
      color: "black",
      fontWeight: "bold",
      float: "left",
    },
    arrow: {
      color: "pink",
    },
  }));
  const classes = useStyles();
  //
  useEffect(() => {
    if (values.email.length > 5) {
      Axios.post(keyAPI.apiCheckAccount, {
        email: values.email,
      })
        .then(({ data }) => {
          if (data.resul === 1) {
            document.getElementById("tkes").style.border = "1px solid red";
            document.getElementById("tkes").style.boxShadow =
              "1px 1px 2px rgb(240, 61, 61), 0 0 5px rgb(201, 22, 22)";
            setOpen(true);
            setAlert("Tài khoản này đã tồn tại.");
            setCheck(false);
          } else {
            setOpen(false);
            setAlert("Vui lòng nhập đầy đủ thông tin.");
            setCheck(true);
            document.getElementById("tkes").style.border = "0.5px solid grey";
            document.getElementById("tkes").style.boxShadow =
              "1px 1px 2px black, 0 0 25px rgb(197, 252, 252),0 0 5px rgb(47, 223, 223)";
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [eluma]);
  //
  const onSubmit = (event) => {
    event.preventDefault();
    if (check === false) {
      setOpen(true);
    } else if (check2 === false) {
      setOpen2(true);
    } else if (check3 === false) {
      setOpen3(true);
    } else if (check4 === false) {
      setOpen4(true);
    } else if (values.birthday === "0") {
      setOpen5(true);
      setAlert("Vui lòng chọn ngày");
    } else if (values.birthmonth === "0") {
      setOpen6(true);
      setAlert("Vui lòng chọn tháng");
    } else if (values.birthyear === "0") {
      setOpen7(true);
      setAlert("Vui lòng chọn năm");
    } else {
      Axios.post(keyAPI.apiCreateAccount, {
        first: values.first,
        last: values.last,
        email: values.email,
        pass: values.pass,
        gender: values.gender,
        birth:
          values.birthyear + "-" + values.birthmonth + "-" + values.birthday,
      }).then(({data}) =>{
        if (data.resul === 1) {
          setAlert2("Đăng ký tài khoản thành công! Vui lòng chuyển sang trang đăng nhập.");
          setOpen8(true);
        }
        if (data.resul === 0) {
          setAlert2("Đã xảy ra lỗi, vui lòng liên hệ với Quản Trị Viên.");
          setOpen8(true);
        }
        if (data.resul === 2) {
          setAlert2("Chúng tôi phát hiện hành động bất thường của bạn, để ngăn chặn điều này chúng tôi sẽ cấm bạn tạo tài khoản mới trong vòng 24h.");
          setOpen8(true);
        }
        
      }).catch((error) => {
        console.log(error);
      });
    }
  };
  if (PATH !== undefined && PATH !== "undefined" && PATH !== null && PATH !== "") {
    return <Redirect to={"/newstory"} />;
 
   }
  return (
    <div className="container-singn">
      <form onSubmit={onSubmit}>
        <div className="container-singn-lastfirst">
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            classes={{ tooltip: classes.custoTootil, arrow: classes.arrow }}
            open={open2}
            title={alert}
            placement="bottom-end"
            arrow
          >
            <input
              type="text"
              className="container-singn-first-input"
              placeholder="Họ"
              name="first"
              id="tkfirst"
              autoComplete="off"
              onChange={onChage}
            />
          </Tooltip>
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            classes={{ tooltip: classes.custoTootil, arrow: classes.arrow }}
            open={open3}
            title={alert}
            placement="bottom-end"
            arrow
          >
            <input
              type="text"
              className="container-singn-last-input"
              placeholder="Tên"
              name="last"
              id="tklast"
              autoComplete="off"
              onChange={onChage}
            />
          </Tooltip>
        </div>
        <br />
        <div className="container-singn-email">
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            classes={{ tooltip: classes.custoTootil, arrow: classes.arrow }}
            open={open}
            title={alert}
            placement="bottom-end"
            arrow
          >
            <input
              type="text"
              className="container-singn-email-input"
              placeholder="Số điện thoại hoặc email"
              name="email"
              id="tkes"
              autoComplete="off"
              onChange={onChage}
            />
          </Tooltip>
        </div>

        <div className="errorControll"></div>
        <br />
        <div className="container-singn-pass">
          <Tooltip
            PopperProps={{
              disablePortal: true,
            }}
            onClose={handleTooltipClose}
            classes={{ tooltip: classes.custoTootil, arrow: classes.arrow }}
            open={open4}
            title={alert}
            placement="bottom-end"
            arrow
          >
            <input
              type={values.showPass === "true" ? "text" : "password"}
              placeholder="Mật khẩu"
              name="pass"
              onChange={onChage}
            />
          </Tooltip>
          <div
            className="container-singn-eye-icon"
            style={
              values.pass.length > 0
                ? { display: "block" }
                : { display: "none" }
            }
          >
            {values.showPass === "false" ? (
              <IconButton
                className="container-singn-eye-icon"
                onClick={showPassword}
              >
                <VisibilityOffIcon className="container-singn-eye-icon-sub" />
              </IconButton>
            ) : (
              <IconButton
                className="container-singn-eye-icon"
                onClick={HidePassword}
              >
                <VisibilityIcon className="container-singn-eye-icon-sub" />
              </IconButton>
            )}
          </div>
        </div>
        <div className="container-singn-birthday">
          <div className="container-singn-birthday-day">
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              classes={{ tooltip: classes.custoTootil, arrow: classes.arrow }}
              open={open5}
              title={alert}
              placement="bottom-end"
              arrow
            >
              <select name="birthday" onClick={hideDiagrow} onChange={onChage}>
                <option value="0" disabled selected="true">
                  Ngày
                </option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
              </select>
            </Tooltip>
          </div>
          <div className="container-singn-birthday-month">
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              classes={{ tooltip: classes.custoTootil, arrow: classes.arrow }}
              open={open6}
              title={alert}
              placement="bottom-end"
              arrow
            >
              <select
                onClick={hideDiagrow}
                name="birthmonth"
                onChange={onChage}
              >
                <option value="0" disabled selected="true">
                  Tháng
                </option>
                <option value="01">1</option>
                <option value="02">2</option>
                <option value="03">3</option>
                <option value="04">4</option>
                <option value="05">5</option>
                <option value="06">6</option>
                <option value="07">7</option>
                <option value="08">8</option>
                <option value="09">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </Tooltip>
          </div>
          <div className="container-singn-birthday-year">
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              classes={{ tooltip: classes.custoTootil, arrow: classes.arrow }}
              open={open7}
              title={alert}
              placement="bottom-end"
              arrow
            >
              <select onClick={hideDiagrow} name="birthyear" onChange={onChage}>
                <option value="0" disabled selected="true">
                  Năm
                </option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
                <option value="2016">2016</option>
                <option value="2015">2015</option>
                <option value="2014">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
              </select>
            </Tooltip>
          </div>
        </div>
        <div className="container-singn-gender">
          <div className="container-singn-gender-nam">
            <label>
              <input
                type="radio"
                name="gender"
                value="Nam"
                onChange={onChage}
              />
              <span>Nam</span>
            </label>
          </div>
          <div className="container-singn-gender-nu">
            <label>
              <input type="radio" name="gender" value="Nữ" onChange={onChage} />
              <span>Nữ</span>
            </label>
          </div>
          <div className="container-singn-gender-tc">
            <label>
              <input
                type="radio"
                name="gender"
                value="Tùy chỉnh"
                onChange={onChage}
                defaultChecked
              />
              <span>Tùy chỉnh</span>
            </label>
          </div>
        </div>
        <div className="Noti"></div>
        <br />
        <div className="button-create">
          <div className="button-create-login">
            <Link to="/login" className="button-create-login-link-1">
              Đã có tài khoản, đăng nhập?
            </Link>
            <Link to="/login" className="button-create-login-link-2">
              Đăng nhập?
            </Link>
          </div>
          <div className="button-create-singn">
            <button style={{ cursor: "pointer" }} type="submit" color="primary">
              Tạo tài khoản
            </button>
          </div>
        </div>
      </form>
      <Dialog
        open={open8}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Thông báo"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {alert2}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Singn;
