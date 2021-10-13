import React, { useEffect, useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Axios from "axios";

function SMPDeletePost({
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
  const deletePost = () => {
    setOpen(false);

    Axios.post(keyAPI.apiEventStory, {
      id: PATH,
      token: TOKEN,
      ev: "removepost",
      ts: value.story_stt,
    })
      .then(({ data }) => {
        if (data.check === "xp") {
          history.push("/logout");
        } else {
          if (typeof data !== undefined) {
            if (data.resul === "ok") {
              newData.post_status = "delete";
              setDataStory((oldData) => {
                let newState;
                newState = oldData.map((val, index) => {
                  return val.story_stt === value.story_stt ? newData : val;
                });
                return newState;
              });
              const nextNotices = document.getElementById("snackbar-fooobe");
              nextNotices.className = "showSnackBarFooobe";
              nextNotices.innerText = "Đã gỡ bài viết";
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
        Gỡ bài viết
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
        Bạn có chắc chắn muốn gỡ bài viết này không?
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
          onClick={deletePost}
        >
          Xóa, gỡ
        </Button>
      </DialogActions>
    </div>
  );
}

export default SMPDeletePost;
