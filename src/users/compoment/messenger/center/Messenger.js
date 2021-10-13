import React, { useState } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import CallIcon from "@material-ui/icons/Call";
import { makeStyles } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import VideocamIcon from "@material-ui/icons/Videocam";
import { FaThumbsUp } from "react-icons/fa";
import FaceIcon from "@material-ui/icons/Face";
import GifIcon from "@material-ui/icons/Gif";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";
import { FaRegGrinAlt } from "react-icons/fa";
import ReplyIcon from "@material-ui/icons/Reply";
import Link from "@material-ui/core/Link";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Tooltip from "@material-ui/core/Tooltip";
import ImageIcon from "@material-ui/icons/Image";

function Messenger({index}) {
    const [openAdd, setopenAdd] = useState(false);
  const handleClickAdd = () => {
    setopenAdd(!openAdd);
  };

  const useStyles = makeStyles({
    root: {
      border: 0,
      alignItems: "center",
      justifyContent: "center",
    },

    iconChat: {
      position: "absolute",
      right: 0,
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
    },
    iconAction: {
      alignItems: "center",
      justifyContent: "center",
      width: "20px",
      height: "20px",
    },
    input: {
      display: "none",
    },
    buttonImage: {
      padding: "5px 50px 5px 50px",
      border: "none",
      borderRadius: "10px 10px 10px 10px",
      background: "#bdbdbd",
      color: "#000",
    },
  });

  function ButtonImage() {
    const classes = useStyles();
    return (
      <>
        <input
          accept="image/*"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            className={classes.buttonImage}
            aria-label="upload picture"
            component="span"
          >
            <ImageIcon size="20px" />
          </IconButton>
        </label>
      </>
    );
  }
  function ButtonSticker() {
    const classes = useStyles();
    return (
      <IconButton
        className={classes.buttonImage}
        aria-label="upload picture"
        component="span"
      >
        <FaceIcon size="20px" />
      </IconButton>
    );
  }
  function ButtonGif() {
    const classes = useStyles();
    return (
      <IconButton
        className={classes.buttonImage}
        aria-label="upload picture"
        component="span"
      >
        <GifIcon size="20px" />
      </IconButton>
    );
  }

  function ButtonCall() {
    const classes = useStyles();
    return (
      <IconButton
        className={classes.root}
        color="default"
        size="small"
        variant="contained"
      >
        <CallIcon size="small" />
      </IconButton>
    );
  }
  function ButtonVideoCall() {
    const classes = useStyles();
    return (
      <IconButton
        className={classes.root}
        color="default"
        size="small"
        variant="contained"
      >
        <VideocamIcon size="small" />
      </IconButton>
    );
  }

  function ButtonLike() {
    return (
      <IconButton size="small">
        <FaThumbsUp size="18px" />
      </IconButton>
    );
  }

  function ButtonIconChat() {
    const classes = useStyles();
    return (
      <IconButton className={classes.iconChat} size="small">
        <FaRegGrinAlt />
      </IconButton>
    );
  }

  function ButtonMessActionFeel() {
    const classes = useStyles();
    return (
      <Tooltip title="Bày tỏ cảm xúc" placement="top">
        <IconButton className={classes.iconAction} size="small">
          <FaRegGrinAlt />
        </IconButton>
      </Tooltip>
    );
  }

  function ButtonMessActionReply() {
    const classes = useStyles();
    return (
      <Tooltip title="Trả lời" placement="top">
        <IconButton className={classes.iconAction} size="small">
          <ReplyIcon style={{ width: "20px", height: "20px" }} />
        </IconButton>
      </Tooltip>
    );
  }

  function ButtonMessActionMore() {
    const classes = useStyles();
    return (
      <Tooltip title="Thêm" placement="top">
        <IconButton className={classes.iconAction} size="small">
          <MoreVertIcon style={{ width: "20px", height: "20px" }} />
        </IconButton>
      </Tooltip>
    );
  }

  return (
    <div className="container-center">
      <div className="header-center">
        <Toolbar className="toolbar-left">
          <div className="header-left">
            <Avatar alt="Profile Picture" src={index.person} />
            <div className="label">
              <Link style={{ color: "#000", fontWeight: "bold" }}>
                {index.primary}
              </Link>
              <div className="label-status">Đang hoạt động</div>
            </div>
          </div>
          <div className="header-right">
            <ButtonCall />
            <ButtonVideoCall />
          </div>
        </Toolbar>
      </div>

      <div className="body-center">
        <div className="box-chat">
          <div className="row">
            <div className="row-left">
              <div className="content-mess-left">
                <div className="photo-mess-left">
                  <Avatar
                    alt="Profile Picture"
                    style={{ width: "20px", height: "20px" }}
                    src={index.person}
                  />
                </div>
                <div className="text-mess-left">{index.secondary}</div>
              </div>

              <div className="action-mess-left">
                <div className="text-mess-left-action">
                  <div className="icon-left-action">
                    <ButtonMessActionFeel />
                  </div>
                  <div className="icon-left-action">
                    <ButtonMessActionReply />
                  </div>
                  <div className="icon-left-action">
                    <ButtonMessActionMore />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row-right">
              <div className="action-mess-right">
                <div className="text-mess-right-action">
                  <div className="icon-right-action">
                    <ButtonMessActionMore />
                  </div>
                  <div className="icon-right-action">
                    <ButtonMessActionReply />
                  </div>
                  <div className="icon-right-action">
                    <ButtonMessActionFeel />
                  </div>
                </div>
              </div>
              <div className="content-mess-right">
                <div className="text-mess-right">{index.secondary}</div>
                <div className="photo-mess-right">
                  <Avatar
                    alt="Profile Picture"
                    style={{ width: "20px", height: "20px" }}
                    src={index.person}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        {openAdd && (
          <div className="form-icon">
            <div className="icon-chat">
              <ButtonImage />
            </div>
            <div className="icon-chat">
              <ButtonSticker />
            </div>
            <div className="icon-chat">
              <ButtonGif />
            </div>
          </div>
        )}
        <div className="footer-chat">
          <Toolbar>
            <div className="form-menu">
              <IconButton size="small" onClick={handleClickAdd}>
                {openAdd ? <CloseIcon size="18px" /> : <AddIcon size="18px" />}
              </IconButton>
            </div>
            <div className="form-chat">
              <div className="form-input-chat">
                <input className="input-chat" placeholder="Aa"></input>
                <ButtonIconChat />
              </div>
            </div>
            <div className="form-like">
              <ButtonLike />
            </div>
          </Toolbar>
        </div>
      </div>
    </div>
  );
}

export default Messenger;