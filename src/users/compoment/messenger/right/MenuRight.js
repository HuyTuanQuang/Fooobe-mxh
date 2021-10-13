import React from "react";
import { makeStyles } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import PaletteIcon from "@material-ui/icons/Palette";
import { FaThumbsUp } from "react-icons/fa";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import { BiMessageRoundedX } from "react-icons/bi";
import { BiBlock } from "react-icons/bi";
import WarningIcon from "@material-ui/icons/Warning";

function MenuRight({ index }) {
  const itemData = [
    {
      id: 1,
      title: "Header First",
      description: "Description First",
      image:
        "https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg",
      cols: 2,
    },
    {
      id: 2,
      title: "Header First",
      description: "Description First",
      image:
        "https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg",
    },
    {
      id: 3,
      title: "Header First",
      description: "Description First",
      image:
        "https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg",
      cols: 3,
    },
    {
      id: 4,
      title: "Header First",
      description: "Description First",
      image:
        "https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg",
    },
    {
      id: 5,
      title: "Header First",
      description: "Description First",
      image:
        "https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg",
      cols: 2,
    },
    {
      id: 6,
      title: "Header First",
      description: "Description First",
      image:
        "https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg",
    },
    {
      id: 7,
      title: "Header First",
      description: "Description First",
      image:
        "https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg",
    },
    {
      id: 8,
      title: "Header First",
      description: "Description First",
      image:
        "https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg",
    },
    {
      id: 9,
      title: "Header First",
      description: "Description First",
      image:
        "https://cdn.pixabay.com/photo/2021/05/12/12/33/greater-celandine-6248215_1280.jpg",
    },
  ];

  const useStyles = makeStyles({
    root: {
      border: 0,
      borderRadius: "10px 10px 10px 10px",
    },
    fontRight: {
      fontWeight: "bold",
    },
  });

  const useStylesAvatarRight = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  const useStylesMenuRight = makeStyles((theme) => ({
    root: {
      width: "100%",
      padding: "10px 10px 10px 10px",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    nested: {
      border: 0,
      borderRadius: "10px 10px 10px 10px",
      paddingLeft: theme.spacing(2),
    },
  }));

  const useStylesShareImages = makeStyles((theme) => ({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-around",
      backgroundColor: theme.palette.background.paper,
    },
    imageList: {
      padding: "10px 0 10px 0",
      width: "100%",
      height: 450,
      fontFamily: "Segoe UI Historic, Segoe UI, Helvetica, Arial, sans-serif",
    },
  }));

  const classShareImages = useStylesShareImages();

  const classes = useStyles();

  const classesAvatar = useStylesAvatarRight();

  const classesMenuRight = useStylesMenuRight();

  const [openSettingChat, setOpenSettingChat] = React.useState(false);

  const handleClickSettingChat = () => {
    setOpenSettingChat(!openSettingChat);
  };
  const [openPrimary, setOpenPrimary] = React.useState(false);

  const handleClickShareFile = () => {
    setOpenShareFile(!openShareFile);
  };
  const [openShareFile, setOpenShareFile] = React.useState(false);

  const handleClickPrimary = () => {
    setOpenPrimary(!openPrimary);
  };
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="container-right">
      <div className="header">
        <div className="right-header-above">
          <Avatar
            alt="Profile Picture"
            className={classesAvatar.large}
            src={index.person}
          />
        </div>
        <div className="right-header-below">
          <Link style={{ color: "#000", fontWeight: "bold" }}>
            {index.primary}
          </Link>
          <div className="label-status">Đang hoạt động</div>
        </div>
      </div>
      <div className="body-right">
        <div className="box-scroll-right">
          <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classesMenuRight.root}
          >
            <ListItem
              className={classes.root}
              button
              onClick={handleClickSettingChat}
            >
              <ListItemText primary="Tùy chỉnh đoạn chat" />
              {openSettingChat ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openSettingChat} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classesMenuRight.nested}>
                  <ListItemIcon style={{ minWidth: "35px" }}>
                    <PaletteIcon />
                  </ListItemIcon>
                  <ListItemText primary="Đổi chủ đề" />
                </ListItem>
                <ListItem button className={classesMenuRight.nested}>
                  <ListItemIcon style={{ minWidth: "35px" }}>
                    <FaThumbsUp />
                  </ListItemIcon>
                  <ListItemText primary="Thay đổi biểu tượng cảm xúc" />
                </ListItem>
                <ListItem button className={classesMenuRight.nested}>
                  <ListItemIcon style={{ minWidth: "35px" }}>Aa</ListItemIcon>
                  <ListItemText primary="Thay đổi biệt danh" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem
              className={classes.root}
              button
              onClick={handleClickPrimary}
            >
              <ListItemText primary="Quyền riêng tư & hỗ trợ" />
              {openPrimary ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openPrimary} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classesMenuRight.nested}>
                  <ListItemIcon style={{ minWidth: "35px" }}>
                    <NotificationsNoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="Tắt cuộc trò chuyện" />
                </ListItem>
                <ListItem button className={classesMenuRight.nested}>
                  <ListItemIcon style={{ minWidth: "35px" }}>
                    <BiMessageRoundedX
                      style={{ width: "20px", height: "20px" }}
                    />
                  </ListItemIcon>
                  <ListItemText primary="Bỏ qua cuộc trò chuyện" />
                </ListItem>
                <ListItem button className={classesMenuRight.nested}>
                  <ListItemIcon style={{ minWidth: "35px" }}>
                    <BiBlock style={{ width: "20px", height: "20px" }} />
                  </ListItemIcon>
                  <ListItemText primary="Chặn" />
                </ListItem>
                <ListItem button className={classesMenuRight.nested}>
                  <ListItemIcon style={{ minWidth: "35px" }}>
                    <WarningIcon />
                  </ListItemIcon>
                  <ListItemText primary="Có gì đó không ổn" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem
              className={classes.root}
              button
              onClick={handleClickShareFile}
            >
              <ListItemText primary="Tệp được chia sẻ" />
              {openShareFile ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={openShareFile} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItem button className={classesMenuRight.nested}>
                  <ListItemText primary="xxx.docs" />
                </ListItem>
              </List>
            </Collapse>

            <ListItem className={classes.root} button onClick={handleClick}>
              <ListItemText primary="File phương tiện được chia sẻ" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <div className={classShareImages.root}>
                {/* <ImageList
                  rowHeight={160}
                  className={classShareImages.imageList}
                  cols={3}
                >
                  {itemData.map((item) => (
                    <ImageListItem key={item.image} cols={item.cols || 1}>
                      <img src={item.image} alt={item.title} />
                    </ImageListItem>
                  ))}
                </ImageList> */}
              </div>
            </Collapse>
          </List>
        </div>
      </div>
    </div>
  );
}

export default MenuRight;
