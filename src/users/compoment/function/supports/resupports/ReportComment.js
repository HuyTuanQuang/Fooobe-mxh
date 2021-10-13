import React from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Chip from '@material-ui/core/Chip';

function ReportComment({setOpen}) {
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
    },
    cssButton:{
      width:"100%",
      textTransform: "none",

    }
  }));
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="classCompSettins">
      <DialogContent className={classes.titleStyle}>
          Báo cáo hoặc góp ý
      </DialogContent> 
    
      <div style={{width:"100%", height:"0.1px", backgroundColor:"rgba(201, 192, 192, 0.966)", marginTop:"10px", marginBottom:"15px"}}></div>
     

      <DialogContent className={classes.textStyle}>
          Hãy cho chúng tôi biết bình luận này xảy ra vấn đề gì?
          <br/>
          <br/>
          <Chip style={{fontWeight:"600"}} label="Khiêu dâm" />
          <br/>
          <br/>
          <div style={{width:"100%", height:"0.1px", backgroundColor:"rgba(201, 192, 192, 0.966)",  margin:"0 auto"}}></div>
  
          <span style={{fontWeight:"700", fontSize:"1.4rem", color:"grey"}}>Ngoài ra bạn có thể thực hiện các hành động sau</span>
          <br/>
          <br/>
          <Button className={classes.cssButton}>Chặn</Button>
          <Button className={classes.cssButton}>Chặn</Button>
          <Button className={classes.cssButton}>Chặn</Button>
          <Button className={classes.cssButton}>Chặn</Button>
          <Button className={classes.cssButton}>Chặn</Button>
          <Button className={classes.cssButton}>Chặn</Button>
      </DialogContent>
      <DialogActions>
        <Button color="primary" style={{textTransform:"none", fontWeight:"600"}} onClick={handleClose}>Hủy</Button>
        <Button className={classes.deleteStyle} variant="contained" color="primary" disableElevation>
          Gửi báo cáo
        </Button>
      </DialogActions>
    </div>
  );
}

export default ReportComment;
