import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import {useHistory} from "react-router-dom";
import Button from "@material-ui/core/Button";
import Axios from "axios";

function SMPOffComment({ setOpen, classes, setOpenComment, TOKEN, PATH, value, keyAPI }) {

  let history = useHistory();
  const handleClose = () => {
    setOpen(false);
  };
  const onHandEvent = () => {
    setOpen(false);
    Axios.post(keyAPI.apiEventStory, {
      id: PATH,
      token: TOKEN,
      ev:"offcomment",
      ts: value.story_stt
    })
      .then(({ data }) => {
        if (data.check === "xp") {
          history.push("/logout");
        } else {
        if (typeof data !== undefined) {
          if(data.resul === "ok"){
            setOpenComment("off");
          }
        }}
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
  return (
    <div className="classCompSettins">
      <DialogContent className={classes.titleStyle}>Tắt tính năng bình luận</DialogContent>{" "}
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
          <br/>
        Bạn có chắc chắn muốn tắt tính năng bình luận của bài viết này không?
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
          onClick={onHandEvent}
        >
          Chắc chắn
        </Button>
      </DialogActions>
    </div>
  );
}

export default SMPOffComment;
