import React, { useEffect, useState } from "react";
import "./usertgnprofile.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "@material-ui/lab/Skeleton";
import {
  GiPiercingSword,
  GiSwordsEmblem,
  GiWindSlap,
  GiLevelFour,
  GiLevelThree,
} from "react-icons/gi";
import { FaHeartbeat } from "react-icons/fa";
import { RiCloudWindyLine } from "react-icons/ri";
import { useCookies } from "react-cookie";
import Axios from "axios";

function UserTGNProfile({ valAccTGN, accTGN, userTGN, keyAPI }) {
  const [array, setArray] = useState(userTGN);
  const [areaArray, setAreaArray] = useState(userTGN);
  const [number, setNumber] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const valueGlory = [];
  const [glory, setGlory] = useState(valueGlory);

  function findIndexArr(index) {
    if (accTGN !== null) {
      return index.id === valAccTGN.id;
    }
  }
  function fillIndexArr(index) {
    if (accTGN !== null) {
      return index.area === valAccTGN.area;
    }
  }
  function convertToNumber(value) {
    const num = String(value);
    if (num.length === 6) {
      return num.slice(0, 3) + "." + num.slice(3);
    } else if (num.length === 5) {
      return num.slice(0, 2) + "." + num.slice(2);
    } else if (num.length === 4) {
      return num.slice(0, 1) + "." + num.slice(1);
    } else {
      return num;
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

      setArray(arr);
      setAreaArray(arr.filter(fillIndexArr));
    }
  }, [userTGN, valAccTGN]);

  useEffect(() => {
    if (valAccTGN !== null) {
      Axios.post(keyAPI.apiTGNGlory, {
        id: cookies.fo_uim,
        token: cookies.fo_token,
        idz: valAccTGN.id,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              console.log("");
            } else {
              setGlory(data.tgn);
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
  }, [valAccTGN]);
  const time_singn = new Date(valAccTGN.time_singn);
  const time_today = new Date();
  document.title = valAccTGN.LASTTNAME + " | TGN";
  return (
    <div>
      {valAccTGN !== null && accTGN !== null ? (
        <div>
          <div className="user-tgn-profile-top">
            <div className="user-tgn-profile-top-avatar">
              <LazyLoadImage
                className="user-tgn-profile-top-avatar-img"
                src={`/foanime/${valAccTGN.AVATAR}`}
                placeholder={
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    className="user-tgn-profile-top-avatar-img"
                  />
                }
              />
            </div>

            <div className="user-tgn-profile-top-title">
              <div className="user-tgn-profile-top-title-name">
                {valAccTGN.FRISTNAME + " " + valAccTGN.LASTTNAME}
              </div>
              <div
                className="user-tgn-profile-top-title-start"
                style={{ marginBottom: "10px", cursor: "pointer" }}
              >
                <div class="user-tgn-profile-top-title-start-container">
                  <div class="user-tgn-profile-top-title-start-container-list">
                    <div class="user-tgn-profile-top-title-start-container-list-item">
                      {valAccTGN.index_glory !== "0"
                        ? valAccTGN.GLORY !== null
                          ? valAccTGN.GLORY
                          : Number(time_today.getTime()) -
                              Number(time_singn.getTime()) >
                            604800000
                          ? "Member"
                          : "Newbie"
                        : Number(time_today.getTime()) -
                            Number(time_singn.getTime()) >
                          604800000
                        ? "Member"
                        : "Newbie"}
                    </div>
                    <div class="user-tgn-profile-top-title-start-container-list-item">
                      Rank {Number(array.findIndex(findIndexArr)) + 1} thế giới
                    </div>
                    <div class="user-tgn-profile-top-title-start-container-list-item">
                      {valAccTGN.area === "0"
                        ? "Không có khu vực"
                        : "Rank " +
                          (Number(areaArray.findIndex(findIndexArr)) + 1) +
                          " khu vực"}
                    </div>
                    <div class="user-tgn-profile-top-title-start-container-list-item">
                      {"Cấp độ nguy hiểm " + theWorld(valAccTGN)}
                    </div>
                  </div>
                </div>
              </div>
              <div className="user-tgn-profile-top-title-start">
                {valAccTGN.type_account === "admin"
                  ? "Quản trị viên"
                  : valAccTGN.type_account === "operator"
                  ? "Điều hành viên"
                  : valAccTGN.type_account === "adchap"
                  ? "Tạo chap gia"
                  : valAccTGN.type_account === "mod"
                  ? "Mod"
                  : "Người dùng Fooobe"}
              </div>
              {valAccTGN.PROPLAYER !== null && (
                <div className="user-tgn-profile-top-title-start">
                  Người chơi chuyên nghiệp
                </div>
              )}
            </div>
            <div className="user-tgn-profile-top-status">
              <div
                className="user-tgn-profile-top-status-point"
                onClick={() => {
                  setNumber(!number);
                }}
              >
                Bảng trạng thái
              </div>
              <div className="user-tgn-profile-top-status-stats">
                <div className="user-tgn-profile-top-status-icon">
                  {number === false ? (
                    <div style={{ marginRight: "10px", width: "100%" }}>
                      <FaHeartbeat style={{ color: "red" }} />
                    </div>
                  ) : (
                    <div className="user-tgn-profile-top-status-icon-img">
                      HP
                    </div>
                  )}

                  <div
                    className="user-tgn-profile-top-status-icon-title"
                    style={{ width: "100%" }}
                  >
                    {Math.round(
                      (Number(valAccTGN.EXP) / 50 +
                        Number(valAccTGN.THEWORLD) / 2.567) /
                        7.45 +
                        Number(valAccTGN.PROPLAYER !== null ? 500 : 0) +
                        Number(levelTheWorld(theWorld(valAccTGN))) / 12.1245 +
                        Math.round(
                          Number(valAccTGN.EXP) / 4000 +
                            Number(valAccTGN.TN) / 170 +
                            Number(valAccTGN.AM) / 110 +
                            Number(valAccTGN.ELO) / 100 +
                            Number(valAccTGN.XL) / 100 +
                            Number(valAccTGN.SP) / 8000
                        ) +
                        Number(valAccTGN.type_super === "3" ? 500 : 0)
                    )}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  {number === false ? (
                    <div style={{ marginRight: "10px", width: "100%" }}>
                      <GiPiercingSword
                        style={{ color: "rgb(255, 111, 255)" }}
                      />
                    </div>
                  ) : (
                    <div className="user-tgn-profile-top-status-icon-img">
                      ST
                    </div>
                  )}

                  <div
                    className="user-tgn-profile-top-status-icon-title"
                    style={{ width: "100%" }}
                  >
                    {Math.round(
                      Number(valAccTGN.TN) / 165 +
                        Number(valAccTGN.THEWORLD) / 200 +
                        Number(valAccTGN.PROPLAYER !== null ? 50 : 0) +
                        Math.round(
                          Number(valAccTGN.EXP) / 4000 +
                            Number(valAccTGN.TN) / 170 +
                            Number(valAccTGN.AM) / 110 +
                            Number(valAccTGN.ELO) / 100 +
                            Number(valAccTGN.XL) / 100 +
                            Number(valAccTGN.SP) / 8000
                        ) /
                          1.345 +
                        800 / 8.44 +
                        50 +
                        Number(valAccTGN.type_super === "4" ? 50 : 0)
                    )}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  {number === false ? (
                    <div style={{ marginRight: "10px", width: "100%" }}>
                      <GiWindSlap style={{ color: "cyan" }} />
                    </div>
                  ) : (
                    <div className="user-tgn-profile-top-status-icon-img">
                      AL
                    </div>
                  )}

                  <div
                    className="user-tgn-profile-top-status-icon-title"
                    style={{ width: "100%" }}
                  >
                    {Math.round(
                      Number(valAccTGN.XL) +
                        Number(valAccTGN.THEWORLD) / 30 +
                        Number(valAccTGN.PROPLAYER !== null ? 100 : 0) +
                        Math.round(
                          Number(valAccTGN.EXP) / 4000 +
                            Number(valAccTGN.TN) / 170 +
                            Number(valAccTGN.AM) / 110 +
                            Number(valAccTGN.ELO) / 100 +
                            Number(valAccTGN.XL) / 100 +
                            Number(valAccTGN.SP) / 8000
                        ) +
                        500 +
                        Number(valAccTGN.type_super === "2" ? 300 : 0)
                    )}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-icon">
                  {number === false ? (
                    <div style={{ marginRight: "10px", width: "100%" }}>
                      <RiCloudWindyLine style={{ color: "yellow" }} />
                    </div>
                  ) : (
                    <div className="user-tgn-profile-top-status-icon-img">
                      EL
                    </div>
                  )}

                  <div
                    className="user-tgn-profile-top-status-icon-title"
                    style={{ width: "100%" }}
                  >
                    {Math.round(
                      Number(valAccTGN.ELO) +
                        Number(valAccTGN.THEWORLD) / 50 +
                        Number(valAccTGN.PROPLAYER !== null ? 100 : 0) +
                        Math.round(
                          Number(valAccTGN.EXP) / 4000 +
                            Number(valAccTGN.TN) / 170 +
                            Number(valAccTGN.AM) / 110 +
                            Number(valAccTGN.ELO) / 100 +
                            Number(valAccTGN.XL) / 100 +
                            Number(valAccTGN.SP) / 8000
                        ) +
                        500 +
                        Number(valAccTGN.type_super === "1" ? 300 : 0)
                    )}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  {number === false ? (
                    <div style={{ marginRight: "10px", width: "100%" }}>
                      <GiSwordsEmblem style={{ color: "cyan" }} />
                    </div>
                  ) : (
                    <div className="user-tgn-profile-top-status-icon-img">
                      AM
                    </div>
                  )}

                  <div
                    className="user-tgn-profile-top-status-icon-title"
                    style={{ width: "100%" }}
                  >
                    {Math.round(
                      200 +
                        Number(valAccTGN.THEWORLD) / 100 +
                        Math.round(
                          Number(valAccTGN.EXP) / 4000 +
                            Number(valAccTGN.TN) / 170 +
                            Number(valAccTGN.AM) / 110 +
                            Number(valAccTGN.ELO) / 100 +
                            Number(valAccTGN.XL) / 100 +
                            Number(valAccTGN.SP) / 8000
                        ) +
                        Number(valAccTGN.AM) / 10 +
                        Number(valAccTGN.type_super === "4" ? 200 : 0)
                    )}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  {number === false ? (
                    <div style={{ marginRight: "10px", width: "100%" }}>
                      <GiLevelThree style={{ color: "cyan" }} />
                    </div>
                  ) : (
                    <div className="user-tgn-profile-top-status-icon-img">
                      Level
                    </div>
                  )}

                  <div
                    className="user-tgn-profile-top-status-icon-title"
                    style={{ width: "100%" }}
                  >
                    {Math.round(
                      Number(valAccTGN.EXP) / 4000 +
                        Number(valAccTGN.TN) / 170 +
                        Number(valAccTGN.AM) / 110 +
                        Number(valAccTGN.ELO) / 100 +
                        Number(valAccTGN.XL) / 100 +
                        Number(valAccTGN.SP) / 8000
                    )}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-icon">
                  {number === false ? (
                    <div style={{ marginRight: "10px", width: "100%" }}>
                      <GiLevelFour style={{ color: "cyan" }} />
                    </div>
                  ) : (
                    <div className="user-tgn-profile-top-status-icon-img">
                      Cấp độ
                    </div>
                  )}

                  <div
                    className="user-tgn-profile-top-status-icon-title"
                    style={{ width: "100%" }}
                  >
                    {theWorld(valAccTGN)}
                  </div>
                </div>
              </div>
              <div className="user-tgn-profile-top-status-point-2">
                Điểm kinh nghiệm
              </div>
              <div className="user-tgn-profile-top-status-stats">
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">
                    Exp
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    {valAccTGN.EXP}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">TN</div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    {valAccTGN.TN}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">
                    Elo
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    {valAccTGN.ELO}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">AM</div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    {valAccTGN.AM}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">XL</div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    {valAccTGN.XL}
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">SP</div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    {valAccTGN.SP}
                  </div>
                </div>
                {valAccTGN.id === accTGN.id && valAccTGN !== null ? (
                  <div className="user-tgn-profile-top-status-icon">
                    <div className="user-tgn-profile-top-status-icon-img">
                      ALZ
                    </div>
                    <div className="user-tgn-profile-top-status-icon-title">
                      {valAccTGN.ALZ}
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}

                {valAccTGN.id === accTGN.id ? (
                  <div className="user-tgn-profile-top-status-hr"></div>
                ) : (
                  <div> </div>
                )}
                {valAccTGN.id === accTGN.id ? (
                  <div className="user-tgn-profile-top-status-icon">
                    <div className="user-tgn-profile-top-status-icon-img">
                      PGD
                    </div>
                    <div className="user-tgn-profile-top-status-icon-title">
                      {valAccTGN.PGD}
                    </div>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <div className="user-tgn-profile-top-status-point-2">
                <p>Thành tích</p>
              </div>
              <div className="user-tgn-profile-top-status-stats">
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">
                    <p>All PvP</p>
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    <p>
                      {Number(valAccTGN.LOSTPVPSOLO) +
                        Number(valAccTGN.LOSTPVPTEAM) +
                        Number(valAccTGN.TIEPVPSOLO) +
                        Number(valAccTGN.TIEPVPTEAM) +
                        Number(valAccTGN.WINPVPSOLO) +
                        Number(valAccTGN.WINPVPTEAM) +
                        " trận"}
                    </p>
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">
                    <p>Thắng Solo</p>
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    <p>{Number(valAccTGN.WINPVPSOLO) + " trận"}</p>
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">
                    <p>Hòa Solo</p>
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    <p>{Number(valAccTGN.TIEPVPSOLO) + " trận"}</p>
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">
                    <p>Thua Solo</p>
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    <p>{Number(valAccTGN.LOSTPVPSOLO) + " trận"}</p>
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">
                    <p>Win Team</p>
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    <p>{Number(valAccTGN.WINPVPTEAM) + " trận"}</p>
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-hr"></div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">
                    <p> Hòa Team</p>
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    <p>{Number(valAccTGN.TIEPVPTEAM) + " trận"}</p>
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-icon">
                  <div className="user-tgn-profile-top-status-icon-img">
                    <p>Thua Team</p>
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title">
                    <p>{Number(valAccTGN.LOSTPVPTEAM) + " trận"}</p>
                  </div>
                </div>
              </div>
              <div className="user-tgn-profile-top-status-point-2">
                Danh hiệu
              </div>
              <div className="user-tgn-profile-top-status-stats">
                <div className="user-tgn-profile-top-status-icon-2">
                  <div className="user-tgn-profile-top-status-icon-img">
                    <p>Rank thế giới</p>
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title-2">
                    <p>{Number(array.findIndex(findIndexArr)) + 1}</p>
                  </div>
                </div>
                <div className="user-tgn-profile-top-status-icon-2">
                  <div className="user-tgn-profile-top-status-icon-img">
                    <p>Rank khu vực</p>
                  </div>
                  <div className="user-tgn-profile-top-status-icon-title-2">
                    <p>
                      {valAccTGN.area === "0"
                        ? "Không có rank"
                        : Number(areaArray.findIndex(findIndexArr)) + 1}
                    </p>
                  </div>
                </div>
                {valAccTGN !== null &&
                accTGN !== null &&
                glory !== undefined ? (
                  glory.map((val) => {
                    return (
                      <div className="user-tgn-profile-top-status-icon-2">
                        <div className="user-tgn-profile-top-status-icon-img">
                          <p>{val.name_glory}</p>
                        </div>
                        <div className="user-tgn-profile-top-status-icon-title-2">
                          <p>
                            {"Còn " +
                              convertToNumber(
                                Math.round(
                                  (Number(
                                    new Date(
                                      val.time_end + " 00:00:00"
                                    ).getTime()
                                  ) -
                                    Number(new Date().getTime())) /
                                    86400000
                                )
                              ) +
                              " ngày"}
                          </p>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div></div>
                )}
                <div className="user-tgn-profile-top-status-icon-2"></div>
                <div className="user-tgn-profile-top-status-icon-2"></div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default UserTGNProfile;
