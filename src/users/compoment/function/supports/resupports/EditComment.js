import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


function EditComment({setOpen}) {
  const useStyles = makeStyles((theme) => ({
    deleteStyle: {
      fontWeight:"bold",
      fontSize: "0.9rem",
      backgroundColor: "#23b4c5",
      textTransform: "none"
    },
    textStyle:{
      color: "black",
      marginTop: "-20px",
      marginBottom: "20px"
    },
    titleStyle:{
      color: "black",
      marginTop: "-10px",
      marginBottom: "-10px",
      fontWeight:"bold",
      fontSize:"1.4rem"
    }
  }));
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="classCompSettins">
      <DialogContent className={classes.titleStyle}>
          Chỉnh sửa bình luận này
      </DialogContent><div style={{width:"100%", height:"0.1px", backgroundColor:"rgba(201, 192, 192, 0.966)", marginTop:"10px", marginBottom:"15px"}}></div>
     

      <DialogContent className={classes.textStyle}>
          Bạn có chắc chắn muốn gỡ bình luận này không?
      </DialogContent>
      <DialogActions>
        <Button color="primary" style={{textTransform:"none", fontWeight:"600"}} onClick={handleClose}>Hủy</Button>
        <Button className={classes.deleteStyle} variant="contained" color="primary" disableElevation>
          Lưu
        </Button>
      </DialogActions>
    </div>
  );
}

export default EditComment;
