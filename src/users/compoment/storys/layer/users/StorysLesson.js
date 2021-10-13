import React, { useCallback, useEffect, useMemo, useState } from "react";
import Axios from "axios";

import { Redirect, Link, useLocation, useHistory } from "react-router-dom";
import PublicIcon from "@material-ui/icons/Public";
import PrivateIcon from "@material-ui/icons/Https";
import Button from "@material-ui/core/Button";
import LikeIcons from "../../../../../img/like.png";
import HeartIcon from "../../../../../img/tym.png";
import HahaIcon from "../../../../../img/haha.png";
import AngryIcon from "../../../../../img/angry.png";
import WowIcon from "../../../../../img/wow.png";
import SadIcon from "../../../../../img/sad.png";
import TickGreen from "../../../../../img/tickgreen.ico";
import Avatar from "../../../../../img/avatar.ico";
import LikeIcon from "../../../../../img/blacklike.png";
import ShareIcon from "../../../../../img/share.png";
import CommentIcon from "../../../../../img/blackcomment.png";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import GifIcon from "@material-ui/icons/Gif";
import { Markup } from "interweave";
import CloseIcon from "@material-ui/icons/Close";
import GroupIcon from "@material-ui/icons/Group";
//
import Moment from "react-moment";
import Tooltip from "@material-ui/core/Tooltip";
import SelectMenu from "@material-ui/icons/MoreHoriz";
import Images from "../../../gridphoto/Images";
import SettingMenuPost from "./suppor/SettingMenuPost";
import Comments from "../../../function/Comments";
import { RiSendPlaneFill } from "react-icons/ri";
import { FaUserPlus } from "react-icons/fa";
import { HiChat, HiDotsHorizontal } from "react-icons/hi";
//
import { EditorState, convertToRaw } from "draft-js";
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
//import csss
import "draft-js/dist/Draft.css";
import createMentionPlugin, {
  defaultSuggestionsFilter,
} from "@draft-js-plugins/mention";
//import mentions from "./mentions";
import "@draft-js-plugins/mention/lib/plugin.css";
//hastag
import "@draft-js-plugins/hashtag/lib/plugin.css";
//hastag
import createHashtagPlugin from "@draft-js-plugins/hashtag";
import hashtagStyles from "../../../storys/storysStatus/style/hastag.module.css";
//link
import createLinkifyPlugin from "@draft-js-plugins/linkify";

//Image
import ImageUploading from "react-images-uploading";
//
import {
  FcMms,
  FcSelfie,
  FcPuzzle,
  FcMindMap,
  FcLikePlaceholder,
} from "react-icons/fc";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "@material-ui/lab/Skeleton";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });
const linkifyPlugin = createLinkifyPlugin();
var moment = require("moment-timezone");

//
function StorysLesson({
  bgMau,
  value,
  index,
  keyAPI,
  listFriend,
  dataAcc,
  TOKEN,
  PATH,
  setSnackBar,
  setDataStory,
  dataStory,
}) {
  const useStyles = makeStyles((theme) => ({
    root: {
      padding: "2px 4px",
      display: "flex",
      alignItems: "center",
      width: "90%",
      borderRadius: "25px",
      boxShadow: "0px 0px 1px white",
      border: "0.2px solid grey",
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      paddingLeft: "5px",
      outline: "none",
      paddingBottom: "7px",
      width: "60%",
    },
    iconButton: {
      padding: 10,
      color: "#aeafb1",
    },
    divider: {
      height: 28,
      margin: 4,
      color: "#aeafb1",
    },
    custoTootil: {
      maxWidth: 500,
      fontWeight: "bold",
      float: "left",
    },
    iconTootil: {
      maxWidth: 100,
      fontWeight: "bold",
      float: "left",
    },
    iconTootix: {
      maxWidth: 150,
      fontWeight: "bold",
      float: "left",
      textAlign: "center",
    },
    arrow: {
      color: "rgba(85, 84, 84, 0.705)",
    },
    function: {
      width: "100%",
      height: "40px",
      textTransform: "none",
      fontFamily: "Tahoma",
      textAlign: "left",
    },
  }));

  const dataComents = {
    story_stt: value.story_stt,
    fake_content: " ",
    content: " ",
    sticker: null,
    image_video: null,
    type_comment: "user",
    page_id: null,
  };
  //state
  let history = useHistory();
  const [openComment, setOpenComment] = useState(value.comment);
  const [anchorID, setAnchorID] = useState("");
  const [state, setState] = useState(() => EditorState.createEmpty());
  const [state2, setState2] = useState(listFriend);
  const [dataComent, setDataComment] = useState(dataComents);
  const [loadComment, setLoadComment] = useState(0);
  const [image, setImages] = useState("");
  const [openFile, setOpenFile] = useState(false);
  const [countCmt, setCountCmt] = useState(Number(value.COUNTCMT));
  const [countShare, setCountShare] = useState(value.COUNTSHARE);
  const [countReact, setCountReact] = useState(
    Number(value.COUNTLIKE) +
      Number(value.COUNTHAHA) +
      Number(value.COUNTWOW) +
      Number(value.COUNTSAD) +
      Number(value.COUNTLOVE) +
      Number(value.COUNTANGRY)
  );
  const [reactions, setReactions] = useState(value.REACTTIONS);
  const [showLess, setShowLess] = React.useState(false);
  const [taskText, setTaskText] = useState("text");
  const [open2, setOpen2] = useState(false);
  const editor = React.useRef(null);
  const [progress, setProgress] = useState(null);
  //
  const { MentionSuggestions, plugins } = useMemo(() => {
    const mentionPlugin = createMentionPlugin();

    // eslint-disable-next-line no-shadow
    const { MentionSuggestions } = mentionPlugin;
    // eslint-disable-next-line no-shadow
    const plugins = [mentionPlugin, hashtagPlugin, linkifyPlugin];
    return { plugins, MentionSuggestions };
  }, []);
  const [open1, setOpen1] = useState(false);
  const onOpenChange = useCallback((_open: boolean) => {
    setOpen1(_open);
  }, []);

  const onSearchChange = useCallback(({ value }: { value: string }) => {
    setState2(defaultSuggestionsFilter(value, listFriend));
  }, []);
  const onExtractMentions = () => {
    const contentState = state.getCurrentContent();
    const raw = convertToRaw(contentState);
    let mentionedUsers = [];

    for (let key in raw.entityMap) {
      const ent = raw.entityMap[key];
      if (ent.type === "mention") {
        mentionedUsers.push(ent.data.mention);
        mentionedUsers = [];
      }
    }
  };

  const handleClickSettingMenu = (event, valueID) => {
    const settingID = document.getElementById(valueID);
    const settingAnchorID = document.getElementById(anchorID);
    if (anchorID === "") {
      settingID.style.display = "block";
      setAnchorID(valueID);
    }
    if (anchorID !== "" && anchorID !== valueID) {
      settingAnchorID.style.display = "none";
      settingID.style.display = "block";
      setAnchorID(valueID);
    }
    if (anchorID !== "" && anchorID === valueID) {
      settingAnchorID.style.display = "none";
      setAnchorID("");
    }
  };

  //Sự kiện onchange
  const hekegu = (event) => {
    setDataComment({
      ...dataComent,
      content: event.currentTarget,
      fake_content: event.currentTarget.textContent,
    });
  };

  //Send điện thoại
  const sendComment = (event) => {
    if (
      typeof dataComent.fake_content === "undefined" ||
      !dataComent.fake_content ||
      dataComent.fake_content.length === 0 ||
      dataComent.fake_content === "" ||
      !/[^\s]/.test(dataComent.fake_content) ||
      /^\s*$/.test(dataComent.fake_content) ||
      dataComent.fake_content.replace(/\s/g, "") === ""
    ) {
      if (
        (image.length > 5 && image !== "undefined" && image !== null) ||
        (dataComent.sticker !== null && dataComent.sticker.length > 5)
      ) {
        setState(() => EditorState.createEmpty());
        const timez = new Date();
        var times = moment
          .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
          .tz("Asia/Saigon")
          .format("YYYY/MM/DD HH:mm:ss");

        Axios.post(keyAPI.apiInsertComment, {
          id: PATH,
          story_stt: dataComent.story_stt,
          fake_comment: dataComent.fake_content.substring(0, 100),
          content: dataComent.content.outerHTML,
          sticker: dataComent.sticker,
          image_video: image,
          time_comment: times,
          type_comment: dataComent.type_comment,
          page_id: dataComent.page_id,
          token: TOKEN,
        })
          .then(({ data }) => {
            setLoadComment(loadComment + 1);
            setDataComment(dataComents);
            setImages("");
            setProgress(null);
            setOpenFile(false);
            if (countCmt < 1) {
              setCountCmt(1);
            } else {
              setCountCmt(Number(countCmt) + 1);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      setState(() => EditorState.createEmpty());
      const timez = new Date();
      var times = moment
        .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
        .tz("Asia/Saigon")
        .format("YYYY/MM/DD HH:mm:ss");
      if (/^\s*$/.test(dataComent.fake_content)) {
        event.preventDefault();
      } else if (dataComent.fake_content.length > 150) {
        Axios.post(keyAPI.apiInsertComment, {
          id: PATH,
          story_stt: dataComent.story_stt,
          fake_comment: dataComent.fake_content.substring(0, 100),
          content: dataComent.content.outerHTML,
          sticker: dataComent.sticker,
          image_video: image,
          time_comment: times,
          type_comment: dataComent.type_comment,
          page_id: dataComent.page_id,
          token: TOKEN,
        })
          .then(({ data }) => {
            setLoadComment(loadComment + 1);
            setDataComment(dataComents);
            setImages("");
            setProgress(null);
            setOpenFile(false);
            if (countCmt < 1) {
              setCountCmt(1);
            } else {
              setCountCmt(Number(countCmt) + 1);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        Axios.post(keyAPI.apiInsertComment, {
          id: PATH,
          story_stt: dataComent.story_stt,
          fake_comment: "",
          content: dataComent.content.outerHTML,
          sticker: dataComent.sticker,
          image_video: image,
          time_comment: times,
          type_comment: dataComent.type_comment,
          page_id: dataComent.page_id,
          token: TOKEN,
        })
          .then(({ data }) => {
            setLoadComment(loadComment + 1);
            setDataComment(dataComents);
            setImages("");
            setProgress(null);
            setOpenFile(false);
            if (countCmt < 1) {
              setCountCmt(1);
            } else {
              setCountCmt(Number(countCmt) + 1);
            }
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  };

  //Sự kiện bàn phím
  const handleKeyDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      event.preventDefault();
    } else if (event.shiftKey && event.keyCode === 13) {
      event.preventDefault();
    } else if (event.keyCode === 13) {
      event.preventDefault();
      //Đang lỗi chỗ này nè
      if (window.innerWidth > 1000) {
        if (
          typeof dataComent.fake_content === "undefined" ||
          !dataComent.fake_content ||
          dataComent.fake_content.length === 0 ||
          dataComent.fake_content === "" ||
          !/[^\s]/.test(dataComent.fake_content) ||
          /^\s*$/.test(dataComent.fake_content) ||
          dataComent.fake_content.replace(/\s/g, "") === ""
        ) {
          if (
            (image.length > 5 && image !== "undefined" && image !== null) ||
            (dataComent.sticker !== null && dataComent.sticker.length > 5)
          ) {
            setState(() => EditorState.createEmpty());
            const timez = new Date();
            var times = moment
              .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
              .tz("Asia/Saigon")
              .format("YYYY/MM/DD HH:mm:ss");

            Axios.post(keyAPI.apiInsertComment, {
              id: PATH,
              story_stt: dataComent.story_stt,
              fake_comment: dataComent.fake_content.substring(0, 100),
              content: dataComent.content.outerHTML,
              sticker: dataComent.sticker,
              image_video: image,
              time_comment: times,
              type_comment: dataComent.type_comment,
              page_id: dataComent.page_id,
              token: TOKEN,
            })
              .then(({ data }) => {
                setLoadComment(loadComment + 1);
                setDataComment(dataComents);
                setImages("");
                setProgress(null);
                setOpenFile(false);
                if (countCmt < 1) {
                  setCountCmt(1);
                } else {
                  setCountCmt(Number(countCmt) + 1);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        } else {
          setState(() => EditorState.createEmpty());
          const timez = new Date();
          var times = moment
            .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
            .tz("Asia/Saigon")
            .format("YYYY/MM/DD HH:mm:ss");
          if (dataComent.fake_content.length > 150) {
            Axios.post(keyAPI.apiInsertComment, {
              id: PATH,
              story_stt: dataComent.story_stt,
              fake_comment: dataComent.fake_content.substring(0, 100),
              content: dataComent.content.outerHTML,
              sticker: dataComent.sticker,
              image_video: image,
              time_comment: times,
              type_comment: dataComent.type_comment,
              page_id: dataComent.page_id,
              token: TOKEN,
            })
              .then(({ data }) => {
                setLoadComment(loadComment + 1);
                setDataComment(dataComents);
                setImages("");
                setProgress(null);
                setOpenFile(false);
                if (countCmt < 1) {
                  setCountCmt(1);
                } else {
                  setCountCmt(Number(countCmt) + 1);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            Axios.post(keyAPI.apiInsertComment, {
              id: PATH,
              story_stt: dataComent.story_stt,
              fake_comment: "",
              content: dataComent.content.outerHTML,
              sticker: dataComent.sticker,
              image_video: image,
              time_comment: times,
              type_comment: dataComent.type_comment,
              page_id: dataComent.page_id,
              token: TOKEN,
            })
              .then(({ data }) => {
                setLoadComment(loadComment + 1);
                setDataComment(dataComents);
                setImages("");
                setProgress(null);
                setOpenFile(false);
                if (countCmt < 1) {
                  setCountCmt(1);
                } else {
                  setCountCmt(Number(countCmt) + 1);
                }
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      } else {
      }
    }
  };
  function checkNull(vals) {
    if (vals === null || vals === undefined || vals === "") {
      return false;
    } else {
      return true;
    }
  }
  //Sự kiện upload image
  const onChangeImages = (imageList, addUpdateIndex) => {
    setProgress(0);
    setOpenFile(true);
    var uuid = require("uuid");
    const tunhien = uuid.v4();
    const tunhien2 = uuid.v4();
    const tunhien4 = uuid.v4();
    const tunhien3 = "fo" + Math.floor(Math.random() * 100000);
    const formData = new FormData();
    let last_dot = imageList[0].file.name.lastIndexOf(".");
    let ext = imageList[0].file.name.slice(last_dot + 1);
    const progressBar = {
      onUploadProgress: (progressEvent) => {
        setProgress(
          Math.round(Number((progressEvent.loaded / progressEvent.total) * 100))
        );
      },
    };
    // upload data cho đối tượng formdata
    formData.append(
      "myFile",
      imageList[0].file,
      tunhien + tunhien2 + tunhien4 + "-" + tunhien3 + "." + ext
    );
    formData.append("id", PATH);
    formData.append("token", TOKEN);

    Axios.post(keyAPI.apiPostImages, formData, progressBar)
      .then(({ data }) => {
        if (data.check === "xp") {
          history.push("/logout");
        } else {
          setImages(tunhien + tunhien2 + tunhien4 + "-" + tunhien3 + "." + ext);
        }
      })
      .catch((error) => {});
  };

  //
  const closeImages = () => {
    setImages("");
    setOpenFile(false);
    setProgress(null);
  };

  const openCommentChose = () => {
    setOpen2(true);
    editor.current.focus();
  };

  const reactUpdate = (values, extent) => {
    const timez = new Date();

    var times = moment
      .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
      .tz("Asia/Saigon")
      .format("YYYY/MM/DD HH:mm:ss");

    Axios.post(keyAPI.apiInsertReactionsStory, {
      id: PATH,
      story_stt: value.story_stt,
      time_react: times,
      reactions: values,
      token: TOKEN,
      events: extent,
    })
      .then(({ data }) => {
        if (data.resul === 1) {
          setReactions(values);
          setCountReact(Number(countReact) + 1);
        } else if (data.resul === 2) {
          setReactions(values);
          setCountReact(Number(countReact));
        } else if (data.resul === 3) {
          setReactions(null);
          setCountReact(Number(countReact) - 1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const btnAdd = document.querySelector("#task115" + index);

  if (btnAdd !== null) {
    btnAdd.addEventListener("click", function () {
      history.push("/post/" + value.story_stt);
    });
  }

  //Nhấp link phân biệt có phải link fooobe
  const hastags = document.getElementsByClassName("hastagf" + index);
  for (var i = 0; i < hastags.length; i++) {
    const textHTML = document.getElementsByClassName("hastagf" + index)[i]
      .innerHTML;
    const textPure = document.getElementsByClassName("hastagf" + index)[i]
      .innerText;
    document.getElementsByClassName("hastagf" + index)[
      i
    ].innerHTML = `<a href="/hastag/${textPure.slice(1)}/" class="${
      "foahref" + index
    }" style="text-decoration: none;">${textHTML}</a>`;
  }
  const articles = document.getElementsByClassName("foahref" + index);
  for (var i = 0; i < articles.length; i++) {
    const lea = document.getElementsByClassName("foahref" + index)[i].href;
    articles[i].addEventListener("click", function (event) {
      event.preventDefault();
      if (getDomain(lea) == "fooobe.com") {
        let newUrl = new URL(lea);
        if (newUrl.pathname.length > 3) {
          history.push(newUrl.pathname);
        } else {
          history.push("/");
        }
      } else {
        window.open(lea, "_blank");
      }
    });
  }
  function getDomain(url) {
    url = url.replace(/(https?:\/\/)?(www.)?/i, "");

    if (url.indexOf("/") !== -1) {
      return url.split("/")[0];
    }

    return url;
  }

  function createMarkupTextFO() {
    if (value.fake_content !== "") {
      var newText = value.fake_content.slice(145, 155);
      if (value.fake_content.slice(0, 145).indexOf(newText) === -1) {
        var hashText = value.content.indexOf(newText);
        if (hashText !== -1) {
          return value.content
            .slice(0, hashText + 9)
            .concat(
              `<a style="color: #aeafaf; cursor: pointer; text-decoration: none;" id="${
                "task115" + index
              }">... Xem thêm</a>`
            )
            .replaceAll(`class="lxvs42t"`, `class="lxvs42t foahref${index}" `)
            .replaceAll(
              `class="hastag_hashtag__3d_91"`,
              `class="hastag_hashtag__3d_91 hastagf${index}" `
            );
        } else {
          const sellText = value.content.slice(1450, 1550).indexOf(">");
          if (sellText !== -1) {
            return value.content
              .slice(0, value.content.slice(0, 1550).lastIndexOf(">") + 1)
              .concat(
                `<a style="color: #aeafaf; cursor: pointer; text-decoration: none;" id="${
                  "task115" + index
                }">... Xem thêm</a>`
              )
              .replaceAll(`class="lxvs42t"`, `class="lxvs42t foahref${index}" `)
              .replaceAll(
                `class="hastag_hashtag__3d_91"`,
                `class="hastag_hashtag__3d_91 hastagf${index}" `
              );
          } else {
            const endText = value.content.slice(1450, 1550).indexOf("<");
            if (endText !== -1) {
              return value.content
                .slice(0, value.content.slice(0, 1550).lastIndexOf("<"))
                .concat(
                  `<a style="color: #aeafaf; cursor: pointer; text-decoration: none;" id="${
                    "task115" + index
                  }">... Xem thêm</a>`
                )
                .replaceAll(
                  `class="lxvs42t"`,
                  `class="lxvs42t foahref${index}" `
                )
                .replaceAll(
                  `class="hastag_hashtag__3d_91"`,
                  `class="hastag_hashtag__3d_91 hastagf${index}" `
                );
            } else {
              return value.content
                .replaceAll(
                  `class="lxvs42t"`,
                  `class="lxvs42t foahref${index}" `
                )
                .replaceAll(
                  `class="hastag_hashtag__3d_91"`,
                  `class="hastag_hashtag__3d_91 hastagf${index}" `
                );
            }
          }
        }
      }
    }
  }
  const [addMenu, setAddMenu] = useState(false);
  const menuRightClick = (e) => {
    // e.preventDefault();
    if (e.type === "contextmenu") {
      // const clickX = e.clientX ;
      // const clickY = e.clientY ;
      // const screenW = window.innerWidth;
      // const screenH = window.innerHeight;
      // const rootW = document.body.offsetWidth;
      // const rootH = document.body.offsetHeight;
      // alert(screenH + " " + screenW + " " + clickY + " "+ clickX)
      //       const right = (screenW - clickX) > rootW;
      //       const left = !right;
      //       const top = (screenH - clickY) > rootH;
      //       const bottom = !top;
      //       const widthX = 0;
      //       const heightY = 0;
      //   if (right) {
      //     widthX = `${clickX + 5}px`;
      // }
      // if (left) {
      //   widthX = `${clickX - rootW - 5}px`;
      // }
      // if (top) {
      //   heightY = `${clickY + 5}px`;
      // }
      // if (bottom) {
      //   heightY = `${clickY - rootH - 5}px`;
      // }
      // document.getElementById("menuRight"+index).style.marginLeft = (clickX-360) + "px";
      // document.getElementById("menuRight"+index).style.marginTop = (clickY-320) + "px";
      // document.getElementById("menuRight"+index).style.display = "block";
      // setAddMenu(true);
    }
  };
  //   document.addEventListener("click", function(evt) {
  //     if(addMenu === true){
  //     setAddMenu(false)
  //     document.getElementById("menuRight"+index).style.display = "none";
  //     }
  // });
  const classes = useStyles();
  const onErrorImage = (errors) => {
    const nextNotices = document.getElementById("snackbar-fooobe");
    nextNotices.className = "showSnackBarFooobe";
    if (errors.acceptType) {
      nextNotices.innerText = "Định dạng hình ảnh không phù hợp";
    } else if (errors.maxFileSize) {
      nextNotices.innerText = "Kích thước tệp không được vượt quá 3mb";
    } else if (errors.maxNumber) {
      nextNotices.innerText = "Bạn không thể gửi nhiều hơn 500 hình ảnh";
    }
    setTimeout(function () {
      nextNotices.className = nextNotices.className.replace(
        "showSnackBarFooobe",
        "showSnackBarFooobe-2"
      );
    }, 5000);
  };
  return (
    <div
      key={index}
      className={bgMau === "white" ? "story-container" : "story-container2"}
      style={
        bgMau === "white"
          ? {
              marginTop: "10px",
              marginBottom: "10px",
              backgroundColor: "white",
            }
          : {
              marginTop: "10px",
              marginBottom: "10px",
            }
      }
      id={"storys" + value.story_stt}
    >
      {value.post_status === "normal" ? (
        <div>
          <div className="homestory-title">
            <div className="homestory-title-avatar">
              <div className="homestory-title-avatar-link">
                <Link to={"/" + value.id}>
                  <LazyLoadImage
                    className="avatars"
                    src={
                      process.env.PUBLIC_URL + `../foanime/${value.ACCESSAVT}`
                    }
                    placeholderSrc={Avatar}
                    placeholder={
                      <Skeleton
                        animation="wave"
                        variant="rect"
                        className="avatars"
                      />
                    }
                  />
                </Link>
              </div>
            </div>
            <div className="homestory-title-name">
              <div>
                <div className="homestory-title-name-link">
                  <Link
                    to={"/" + value.id}
                    style={
                      bgMau === "white"
                        ? {
                            fontWeight: "bold",
                            width: "25%",
                            textDecoration: "none",
                            color: "black",
                            minWidth: "100px",
                          }
                        : {
                            fontWeight: "bold",
                            width: "25%",
                            textDecoration: "none",
                            color: "#e7ebee",
                          }
                    }
                  >
                    <span
                      className="homestory-title-name-link-span"
                      style={{ position: "relative" }}
                    >
                      {(value.ACCESSFRISTNAME === null
                        ? ""
                        : value.ACCESSFRISTNAME + " ") +
                        (value.ACCESSCENTERNAME === null
                          ? ""
                          : value.ACCESSCENTERNAME + " ") +
                        value.ACCESSLASTNAME}
                      {value.ACCESSCONFIG === "yes" ? (
                        <Tooltip
                          disableFocusListener
                          classes={{
                            tooltip: classes.iconTootix,
                            arrow: classes.arrow,
                          }}
                          title={`Tài khoản đã được xác minh bởi Fooobe`}
                        >
                          <img
                            className="images-hover-opacity"
                            src={TickGreen}
                            style={{
                              width: "15px",
                              height: "15px",
                              marginLeft: "5px",
                            }}
                          />
                        </Tooltip>
                      ) : (
                        <div
                          style={{
                            display: "none",
                          }}
                        ></div>
                      )}
                      <span style={{ fontWeight: "500" }}>
                        {" đã đăng một dự án."}
                      </span>
                      <div
                        className={
                          bgMau === "white"
                            ? "homestory-title-name-link-real-popup"
                            : "homestory-title-name-link-real-popup-2"
                        }
                      >
                        <div className="homestory-title-name-link-real-popup-profile">
                          <div className="homestory-title-name-link-real-popup-profile-avt">
                            <LazyLoadImage
                              className="homestory-title-name-link-real-popup-profile-avatars"
                              src={
                                process.env.PUBLIC_URL +
                                `../foanime/${value.ACCESSAVT}`
                              }
                              placeholderSrc={Avatar}
                              placeholder={
                                <Skeleton
                                  animation="wave"
                                  variant="rect"
                                  className="homestory-title-name-link-real-popup-profile-avatars"
                                />
                              }
                            />
                          </div>
                          <div className="homestory-title-name-link-real-popup-profile-title">
                            <div className="homestory-title-name-link-real-popup-profile-title-name">
                              {(value.ACCESSFRISTNAME === null
                                ? ""
                                : value.ACCESSFRISTNAME + " ") +
                                (value.ACCESSCENTERNAME === null
                                  ? ""
                                  : value.ACCESSCENTERNAME + " ") +
                                value.ACCESSLASTNAME}
                            </div>
                            {value.STORYSS !== null && (
                              <div className="homestory-title-name-link-real-popup-profile-title-conten">
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-icon">
                                  <FcMms />
                                </div>
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-text">
                                  {value.STORYSS}
                                </div>
                              </div>
                            )}
                            {value.SEX !== null && (
                              <div className="homestory-title-name-link-real-popup-profile-title-conten">
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-icon">
                                  <FcPuzzle />
                                </div>
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-text">
                                  {value.SEX}
                                </div>
                              </div>
                            )}
                            {value.BIRTHDAY !== null && (
                              <div className="homestory-title-name-link-real-popup-profile-title-conten">
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-icon">
                                  <FcSelfie />
                                </div>{" "}
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-text">
                                  {"Sinh ngày: " +
                                    new Date(value.BIRTHDAY).getDate() +
                                    " tháng " +
                                    (Number(
                                      new Date(value.BIRTHDAY).getMonth()
                                    ) +
                                      1) +
                                    ", " +
                                    new Date(value.BIRTHDAY).getFullYear()}
                                </div>
                              </div>
                            )}
                            {value.ADRESS !== null && (
                              <div className="homestory-title-name-link-real-popup-profile-title-conten">
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-icon">
                                  <FcMindMap />
                                </div>
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-text">
                                  <Link
                                    style={{ color: "blue" }}
                                    to={"/page/" + value.ADRESS.split(";")[1]}
                                  >
                                    {value.ADRESS.split(";")[0]}
                                  </Link>
                                </div>
                              </div>
                            )}
                            {value.INTERESTS !== null && (
                              <div className="homestory-title-name-link-real-popup-profile-title-conten">
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-icon">
                                  <FcLikePlaceholder />
                                </div>
                                <div className="homestory-title-name-link-real-popup-profile-title-conten-text">
                                  {value.INTERESTS.split(";").map(
                                    (value, index) => {
                                      if (index < 6) {
                                        return (
                                          <span
                                            className={
                                              bgMau === "white"
                                                ? "homestory-title-name-link-real-popup-profile-title-conten-text-interres"
                                                : "homestory-title-name-link-real-popup-profile-title-conten-text-interres-2"
                                            }
                                          >
                                            {value}
                                          </span>
                                        );
                                      }
                                    }
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                        <div
                          className={
                            bgMau === "white"
                              ? "homestory-title-name-link-real-popup-button"
                              : "homestory-title-name-link-real-popup-button-2"
                          }
                        >
                          <div className="homestory-title-name-link-real-popup-button-css">
                            <div className="homestory-title-name-link-real-popup-button-css-icon">
                              <HiChat />
                            </div>
                            <div>Nhắn tin</div>
                          </div>
                          <div className="homestory-title-name-link-real-popup-button-css">
                            <div className="homestory-title-name-link-real-popup-button-css-icon">
                              <FaUserPlus />
                            </div>
                            <div>Profile</div>
                          </div>
                          <div className="homestory-title-name-link-real-popup-button-cs2">
                            <div className="homestory-title-name-link-real-popup-button-css-icon-2">
                              <HiDotsHorizontal />
                            </div>
                          </div>
                        </div>
                      </div>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="homestory-title-name-icon">
                <Tooltip
                  disableFocusListener
                  classes={{
                    tooltip: classes.custoTootil,
                    arrow: classes.arrow,
                  }}
                  title={
                    <Moment
                      style={
                        bgMau === "white"
                          ? { color: "white" }
                          : { color: "#ffffff" }
                      }
                      locale="vi"
                      format="LT"
                      subtract={{ hours: 24 }}
                      fromNow
                    >
                      {value.date_time_post}
                    </Moment>
                  }
                  placement="bottom"
                  arrow
                >
                  <Link
                    style={
                      bgMau === "white"
                        ? { color: "#363737" }
                        : { color: "#f4f5f5" }
                    }
                    to={"/post/" + value.story_stt}
                    className="homestory-title-name-icon-time"
                  >
                    <Moment locale="vi" fromNow>
                      {value.date_time_post}
                    </Moment>
                  </Link>
                </Tooltip>
                {value.ACCESSFOLLOW < 1 ? (
                  <a style={{ display: "none" }}></a>
                ) : (
                  <a className="homestory-title-name-icon-follow">
                    {value.ACCESSFOLLOW} follow
                  </a>
                )}

                <a className="homestory-title-name-icon-type-post">
                  {value.post_display_mode === "public" ? (
                    <Tooltip
                      disableFocusListener
                      classes={{
                        tooltip: classes.iconTootil,
                        arrow: classes.arrow,
                      }}
                      title={`Bất kỳ ai cũng có thể xem bài viết này`}
                    >
                      <PublicIcon
                        style={{ fontSize: "15px", marginTop: "-4px" }}
                      />
                    </Tooltip>
                  ) : value.post_display_mode === "friend" ? (
                    <Tooltip
                      disableFocusListener
                      classes={{
                        tooltip: classes.iconTootil,
                        arrow: classes.arrow,
                      }}
                      title={`Bạn bè của ${value.ACCESSLASTNAME}, đều có thể xem bài viết này`}
                    >
                      <GroupIcon
                        style={{ fontSize: "15px", marginTop: "-4px" }}
                      />
                    </Tooltip>
                  ) : (
                    <Tooltip
                      disableFocusListener
                      classes={{
                        tooltip: classes.iconTootil,
                        arrow: classes.arrow,
                      }}
                      title="Chỉ bạn mới có thể xem bài viết này"
                    >
                      <PrivateIcon
                        style={{ fontSize: "15px", marginTop: "-4px" }}
                      />
                    </Tooltip>
                  )}
                </a>
              </div>
            </div>
            <div
              className="homestory-title-setting"
              id={"settingStory" + index}
            >
              <IconButton
                style={{ float: "right" }}
                onClick={(event) =>
                  handleClickSettingMenu(event, "settingID_" + index)
                }
              >
                <SelectMenu
                  style={
                    bgMau === "white"
                      ? { color: "#424242" }
                      : { color: "#d3d4d4" }
                  }
                />
              </IconButton>
              <div
                id={"settingID_" + index}
                style={
                  bgMau === "white"
                    ? { backgroundColor: "white", color: "black" }
                    : { backgroundColor: "#424242", color: "white" }
                }
                className="homestory-title-setting-menu"
              >
                <SettingMenuPost
                  classes={classes}
                  idpost={value.id}
                  typepost={value.post_display_mode}
                  storyid={value.story_stt}
                  bgMau={bgMau}
                  value={value}
                  openComment={openComment}
                  setOpenComment={setOpenComment}
                  PATH={PATH}
                  TOKEN={TOKEN}
                  keyAPI={keyAPI}
                  setSnackBar={setSnackBar}
                  setDataStory={setDataStory}
                  dataStory={dataStory}
                  listFriend={listFriend}
                />
              </div>
            </div>
          </div>
          <div
            id="mention-js"
            className="homestory-content"
            style={
              bgMau === "white"
                ? {
                    color: "black",
                    position: "relative",
                  }
                : {
                    color: "#e7ebee",
                  }
            }
            onContextMenu={menuRightClick}
          >
            <div
              id={"menuRight" + index}
              style={{
                width: "100px",
                height: "100px",
                backgroundColor: "pink",
                position: "absolute",
                display: "none",
                border: "1px solid grey",
                zIndex: "1000",
                boxShadow: "0px 2px 10px #999999",
              }}
            >
              Hahahahha
            </div>
          </div>
          <div className="homestory-image-lesson">
            <Link
              to={"/post/" + value.story_stt}
              className="homestory-image-lesson-click"
            >
              Xem luôn
            </Link>
            <div className="homestory-image-lesson-img">
              {checkNull(value.format) && (
                <LazyLoadImage
                  className="homestory-image-lesson-img"
                  src={process.env.PUBLIC_URL + `../files/${value.format}`}
                  threshold="100"
                  title={"Hình ảnh được đăng tải trên Fooobe"}
                  alt={"Fooobe Image"}
                  // placeholder={<Skeleton animation="wave" variant="rect" width="100%" height="200px" /> }
                />
              )}
            </div>
            <div style={{ paddingLeft: "5px" }}>
              <div className="homestory-image-lesson-title">{value.title}</div>
              <div className="homestory-image-lesson-content">
                {value.fake_content === "" ? (
                  <Markup
                    content={value.content
                      .replaceAll(
                        `class="lxvs42t"`,
                        `class="lxvs42t foahref${index}" `
                      )
                      .replaceAll(
                        `class="hastag_hashtag__3d_91"`,
                        `class="hastag_hashtag__3d_91 hastagf${index}" `
                      )}
                  />
                ) : (
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          showLess === false
                            ? createMarkupTextFO()
                            : value.content
                                .replaceAll(
                                  `class="lxvs42t"`,
                                  `class="lxvs42t foahref${index}" `
                                )
                                .replaceAll(
                                  `class="hastag_hashtag__3d_91"`,
                                  `class="hastag_hashtag__3d_91 hastagf${index}" `
                                ),
                      }}
                    ></span>
                  </span>
                )}
              </div>
            </div>
          </div>
          {checkNull(value.hastag) && (
            <div className="homestory-image-lesson-chip">
              {value.hastag.split(";").map((val, index) => {
                if (index < 5) {
                  return (
                    <span
                      style={
                        bgMau === "white"
                          ? { color: "black" }
                          : { color: "white" }
                      }
                      className="homestory-image-lesson-chip-css"
                    >
                      {val}
                    </span>
                  );
                }
              })}
            </div>
          )}

          <div class="docs-status-time-bottom-count">
            {Number(countReact) > 0 && (
              <div class="docs-status-time-bottom-count-react">
                {Number(countReact) > 1 ? (
                  <div>
                    {Number(value.COUNTLIKE) > Number(value.COUNTHAHA) &&
                    Number(value.COUNTLOVE) > Number(value.COUNTSAD) ? (
                      Number(value.COUNTLIKE) > 0 ? (
                        <img src={LikeIcons} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : Number(value.COUNTLIKE) < Number(value.COUNTHAHA) &&
                      Number(value.COUNTHAHA) > Number(value.COUNTSAD) ? (
                      Number(value.COUNTHAHA) > 0 ? (
                        <img src={HahaIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : Number(value.COUNTSAD) > Number(value.COUNTHAHA) &&
                      Number(value.COUNTLIKE) < Number(value.COUNTSAD) ? (
                      Number(value.COUNTSAD) > 0 ? (
                        <img src={SadIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {Number(value.COUNTLOVE) > Number(value.COUNTWOW) &&
                    Number(value.COUNTLOVE) > Number(value.COUNTANGRY) ? (
                      Number(value.COUNTLOVE) > 0 ? (
                        <img src={HeartIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : Number(value.COUNTLOVE) < Number(value.COUNTWOW) &&
                      Number(value.COUNTWOW) > Number(value.COUNTANGRY) ? (
                      Number(value.COUNTWOW) > 0 ? (
                        <img src={WowIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : Number(value.COUNTANGRY) > Number(value.COUNTWOW) &&
                      Number(value.COUNTLOVE) < Number(value.COUNTANGRY) ? (
                      Number(value.COUNTANGRY) > 0 ? (
                        <img src={AngryIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {reactions === "like" ? (
                      Number(value.COUNTLIKE) > Number(value.COUNTHAHA) &&
                      Number(value.COUNTLOVE) > Number(value.COUNTSAD) &&
                      Number(value.COUNTLIKE) > 0 ? (
                        ""
                      ) : (
                        <img src={LikeIcons} className="icon-count-story" />
                      )
                    ) : reactions === "haha" ? (
                      Number(value.COUNTLIKE) < Number(value.COUNTHAHA) &&
                      Number(value.COUNTHAHA) > Number(value.COUNTSAD) &&
                      Number(value.COUNTHAHA) > 0 ? (
                        ""
                      ) : (
                        <img src={HahaIcon} className="icon-count-story" />
                      )
                    ) : reactions === "wow" ? (
                      Number(value.COUNTLOVE) < Number(value.COUNTWOW) &&
                      Number(value.COUNTWOW) > Number(value.COUNTANGRY) &&
                      Number(value.COUNTWOW) > 0 ? (
                        ""
                      ) : (
                        <img src={WowIcon} className="icon-count-story" />
                      )
                    ) : reactions === "love" ? (
                      Number(value.COUNTLOVE) > Number(value.COUNTWOW) &&
                      Number(value.COUNTLOVE) > Number(value.COUNTANGRY) &&
                      Number(value.COUNTLOVE) > 0 ? (
                        ""
                      ) : (
                        <img src={HeartIcon} className="icon-count-story" />
                      )
                    ) : reactions === "sad" ? (
                      Number(value.COUNTSAD) > Number(value.COUNTHAHA) &&
                      Number(value.COUNTLIKE) < Number(value.COUNTSAD) &&
                      Number(value.COUNTSAD) > 0 ? (
                        ""
                      ) : (
                        <img src={SadIcon} className="icon-count-story" />
                      )
                    ) : reactions === "angry" ? (
                      Number(value.COUNTANGRY) > Number(value.COUNTWOW) &&
                      Number(value.COUNTLOVE) < Number(value.COUNTANGRY) &&
                      Number(value.COUNTANGRY) > 0 ? (
                        ""
                      ) : (
                        <img src={AngryIcon} className="icon-count-story" />
                      )
                    ) : (
                      ""
                    )}
                  </div>
                ) : Number(countReact) === 1 && reactions === null ? (
                  <div>
                    {Number(value.COUNTLIKE) > Number(value.COUNTHAHA) &&
                    Number(value.COUNTLOVE) > Number(value.COUNTSAD) ? (
                      Number(value.COUNTLIKE) > 0 ? (
                        <img src={LikeIcons} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : Number(value.COUNTLIKE) < Number(value.COUNTHAHA) &&
                      Number(value.COUNTHAHA) > Number(value.COUNTSAD) ? (
                      Number(value.COUNTHAHA) > 0 ? (
                        <img src={HahaIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : Number(value.COUNTSAD) > Number(value.COUNTHAHA) &&
                      Number(value.COUNTLIKE) < Number(value.COUNTSAD) ? (
                      Number(value.COUNTSAD) > 0 ? (
                        <img src={SadIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                    {Number(value.COUNTLOVE) > Number(value.COUNTWOW) &&
                    Number(value.COUNTLOVE) > Number(value.COUNTANGRY) ? (
                      Number(value.COUNTLOVE) > 0 ? (
                        <img src={HeartIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : Number(value.COUNTLOVE) < Number(value.COUNTWOW) &&
                      Number(value.COUNTWOW) > Number(value.COUNTANGRY) ? (
                      Number(value.COUNTWOW) > 0 ? (
                        <img src={WowIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : Number(value.COUNTANGRY) > Number(value.COUNTWOW) &&
                      Number(value.COUNTLOVE) < Number(value.COUNTANGRY) ? (
                      Number(value.COUNTANGRY) > 0 ? (
                        <img src={AngryIcon} className="icon-count-story" />
                      ) : (
                        ""
                      )
                    ) : (
                      ""
                    )}
                  </div>
                ) : (
                  <div>
                    {" "}
                    {reactions === "like" ? (
                      <img src={LikeIcons} className="icon-count-story" />
                    ) : reactions === "haha" ? (
                      <img src={HahaIcon} className="icon-count-story" />
                    ) : reactions === "wow" ? (
                      <img src={WowIcon} className="icon-count-story" />
                    ) : reactions === "love" ? (
                      <img src={HeartIcon} className="icon-count-story" />
                    ) : reactions === "sad" ? (
                      <img src={SadIcon} className="icon-count-story" />
                    ) : reactions === "angry" ? (
                      <img src={AngryIcon} className="icon-count-story" />
                    ) : (
                      ""
                    )}
                  </div>
                )}

                {Number(countReact) !== 1 ? (
                  <div className="open-view-react-story">
                    {reactions !== null ? "Bạn và " : ""}
                    {reactions !== null
                      ? Number(countReact) < 10000
                        ? String(Number(countReact) - 1).replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            "."
                          )
                        : String(Number(countReact) - 1).replace(
                            /\B(?=(\d{3})+(?!\d))/g,
                            "."
                          )
                      : Number(countReact) < 10000
                      ? String(Number(countReact)).replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          "."
                        )
                      : String(Number(countReact)).replace(
                          /\B(?=(\d{3})+(?!\d))/g,
                          "."
                        )}
                    {reactions !== null ? " người khác" : ""}
                  </div>
                ) : reactions !== null ? (
                  <div className="open-view-react-story">
                    {dataAcc.fristname + " " + dataAcc.lastname}
                  </div>
                ) : (
                  <div className="open-view-react-story">
                    {String(Number(countReact)).replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      "."
                    )}
                  </div>
                )}
              </div>
            )}
            <div class="docs-status-time-bottom-count-comment">
              {Number(countCmt) > 0 && (
                <div
                  className="open-view-comment-story"
                  onClick={() => setOpen2(!open2)}
                >
                  {String(Number(countCmt)).replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    "."
                  ) + " bình luận"}
                </div>
              )}
              {Number(countCmt) > 0 && Number(countShare) > 0 ? (
                <div style={{ marginLeft: "5px", marginRight: "5px" }}>
                  {"•"}
                </div>
              ) : (
                ""
              )}
              {Number(countShare) > 0 && (
                <div className="open-view-share-story">
                  {String(Number(countShare)).replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    "."
                  ) + " chia sẻ"}
                </div>
              )}
            </div>
          </div>

          <div class="docs-status-time-bottom-btcx">
            <div
              style={{
                width: "100%",
                height: "0.1px",
                backgroundColor: "rgba(148, 147, 147, 0.232)",
              }}
            ></div>
            <div class="docs-status-time-bottom-btcx-for">
              <div
                class={
                  bgMau === "white"
                    ? "fo-react-box docs-status-time-bottom-btcx-for-button"
                    : "fo-react-box docs-status-time-bottom-btcx-for-button2"
                }
                style={
                  bgMau === "white"
                    ? {
                        width: "100%",
                        border: "0.5px solid white",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }
                    : {
                        width: "100%",
                        color: "cyan",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                      }
                }
              >
                <div
                  style={
                    bgMau === "white"
                      ? {
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }
                      : {
                          width: "100%",
                          color: "cyan",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          height: "100%",
                        }
                  }
                >
                  {" "}
                  <div
                    style={
                      bgMau === "white"
                        ? {
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                          }
                        : {
                            width: "100%",
                            color: "cyan",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100%",
                          }
                    }
                    onClick={() =>
                      reactUpdate(
                        reactions === "like" ||
                          reactions === "angry" ||
                          reactions === "sad" ||
                          reactions === "love" ||
                          reactions === "wow" ||
                          reactions === "haha"
                          ? reactions
                          : "like",
                        reactions === "like" ||
                          reactions === "angry" ||
                          reactions === "sad" ||
                          reactions === "love" ||
                          reactions === "wow" ||
                          reactions === "haha"
                          ? "del"
                          : "add"
                      )
                    }
                  >
                    {reactions === "like" ? (
                      <img src={LikeIcons} className="reactions-css" />
                    ) : reactions === "haha" ? (
                      <img src={HahaIcon} className="reactions-css" />
                    ) : reactions === "wow" ? (
                      <img src={WowIcon} className="reactions-css" />
                    ) : reactions === "love" ? (
                      <img src={HeartIcon} className="reactions-css" />
                    ) : reactions === "sad" ? (
                      <img src={SadIcon} className="reactions-css" />
                    ) : reactions === "angry" ? (
                      <img src={AngryIcon} className="reactions-css" />
                    ) : (
                      <img src={LikeIcon} className="reactions-css" />
                    )}

                    {reactions === "like" ? (
                      <span
                        className="title-story-pc"
                        style={
                          bgMau === "white"
                            ? { color: "#04dde5", fontWeight: "500" }
                            : { color: "#04dde5" }
                        }
                      >
                        Thích
                      </span>
                    ) : reactions === "haha" ? (
                      <span
                        className="title-story-pc"
                        style={
                          bgMau === "white"
                            ? { color: "#fffc00", fontWeight: "500" }
                            : { color: "#fffc00" }
                        }
                      >
                        Haha
                      </span>
                    ) : reactions === "wow" ? (
                      <span
                        className="title-story-pc"
                        style={
                          bgMau === "white"
                            ? { color: "#5cd673", fontWeight: "500" }
                            : { color: "#5cd673" }
                        }
                      >
                        Wow
                      </span>
                    ) : reactions === "love" ? (
                      <span
                        className="title-story-pc"
                        style={
                          bgMau === "white"
                            ? { color: "#fb7ca3", fontWeight: "500" }
                            : { color: "#fb7ca3" }
                        }
                      >
                        Yêu thích
                      </span>
                    ) : reactions === "sad" ? (
                      <span
                        className="title-story-pc"
                        style={
                          bgMau === "white"
                            ? { color: "#ffb80d", fontWeight: "500" }
                            : { color: "#ffb80d" }
                        }
                      >
                        Buồn
                      </span>
                    ) : reactions === "angry" ? (
                      <span
                        className="title-story-pc"
                        style={
                          bgMau === "white"
                            ? { color: "#ff7451", fontWeight: "500" }
                            : { color: "#ff7451" }
                        }
                      >
                        Phẫn nộ
                      </span>
                    ) : (
                      <span className="title-story-pc">Thích</span>
                    )}
                  </div>
                  <span
                    className="title-story-moblie"
                    style={{
                      fontSize: "20px",
                      color: "grey",
                      lineHeight: "10px",
                    }}
                  >
                    {value.COUNTREACT < 1
                      ? ""
                      : value.COUNTREACT < 1000
                      ? value.COUNTREACT
                      : value.COUNTREACT < 1000000
                      ? Math.round(value.COUNTREACT / 100) / 10 + "k"
                      : value.COUNTREACT < 1000000000
                      ? Math.round(value.COUNTREACT / 100000) / 10 + "M"
                      : Math.round(value.COUNTREACT / 100000000) / 10 + "MIL"}
                  </span>
                  <div class="fo-react-toolfo-react-box mobile-reactions pc-reactions"></div>
                  <button
                    class="fo-reaction-like mobile-reactions pc-reactions"
                    onClick={() => reactUpdate("like", "add")}
                  >
                    <span class="fo-legend-reaction">Thích</span>
                  </button>
                  <button
                    class="fo-reaction-love mobile-reactions pc-reactions"
                    onClick={() => reactUpdate("love", "add")}
                  >
                    <span class="fo-legend-reaction">Yêu thích</span>
                  </button>
                  <button
                    class="fo-reaction-haha mobile-reactions pc-reactions"
                    onClick={() => reactUpdate("haha", "add")}
                  >
                    <span class="fo-legend-reaction">Haha</span>
                  </button>
                  <button
                    class="fo-reaction-wow mobile-reactions pc-reactions"
                    onClick={() => reactUpdate("wow", "add")}
                  >
                    <span class="fo-legend-reaction">Wow</span>
                  </button>
                  <button
                    class="fo-reaction-sad mobile-reactions pc-reactions"
                    onClick={() => reactUpdate("sad", "add")}
                  >
                    <span class="fo-legend-reaction">Buồn</span>
                  </button>
                  <button
                    class="fo-reaction-angry mobile-reactions pc-reactions"
                    onClick={() => reactUpdate("angry", "add")}
                  >
                    <span class="fo-legend-reaction">Phẫn nộ</span>
                  </button>
                </div>
              </div>
              {openComment === "on" && (
                <div
                  class={
                    bgMau === "white"
                      ? "docs-status-time-bottom-btcx-for-button"
                      : "docs-status-time-bottom-btcx-for-button2"
                  }
                  style={
                    bgMau === "white"
                      ? {
                          width: "100%",
                          border: "0.5px solid white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {
                          width: "100%",
                          color: "cyan",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                  }
                  onClick={openCommentChose}
                >
                  <img src={CommentIcon} className="reactions-css" />
                  <span className="title-story-pc">Bình luận</span>
                  <span
                    className="title-story-moblie"
                    style={{
                      fontSize: "20px",
                      color: "grey",
                      lineHeight: "10px",
                    }}
                  >
                    {value.COUNTCMT < 1
                      ? ""
                      : value.COUNTCMT < 1000
                      ? value.COUNTCMT
                      : value.COUNTCMT < 1000000
                      ? Math.round(value.COUNTCMT / 100) / 10 + "k"
                      : value.COUNTCMT < 1000000000
                      ? Math.round(value.COUNTCMT / 100000) / 10 + "M"
                      : Math.round(value.COUNTCMT / 100000000) / 10 + "MIL"}
                  </span>
                </div>
              )}
              {value.post_display_mode === "public" && (
                <div
                  class={
                    bgMau === "white"
                      ? "docs-status-time-bottom-btcx-for-button"
                      : "docs-status-time-bottom-btcx-for-button2"
                  }
                  style={
                    bgMau === "white"
                      ? {
                          width: "100%",
                          border: "0.5px solid white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                      : {
                          width: "100%",
                          color: "cyan",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }
                  }
                >
                  <img src={ShareIcon} className="reactions-css" />
                  <span className="title-story-pc">Chia sẻ</span>
                  <span
                    className="title-story-moblie"
                    style={{
                      fontSize: "20px",
                      color: "grey",
                      lineHeight: "10px",
                    }}
                  >
                    {value.COUNTSHARE < 1
                      ? ""
                      : value.COUNTSHARE < 1000
                      ? value.COUNTSHARE
                      : value.COUNTSHARE < 1000000
                      ? Math.round(value.COUNTSHARE / 100) / 10 + "k"
                      : value.COUNTSHARE < 1000000000
                      ? Math.round(value.COUNTSHARE / 100000) / 10 + "M"
                      : Math.round(value.COUNTSHARE / 100000000) / 10 + "MIL"}
                  </span>
                </div>
              )}
            </div>

            <div
              style={{
                width: "100%",
                height: "0.1px",
                backgroundColor: "rgba(148, 147, 147, 0.232)",
                marginTop: "3px",
              }}
            ></div>
          </div>
          <div className={open2 ? "homestory-comment" : "homestory-input2"}>
            {countCmt > 0 ? (
              <Comments
                index={index}
                countCMT={value.COUNTCMT}
                dataAcc={dataAcc}
                bgMau={bgMau}
                keyAPI={keyAPI}
                storyID={value.story_stt}
                listFriend={listFriend}
                loadComment={loadComment}
                openComment={openComment}
                valueStory={value}
                TOKEN={TOKEN}
                PATH={PATH}
              />
            ) : (
              <div
                style={{
                  textAlign: "center",
                  color: "grey",
                  marginTop: "-20px",
                  marginBottom: "5px",
                }}
              >
                Hãy là người đầu tiên bình luận về bài viết này nhé
              </div>
            )}
          </div>
          {openComment === "on" && (
            <div className={open2 ? "homestory-input" : "homestory-input2"}>
              <div className="homestory-input-avatar">
                <Link to="/friends">
                  <img
                    src={
                      process.env.PUBLIC_URL + `../foanime/${dataAcc.avatar}`
                    }
                  />
                </Link>
              </div>
              <div className="homestory-input-containerr">
                <div
                  className="comment-style-container-story-cmt-create-div-input"
                  style={
                    bgMau === "white" ? { color: "black" } : { color: "white" }
                  }
                >
                  <div
                    onKeyDown={handleKeyDown}
                    className="comment-style-container-story-cmt-create-div"
                    onInput={hekegu}
                  >
                    <Editor
                      ref={editor}
                      editorState={state}
                      onClick={onExtractMentions}
                      onChange={setState}
                      plugins={plugins}
                      placeholder={"Bạn nghĩ gì về bài viết này?"}
                    />
                    <MentionSuggestions
                      open={open1}
                      onOpenChange={onOpenChange}
                      onSearchChange={onSearchChange}
                      suggestions={state2}
                      onAddMention={onExtractMentions}
                      onClick={onExtractMentions}
                    />
                  </div>
                  <div className="homestory-input-icon-send-mobile">
                    <IconButton
                      color="primary"
                      className={classes.iconButton}
                      aria-label="Send"
                      onClick={sendComment}
                    >
                      <RiSendPlaneFill style={{ color: "#aeafb1" }} />
                    </IconButton>
                  </div>
                </div>
                <ImageUploading
                  onChange={onChangeImages}
                  acceptType={["jpg", "gif", "png"]}
                  onError={(errors) => onErrorImage(errors)}
                  maxFileSize={5000000}
                >
                  {({ imageList, onImageUpload, errors }) => (
                    <div className="homestory-input-icon">
                      <IconButton
                        className={classes.iconButton}
                        aria-label="React"
                      >
                        <EmojiEmotionsIcon />
                      </IconButton>
                      <Divider
                        className={classes.divider}
                        orientation="vertical"
                      />
                      <IconButton
                        color="primary"
                        className={classes.iconButton}
                        aria-label="Image"
                        onClick={onImageUpload}
                      >
                        <PhotoCameraIcon />
                      </IconButton>
                      <Divider
                        className={classes.divider}
                        orientation="vertical"
                      />
                      <IconButton
                        color="primary"
                        className={classes.iconButton}
                        aria-label="Gif"
                      >
                        <GifIcon />
                      </IconButton>
                      <IconButton
                        color="primary"
                        className={classes.iconButton}
                        aria-label="Send"
                        onClick={sendComment}
                      >
                        <RiSendPlaneFill
                          className="homestory-input-icon-send-ipad"
                          style={{ color: "#aeafb1" }}
                        />
                      </IconButton>
                    </div>
                  )}
                </ImageUploading>
              </div>
            </div>
          )}

          <div
            style={
              openFile === true ? { display: "block" } : { display: "none" }
            }
            className="upload-image-sticker-gif-file-to-commetn"
          >
            {progress !== null &&
              (progress === 100 && image !== "" ? (
                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      height: "100%",
                      width: "100%",
                      marginTop: "10px",
                    }}
                    src={process.env.PUBLIC_URL + `../files/${image}`}
                  />{" "}
                  <div className="close-icon" onClick={closeImages}>
                    <CloseIcon />
                  </div>
                </div>
              ) : (
                <div>
                  <div
                    style={{
                      backgroundColor: "#d2d2d2",
                      minHeight: "200px",
                      width: "100%",
                      marginTop: "15px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <CircularProgressbar
                        value={progress}
                        text={`${progress}%`}
                      />
                    </div>
                  </div>
                  <div className="close-icon" onClick={closeImages}>
                    <CloseIcon />
                  </div>
                </div>
              ))}
          </div>
        </div>
      ) : (
        <div className="remove-story">Bài viết này đã được xóa</div>
      )}
    </div>
  );
}

export default StorysLesson;
