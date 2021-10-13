import React, { useState } from "react";
import { AiFillQqCircle, AiFillDollarCircle } from "react-icons/ai";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function FuctionOrgazineTGNSubProfileSub({
  val,
  value,
  mem,
  PATH,
  TOKEN,
  keyAPI,
  accTGN,
  setUpdateAcc,
}) {
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
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState("");
  const [open4, setOpen4] = useState(false);
  const [pri, setPri] = useState(0);
  const handleClose = () => {
    setOpen(false);
    setOpen1(false);
    setOpen2(false);
  };
  const handleOpen = () => {
    Axios.post(keyAPI.apiTGNEventOrgazine, {
      id: PATH,
      token: TOKEN,
      ev: "open",
    })
      .then(({ data }) => {
        if (typeof data !== undefined) {
          if (data.check === "xp") {
            return <Redirect to={"/logout"} />;
          } else {
            if (data.resul === 400) {
              setOpen1(false);
            } else {
              setOpen1(false);
              setOpen(true);
              setUpdateAcc(Math.floor(Math.random() * 100000));
            }
          }
        } else {
          setOpen1(false);
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
  const handOpenStatus = () => {
    if (
      (mem !== null && mem.position === "admin") ||
      (mem !== null && mem.position === "member")
    ) {
      setOpen(true);
    } else {
      setOpen1(true);
    }
  };
  const handPassPGD = () => {
    setOpen2(true);
  };
  function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  }
  const onChage = (event) => {
    const price = event.target.value;
    if (
      isNumber(Number(price)) === true &&
      Number(price) > 0 &&
      Number(price) <= Number(accTGN.PGD)
    ) {
      setOpen4(true);
      setOpen3(converDola(price));
      setPri(Number(price));
    } else {
      setOpen4(false);
      if (price.length > 0) {
        setOpen3("Bạn vui lòng nhập đúng khoản tiền bạn đang có");
      } else {
        setOpen3("");
      }
    }
  };
  function convertStringUnit(values) {
    let listUnit = [
      "Không",
      "Một",
      "Hai",
      "Ba",
      "Bốn",
      "Năm",
      "Sáu",
      "Bảy",
      "Tám",
      "Chín",
    ];

    for (var i = 0; i < listUnit.length; i++) {
      if (Number(values) === i) {
        return listUnit[i];
      }
    }
  }
  function convertStringTens(values) {
    let listUnit = [
      "Linh",
      "Mười",
      "Hai Mươi",
      "Ba Mươi",
      "Bốn Mươi",
      "Năm Mươi",
      "Sáu Mươi",
      "Bảy Mươi",
      "Tám Mươi",
      "Chín Mươi",
    ];

    for (var i = 0; i < listUnit.length; i++) {
      if (Number(values) === i) {
        return listUnit[i];
      }
    }
  }
  function convertStringHums(values) {
    let listUnit = [
      "Không Trăm",
      "Một Trăm",
      "Hai Trăm",
      "Ba Trăm",
      "Bốn Trăm",
      "Năm Trăm",
      "Sáu Trăm",
      "Bảy Trăm",
      "Tám Trăm",
      "Chín Trăm",
    ];

    for (var i = 0; i < listUnit.length; i++) {
      if (Number(values) === i) {
        return listUnit[i];
      }
    }
  }
  function converDola(values) {
    const dola = Number(values);
    if (dola < 10) {
      return convertStringUnit(dola) + " PGD";
    } else if (dola > 9 && dola < 100) {
      return (
        convertStringTens(String(dola).substring(0, 1)) +
        (convertStringUnit(String(dola).substring(1, 2)) !== ""
          ? " " + convertStringUnit(String(dola).substring(1, 2))
          : "") +
        " PGD"
      );
    } else if (dola > 99 && dola < 1000) {
      return (
        convertStringHums(String(dola).substring(0, 1)) +
        " " +
        convertStringTens(String(dola).substring(1, 2)) +
        (convertStringUnit(String(dola).substring(2, 3)) !== ""
          ? " " + convertStringUnit(String(dola).substring(2, 3))
          : "") +
        " PGD"
      );
    } else if (dola > 999 && dola < 10000) {
      return (
        convertStringUnit(String(dola).substring(0, 1)) +
        " Nghìn " +
        convertStringHums(String(dola).substring(1, 2)) +
        " " +
        convertStringTens(String(dola).substring(2, 3)) +
        (convertStringUnit(String(dola).substring(3, 4)) !== ""
          ? " " + convertStringUnit(String(dola).substring(3, 4))
          : "") +
        " PGD"
      );
    } else if (dola > 9999 && dola < 100000) {
      return (
        convertStringTens(String(dola).substring(0, 1)) +
        (convertStringUnit(String(dola).substring(1, 2)) !== ""
          ? " " + convertStringUnit(String(dola).substring(1, 2))
          : "") +
        " Nghìn " +
        convertStringHums(String(dola).substring(2, 3)) +
        " " +
        convertStringTens(String(dola).substring(3, 4)) +
        (convertStringUnit(String(dola).substring(4, 5)) !== ""
          ? " " + convertStringUnit(String(dola).substring(4, 5))
          : "") +
        " PGD"
      );
    } else if (dola > 99999 && dola < 1000000) {
      return (
        convertStringHums(String(dola).substring(0, 1)) +
        " " +
        convertStringTens(String(dola).substring(1, 2)) +
        (convertStringUnit(String(dola).substring(2, 3)) !== ""
          ? " " + convertStringUnit(String(dola).substring(2, 3))
          : "") +
        " Nghìn " +
        convertStringHums(String(dola).substring(3, 4)) +
        " " +
        convertStringTens(String(dola).substring(4, 5)) +
        (convertStringUnit(String(dola).substring(5, 6)) !== ""
          ? " " + convertStringUnit(String(dola).substring(5, 6))
          : "") +
        " PGD"
      );
    } else if (dola > 999999 && dola < 10000000) {
      return (
        convertStringUnit(String(dola).substring(0, 1)) +
        " Triệu " +
        convertStringHums(String(dola).substring(1, 2)) +
        " " +
        convertStringTens(String(dola).substring(2, 3)) +
        (convertStringUnit(String(dola).substring(3, 4)) !== ""
          ? " " + convertStringUnit(String(dola).substring(3, 4))
          : "") +
        " Nghìn " +
        convertStringHums(String(dola).substring(4, 5)) +
        " " +
        convertStringTens(String(dola).substring(5, 6)) +
        (convertStringUnit(String(dola).substring(6, 7)) !== ""
          ? " " + convertStringUnit(String(dola).substring(6, 7))
          : "") +
        " PGD"
      );
    } else if (dola > 9999999 && dola < 100000000) {
      return (
        convertStringTens(String(dola).substring(0, 1)) +
        (convertStringUnit(String(dola).substring(1, 2)) !== ""
          ? " " + convertStringUnit(String(dola).substring(1, 2))
          : "") +
        " Triệu " +
        convertStringHums(String(dola).substring(2, 3)) +
        " " +
        convertStringTens(String(dola).substring(3, 4)) +
        (convertStringUnit(String(dola).substring(4, 5)) !== ""
          ? " " + convertStringUnit(String(dola).substring(4, 5))
          : "") +
        " Nghìn " +
        convertStringHums(String(dola).substring(5, 6)) +
        " " +
        convertStringTens(String(dola).substring(6, 7)) +
        (convertStringUnit(String(dola).substring(7, 8)) !== ""
          ? " " + convertStringUnit(String(dola).substring(7, 8))
          : "") +
        " PGD"
      );
    } else if (dola > 99999909 && dola < 1000000000) {
      return (
        convertStringHums(String(dola).substring(0, 1)) +
        " " +
        convertStringTens(String(dola).substring(1, 2)) +
        (convertStringUnit(String(dola).substring(2, 3)) !== ""
          ? " " + convertStringUnit(String(dola).substring(2, 3))
          : "") +
        " Triệu " +
        convertStringHums(String(dola).substring(3, 4)) +
        " " +
        convertStringTens(String(dola).substring(4, 5)) +
        (convertStringUnit(String(dola).substring(5, 6)) !== ""
          ? " " + convertStringUnit(String(dola).substring(5, 6))
          : "") +
        " Nghìn " +
        convertStringHums(String(dola).substring(6, 7)) +
        " " +
        convertStringTens(String(dola).substring(7, 8)) +
        (convertStringUnit(String(dola).substring(8, 9)) !== ""
          ? " " + convertStringUnit(String(dola).substring(8, 9))
          : "") +
        " PGD"
      );
    }
  }

  function theWorld(value) {
    const lv = Math.round(
      Number(value.EXP) / 4000 +
        Number(value.TN) / 170 +
        Number(value.AM) / 110 +
        Number(value.ELO) / 100 +
        Number(value.XL) / 100 +
        Number(value.SP) / 8000
    );
    const pro = Number(value.PROPLAYER);
    const tw = Number(value.THEWORLD);

    if (pro !== null) {
      if (lv > 50) {
        if (tw === 0) {
          return "I";
        } else if (tw > 0 && tw < 50) {
          return "II";
        } else if (tw > 49 && tw < 150) {
          return "III";
        } else if (tw > 149 && tw < 300) {
          return "IV";
        } else if (tw > 299 && tw < 500) {
          return "V";
        } else if (tw > 499 && tw < 900) {
          return "VI";
        } else if (tw > 899 && tw < 1500) {
          return "VII";
        } else if (tw > 1499 && tw < 2500) {
          return "VIII";
        } else if (tw > 2499 && tw < 3700) {
          return "IX";
        } else if (tw > 3699 && tw < 5000) {
          return "X";
        } else if (tw > 4999 && tw < 7000) {
          return "F";
        } else if (tw > 6999 && tw < 9500) {
          return "E";
        } else if (tw > 9499 && tw < 12000) {
          return "D";
        } else if (tw > 11999 && tw < 15000) {
          return "C";
        } else if (tw > 14999 && tw < 19000) {
          return "B";
        } else if (tw > 18999 && tw < 24000) {
          return "A";
        } else if (tw > 23999 && tw < 40000) {
          return "S";
        } else if (tw > 39000) {
          return "S+";
        } else {
          return "#N/A";
        }
      } else {
        if (tw === 0) {
          return "I";
        } else if (tw > 0 && tw < 50) {
          return "II";
        } else if (tw > 49 && tw < 150) {
          return "III";
        } else if (tw > 149 && tw < 300) {
          return "IV";
        } else if (tw > 299 && tw < 500) {
          return "V";
        } else if (tw > 499 && tw < 900) {
          return "VI";
        } else if (tw > 899 && tw < 1500) {
          return "VII";
        } else if (tw > 1499 && tw < 2500) {
          return "VIII";
        } else if (tw > 2499 && tw < 3700) {
          return "IX";
        } else if (tw > 3699 && tw < 5000) {
          return "X";
        } else if (tw > 4999 && tw < 7000) {
          return "F";
        } else if (tw > 6999 && tw < 9500) {
          return "E";
        } else if (tw > 9499 && tw < 12000) {
          return "D";
        } else if (tw > 11999 && tw < 15000) {
          return "C";
        } else if (tw > 14999 && tw < 19000) {
          return "B";
        } else if (tw > 18999 && tw < 24000) {
          return "A";
        } else if (tw > 23999 && tw < 40000) {
          return "S";
        } else if (tw > 39000) {
          return "S+";
        }
      }
    } else {
      if (lv > 50) {
        if (tw === 0) {
          return "I";
        } else if (tw > 0 && tw < 50) {
          return "II";
        } else if (tw > 49 && tw < 150) {
          return "III";
        } else if (tw > 149 && tw < 300) {
          return "IV";
        } else if (tw > 299 && tw < 500) {
          return "V";
        } else if (tw > 499 && tw < 900) {
          return "VI";
        } else if (tw > 899 && tw < 1500) {
          return "VII";
        } else if (tw > 1499 && tw < 2500) {
          return "VIII";
        } else if (tw > 2499 && tw < 3700) {
          return "IX";
        } else if (tw > 3699 && tw < 5000) {
          return "X";
        } else if (tw > 4999 && tw < 7000) {
          return "F";
        } else if (tw > 6999 && tw < 9500) {
          return "E";
        } else if (tw > 9499 && tw < 12000) {
          return "D";
        } else if (tw > 11999 && tw < 15000) {
          return "C";
        } else if (tw > 14999 && tw < 19000) {
          return "B";
        } else if (tw > 18999 && tw < 25000) {
          return "A";
        } else {
          return "Z";
        }
      } else {
        if (tw === 0) {
          return "I";
        } else if (tw > 0 && tw < 50) {
          return "II";
        } else if (tw > 49 && tw < 150) {
          return "III";
        } else if (tw > 149 && tw < 300) {
          return "IV";
        } else if (tw > 299 && tw < 500) {
          return "V";
        } else if (tw > 499 && tw < 900) {
          return "VI";
        } else if (tw > 899 && tw < 1500) {
          return "VII";
        } else if (tw > 1499 && tw < 2500) {
          return "VIII";
        } else if (tw > 2499 && tw < 3700) {
          return "IX";
        } else if (tw > 3699 && tw < 5000) {
          return "X";
        } else {
          return "Z";
        }
      }
    }
  }
  function levelTheWorld(value) {
    if (value === "I") {
      return 10000;
    } else if (value === "II") {
      return 12000;
    } else if (value === "III") {
      return 11500;
    } else if (value === "IV") {
      return 11000;
    } else if (value === "V") {
      return 10000;
    } else if (value === "VI") {
      return 9500;
    } else if (value === "VII") {
      return 9000;
    } else if (value === "VIII") {
      return 8500;
    } else if (value === "IX") {
      return 8000;
    } else if (value === "X") {
      return 7500;
    } else if (value === "F") {
      return 7000;
    } else if (value === "E") {
      return 6500;
    } else if (value === "D") {
      return 6000;
    } else if (value === "C") {
      return 5000;
    } else if (value === "B") {
      return 4000;
    } else if (value === "A") {
      return 3000;
    } else if (value === "S") {
      return 2000;
    } else if (value === "S+") {
      return 1000;
    } else {
      return 0;
    }
  }
  const handlePassPGD = () => {
    Axios.post(keyAPI.apiTGNEventOrgazine, {
      id: PATH,
      token: TOKEN,
      ev: "pass",
      pgd: pri,
      tsv: value.id,
    })
      .then(({ data }) => {
        if (typeof data !== undefined) {
          if (data.check === "xp") {
            return <Redirect to={"/logout"} />;
          } else {
            if (data.resul === 400) {
              setOpen2(false);
            } else {
              setOpen2(false);
              setUpdateAcc(Math.floor(Math.random() * 100000));
            }
          }
        } else {
          setOpen2(false);
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
    <div className="fuction-orgazine-tgn-sub-profile-bot-layer">
      <img src={`/foanime/${value.AVATAR}`} />
      <span className="fuction-orgazine-tgn-sub-profile-bot-layer-span-1">
        {value.NAME}
      </span>
      <span className="fuction-orgazine-tgn-sub-profile-bot-layer-span-2">
        ({value.id})
      </span>
      {val.type_org === "pvp" && (
        <AiFillQqCircle
          onClick={handOpenStatus}
          className="fuction-orgazine-tgn-sub-profile-bot-layer-span-3"
        />
      )}
      {val.type_org === "bank" &&
        (value.id === accTGN.id ? (
          <AiFillDollarCircle className="fuction-orgazine-tgn-sub-profile-bot-layer-span-3" />
        ) : (
          <AiFillDollarCircle
            onClick={handPassPGD}
            className="fuction-orgazine-tgn-sub-profile-bot-layer-span-3"
          />
        ))}
      <Dialog open={open} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          Thông tin người dùng
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
          <div className="fuction-orgazine-tgn-sub-profile-bot-layer-dialog-top">
            <img src={`/foanime/${value.AVATAR}`} />
            <div className="fuction-orgazine-tgn-sub-profile-bot-layer-dialog-top-title">
              <div className="fuction-orgazine-tgn-sub-profile-bot-layer-dialog-top-title-1">
                {value.NAME}
              </div>
              <div className="fuction-orgazine-tgn-sub-profile-bot-layer-dialog-top-title-2">
                Giới tính : {value.SEX === "male" ? "Nam" : "Nữ"}
              </div>
            </div>
          </div>
          <div className="fuction-orgazine-tgn-sub-profile-bot-layer-dialog-bot">
            <div>
              <div>
                HP /{" "}
                {Math.round(
                  (Number(value.EXP) / 50 + Number(value.THEWORLD) / 2.567) /
                    7.45 +
                    Number(value.PROPLAYER !== null ? 500 : 0) +
                    Number(levelTheWorld(theWorld(value))) / 12.1245 +
                    Math.round(
                      Number(value.EXP) / 4000 +
                        Number(value.TN) / 170 +
                        Number(value.AM) / 110 +
                        Number(value.ELO) / 100 +
                        Number(value.XL) / 100 +
                        Number(value.SP) / 8000
                    ) +
                    Number(value.TYPESUPER === "3" ? 500 : 0)
                )}
              </div>
              <div>
                ST /{" "}
                {Math.round(
                  Number(value.TN) / 165 +
                    Number(value.THEWORLD) / 200 +
                    Number(value.PROPLAYER !== null ? 50 : 0) +
                    Math.round(
                      Number(value.EXP) / 4000 +
                        Number(value.TN) / 170 +
                        Number(value.AM) / 110 +
                        Number(value.ELO) / 100 +
                        Number(value.XL) / 100 +
                        Number(value.SP) / 8000
                    ) /
                      1.345 +
                    800 / 8.44 +
                    50 +
                    Number(value.TYPESUPER === "4" ? 50 : 0)
                )}
              </div>
              <div>
                AM /{" "}
                {Math.round(
                  200 +
                    Number(value.THEWORLD) / 100 +
                    Math.round(
                      Number(value.EXP) / 4000 +
                        Number(value.TN) / 170 +
                        Number(value.AM) / 110 +
                        Number(value.ELO) / 100 +
                        Number(value.XL) / 100 +
                        Number(value.SP) / 8000
                    ) +
                    Number(value.AM) / 10 +
                    Number(value.TYPESUPER === "4" ? 200 : 0)
                )}
              </div>
              <div>Vật phẩm / Lôi kiếm diệt thiên long</div>
            </div>
            <div>
              <div>
                EL /{" "}
                {Math.round(
                  Number(value.ELO) +
                    Number(value.THEWORLD) / 50 +
                    Number(value.PROPLAYER !== null ? 100 : 0) +
                    Math.round(
                      Number(value.EXP) / 4000 +
                        Number(value.TN) / 170 +
                        Number(value.AM) / 110 +
                        Number(value.ELO) / 100 +
                        Number(value.XL) / 100 +
                        Number(value.SP) / 8000
                    ) +
                    500 +
                    Number(value.TYPESUPER === "1" ? 300 : 0)
                )}
              </div>
              <div>
                AL /{" "}
                {Math.round(
                  Number(value.XL) +
                    Number(value.THEWORLD) / 30 +
                    Number(value.PROPLAYER !== null ? 100 : 0) +
                    Math.round(
                      Number(value.EXP) / 4000 +
                        Number(value.TN) / 170 +
                        Number(value.AM) / 110 +
                        Number(value.ELO) / 100 +
                        Number(value.XL) / 100 +
                        Number(value.SP) / 8000
                    ) +
                    500 +
                    Number(value.TYPESUPER === "2" ? 300 : 0)
                )}
              </div>
              <div>Level / {theWorld(value)}</div>
              <div>Siêu năng / Lập phương</div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.boxStyle}
            variant="contained"
            color="primary"
            disableElevation
            onClick={(event) => {
              navigator.clipboard.writeText(
                "- " +
                  value.NAME +
                  " (" +
                  Math.round(
                    (Number(value.EXP) / 50 + Number(value.THEWORLD) / 2.567) /
                      7.45 +
                      Number(value.PROPLAYER !== null ? 500 : 0) +
                      Number(levelTheWorld(theWorld(value))) / 12.1245 +
                      Math.round(
                        Number(value.EXP) / 4000 +
                          Number(value.TN) / 170 +
                          Number(value.AM) / 110 +
                          Number(value.ELO) / 100 +
                          Number(value.XL) / 100 +
                          Number(value.SP) / 8000
                      ) +
                      Number(value.TYPESUPER === "3" ? 500 : 0)
                  ) +
                  "/" +
                  Math.round(
                    Number(value.TN) / 165 +
                      Number(value.THEWORLD) / 200 +
                      Number(value.PROPLAYER !== null ? 50 : 0) +
                      Math.round(
                        Number(value.EXP) / 4000 +
                          Number(value.TN) / 170 +
                          Number(value.AM) / 110 +
                          Number(value.ELO) / 100 +
                          Number(value.XL) / 100 +
                          Number(value.SP) / 8000
                      ) /
                        1.345 +
                      800 / 8.44 +
                      50 +
                      Number(value.TYPESUPER === "4" ? 50 : 0)
                  ) +
                  "/" +
                  Math.round(
                    Number(value.ELO) +
                      Number(value.THEWORLD) / 50 +
                      Number(value.PROPLAYER !== null ? 100 : 0) +
                      Math.round(
                        Number(value.EXP) / 4000 +
                          Number(value.TN) / 170 +
                          Number(value.AM) / 110 +
                          Number(value.ELO) / 100 +
                          Number(value.XL) / 100 +
                          Number(value.SP) / 8000
                      ) +
                      500 +
                      Number(value.TYPESUPER === "1" ? 300 : 0)
                  ) +
                  "/" +
                  Math.round(
                    Number(value.XL) +
                      Number(value.THEWORLD) / 30 +
                      Number(value.PROPLAYER !== null ? 100 : 0) +
                      Math.round(
                        Number(value.EXP) / 4000 +
                          Number(value.TN) / 170 +
                          Number(value.AM) / 110 +
                          Number(value.ELO) / 100 +
                          Number(value.XL) / 100 +
                          Number(value.SP) / 8000
                      ) +
                      500 +
                      Number(value.TYPESUPER === "2" ? 300 : 0)
                  ) +
                  "/" +
                  Math.round(
                    200 +
                      Number(value.THEWORLD) / 100 +
                      Math.round(
                        Number(value.EXP) / 4000 +
                          Number(value.TN) / 170 +
                          Number(value.AM) / 110 +
                          Number(value.ELO) / 100 +
                          Number(value.XL) / 100 +
                          Number(value.SP) / 8000
                      ) +
                      Number(value.AM) / 10 +
                      Number(value.TYPESUPER === "4" ? 200 : 0)
                  ) +
                  ") \r\n      + Cấp độ : " +
                  theWorld(value) +
                  " \r\n      + Siêu năng : " +
                  "Trọng lực \r\n      + Vật phẩm : " +
                  "Lôi kiếm \r\n      + Giới tính : " +
                  (value.SEX === "male" ? "Nam" : "Nữ")
              );
            }}
          >
            Copy
          </Button>
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
      <Dialog open={open1} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          Xác nhận chi trả
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
          Bạn có chắc muốn bỏ ra 100 PGD để xem thông tin người dùng này?
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
          {accTGN.PGD > 100 ? (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              onClick={handleOpen}
            >
              Ok
            </Button>
          ) : (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              disabled
            >
              Ok
            </Button>
          )}
        </DialogActions>
      </Dialog>
      <Dialog open={open2} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          Chuyển PGD cho <span style={{ color: "tomato" }}>{value.NAME}</span>
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
          Bạn đang thực hiện chuyển tiền cho {value.NAME}, hãy nhập số tiền bạn
          muốn chuyển.
          <br />
          <br />
          <input
            className="fuction-orgazine-tgn-input"
            onChange={onChage}
            type="number"
            placeholder=" Số tiền cần chuyển . . ."
          />
          <br />
          {open3}
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
          {open4 ? (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              onClick={handlePassPGD}
            >
              Ok, chuyển
            </Button>
          ) : (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              disabled
            >
              Ok
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FuctionOrgazineTGNSubProfileSub;
