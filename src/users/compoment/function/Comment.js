import React, { useRef, useState, useMemo, useCallback } from "react";
import { Redirect, Link, useLocation, useHistory } from "react-router-dom";
import Axios from "axios";
import Moment from "react-moment";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconReply from "../../../img/prevarrow.png";
import LikeIcon from "../../../img/like.png";
import HeartIcon from "../../../img/tym.png";
import HahaIcon from "../../../img/haha.png";
import AngryIcon from "../../../img/angry.png";
import WowIcon from "../../../img/wow.png";
import TickGreen from "../../../img/tickgreen.ico";
import SadIcon from "../../../img/sad.png";
import RepComments from "./RepComments";
import { EditorState, convertToRaw } from "draft-js";
import Editor, { createEditorStateWithText } from "@draft-js-plugins/editor";
import SendIcon from "@material-ui/icons/Send";
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
import hashtagStyles from "../../../users/compoment/storys/storysStatus/style/hastag.module.css";
//link
import createLinkifyPlugin from "@draft-js-plugins/linkify";
//
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import SelectMenu from "@material-ui/icons/MoreHoriz";
import SettingComment from "./supports/SettingComment";
import { Markup } from "interweave";
import { useCookies } from "react-cookie";
//Image
import ImageUploading from "react-images-uploading";
import BrokenImageIcon from "@material-ui/icons/BrokenImage";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });
const linkifyPlugin = createLinkifyPlugin();

var moment = require("moment-timezone");

//
function Comment({
  keyAPI,
  bgMau,
  listFriend,
  dataAcc,
  value,
  key,
  openComment,
  valueStory,
  TOKEN,
  PATH,
  setValue,
  apiValue,
}) {
  const dataComents = {
    comment_stt: value.STT,
    fake_content: " ",
    content: " ",
    sticker: null,
    image_video: null,
    type_comment: "user",
    page_id: null,
  };
  let history = useHistory();
  const [contentRep, setContentRep] = useState(false);
  const [loaddingCmtRep, setLoaddingCmtRep] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const [state, setState] = useState(() => EditorState.createEmpty());
  const [state2, setState2] = useState(listFriend);
  const [dataComent, setDataComment] = useState(dataComents);
  const [hideComment, setHideComment] = useState(false);
  const [hideSetting, setHideSetting] = useState(false);
  const [displaySett, setDisplaySett] = useState(false);
  const [displayMobie, setDisplayMobile] = useState(false);
  const [countCmt, setCountCmt] = useState(value.COUNTREPLY);
  const [image, setImages] = useState("");
  const [openFile, setOpenFile] = useState(false);
  const [idzSett, setIdzSett] = useState(null);
  const [idzSettMobile, setIdzSettMobile] = useState(null);
  const [reactions, setReactions] = useState(value.TYPEREACT);
  const [showLess, setShowLess] = React.useState(false);
  const [countReactions, setCountReactions] = useState(
    Number(value.COUNTREACT)
  );
  const [progress, setProgress] = useState(null);

  const useStyles = makeStyles((theme) => ({
    custoTootil: {
      maxWidth: 500,
      fontWeight: "bold",
      float: "left",
    },
    arrow: {
      color: "rgba(85, 84, 84, 0.705)",
    },
    loading: {
      color: "cyan",
      width: "10px",
      height: "10px",
    },
    iconButton: {
      padding: 20,
      color: "#aeafb1",
      height: "1px",
      width: "1px",
    },
    divider: {
      height: 28,
      margin: 4,
      color: "#aeafb1",
    },
    function: {
      width: "100%",
      height: "40px",
      textTransform: "none",
      fontFamily: "Tahoma",
      textAlign: "left",
      borderRadius: "10px",
      fontWeight: 700,
    },
  }));

  const classes = useStyles();

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
  const openReplyComment = () => {
    setContentRep(true);
    setLoaddingCmtRep(true);
  };
  const openReplyCommentClose = () => {
    setContentRep(false);
    setHideComment(false);
    setState(() => EditorState.createEmpty());
  };

  const hideRepLyComment = () => {
    if (openComment === "on") {
      setHideComment(true);
    }
  };
  const onOpenSetting = () => {
    setHideSetting(true);
  };
  const onOffSetting = () => {
    setHideSetting(false);
  };
  const openSettingComment = () => {
    if (displaySett === false) {
      setDisplaySett(true);

      setIdzSett("OpenSettingComment" + value.STT);
    } else {
      setIdzSett(null);

      setDisplaySett(false);
    }
  };

  const settingMobiles = () => {
    const ida = "settingMobile" + value.STT;

    if (displayMobie === false) {
      document.getElementById(ida).style.display = "block";
      setDisplayMobile(true);
    } else {
      document.getElementById(ida).style.display = "none";
      setDisplayMobile(false);
    }
  };
  // window.addEventListener('click', function(e){
  //   const ida = "settingMobile" + value.STT;
  //   if(displayMobie === true){
  //     if (document.getElementById(ida).contains(e.target)){
  //     } else{
  //       document.getElementById(ida).style.display = "none";
  //       setDisplayMobile(false);
  //     }
  //   }

  // });

  //Sự kiện onchange
  const hekegu = (event) => {
    setDataComment({
      ...dataComent,
      content: event.currentTarget,
      fake_content: event.currentTarget.textContent,
    });
  };

  //send < 1000 px
  const sendRepComment = () => {
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
        Axios.post(keyAPI.apiInsertRepComment, {
          id: dataAcc.id,
          comment_stt: dataComent.comment_stt,
          fake_comment: dataComent.fake_content,
          content: dataComent.content.outerHTML,
          sticker: dataComent.sticker,
          image_video: image,
          time_cmt: times,
          type_comment: dataComent.type_comment,
          page_id: dataComent.page_id,
          token: cookies.fo_token,
        })
          .then(({ data }) => {
            setCountCmt(countCmt + 1);
            setContentRep(true);
            setDataComment(dataComents);
            setImages("");
            setProgress(null);
            setOpenFile(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    } else {
      const timez = new Date();
      var times = moment
        .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
        .tz("Asia/Saigon")
        .format("YYYY/MM/DD HH:mm:ss");
      if (dataComent.fake_content.length > 150) {
        setState(() => EditorState.createEmpty());
        Axios.post(keyAPI.apiInsertRepComment, {
          id: dataAcc.id,
          comment_stt: dataComent.comment_stt,
          fake_comment: dataComent.fake_content,
          content: dataComent.content.outerHTML,
          sticker: dataComent.sticker,
          image_video: image,
          time_cmt: times,
          type_comment: dataComent.type_comment,
          page_id: dataComent.page_id,
          token: cookies.fo_token,
        })
          .then(({ data }) => {
            setCountCmt(countCmt + 1);
            setContentRep(true);
            setDataComment(dataComents);
            setImages("");
            setProgress(null);
            setOpenFile(false);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        setState(() => EditorState.createEmpty());
        Axios.post(keyAPI.apiInsertRepComment, {
          id: dataAcc.id,
          comment_stt: dataComent.comment_stt,
          fake_comment: "",
          content: dataComent.content.outerHTML,
          sticker: dataComent.sticker,
          image_video: image,
          time_cmt: times,
          type_comment: dataComent.type_comment,
          page_id: dataComent.page_id,
          token: cookies.fo_token,
        })
          .then(({ data }) => {
            setCountCmt(countCmt + 1);
            setContentRep(true);
            setDataComment(dataComents);
            setImages("");
            setProgress(null);
            setOpenFile(false);
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
            Axios.post(keyAPI.apiInsertRepComment, {
              id: dataAcc.id,
              comment_stt: dataComent.comment_stt,
              fake_comment: dataComent.fake_content,
              content: dataComent.content.outerHTML,
              sticker: dataComent.sticker,
              image_video: image,
              time_cmt: times,
              type_comment: dataComent.type_comment,
              page_id: dataComent.page_id,
              token: cookies.fo_token,
            })
              .then(({ data }) => {
                setCountCmt(countCmt + 1);
                setContentRep(true);
                setDataComment(dataComents);
                setImages("");
                setProgress(null);
                setOpenFile(false);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        } else {
          const timez = new Date();
          var times = moment
            .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
            .tz("Asia/Saigon")
            .format("YYYY/MM/DD HH:mm:ss");
          if (/^\s*$/.test(dataComent.fake_content)) {
            event.preventDefault();
          } else if (dataComent.fake_content.length > 150) {
            setState(() => EditorState.createEmpty());
            Axios.post(keyAPI.apiInsertRepComment, {
              id: dataAcc.id,
              comment_stt: dataComent.comment_stt,
              fake_comment: dataComent.fake_content,
              content: dataComent.content.outerHTML,
              sticker: dataComent.sticker,
              image_video: image,
              time_cmt: times,
              type_comment: dataComent.type_comment,
              page_id: dataComent.page_id,
              token: cookies.fo_token,
            })
              .then(({ data }) => {
                setCountCmt(countCmt + 1);
                setContentRep(true);
                setDataComment(dataComents);
                setImages("");
                setProgress(null);
                setOpenFile(false);
              })
              .catch((error) => {
                console.log(error);
              });
          } else {
            setState(() => EditorState.createEmpty());
            Axios.post(keyAPI.apiInsertRepComment, {
              id: dataAcc.id,
              comment_stt: dataComent.comment_stt,
              fake_comment: "",
              content: dataComent.content.outerHTML,
              sticker: dataComent.sticker,
              image_video: image,
              time_cmt: times,
              type_comment: dataComent.type_comment,
              page_id: dataComent.page_id,
              token: cookies.fo_token,
            })
              .then(({ data }) => {
                setCountCmt(countCmt + 1);
                setContentRep(true);
                setDataComment(dataComents);
                setImages("");
                setProgress(null);
                setOpenFile(false);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      }
    }
  };

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

  const reactUpdate = (event, values, extent) => {
    const timez = new Date();

    var times = moment
      .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
      .tz("Asia/Saigon")
      .format("YYYY/MM/DD HH:mm:ss");
    Axios.post(keyAPI.apiInsertReactionsComment, {
      id: dataAcc.id,
      comment_stt: dataComent.comment_stt,
      time_react: times,
      reactions: values,
      token: cookies.fo_token,
      events: extent,
    })
      .then(({ data }) => {
        if (data.resul === 1) {
          setReactions(values);
          setCountReactions(countReactions + 1);
        } else if (data.resul === 2) {
          setReactions(values);
        } else if (data.resul === 3) {
          setReactions(null);
          setCountReactions(countReactions - 1);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //

  //Close các menu
  document.onclick = function (event) {
    if (displaySett === true) {
      var hasParent = false;
      const idz = "settingComment" + value.STT;
      for (
        var node = event.target;
        node != document.body;
        node = node.parentNode
      ) {
        if (node.id == idz) {
          hasParent = true;
          break;
        }
      }
      if (hasParent) {
      } else {
        setDisplaySett(false);
      }
    }
  };

  //Nhấp link phân biệt có phải link fooobe
  const hastagv = document.getElementsByClassName("hastags" + value.STT);
  for (var i = 0; i < hastagv.length; i++) {
    const textHTML = document.getElementsByClassName("hastags" + value.STT)[i]
      .innerHTML;
    const textPure = document.getElementsByClassName("hastags" + value.STT)[i]
      .innerText;
    document.getElementsByClassName("hastags" + value.STT)[
      i
    ].innerHTML = `<a href="/hastag/${textPure.slice(1)}/" class="${
      "foahres" + value.STT
    }" style="text-decoration: none;">${textHTML}</a>`;
  }
  const articlesy = document.getElementsByClassName("foahres" + value.STT);
  for (var i = 0; i < articlesy.length; i++) {
    const lea = document.getElementsByClassName("foahres" + value.STT)[i].href;
    articlesy[i].addEventListener("click", function (event) {
      event.preventDefault();
      if (getDomainy(lea) == "fooobe.com") {
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
  function getDomainy(url) {
    url = url.replace(/(https?:\/\/)?(www.)?/i, "");

    if (url.indexOf("/") !== -1) {
      return url.split("/")[0];
    }

    return url;
  }

  const btnAdd = document.querySelector("#task23" + value.STT);

  if (btnAdd !== null) {
    btnAdd.addEventListener("click", function () {
      setShowLess(true);
    });
  }
  function createMarkupCommentTextFO() {
    if (value.FAKECOMMENT !== "") {
      var newText = value.FAKECOMMENT.slice(90, 100);
      if (value.FAKECOMMENT.slice(0, 90).indexOf(newText) === -1) {
        var hashText = value.CONTENT.indexOf(newText);
        if (hashText !== -1) {
          return value.CONTENT.slice(0, hashText + 9)
            .concat(
              `<a style="color: #aeafaf; cursor: pointer; text-decoration: none;" id="${
                "task23" + value.STT
              }">... Xem thêm</a>`
            )
            .replaceAll(
              `class="lxvs42t"`,
              `class="lxvs42t foahres${value.STT}" `
            )
            .replaceAll(
              `class="hastag_hashtag__3d_91"`,
              `class="hastag_hashtag__3d_91 hastags${value.STT}" `
            );
        } else {
          const sellText = value.CONTENT.slice(1210, 1320).indexOf(">");
          if (sellText !== -1) {
            return value.CONTENT.slice(
              0,
              value.CONTENT.slice(0, 1320).lastIndexOf(">") + 1
            )
              .concat(
                `<a style="color: #aeafaf; cursor: pointer; text-decoration: none;" id="${
                  "task23" + value.STT
                }">... Xem thêm</a>`
              )
              .replaceAll(
                `class="lxvs42t"`,
                `class="lxvs42t foahres${value.STT}" `
              )
              .replaceAll(
                `class="hastag_hashtag__3d_91"`,
                `class="hastag_hashtag__3d_91 hastags${value.STT}" `
              );
          } else {
            const endText = value.CONTENT.slice(1210, 1320).indexOf("<");
            if (endText !== -1) {
              return value.CONTENT.slice(
                0,
                value.CONTENT.slice(0, 1320).lastIndexOf("<")
              )
                .concat(
                  `<a style="color: #aeafaf; cursor: pointer; text-decoration: none;" id="${
                    "task23" + value.STT
                  }">... Xem thêm</a>`
                )
                .replaceAll(
                  `class="lxvs42t"`,
                  `class="lxvs42t foahres${value.STT}" `
                )
                .replaceAll(
                  `class="hastag_hashtag__3d_91"`,
                  `class="hastag_hashtag__3d_91 hastags${value.STT}" `
                );
            } else {
              return value.CONTENT.replaceAll(
                `class="lxvs42t"`,
                `class="lxvs42t foahres${value.STT}" `
              ).replaceAll(
                `class="hastag_hashtag__3d_91"`,
                `class="hastag_hashtag__3d_91 hastags${value.STT}" `
              );
            }
          }
        }
      }
    }
  }

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
    <div>
      <div
        className="comment-style-container"
        onMouseOver={onOpenSetting}
        onMouseOut={onOffSetting}
      >
        <div className="comment-style-container-left">
          <img src={process.env.PUBLIC_URL + `../foanime/${value.AVATAR}`} />
        </div>

        <div className="comment-style-container-right">
          <div
            className={
              bgMau === "white"
                ? "comment-style-container-right-cmt"
                : "comment-style-container-right-cmt2"
            }
          >
            <div className="comment-style-container-right-cmt-title">
              <div className="comment-style-container-right-cmt-title-name">
                <Link
                  className="comment-style-container-right-cmt-title-name-a"
                  to={"/" + value.ID}
                  style={
                    bgMau === "white" ? { color: "black" } : { color: "white" }
                  }
                >
                  {value.FRISTNAME + " " + value.LASTNAME}
                </Link>
              </div>
              <div className="comment-style-container-right-cmt-title-pro">
                <span
                  className="homestory-title-name-tick-span"
                  style={{ position: "relative" }}
                >
                  {value.ACCESSCONFIG === "yes" ? (
                    <img
                      className="images-hover-opacity"
                      src={TickGreen}
                      style={{
                        width: "13px",
                        height: "13px",
                        marginRight: "5px",
                      }}
                    />
                  ) : (
                    <div
                      style={{
                        display: "none",
                      }}
                    ></div>
                  )}
                  <div className="homestory-title-name-tick-real-popup">
                    Tài khoản này đã được xác thực bởi Fooobe
                  </div>
                </span>
                {valueStory.id === value.ID && (
                  <div style={{ display: "flex", alignItems: "center" }}>
                    {" "}
                    <div className="comment-style-container-right-cmt-title-pro-1">
                      •
                    </div>{" "}
                    <div
                      className="comment-style-container-right-cmt-title-pro-2"
                      style={
                        bgMau === "white"
                          ? { color: "rgb(236, 6, 6)" }
                          : { color: "white" }
                      }
                    >
                      Tác giả
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div
              id="mention-js"
              className="comment-style-container-right-cmt-content"
              style={
                bgMau === "white" ? { color: "black" } : { color: "white" }
              }
            >
              {value.status === "normal" ? (
                value.FAKECOMMENT === "" ? (
                  <Markup
                    content={value.CONTENT.replaceAll(
                      `class="lxvs42t"`,
                      `class="lxvs42t foahres${value.STT}" `
                    ).replaceAll(
                      `class="hastag_hashtag__3d_91"`,
                      `class="hastag_hashtag__3d_91 hastags${value.STT}" `
                    )}
                  />
                ) : (
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html:
                          showLess === false
                            ? createMarkupCommentTextFO()
                            : value.CONTENT.replaceAll(
                                `class="lxvs42t"`,
                                `class="lxvs42t foahres${value.STT}" `
                              ).replaceAll(
                                `class="hastag_hashtag__3d_91"`,
                                `class="hastag_hashtag__3d_91 hastags${value.STT}" `
                              ),
                      }}
                    ></span>
                  </span>
                )
              ) : (
                <div style={{ fontStyle: "italic" }}>
                  [Đã xóa bình luận này]
                </div>
              )}
            </div>

            {countReactions > 0 ? (
              <div className="comment-style-container-right-cmt-reacts">
                {countReactions}{" "}
                <img
                  style={{
                    width: "15px",
                    height: "15px",
                    marginRight: "3px",
                    marginBottom: "3px",
                  }}
                  src={
                    reactions === "like"
                      ? LikeIcon
                      : reactions === "wow"
                      ? WowIcon
                      : reactions === "haha"
                      ? HahaIcon
                      : reactions === "love"
                      ? HeartIcon
                      : reactions === "sad"
                      ? SadIcon
                      : reactions === "angry"
                      ? AngryIcon
                      : LikeIcon
                  }
                />
              </div>
            ) : (
              <div style={{ display: "none" }}></div>
            )}
          </div>

          {value.STICKER !== "" && (
            <div>
              {" "}
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  marginTop: "10px",
                }}
                src={process.env.PUBLIC_URL + `../sticker/${value.STICKER}`}
              />{" "}
            </div>
          )}
          {value.IMAGEVIDEO !== "" && (
            <div>
              {" "}
              <img
                style={{
                  height: "100%",
                  width: "100%",
                  marginTop: "10px",
                }}
                src={process.env.PUBLIC_URL + `../files/${value.IMAGEVIDEO}`}
              />{" "}
            </div>
          )}

          <div className="comment-style-container-right-cmt-rep">
            <span class="fo-react-box">
              {reactions === "angry" ? (
                <a
                  className="comment-style-container-right-cmt-rep-a nbsp"
                  style={
                    bgMau === "white"
                      ? { color: "#ff7451" }
                      : { color: "#ff7451" }
                  }
                  onClick={(event) => reactUpdate(event, "angry", "del")}
                >
                  Phẫn nộ
                </a>
              ) : reactions === "like" ? (
                <a
                  className="comment-style-container-right-cmt-rep-a nbsp"
                  style={
                    bgMau === "white"
                      ? { color: "#04dde5" }
                      : { color: "#04dde5" }
                  }
                  onClick={(event) => reactUpdate(event, "like", "del")}
                >
                  Thích
                </a>
              ) : reactions === "haha" ? (
                <a
                  className="comment-style-container-right-cmt-rep-a nbsp"
                  style={
                    bgMau === "white"
                      ? { color: "#fffc00" }
                      : { color: "#fffc00" }
                  }
                  onClick={(event) => reactUpdate(event, "haha", "del")}
                >
                  Haha
                </a>
              ) : reactions === "sad" ? (
                <a
                  className="comment-style-container-right-cmt-rep-a nbsp"
                  style={
                    bgMau === "white"
                      ? { color: "#ffb80d" }
                      : { color: "#ffb80d" }
                  }
                  onClick={(event) => reactUpdate(event, "sad", "del")}
                >
                  Buồn
                </a>
              ) : reactions === "love" ? (
                <a
                  className="comment-style-container-right-cmt-rep-a nbsp"
                  style={
                    bgMau === "white"
                      ? { color: "#fb7ca3" }
                      : { color: "#fb7ca3" }
                  }
                  onClick={(event) => reactUpdate(event, "love", "del")}
                >
                  Yêu thích
                </a>
              ) : reactions === "wow" ? (
                <a
                  className="comment-style-container-right-cmt-rep-a nbsp"
                  style={
                    bgMau === "white"
                      ? { color: "#5cd673" }
                      : { color: "#5cd673" }
                  }
                  onClick={(event) => reactUpdate(event, "wow", "del")}
                >
                  Wow
                </a>
              ) : (
                <a
                  className="comment-style-container-right-cmt-rep-a nbsp"
                  style={
                    bgMau === "white"
                      ? { color: "#717272" }
                      : { color: "#f0f2f2" }
                  }
                >
                  Thích
                </a>
              )}
              <div class="fo-react-toolfo-react-box"></div>
              <button
                class="fo-reaction-like"
                onClick={(event) => reactUpdate(event, "like", "add")}
              >
                <span class="fo-legend-reaction">Thích</span>
              </button>
              <button
                class="fo-reaction-love"
                onClick={(event) => reactUpdate(event, "love", "add")}
              >
                <span class="fo-legend-reaction">Yêu thích</span>
              </button>
              <button
                class="fo-reaction-haha"
                onClick={(event) => reactUpdate(event, "haha", "add")}
              >
                <span class="fo-legend-reaction">Haha</span>
              </button>
              <button
                class="fo-reaction-wow"
                onClick={(event) => reactUpdate(event, "wow", "add")}
              >
                <span class="fo-legend-reaction">Wow</span>
              </button>
              <button
                class="fo-reaction-sad"
                onClick={(event) => reactUpdate(event, "sad", "add")}
              >
                <span class="fo-legend-reaction">Buồn</span>
              </button>
              <button
                class="fo-reaction-angry"
                onClick={(event) => reactUpdate(event, "angry", "add")}
              >
                <span class="fo-legend-reaction">Phẫn nộ</span>
              </button>
            </span>
            <span
              style={
                bgMau === "white" ? { color: "black" } : { color: "white" }
              }
            >
              &nbsp;•&nbsp;
            </span>
            <a
              className="comment-style-container-right-cmt-rep-b"
              style={
                bgMau === "white" ? { color: "#717272" } : { color: "#f0f2f2" }
              }
              onClick={hideRepLyComment}
            >
              Trả lời
            </a>
            <span
              className="mobileMenu"
              style={
                bgMau === "white" ? { color: "black" } : { color: "white" }
              }
            >
              &nbsp;•&nbsp;
            </span>
            <a
              className="comment-style-container-right-cmt-rep-a mobileMenu"
              style={
                bgMau === "white" ? { color: "#717272" } : { color: "#f0f2f2" }
              }
              onClick={settingMobiles}
            >
              Xem thêm
            </a>
            <span
              className="ipad-comment"
              style={
                bgMau === "white" ? { color: "black" } : { color: "white" }
              }
            >
              &nbsp;•&nbsp;
            </span>
            <a>
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
                    {value.TIMECMT}
                  </Moment>
                }
                placement="bottom"
                arrow
              >
                <a
                  style={
                    bgMau === "white"
                      ? {
                          color: "#363737",
                          fontSize: "14px",
                          textDecoration: "none",
                          cursor: "pointer",
                        }
                      : {
                          color: "#f4f5f5",
                          fontSize: "14px",
                          textDecoration: "none",
                          cursor: "pointer",
                        }
                  }
                  className="ipad-comment"
                >
                  <Moment locale="vi" fromNow>
                    {value.TIMECMT}
                  </Moment>
                </a>
              </Tooltip>
            </a>
          </div>
        </div>
        {value.status === "normal" && (
          <div
            className="setting-menu-reight-cmt"
            id={"settingComment" + value.STT}
          >
            <IconButton
              style={{ width: "17px", height: "17px" }}
              onClick={openSettingComment}
            >
              <SelectMenu
                style={
                  hideSetting === true
                    ? bgMau === "white"
                      ? { color: "#424242", display: "block" }
                      : { color: "#d3d4d4", display: "block" }
                    : bgMau === "white"
                    ? { color: "#424242", display: "none" }
                    : { color: "#d3d4d4", display: "none" }
                }
              />
            </IconButton>
            <div
              id={"OpenSettingComment" + value.STT}
              style={
                displaySett === true
                  ? bgMau === "white"
                    ? {
                        backgroundColor: "white",
                        color: "black",
                        display: "block",
                      }
                    : {
                        backgroundColor: "#424242",
                        color: "white",
                        display: "block",
                      }
                  : bgMau === "white"
                  ? {
                      backgroundColor: "white",
                      color: "black",
                      display: "none",
                    }
                  : {
                      backgroundColor: "#424242",
                      color: "white",
                      display: "none",
                    }
              }
              className="setting-menu-reight-cmt-setting-menu"
            >
              <SettingComment
                classes={classes}
                bgMau={bgMau}
                value={value}
                setValue={setValue}
                apiValue={apiValue}
                keyAPI={keyAPI}
                TOKEN={TOKEN}
                PATH={PATH}
              />
            </div>
          </div>
        )}
      </div>
      {value.status === "normal" && (
        <div style={{ position: "relative" }}>
          <div
            id={"settingMobile" + value.STT}
            className="style-menu-cmt-rep-a"
          >
            <SettingComment
              classes={classes}
              bgMau={bgMau}
              value={value}
              setValue={setValue}
              apiValue={apiValue}
              keyAPI={keyAPI}
              TOKEN={TOKEN}
              PATH={PATH}
            />
          </div>
        </div>
      )}
      {value.status === "normal" && (
        <div className="comment-style-container-right-cmt-rep-content">
          {countCmt > 0 ? (
            <div>
              {contentRep === true ? (
                <div
                  style={
                    bgMau === "white"
                      ? { color: "#7f8181" }
                      : { color: "#d1d3d3" }
                  }
                  className="comment-style-container-right-cmt-rep-content-title"
                  onClick={openReplyCommentClose}
                >
                  <img
                    style={{
                      width: "15px",
                      height: "15px",
                      marginRight: "5px",
                      marginTop: "-4px",
                    }}
                    src={IconReply}
                  />
                  ẩn {value.COUNTREPLY} phản hồi
                </div>
              ) : (
                <div
                  style={
                    bgMau === "white"
                      ? { color: "#7f8181" }
                      : { color: "#d1d3d3" }
                  }
                  className="comment-style-container-right-cmt-rep-content-title"
                  onClick={openReplyComment}
                >
                  <img
                    style={{
                      width: "15px",
                      height: "15px",
                      marginRight: "5px",
                      marginTop: "-4px",
                    }}
                    src={IconReply}
                  />
                  {value.COUNTREPLY} phản hồi{" "}
                  <CircularProgress
                    style={
                      loaddingCmtRep === false
                        ? { display: "none" }
                        : { display: "block" }
                    }
                    size="small"
                    className={classes.loading}
                  />
                </div>
              )}

              {contentRep && (
                <div className="comment-style-container-right-cmt-rep-content-cmt">
                  <RepComments
                    key={value.STT}
                    bgMau={bgMau}
                    setLoaddingCmtRep={setLoaddingCmtRep}
                    contentRep={contentRep}
                    keyAPI={keyAPI}
                    commentID={value.STT}
                    setHideComment={setHideComment}
                    dataAcc={dataAcc}
                    valueStory={valueStory}
                  />
                </div>
              )}
              {/* Méo hiểu sao chỗ này có hai cái hide comment, lúc code dư ra nó làm gì nhỉ */}
            </div>
          ) : (
            <div></div>
          )}
          {hideComment && (
            <div className="comment-style-container-right-cmt-rep-content-input">
              {openComment === "on" && (
                <div style={{ width: "100%", height: "100%" }}>
                  <div className="comment-style-container-right-cmt-rep-content-input-image">
                    <img
                      src={
                        process.env.PUBLIC_URL + `../foanime/${dataAcc.avatar}`
                      }
                    />
                  </div>

                  <div className="comment-style-container-right-cmt-rep-content-input-create">
                    <div
                      className="comment-style-container-right-cmt-rep-content-input-create-div-input"
                      style={
                        bgMau === "white"
                          ? { color: "black" }
                          : { color: "white" }
                      }
                    >
                      <div
                        onKeyDown={handleKeyDown}
                        className="comment-style-container-right-cmt-rep-content-input-create-div"
                        onInput={hekegu}
                      >
                        <Editor
                          editorState={state}
                          onClick={onExtractMentions}
                          onChange={setState}
                          plugins={plugins}
                          placeholder={"Bạn nghĩ gì về bình luận này?"}
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
                          className={classes.iconButton}
                          aria-label="React"
                          size="small"
                          onClick={sendRepComment}
                        >
                          <SendIcon />
                        </IconButton>
                      </div>
                    </div>
                    <ImageUploading
                      onChange={onChangeImages}
                      acceptType={["jpg", "gif", "png"]}
                      onError={(errors) => onErrorImage(errors)}
                      maxFileSize={5000000}
                    >
                      {({ imageList, onImageUpload }) => (
                        <div className="comment-style-container-right-cmt-rep-content-input-create-icon">
                          <IconButton
                            className={classes.iconButton}
                            aria-label="React"
                            size="small"
                          >
                            <EmojiEmotionsIcon />
                          </IconButton>
                          <Divider
                            className={classes.divider}
                            orientation="vertical"
                          />
                          {openFile ? (
                            <IconButton
                              color="primary"
                              className={classes.iconButton}
                              aria-label="Image"
                              onClick={closeImages}
                            >
                              <BrokenImageIcon />
                            </IconButton>
                          ) : (
                            <IconButton
                              color="primary"
                              className={classes.iconButton}
                              aria-label="Image"
                              onClick={onImageUpload}
                            >
                              <PhotoCameraIcon />
                            </IconButton>
                          )}

                          <div className="homestory-input-icon-send-ipad">
                            <IconButton
                              color="primary"
                              className={classes.iconButton}
                              aria-label="Send"
                              onClick={sendRepComment}
                            >
                              <SendIcon />
                            </IconButton>
                          </div>
                        </div>
                      )}
                    </ImageUploading>
                  </div>
                </div>
              )}
              <div className="upload-image-sticker-gif-file-to-commet-cmt">
                {progress !== null &&
                  (progress === 100 && image !== "" ? (
                    <div>
                      <img
                        style={{
                          height: "100%",
                          width: "100%",
                          marginTop: "10px",
                        }}
                        src={process.env.PUBLIC_URL + `../files/${image}`}
                      />
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
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Comment;
