import React from "react";
import Button from "@material-ui/core/Button";

function SettingUserComment({ classes, bgMau, setOpen,  setEvent }) {
  const handleClickOpen = (event, index) => {
    setOpen(true);
    setEvent(index)
  };

  
  return (
    <div>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event,  1)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          Gỡ bình luận
        </div>
      </Button>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 2)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          Chỉnh sửa bình luận
        </div>
      </Button>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event,  3)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          Đã có lỗi sảy ra?
        </div>
      </Button>
    </div>
  );
}

export default SettingUserComment;
