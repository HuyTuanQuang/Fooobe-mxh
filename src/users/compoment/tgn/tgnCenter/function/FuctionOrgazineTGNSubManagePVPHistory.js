import React, { useState, useEffect } from "react";
import { FcEngineering } from "react-icons/fc";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import { Table } from "reactstrap";
import Axios from "axios";
import { Spinner } from "reactstrap";
var moment = require("moment-timezone");

function FuctionOrgazineTGNSubManagePVPHistory({
  vala,
  TOKEN,
  PATH,
  keyAPI,
  setRands,
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
      maxHeight: "400px",
      "&::-webkit-scrollbar": {
        width: "7px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#c4c6c6",
        borderRadius: "5px",
      },
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
  const timez = new Date(vala.time_pvp);
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [listmem, setListmem] = useState([]);
  const [listmempvp, setListmempvp] = useState([]);
  const [rand, setRand] = useState(1);
  const values = {
    id: "",
    result: "",
    kill: "",
    dead: "",
    history: "",
    club: "",
  };
  const valuee = {
    roundr: "0",
    pvpa: "",
    pvpb: "",
    content: null,
  };
  const [datta, setDatta] = useState(values);
  const [datte, setDatte] = useState(valuee);

  var times = moment
    .tz(timez, "Asia/Saigon")
    .tz(Intl.DateTimeFormat().resolvedOptions().timeZone)
    .format("YYYY/MM/DD");
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose1 = () => {
    setOpen1(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  useEffect(() => {
    if (
      (PATH !== null && keyAPI !== "undefined" && vala.type_pvp === "team",
      open === true)
    ) {
      Axios.post(keyAPI.apiTGNEventOrgazine, {
        id: PATH,
        token: TOKEN,
        ev: "listmem",
        ts: vala.user_pvp_1,
        tsv: vala.user_pvp_2,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              setListmem(data.resul);
            }
          } else {
            setListmem([]);
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
  }, [keyAPI, open]);
  useEffect(() => {
    if (
      (PATH !== null && keyAPI !== "undefined" && vala.type_pvp === "team",
      open === true)
    ) {
      Axios.post(keyAPI.apiTGNEventOrgazine, {
        id: PATH,
        token: TOKEN,
        ev: "listmempvp",
        ts: vala.tgn_history_pvp_stt,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul !== 400) {
                setListmempvp(data.resul);
              }
            }
          } else {
            setListmempvp([]);
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            console.log("Truy vấn có vấn đề");
          } else if (error.request) {
            console.log("Không nhận được phản hồi");
          } else {
            console.log("I am Nhân by Fo");
          }
        });
    }
  }, [keyAPI, open, rand]);
  const onChage = (event) => {
    const { name, value } = event.target;
    setDatta({
      ...datta,
      [name]: value,
    });
  };
  const addMemPVP = () => {
    if (
      datta.id !== "" &&
      datta.result !== "" &&
      datta.kill !== "" &&
      datta.dead !== ""
    ) {
      if (
        listmem !== 400 &&
        listmempvp.filter((item) => item.id === datta.id).length === 0
      ) {
        Axios.post(keyAPI.apiTGNEventOrgazine, {
          id: PATH,
          token: TOKEN,
          ev: "addmempvp",
          tsx: datta.id,
          tsy: datta.result,
          tsv: datta.kill,
          tsc: datta.dead,
          ts: datta.history,
          idz: listmem.filter((item) => item.id === datta.id)[0].tgn_club_stt,
          pgd: "team",
        })
          .then(({ data }) => {
            if (typeof data !== undefined) {
              if (data.check === "xp") {
                return <Redirect to={"/logout"} />;
              } else {
                setRand(Math.floor(Math.random() * 100000));
              }
            }
          })
          .catch((error) => {
            console.log(error);
            if (error.response) {
              console.log("Truy vấn có vấn đề");
            } else if (error.request) {
              console.log("Không nhận được phản hồi");
            } else {
              console.log("I am Nhân by Fo");
            }
          });
      } else if (
        listmem === 400 &&
        listmempvp.filter((item) => item.id === datta.id).length === 0
      ) {
        Axios.post(keyAPI.apiTGNEventOrgazine, {
          id: PATH,
          token: TOKEN,
          ev: "addmempvp",
          tsx: datta.id,
          tsy: datta.result,
          tsv: datta.kill,
          tsc: datta.dead,
          ts: datta.history,
          idz: "0",
          pgd: "solo",
        })
          .then(({ data }) => {
            if (typeof data !== undefined) {
              if (data.check === "xp") {
                return <Redirect to={"/logout"} />;
              } else {
                setRand(Math.floor(Math.random() * 100000));
              }
            }
          })
          .catch((error) => {
            console.log(error);
            if (error.response) {
              console.log("Truy vấn có vấn đề");
            } else if (error.request) {
              console.log("Không nhận được phản hồi");
            } else {
              console.log("I am Nhân by Fo");
            }
          });
      }
    }
  };
  const openHistory = (values) => {
    setOpen(true);
    setDatta({
      ...datta,
      history: values,
    });
  };
  const openRound = (event) => {
    if (event.target.value === "0") {
      setOpen3(false);
    } else {
      setOpen3(true);
    }
  };
  const onChages = (event) => {
    const { name, value } = event.target;
    setDatte({
      ...datte,
      [name]: value,
    });
  };
  function isNumber(n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  }
  const saveEditPVP = () => {
    if (
      isNumber(datte.roundr) === true &&
      isNumber(datte.pvpa) === true &&
      isNumber(datte.pvpb) === true
    ) {
      setOpen5(true);
      Axios.post(keyAPI.apiTGNEventOrgazine, {
        id: PATH,
        token: TOKEN,
        ev: "updatepvp",
        ts: vala.tgn_history_pvp_stt,
        tsx: datte.roundr,
        tsy: datte.pvpa,
        tsv: datte.content,
        tsc: datte.pvpb,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              setOpen5(false);
              setOpen1(false);
              setOpen(false);
              setRands(Math.floor(Math.random() * 100000));
            }
          }
        })
        .catch((error) => {
          setOpen5(false);
          setOpen1(false);
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
  const saveDeletePVP = () => {
    setOpen4(true);
    Axios.post(keyAPI.apiTGNEventOrgazine, {
      id: PATH,
      token: TOKEN,
      ev: "deletepvp",
      ts: vala.tgn_history_pvp_stt,
    })
      .then(({ data }) => {
        if (typeof data !== undefined) {
          if (data.check === "xp") {
            return <Redirect to={"/logout"} />;
          } else {
            setOpen4(false);
            setOpen2(false);
            setOpen(false);
            setRands(Math.floor(Math.random() * 100000));
          }
        }
      })
      .catch((error) => {
        setOpen4(false);
        setOpen2(false);
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
    <div className="fuction-orgazine-tgn-pvp-history">
      <div className="fuction-orgazine-tgn-pvp-history-title">
        <span>{"〈 " + vala.NAMEA + " 〉"} </span>vs
        <span>{"〈 " + vala.NAMEB + " 〉"} </span>
      </div>
      <div className="fuction-orgazine-tgn-pvp-history-type">
        {(vala.type_pvp === "solo" ? "Solo" : "Team") + " • " + times}
      </div>
      <div className="fuction-orgazine-tgn-pvp-history-icon">
        <FcEngineering onClick={() => openHistory(vala.tgn_history_pvp_stt)} />
      </div>
      {listmem !== undefined && listmem !== null ? (
        <div>
          <Dialog open={open} onClose={handleClose} style={{ zIndex: "50000" }}>
            <DialogContent className={classes.titleStyle}>
              Chỉnh sửa trận đấu
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
              Quản trị viên, kiểm duyệt viên vui lòng kiểm duyệt rõ ràng trước
              khi thêm, sửa, xóa một trận đấu.
              <div className="fuction-orgazine-tgn-pvp-history-dig-title">
                <span>{"〈 " + vala.NAMEA + " 〉"} </span>
                <div>
                  <span>{vala.score_a + " - " + vala.score_b}</span>
                  {vala.type_pvp === "team" && (
                    <span>
                      {vala.matchs +
                        " match" +
                        (vala.round > 0 ? " (" + vala.round + " round)" : "")}
                    </span>
                  )}
                </div>
                <span>{"〈 " + vala.NAMEB + " 〉"} </span>
              </div>
              NGƯỜI THAM GIA TRẬN ĐẤU
              <div className="fuction-orgazine-tgn-pvp-history-dig-add">
                {vala.type_pvp === "team" ? (
                  <select
                    name="id"
                    onChange={onChage}
                    className="fuction-orgazine-tgn-pvp-history-dig-add-select"
                  >
                    <option value="x" disabled selected>
                      Tuyển thủ
                    </option>
                    {listmem.map((vlu) => {
                      return <option value={vlu.id}>{vlu.NAME}</option>;
                    })}
                  </select>
                ) : (
                  <select
                    name="id"
                    onChange={onChage}
                    className="fuction-orgazine-tgn-pvp-history-dig-add-select"
                  >
                    <option value="x" disabled selected>
                      Tuyển thủ
                    </option>
                    <option value={vala.user_pvp_1}>{vala.NAMEA}</option>
                    <option value={vala.user_pvp_2}>{vala.NAMEB}</option>
                  </select>
                )}
                <select
                  name="result"
                  onChange={onChage}
                  className="fuction-orgazine-tgn-pvp-history-dig-add-select"
                >
                  <option value="x" disabled selected>
                    Kết quả
                  </option>
                  <option value="win">Thắng</option>
                  <option value="lost">Thua</option>
                  <option value="tie">Hòa</option>
                </select>
                <select
                  name="kill"
                  onChange={onChage}
                  className="fuction-orgazine-tgn-pvp-history-dig-add-select"
                >
                  <option value="x" disabled selected>
                    Kill
                  </option>
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
                <select
                  name="dead"
                  onChange={onChage}
                  className="fuction-orgazine-tgn-pvp-history-dig-add-select"
                >
                  <option value="x" disabled selected>
                    Status
                  </option>
                  <option value="0">Còn sống</option>
                  <option value="1">Đã chết</option>
                </select>
                <div
                  onClick={addMemPVP}
                  className="fuction-orgazine-tgn-pvp-history-dig-add-button"
                >
                  ADD
                </div>
              </div>
              <div className="fuction-orgazine-tgn-pvp-history-dig-table">
                <Table borderless>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Tuyển thủ</th>
                      <th>Đội tuyển</th>
                      <th>Kết quả</th>
                      <th>Point</th>
                      <th>Trạng thái</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listmempvp !== undefined && listmempvp !== null ? (
                      listmempvp.map((vlz, index) => {
                        return (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{vlz.NAME}</td>
                            <td>{vlz.CLUB !== null ? vlz.CLUB : "No club"}</td>
                            <td>{vlz.result}</td>
                            <td>{vlz.kills}</td>
                            <td>
                              {Number(vlz.dead) === 0 ? "Còn sống" : "Đã chết"}
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <div></div>
                    )}
                  </tbody>
                </Table>
              </div>
              GHI CHÚ TRẬN ĐẤU
              {vala.content_pvp !== null && vala.content_pvp !== "" ? (
                <div className="fuction-orgazine-tgn-pvp-history-dig-content">
                  {vala.content_pvp}
                </div>
              ) : (
                <div>Không có</div>
              )}
            </DialogContent>
            <DialogActions>
              <Button
                className={classes.boxStyle}
                variant="contained"
                color="primary"
                onClick={() => setOpen2(true)}
              >
                Delete
              </Button>
              <Button
                className={classes.boxStyle}
                variant="contained"
                color="primary"
                onClick={() => setOpen1(true)}
              >
                Edit Result
              </Button>
              <Button
                className={classes.boxStyle}
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleClose}
              >
                Close
              </Button>
            </DialogActions>
          </Dialog>

          <Dialog
            open={open2}
            onClose={handleClose2}
            style={{ zIndex: "50000" }}
          >
            <DialogContent className={classes.titleStyle}>
              Xóa trận đấu
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
              Bạn có chắc muốn xóa trận đấu này không?
            </DialogContent>
            <DialogActions>
              <Button
                className={classes.boxStyle}
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleClose2}
              >
                Close
              </Button>
              {open4 ? (
                <Button
                  className={classes.boxStyle}
                  variant="contained"
                  color="primary"
                  disabled
                >
                  Ok, Delete
                </Button>
              ) : (
                <Button
                  className={classes.boxStyle}
                  variant="contained"
                  color="primary"
                  onClick={saveDeletePVP}
                >
                  Ok, Delete
                </Button>
              )}
            </DialogActions>
          </Dialog>
          <Dialog
            open={open1}
            onClose={handleClose1}
            style={{ zIndex: "50000" }}
          >
            <DialogContent className={classes.titleStyle}>
              Cập nhật trận đấu
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
              Quản trị viên, kiểm duyệt viên vui lòng kiểm duyệt rõ ràng trước
              khi thêm, sửa, xóa một trận đấu.
              <br />
              <br />
              TỈ SỐ TRẬN ĐẤU
              <div className="fuction-orgazine-tgn-pvp-history-dig-edit-resul">
                <input
                  name="pvpa"
                  onChange={onChages}
                  type="text"
                  placeholder={vala.NAMEA}
                />{" "}
                vs{" "}
                <input
                  name="pvpb"
                  onChange={onChages}
                  type="text"
                  placeholder={vala.NAMEB}
                />
              </div>
              <br />
              HIỆP PHỤ
              <div className="fuction-orgazine-tgn-pvp-history-dig-edit-resul">
                <select onChange={openRound}>
                  <option value="0">Không hiệp phụ</option>
                  <option value="1">Có hiệp phụ</option>
                </select>
              </div>
              {open3 && (
                <div className="fuction-orgazine-tgn-pvp-history-dig-edit-resul">
                  <input onChange={onChages} name="roundr" type="text" />
                </div>
              )}
              <br />
              GHI CHÚ
              <div className="fuction-orgazine-tgn-pvp-history-dig-edit-resul">
                <textarea
                  onChange={onChages}
                  name="content"
                  type="text"
                  maxLength="500"
                />
              </div>
            </DialogContent>
            <DialogActions>
              <Button
                className={classes.boxStyle}
                variant="contained"
                color="primary"
                disableElevation
                onClick={handleClose1}
              >
                Close
              </Button>
              {open5 ? (
                <Button
                  className={classes.boxStyle}
                  variant="contained"
                  color="default"
                  disabled
                >
                  Ok, Save
                </Button>
              ) : (
                <Button
                  className={classes.boxStyle}
                  variant="contained"
                  color="primary"
                  onClick={saveEditPVP}
                >
                  Ok, Save
                </Button>
              )}
            </DialogActions>
          </Dialog>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default FuctionOrgazineTGNSubManagePVPHistory;
