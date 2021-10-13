import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { FaSearch } from "react-icons/fa";
import {
  Avatar,
  DialogTitle,
  IconButton,
  makeStyles,
  Typography,
} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CreateIcon from "@material-ui/icons/Create";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SettingsOutlinedIcon from "@material-ui/icons/Close";
import PersonOutlineOutlinedIcon from "@material-ui/icons/Close";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/Close";
import HelpOutlineOutlinedIcon from "@material-ui/icons/Close";
import CancelPresentationOutlinedIcon from "@material-ui/icons/Close";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import PropTypes from "prop-types";
import AdjustIcon from "@material-ui/icons/Close";
import VolumeUpIcon from "@material-ui/icons/Close";
import Switch from "@material-ui/core/Switch";
import MonetizationOnIcon from "@material-ui/icons/Close";
import ChatIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Close";

function SuporMenuLeft(props) {
    const [opensetTing, setOpenSetting] = useState(false);

  function MenuLeftClick() {
    setOpenSetting(!opensetTing);
  }

  const useStyles = makeStyles({
    root: {
      border: 0,
      alignItems: "center",
      justifyContent: "center",
      minWidth: "30px",
      maxWidth: "30px",
      minHeight: "30px",
      maxHeight: "30px",
      borderRadius: "100%",
      margin: "2px 5px 2px 5px",
      background: "#f1f1f1",
      padding: "0px 10px 0px 10px",
    },
    rootList: {
      width: "95%",
      maxWidth: 360,
    },
    nested: {
      border: 0,
      borderRadius: "5px 5px 5px 5px",
    },
    nestedOption: {
      border: 0,
      borderRadius: "5px 5px 5px 5px",
      width: "500px",
    },
  });

  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const handleListItemClickOption = (event, index) => {
    setSelectedIndex(index);
    setOpen(true);
    setOpenSetting(!opensetTing);
  };

  const BootstrapDialog = (({ theme }) => ({
  
  }));

  const BootstrapDialogTitle = (props) => {
    const { children, onClose } = props;

    return (
      <DialogTitle sx={{ m: 2, p: 2 }}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              margin: "0",
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };


  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();

  return (
    <div>
      <div className="header-container-left">
        <div className="header-above">
          <Toolbar>
            <div className="label-above">Chat</div>
            <div className="button-above">
              <Button
                className={classes.root}
                variant="contained"
                onClick={MenuLeftClick}
              >
                <MoreHorizIcon style={{ width: "20px", height: "20px" }} />
              </Button>
              {opensetTing && (
                <div className="SettingIcon-market">
                  <div
                    style={{ marginLeft: "5px" }}
                    className={classes.rootList}
                  >
                    <List component="nav">
                      <ListItem
                        className={classes.nested}
                        button
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClickOption(event, 0)}
                      >
                        <ListItemIcon>
                          <SettingsOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tùy chọn" />
                      </ListItem>
                    </List>
                    <Divider />
                    <List component="nav">
                      <ListItem
                        className={classes.nested}
                        button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                      >
                        <ListItemIcon>
                          <PersonOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Người liên hệ hoạt động" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        button
                        
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                      >
                        <ListItemIcon>
                          <ChatBubbleOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tin nhắn đang chờ" />
                      </ListItem>
                      <ListItem
                        className={classes.nested}
                        button
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                      >
                        <ListItemIcon>
                          <CancelPresentationOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Đoạn chat lưu trữ" />
                      </ListItem>
                    </List>
                    <Divider />
                    <List component="nav">
                      <ListItem
                        className={classes.nested}
                        button
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                      >
                        <ListItemIcon>
                          <HelpOutlineOutlinedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Trợ giúp" />
                      </ListItem>
                    </List>
                  </div>
                </div>
              )}
              <Button className={classes.root} variant="contained">
                <VideoCallIcon style={{ width: "20px", height: "20px" }} />
              </Button>
              <Button className={classes.root} variant="contained">
                <CreateIcon style={{ width: "20px", height: "20px" }} />
              </Button>
            </div>
          </Toolbar>
        </div>
        <div className="header-below">
          <Toolbar>
            <div className="form-search">
              <input
                className="messenger-input-search"
                placeholder="Tìm kiếm trên Messager"
              ></input>
              <span className="icon">
                <FaSearch />
              </span>
            </div>
          </Toolbar>
        </div>
      </div>
      <div>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={open}
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={handleClose}
          ></DialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Tài Khoản
              <List component="nav">
                <ListItem className={classes.nestedOption} button>
                  <ListItemIcon>
                    <Avatar alt="Profile Picture" />
                  </ListItemIcon>
                  <ListItemText primary="Name Profile" />
                </ListItem>
              </List>
            </Typography>
            <Divider />
            <Typography gutterBottom>
              <List component="nav">
                <ListItem className={classes.nestedOption} button>
                  <ListItemIcon>
                    <AdjustIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tắt trạng thái và thông báo" />
                </ListItem>
              </List>
            </Typography>
            <Divider />
            <Typography gutterBottom>
              Thông báo
              <List component="nav">
                <div className="option-notification">
                  <ListItem className={classes.nestedOption}>
                    <ListItemIcon>
                      <VolumeUpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Âm thanh thông báo" />
                  </ListItem>
                  <Switch defaultChecked />
                </div>
              </List>
            </Typography>
            <Divider />
            <Typography gutterBottom>
              <List component="nav">
                <ListItem className={classes.nestedOption} button>
                  <ListItemIcon>
                    <MonetizationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quản lí khoản thanh toán" />
                </ListItem>
              </List>
              <List component="nav">
                <ListItem className={classes.nestedOption} button>
                  <ListItemIcon>
                    <ChatIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quản lí hoạt động gửi tin nhắn" />
                </ListItem>
              </List>
              <List component="nav">
                <ListItem className={classes.nestedOption} button>
                  <ListItemIcon>
                    <ErrorIcon />
                  </ListItemIcon>
                  <ListItemText primary="Quản lí phần chặn" />
                </ListItem>
              </List>
            </Typography>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default SuporMenuLeft;