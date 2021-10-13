import React, { useEffect, useState } from "react";
import FuctionOrgazineTGNSubProfileSub from "./FuctionOrgazineTGNSubProfileSub";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Redirect } from "react-router-dom";
import Axios from "axios";

function FuctionOrgazineTGNSubProfile({
  val,
  mem,
  allMem,
  PATH,
  TOKEN,
  keyAPI,
  accTGN,
  setUpdateAcc,
  setHight,
  setAllMem,
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
  const [oldMem, setOldMem] = useState(null);
  const [open, setOpen] = useState(false);
  const [values, setValue] = useState("");
  const hanleRemove = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    Axios.post(keyAPI.apiTGNEventOrgazine, {
      id: PATH,
      token: TOKEN,
      ev: "leave",
      ts: mem.tgn_mem_org_stt,
    })
      .then(({ data }) => {
        if (typeof data !== undefined) {
          if (data.check === "xp") {
            return <Redirect to={"/logout"} />;
          } else {
            if (data.resul === 400) {
              setOpen(false);
            } else {
              setOpen(false);
              setHight(Math.floor(Math.random() * 100000));
              setUpdateAcc(Math.floor(Math.random() * 100000));
            }
          }
        } else {
          setOpen(false);
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
  const handleAdd = () => {
    Axios.post(keyAPI.apiTGNEventOrgazine, {
      id: PATH,
      token: TOKEN,
      ev: "add",
      ts: val.tgn_org_stt,
    })
      .then(({ data }) => {
        if (typeof data !== undefined) {
          if (data.check === "xp") {
            return <Redirect to={"/logout"} />;
          } else {
            if (data.resul === 400) {
            } else {
              setHight(Math.floor(Math.random() * 100000));
              setUpdateAcc(Math.floor(Math.random() * 100000));
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
  function removeText(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }
  const searchMem = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (values.length > 0) {
      setOldMem(
        allMem.filter(
          (item) =>
            removeText(item.NAME.toLowerCase()).indexOf(
              removeText(values).toLowerCase()
            ) !== -1
        )
      );
    } else {
      setOldMem(null);
    }
  }, [values]);
  return (
    <div>
      <div className="fuction-orgazine-tgn-sub-profile-title">
        {val.profile !== null && val.profile}
      </div>
      <div className="fuction-orgazine-tgn-sub-profile">
        {mem === null ? (
          <div
            className="fuction-orgazine-tgn-sub-profile-top"
            onClick={handleAdd}
          >
            Tham gia tổ chức
          </div>
        ) : (
          <div
            style={{ color: "black" }}
            className="fuction-orgazine-tgn-sub-profile-top"
            onClick={hanleRemove}
          >
            Rời tổ chức
          </div>
        )}
        <div className="fuction-orgazine-tgn-sub-profile-search">
          <input
            type="text"
            onChange={searchMem}
            placeholder="Bạn muốn tìm ai?"
            id="fuction-orgazine-tgn-sub-profile-search-id"
          />
        </div>
        <div className="fuction-orgazine-tgn-sub-profile-bot">
          {allMem !== null && oldMem === null
            ? allMem.map((value, idx) => {
                return (
                  <div>
                    {idx < 20 && (
                      <FuctionOrgazineTGNSubProfileSub
                        setUpdateAcc={setUpdateAcc}
                        accTGN={accTGN}
                        val={val}
                        value={value}
                        mem={mem}
                        PATH={PATH}
                        TOKEN={TOKEN}
                        keyAPI={keyAPI}
                      />
                    )}
                  </div>
                );
              })
            : oldMem !== null &&
              oldMem.map((value, idx) => {
                return (
                  <div>
                    {idx < 20 && (
                      <FuctionOrgazineTGNSubProfileSub
                        setUpdateAcc={setUpdateAcc}
                        accTGN={accTGN}
                        val={val}
                        value={value}
                        mem={mem}
                        PATH={PATH}
                        TOKEN={TOKEN}
                        keyAPI={keyAPI}
                      />
                    )}
                  </div>
                );
              })}
        </div>
      </div>
      <Dialog open={open} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          Rời tổ chức
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
          Bạn có chắc muốn rời tổ chức {val.tgn_name} không? <br />
          <br />
          Để hạn chế người chơi spam rời tổ chức, chúng tôi đặt quy định 10.000
          PGD phí khi rời. Hãy chắc chắn rằng bạn đã đọc thông báo này!
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
          {accTGN.PGD > 10000 ? (
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
    </div>
  );
}

export default FuctionOrgazineTGNSubProfile;
