import React, { useState } from "react";
import DialogContent from "@material-ui/core/DialogContent";
import PublicIcon from "@material-ui/icons/Public";
import PrivateIcon from "@material-ui/icons/Https";
import GroupIcon from "@material-ui/icons/Group";
import { useHistory } from "react-router-dom";
import Axios from "axios";

function SPMChangeDisplayPost({
  classes,
  setOpen,
  value,
  setDataStory,
  dataStory,
  keyAPI,
  TOKEN,
  PATH,
}) {
  let history = useHistory();
  const [newData, setNewData] = useState(
    dataStory.filter((item) => item.story_stt === value.story_stt)[0]
  );
  const handleClose = () => {
    setOpen(false);
  };
  const changeDisplay = (mode) => {
    setOpen(false);
    Axios.post(keyAPI.apiEventStory, {
      id: PATH,
      token: TOKEN,
      ev: "changedisplay",
      ts: value.story_stt,
      tsv: mode,
    })
      .then(({ data }) => {
        if (data.check === "xp") {
          history.push("/logout");
        } else {
          if (typeof data !== undefined) {
            if (data.resul === "ok") {
              newData.post_display_mode = mode;
              setDataStory((oldData) => {
                let newState;
                newState = oldData.map((val, index) => {
                  return val.story_stt === value.story_stt ? newData : val;
                });
                return newState;
              });
              const nextNotices = document.getElementById("snackbar-fooobe");
              nextNotices.className = "showSnackBarFooobe";
              nextNotices.innerText =
                "Bài viết đã được đặt chế độ " +
                (mode === "public"
                  ? "công khai"
                  : mode === "friend"
                  ? "bạn bè"
                  : "chỉ mình tôi");
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
  };

  return (
    <div className="classCompSettins">
      <DialogContent className={classes.titleStyle}>
        Thay đổi chế độ hiển thị
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
        <div
          className="class-setting-storys"
          onClick={() => changeDisplay("public")}
        >
          <div className="class-setting-storys-icon">
            <PublicIcon />
          </div>
          <div>Công khai với mọi người</div>
        </div>
        <div
          className="class-setting-storys"
          onClick={() => changeDisplay("friend")}
        >
          <div className="class-setting-storys-icon">
            <GroupIcon />
          </div>
          <div>Hiển thị với bạn bè</div>
        </div>
        <div
          className="class-setting-storys"
          onClick={() => changeDisplay("private")}
        >
          <div className="class-setting-storys-icon">
            <PrivateIcon />
          </div>
          <div>Chỉ mình tôi</div>
        </div>
      </DialogContent>
    </div>
  );
}

export default SPMChangeDisplayPost;
