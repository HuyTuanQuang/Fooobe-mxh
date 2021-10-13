import React, { useEffect, useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function SMPNotificationPost({
  setOpen,
  classes,
  setSnackBar,
  value,
  keyAPI,
  TOKEN,
  PATH,
  dataStory,
  setDataStory,
}) {
  let history = useHistory();
  const [newData, setNewData] = useState(
    dataStory.filter((item) => item.story_stt === value.story_stt)[0]
  );
  console.log(newData);
  const handleClose = () => {
    setOpen(false);
  };
  const offNotice = () => {
    setOpen(false);
    if (value.STORYNOTICE === "offnotice") {
      Axios.post(keyAPI.apiEventStory, {
        id: PATH,
        token: TOKEN,
        ev: "opennotice",
        ts: value.story_stt,
      })
        .then(({ data }) => {
          console.log("bật");
          if (data.check === "xp") {
            history.push("/logout");
          } else {
            if (typeof data !== undefined) {
              if (data.resul === "ok") {
                newData.STORYNOTICE = null;
                setDataStory((oldData) => {
                  let newState;
                  newState = oldData.map((val, index) => {
                    return val.story_stt === value.story_stt ? newData : val;
                  });
                  return newState;
                });
                const nextNotices = document.getElementById("snackbar-fooobe");
                nextNotices.className = "showSnackBarFooobe";
                nextNotices.innerText = "Đã bật thông báo bài viết";
                setTimeout(function () {
                  nextNotices.className = nextNotices.className.replace(
                    "showSnackBarFooobe",
                    "showSnackBarFooobe-2"
                  );
                }, 5000);
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
    } else {
      Axios.post(keyAPI.apiEventStory, {
        id: PATH,
        token: TOKEN,
        ev: "offnotice",
        ts: value.story_stt,
      })
        .then(({ data }) => {
          console.log("tắt");
          if (data.check === "xp") {
            history.push("/logout");
          } else {
            if (typeof data !== undefined) {
              if (data.resul === "ok") {
                newData.STORYNOTICE = "offnotice";
                setDataStory((oldData) => {
                  let newState;
                  newState = oldData.map((val, index) => {
                    return val.story_stt === value.story_stt ? newData : val;
                  });
                  return newState;
                });
                const nextNotices = document.getElementById("snackbar-fooobe");
                nextNotices.className = "showSnackBarFooobe";
                nextNotices.innerText = "Đã tắt thông báo bài viết";
                setTimeout(function () {
                  nextNotices.className = nextNotices.className.replace(
                    "showSnackBarFooobe",
                    "showSnackBarFooobe-2"
                  );
                }, 5000);
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
    }
  };

  return (
    <div className="classCompSettins">
      <DialogContent className={classes.titleStyle}>
        {value.STORYNOTICE === "offnotice"
          ? "Bật thông báo bài viết"
          : "Tắt thông báo bài viết"}
      </DialogContent>{" "}
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
        <br />
        {value.STORYNOTICE === "offnotice"
          ? "Bạn có chắc chắn muốn bật thông báo bài viết này không?"
          : "Bạn có chắc chắn muốn tắt thông báo bài viết này không?"}
      </DialogContent>
      <DialogActions>
        <Button
          color="primary"
          style={{ textTransform: "none", fontWeight: "600" }}
          onClick={handleClose}
        >
          Hủy
        </Button>
        <Button
          className={classes.deleteStyle}
          variant="contained"
          color="primary"
          disableElevation
          onClick={offNotice}
        >
          Chắc chắn
        </Button>
      </DialogActions>
    </div>
  );
}

export default SMPNotificationPost;
