import React, {useState} from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

function DeleteComment({ setOpen, apiValue, setValue, keyAPI, TOKEN, PATH , value}) {
  let history = useHistory();
  const useStyles = makeStyles((theme) => ({
    deleteStyle: {
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
  const handleClose = () => {
    setOpen(false);
  };
  const [newData, setNewData] = useState(
    apiValue.filter((item) => item.STT === value.STT)[0]
  );

  const deleteComment = () => {
    setOpen(false);
    Axios.post(keyAPI.apiEventComment, {
      id: PATH,
      token: TOKEN,
      ev: "deletecomment",
      ts: value.STT,
    })
      .then(({ data }) => {
        console.log(data)
        if (data.check === "xp") {
          history.push("/logout");
        } else {
          if (typeof data !== undefined) {
            if (data.resul === "ok") {
              newData.status = "delete";
              setValue((oldData) => {
                let newState;
                newState = oldData.map((val, index) => {
                  return val.STT === value.STT ? newData : val;
                });
                return newState;
              });
              const nextNotices = document.getElementById("snackbar-fooobe");
              nextNotices.className = "showSnackBarFooobe";
              nextNotices.innerText = "Đã xóa bình luận";
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
      <DialogContent className={classes.titleStyle}>Gỡ bình luận</DialogContent>{" "}
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
        Bạn có chắc chắn muốn gỡ bình luận này không?
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
          onClick={deleteComment}
        >
          Xóa, gỡ bỏ
        </Button>
      </DialogActions>
    </div>
  );
}

export default DeleteComment;
