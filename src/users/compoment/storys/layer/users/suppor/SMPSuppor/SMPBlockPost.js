import React from 'react';
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

function SMPBlockPost({setOpen, classes}) {
    const handleClose = () => {
        setOpen(false);
      };
    return (
        <div className="classCompSettins">
      <DialogContent className={classes.titleStyle}>Ẩn bài viết</DialogContent>{" "}
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
        Sau khi ẩn bài viết, bạn có thể mở lại nó trong phần cài đặt.
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
        >
          Ok, ẩn
        </Button>
      </DialogActions>
    </div>
    );
}

export default SMPBlockPost;