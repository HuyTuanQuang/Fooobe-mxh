import React, { useRef, useState, useMemo, useCallback } from "react";
import Axios from "axios";
import "./style/StyleHomeStatus.css";
import AnhVideo from "../../../../img/img.png";
import Imagess from "../../../../img/image.png";
import Camera from "../../../../img/camera.png";
import Music from "../../../../img/music.png";
import Question from "../../../../img/question.png";
import Shopping from "../../../../img/shopping.png";
import Events from "../../../../img/event.png";
import Pause from "../../../../img/pause.png";
import Play from "../../../../img/play.png";
import Lesson from "../../../../img/lesson.png";
import Mood from "../../../../img/mood.png";
import Location from "../../../../img/location.png";
import CamXuc from "../../../../img/smile-15.png";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import { EditorState, convertToRaw } from "draft-js";
import Editor from "@draft-js-plugins/editor";
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
import hashtagStyles from "./style/hastag.module.css";
//link
import createLinkifyPlugin from "@draft-js-plugins/linkify";
import Skeleton from "@material-ui/lab/Skeleton";
import Button from "@material-ui/core/Button";
import { Row, Col } from "reactstrap";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ImageUploading from "react-images-uploading";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
//
import Paper from "@material-ui/core/Paper";
//
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useCookies } from "react-cookie";
import TagsInput from "react-tagsinput";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { Redirect, useHistory, Link } from "react-router-dom";

import "react-tagsinput/react-tagsinput.css";
import { MdClose } from "react-icons/md";
//
import { LazyLoadImage } from "react-lazy-load-image-component";
//
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

var moment = require("moment-timezone");
const hashtagPlugin = createHashtagPlugin({ theme: hashtagStyles });
const linkifyPlugin = createLinkifyPlugin();

function HomeStatus({
  bgMau,
  setBgMau,
  dataAcc,
  keyAPI,
  trans,
  listFriend,
  setNewFeed,
  setDataStory,
  setPage,
  TOKEN,
  PATH,
}) {
  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: "10000",
      background: "rgba(255,255,255,0.7)",
    },
    backdrop3: {
      zIndex: "10000",
      background: "rgba(0,0,0,0.8)",
    },
    backdrop2: {
      zIndex: "100000",
      background: "rgb(248, 250, 250,0.93)",
    },

    button: {
      background: "#c3fafd",
      width: "100%",
      "&:hover": {
        background: "#2af1fd",
      },
    },
    function: {
      margin: "2%",
      width: "96%",
      height: "40px",
      color: "black",
      textTransform: "none",
      color: "#434444",
      fontFamily: "Tahoma",
      textAlign: "left",
    },
    function2: {
      margin: "2%",
      width: "96%",
      minHeight: "40px",
      color: "black",
      textTransform: "none",
      color: "#434444",
      fontFamily: "Tahoma",
      textAlign: "left",
      backgroundColor: "#dbf9fd",
      marginTop: "-10px",
      "&:hover": {
        background: "#fddbfa",
      },
    },
    function3: {
      margin: "2%",
      width: "96%",
      height: "100%",
      color: "black",
      textTransform: "none",
      color: "#434444",
      fontFamily: "Tahoma",
      textAlign: "left",
      "&:hover": {
        background: "none",
      },
    },
    function4: {
      width: "90%",
      minHeight: "40px",
      color: "black",
      textTransform: "none",
      border: "none",
      "&:hover": {
        background: "none",
      },
    },
    function5: {
      width: "10%",
      minHeight: "40px",
      color: "black",
      textTransform: "none",
      border: "none",
      "&:hover": {
        background: "none",
      },
    },
    heading: {
      width: "96%",
      marginLeft: "2%",
      marginBottom: "20px",
      marginTop: "10px",
      maxHeight: "700px",
      overflowY: "auto",
      "&::-webkit-scrollbar": {
        width: "7px",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#c4c6c6",
        borderRadius: "5px",
      },
    },
    xImage: {
      backgroundColor: "#feecfc",
    },
    yImage: {
      backgroundColor: "#f9fcfd",
    },
  }));
  const classes = useStyles();
  let history = useHistory();
  const [open, setOpen] = useState(false);
  const [openMenuCheckIn, setOpenMenuCheckIn] = useState(false);
  const [openMenuMusic, setOpenMenuMusic] = useState(false);
  const [openMenuReact, setOpenMenuReact] = useState(false);
  const [openMenuEvent, setOpenMenuEvent] = useState(false);
  const [openInPost, setOpenInPost] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const [sticker, setSticker] = useState([]);
  const [typeSticker, setTypeSticker] = useState([]);
  const [typeStickerHide, setTypeStickerHide] = useState(false);
  const [reactSticker, setReactSticker] = useState("");
  const [OpenSticker, setOpenSticker] = useState(true);
  const maxNumber = 300;
  //
  const datastory = {
    post_display_mode: "public",
    title: "",
    money: "",
    link: "",
    content: "",
    fake_content: "",
    fake_content_check: "",
    format: "",
    type_post: "often",
    date_time_post: "",
    date_update: "",
    post_status: "normal",
  };

  const [datapost, setDatapost] = useState(datastory);
  const [openPost, setOpenPost] = useState(true);
  const [openImagesX, setOpenImagesX] = useState(true);
  const [openPrevew, setOpenPrevew] = useState(false);
  const [openPrevewLink, setOpenPrevewLink] = useState(false);
  const [openPrevewMoney, setOpenPrevewMoney] = useState(false);
  const [alet, setAlet] = useState(
    trans("home_status.hello_21", { framework: "react-i18next" })
  );
  const [aletTitle, setAletTile] = useState(null);
  const [aletMoney, setAletMoney] = useState(null);
  const [aletLink, setAletLink] = useState(null);
  const [openImage, setOpenImage] = useState("");
  const [openVideo, setOpenVideo] = useState("");
  const [openCheckIn, setOpenCheckIn] = useState("");
  const [openMusic, setOpenMusic] = useState("");
  const [openQuestion, setOpenQuestion] = useState("");
  const [openShops, setOpenShops] = useState("");
  const [openEvents, setOpenEvents] = useState("");
  const [openLesson, setOpenLesson] = useState("");
  const [openReacts, setOpenReacts] = useState("");
  const [inputTags, setInputTags] = useState([]);
  const [OpenInputTags, setOpenInputTags] = useState(true);
  //
  const [imageUp, setImageUp] = useState(false);
  const [listFormat, setListFormat] = useState("");
  const [images, setImages] = React.useState([]);
  const [imgList, setImgList] = useState([]);
  const [musicList, setMusicList] = useState([]);
  const [musicPlay, setMusicPlay] = useState("");
  const [musicMil, setMusicMil] = useState(null);
  const [onMusicSec, setOnMusicSec] = useState(null);
  const [progress, setProgress] = useState(null);
  const [countProgress, setCountProgress] = useState(true);
  const [displey, setDisplay] = useState(false);

  //
  const handleClose = () => {
    setOpen(false);
    setStateMenu(true);
    setOpenMenuCheckIn(false);
    setOpenMenuMusic(false);
    setOpenMenuReact(false);
    setOpenMenuEvent(false);
    if (musicPlay !== "") {
      document.getElementById(musicPlay + "xm").style.display = "none";
      document.getElementById(musicPlay).style.display = "block";
      setMusicPlay("");
      document.getElementById("playms").pause();
    }
  };
  const handleToggle = () => {
    setOpen(true);
  };
  const handleToggle2 = () => {
    setOpen(true);
    setStateMenu(false);
    setOpenMenuReact(true);
  };
  const handleToggle3 = () => {
    setOpen(true);
    setStateMenu(false);
    setOpenMenuCheckIn(true);
  };
  const handlePrev = () => {
    setStateMenu(true);
    setOpenMenuCheckIn(false);
    setOpenMenuMusic(false);
    setOpenMenuReact(false);
    setOpenMenuEvent(false);
    if (musicPlay !== "") {
      document.getElementById(musicPlay + "xm").style.display = "none";
      document.getElementById(musicPlay).style.display = "block";
      setMusicPlay("");
      document.getElementById("playms").pause();
    }
  };

  const ref = useRef < Editor > null;
  const [state, setState] = useState(() => EditorState.createEmpty());
  const [state2, setState2] = useState(listFriend);
  const [stateMenu, setStateMenu] = useState(true);

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

  const onChagaTags = (event) => {
    setInputTags(event);
    setDatapost({
      ...datapost,
      title: event.join(";"),
    });
  };

  const onChaga = (event) => {
    const { name, value } = event.target;
    setDatapost({
      ...datapost,
      [name]: value,
    });
    if (datapost.title.length < 3 && datapost.type_post === "lesson") {
      setOpenPost(true);
    } else if (datapost.title.length >= 3 && datapost.type_post === "lesson") {
      setOpenPost("");
    }
  };

  const hekegu = (event) => {
    setDatapost({
      ...datapost,
      content: event.currentTarget,
      fake_content: event.currentTarget.textContent,
    });
    if (datapost.fake_content.length < 3 && datapost.type_post === "often") {
      setOpenPost(true);
    } else if (
      datapost.fake_content.length >= 3 &&
      datapost.type_post === "often"
    ) {
      setOpenPost("");
    } else if (
      datapost.fake_content.length < 3 &&
      datapost.type_post === "question"
    ) {
      setOpenPost(true);
    } else if (
      datapost.fake_content.length >= 3 &&
      datapost.type_post === "question"
    ) {
      setOpenPost("");
    }
  };
  //Phím backspace
  const handleKeyDown = (event) => {
    if (event.keyCode === 8) {
      event.preventDefault();
      setDatapost({
        ...datapost,
        content: event.currentTarget,
        fake_content: event.currentTarget.textContent,
      });
      if (datapost.fake_content.length < 4 && datapost.type_post === "often") {
        setOpenPost(true);
      } else if (
        datapost.fake_content.length >= 4 &&
        datapost.type_post === "often"
      ) {
        setOpenPost("");
      }
    }
    //Tính năng dán và copy chưa làm được
  };

  const onChangeImages = (imageList, addUpdateIndex) => {
    // data for submit
    setImages(imageList);

    addUpdateIndex.map((value, index) => {
      setProgress(0);
      const progressBar = {
        onUploadProgress: (progressEvent) => {
          setProgress(
            Math.round(
              Number((progressEvent.loaded / progressEvent.total) * 100)
            )
          );
        },
      };
      var uuid = require("uuid");
      const tunhien = uuid.v4();
      const tunhien2 = uuid.v4();
      const tunhien4 = uuid.v4();
      const tunhien3 = "fo" + Math.floor(Math.random() * 100000);
      const formData = new FormData();
      let last_dot = imageList[value].file.name.lastIndexOf(".");
      let ext = imageList[value].file.name.slice(last_dot + 1);

      // upload data cho đối tượng formdata
      formData.append(
        "myFile",
        imageList[value].file,
        tunhien + tunhien2 + tunhien4 + "-" + tunhien3 + "." + ext
      );
      formData.append("id", PATH);
      formData.append("token", TOKEN);

      Axios.post(keyAPI.apiPostImages, formData, progressBar)
        .then(({ data }) => {
          if (data.check === "xp") {
            history.push("/logout");
          } else {
            imgList.push(data.resul);
            if (datapost.type_post === "shops") {
              setDatapost({
                ...datapost,
                type_post: "shops",
                format: imgList.join(";"),
              });
              setAlet(
                trans("home_status.hello_22", { framework: "react-i18next" })
              );
            } else if (datapost.type_post === "often") {
              setDatapost({
                ...datapost,
                type_post: "images",
                format: imgList.join(";"),
              });
              setAlet(
                trans("home_status.hello_21", { framework: "react-i18next" })
              );
            } else {
              setDatapost({
                ...datapost,
                format: imgList.join(";"),
              });
              setAlet(
                trans("home_status.hello_21", { framework: "react-i18next" })
              );
            }
            if (index === addUpdateIndex.length - 1) {
              setCountProgress(false);
              setTimeout(() => {
                setDisplay(true);
              }, 3000);
            }
          }
        })
        .catch((error) => {});
    });

    setOpenPost("");
    setOpenImagesX(false);
    setImageUp(true);

    setOpenVideo(true);
    setOpenCheckIn(true);
    setOpenEvents(true);
    setOpenReacts(true);
    if (imageList.length > 1) {
      setOpenLesson(true);
    } else {
      setOpenLesson(false);
    }
  };

  const onRemoveSingnImage = (valuee, indexx) => {
    if (imgList.length > 1) {
      setImgList(imgList.filter((item) => item !== valuee));
      setImages(images.filter((item, index) => index !== indexx));
      setDatapost({
        ...datapost,
        format: imgList.filter((item) => item !== valuee).join(";"),
      });
    } else {
      setImages([]);
      setImgList([]);
      setOpenVideo("");
      setOpenCheckIn("");
      setOpenEvents("");
      setOpenReacts("");
      setOpenImagesX(true);
      setOpenLesson(false);
      setOpenPost("");
      if (datapost.type_post === "images") {
        setDatapost({
          ...datapost,
          type_post: "often",
          format: "",
        });
        setAlet(trans("home_status.hello_23", { framework: "react-i18next" }));
      } else {
        setDatapost({
          ...datapost,
          format: "",
        });
      }

      if (datapost.fake_content.length < 4) {
        setOpenPost(true);
      } else if (datapost.fake_content.length >= 4) {
        setOpenPost("");
      }
    }
  };
  const onRemoveTitle = () => {
    if (datapost.format !== "") {
      setDatapost({
        ...datapost,
        type_post: "images",
        title: "",
        money: "",
        link: "",
      });
    } else {
      setDatapost({
        ...datapost,
        type_post: "often",
        title: "",
        money: "",
        link: "",
      });
    }
    if (datapost.fake_content.length > 5) {
      setOpenPost("");
    } else {
      setOpenPost(true);
    }
    setAletTile(null);
    setAletMoney(null);
    setAletLink(null);
    setOpenPrevew(false);
    setOpenCheckIn("");
    setOpenVideo("");
    setOpenReacts("");
    setOpenShops("");
    setOpenMusic("");
    setOpenQuestion("");
    setOpenEvents("");
    setOpenLesson("");
    setOpenPrevewLink(false);
    setOpenPrevewMoney(false);
    setAlet(trans("home_status.hello_21", { framework: "react-i18next" }));
  };
  //Xử lý sự kiện Video
  const onVideoUpload = () => {
    setOpenPrevew(true);
    setOpenPrevewLink(false);
    setOpenPrevewMoney(false);
    setAletLink("");
    setAletMoney("");
    setAletTile(trans("home_status.hello_24", { framework: "react-i18next" }));
    setDatapost({
      ...datapost,
      type_post: "videos",
      title: "",
    });
    setAlet(trans("home_status.hello_25", { framework: "react-i18next" }));
  };
  //Xử lý sự kiện bán hàng
  const onPostCart = () => {
    setOpenPrevew(true);
    setOpenPrevewLink(true);
    setOpenPrevewMoney(true);
    setAletTile(trans("home_status.hello_26", { framework: "react-i18next" }));
    setAletLink(trans("home_status.hello_27", { framework: "react-i18next" }));
    setAletMoney(trans("home_status.hello_28", { framework: "react-i18next" }));
    setDatapost({
      ...datapost,
      type_post: "shops",
      title: "",
    });
    setOpenCheckIn(true);
    setOpenVideo(true);
    setOpenReacts(true);
    setOpenLesson(true);
    setOpenMusic(true);
    setOpenQuestion(true);
    setOpenEvents(true);
    setAlet(trans("home_status.hello_29", { framework: "react-i18next" }));
  };
  //Xử lý sự kiện "Sự kiện trong đời"
  const onClickEvent = () => {
    setStateMenu(false);
    setOpenMenuEvent(true);
    //setAlet("bạn nghĩ gì về dấu mốc này trong cuộc đời?")
  };
  //Xử lý sự kiện "Check In"
  const onClickCheckIn = () => {
    setStateMenu(false);
    setOpenMenuCheckIn(true);
  };
  //Xử lý sự kiện "Âm nhạc"
  const onClickMusic = () => {
    setStateMenu(false);
    setOpenMenuMusic(true);
    Axios.post(keyAPI.apiMusic, {
      id: cookies.fo_uim,
      token: cookies.fo_token,
    })
      .then(({ data }) => {
        setMusicList(data.music);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const onClickPostMusic = (event, value) => {
    setStateMenu(true);
    setOpenMenuMusic(false);
    if (musicPlay !== "") {
      document.getElementById(musicPlay + "xm").style.display = "none";
      document.getElementById(musicPlay).style.display = "block";
      setMusicPlay("");
      document.getElementById("playms").pause();
    }
  };
  //Xử lý sự kiện "Câu hỏi"
  const onClickQuestion = () => {
    setOpenImage(true);
    setOpenVideo(true);
    setOpenCheckIn(true);
    setOpenShops(true);
    setOpenLesson(true);
    setOpenEvents(true);
    setOpenInputTags(false);
    setOpenReacts(true);
    setDatapost({
      ...datapost,
      type_post: "question",
    });
    setAlet(trans("home_status.hello_30", { framework: "react-i18next" }));
  };
  //Xử lý sự kiện "Câu chuyện của bạn"
  const onClickNovel = () => {
    setOpenPrevew(true);
    setAletTile(trans("home_status.hello_31", { framework: "react-i18next" }));
    setOpenCheckIn(true);
    setOpenVideo(true);
    setOpenReacts(true);
    setOpenShops(true);
    setOpenMusic(true);
    setOpenQuestion(true);
    setOpenEvents(true);
    setDatapost({
      ...datapost,
      type_post: "lesson",
      format: "",
    });
    setAlet(trans("home_status.hello_32", { framework: "react-i18next" }));
  };
  //Xử lý sự kiện "Tâm trạng"
  const onClickSticker = () => {
    setStateMenu(false);
    setOpenMenuReact(true);
    setTypeStickerHide(true);
    Axios.post(keyAPI.apiPostSticker, {
      id: cookies.fo_uim,
      token: cookies.fo_token,
    })
      .then(({ data }) => {
        setSticker(data.sticker);
      })
      .catch((error) => {
        console.log(error);
      });
    Axios.post(keyAPI.apiSelectTypeSticker, {
      id: cookies.fo_uim,
      token: cookies.fo_token,
    })
      .then(({ data }) => {
        setTypeSticker(data.type);
        setTypeStickerHide(false);
      })
      .catch((error) => {
        console.log(false);
      });
  };
  const onClickSetReact = (event, value) => {
    setReactSticker(value.NAME);
    setOpenMenuReact(false);
    setStateMenu(true);
    setOpenSticker(false);

    setOpenImage(true);
    setOpenVideo(true);
    setOpenCheckIn(true);
    setOpenQuestion(true);
    setOpenShops(true);
    setOpenLesson(true);
    setOpenEvents(true);
    setOpenPost("");

    setDatapost({
      ...datapost,
      type_post: "react",
      format: value.NAME,
    });
    setAlet(trans("home_status.hello_23", { framework: "react-i18next" }));
  };
  const onCloseSticker = () => {
    setReactSticker("");
    setOpenSticker(true);
    setOpenImage("");
    setOpenVideo("");
    setOpenCheckIn("");
    setOpenQuestion("");
    setOpenShops("");
    setOpenLesson("");
    setOpenEvents("");
    setAlet(trans("home_status.hello_23", { framework: "react-i18next" }));
    setDatapost({
      ...datapost,
      type_post: "often",
      format: "",
    });
    if (datapost.fake_content.length > 5) {
      setOpenPost("");
    } else {
      setOpenPost(true);
    }
  };

  const onCloseInputTag = () => {
    setReactSticker("");
    setOpenImage("");
    setOpenVideo("");
    setOpenCheckIn("");
    setOpenQuestion("");
    setOpenShops("");
    setOpenLesson("");
    setOpenEvents("");
    setOpenReacts("");
    setInputTags([]);
    setOpenInputTags(true);
    if (datapost.format !== "") {
      setDatapost({
        ...datapost,
        type_post: "images",
        title: "",
      });
    } else {
      setDatapost({
        ...datapost,
        type_post: "often",
        title: "",
      });
    }
    if (datapost.fake_content.length > 5) {
      setOpenPost("");
    } else {
      setOpenPost(true);
    }
    setAlet(trans("home_status.hello_21", { framework: "react-i18next" }));
  };
  //
  const onClickSetMusicPlay = (event, value, time) => {
    if (musicPlay !== "") {
      document.getElementById(musicPlay + "xm").style.display = "none";
      document.getElementById(musicPlay).style.display = "block";
    }
    setMusicPlay(value);
    document.getElementById("playms").play();
    document.getElementById(value).style.display = "none";
    document.getElementById(value + "xm").style.display = "block";
    // console.log(document.getElementById("playms").duration)

    setMusicMil(parseInt(time.slice(0, 2)));
    setOnMusicSec(parseInt(time.slice(3, 5)));
    // if (onMusicSec === -1) {
    //   setMusicMil(musicMil-1);
    //   setOnMusicSec(59);
    // }
    // if (musicMil === -1){
    //   setMusicMil(time.slice(0, 2));
    //   setOnMusicSec(time.slice(3, 4));
    // }
  };

  // useEffect(() => {
  //   if(onMusicSec !== null){
  //     setTimeout(
  //       () => setOnMusicSec(onMusicSec-1),1000);
  //   }
  // }, [onMusicSec]);

  const onClickSetMusicPause = (event, value) => {
    setMusicPlay("");
    document.getElementById("playms").pause();
    document.getElementById(value).style.display = "block";
    document.getElementById(value + "xm").style.display = "none";
  };

  const onPostStory = (event) => {
    event.preventDefault();
    if (
      datapost.type_post === "often" ||
      datapost.type_post === "images" ||
      datapost.type_post === "lesson" ||
      datapost.type_post === "shops" ||
      datapost.type_post === "question"
    ) {
      if (
        datapost.type_post === "shops" &&
        (datapost.title === "" || datapost.money === "")
      ) {
      } else if (datapost.type_post === "lesson" && datapost.title === "") {
      } else {
        const timez = new Date();

        var times = moment
          .tz(timez, Intl.DateTimeFormat().resolvedOptions().timeZone)
          .tz("Asia/Saigon")
          .format("YYYY/MM/DD HH:mm:ss");

        if (
          /^\s*$/.test(datapost.fake_content) &&
          datapost.type_post === "often"
        ) {
          event.preventDefault();
        } else if (datapost.fake_content.length > 150) {
          setOpenPost(true);
          setOpenInPost(true);
          Axios.post(keyAPI.apiPostNewsStory, {
            id: dataAcc.id,
            post_display_mode: datapost.post_display_mode,
            title: datapost.title,
            money: datapost.money,
            link: datapost.link,
            content: datapost.content.outerHTML,
            fake_content_check: datapost.fake_content.substring(0, 110),
            format: datapost.format,
            type_post: datapost.type_post,
            date_time_post: times,
            date_update: times,
            post_status: datapost.post_status,
            token: cookies.fo_token,
          })
            .then(({ data }) => {
              setAletTile(null);
              setAletMoney(null);
              setAletLink(null);
              setOpenPrevew(false);
              setOpenPrevewLink(false);
              setOpenPrevewMoney(false);
              setOpen(false);
              setOpenInPost(false);
              setDataStory([]);
              setPage(0);
              setNewFeed(Math.floor(Math.random() * 100000));
              setImages([]);
              setImgList([]);
              setOpenImagesX(true);
              setOpenVideo("");
              setOpenCheckIn("");
              setOpenEvents("");
              setOpenReacts("");
              setDatapost(datastory);
              setState(() => EditorState.createEmpty());
              document.getElementById("title-status").innerText = "";
              document.getElementById("money-status").innerText = "";
              document.getElementById("link-status").innerText = "";
            })
            .catch((error) => {
              setOpen(false);
              setOpenInPost(false);
              console.log(error);
            });
        } else {
          setOpenPost(true);
          setOpenInPost(true);
          Axios.post(keyAPI.apiPostNewsStory, {
            id: dataAcc.id,
            post_display_mode: datapost.post_display_mode,
            title: datapost.title,
            money: datapost.money,
            link: datapost.link,
            content: datapost.content.outerHTML,
            fake_content_check: "",
            format: datapost.format,
            type_post: datapost.type_post,
            date_time_post: times,
            date_update: times,
            post_status: datapost.post_status,
            token: cookies.fo_token,
          })
            .then(({ data }) => {
              setAletTile(null);
              setAletMoney(null);
              setAletLink(null);
              setOpenPrevew(false);
              setOpenPrevewLink(false);
              setOpenPrevewMoney(false);
              setOpen(false);
              setOpenInPost(false);
              setDataStory([]);
              setPage(0);
              setNewFeed(Math.floor(Math.random() * 100000));
              setImages([]);
              setImgList([]);
              setOpenImagesX(true);
              setOpenVideo("");
              setOpenCheckIn("");
              setOpenEvents("");
              setOpenReacts("");
              setDatapost(datastory);
              setState(() => EditorState.createEmpty());
              document.getElementById("title-status").innerText = "";
              document.getElementById("money-status").innerText = "";
              document.getElementById("link-status").innerText = "";
            })
            .catch((error) => {
              setOpen(false);
              setOpenInPost(false);
              console.log(error);
            });
        }
      }
    }
  };

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

  if (cookies.fo_uim === null || cookies.fo_uim === undefined) {
    return <Redirect to={"/login"} />;
  }

  return (
    <div
      class="docs-status"
      style={
        bgMau === "white"
          ? { backgroundColor: "white", boxShadow: "0 0 2px 1px #d3d4d4" }
          : { backgroundColor: "#242526" }
      }
    >
      {dataAcc !== undefined && dataAcc.avatar !== undefined ? (
        <div className="layout-input-status">
          <div className="docs-status-css">
            <Link to={"/" + PATH}>
              <LazyLoadImage
                className="docs-status-avt"
                src={`/foanime/${dataAcc.avatar}`}
                placeholder={
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    style={{
                      width: "50px",
                      height: "50px",
                      marginTop: "20px",
                      marginLeft: "10px",
                      borderRadius: "100%",
                    }}
                  />
                }
              />
            </Link>
          </div>
          <div className="docs-status-input">
            <div
              className={
                bgMau === "white"
                  ? "input-create input-create-1"
                  : "input-create input-create-2"
              }
              onClick={handleToggle}
              style={
                bgMau === "white"
                  ? { color: "rgb(71, 66, 66)" }
                  : { color: "#ccccccc2" }
              }
            >
              {dataAcc.lastname}{" "}
              {trans("home_status.hello_1", { framework: "react-i18next" })}
            </div>
          </div>
        </div>
      ) : (
        <div style={{ height: "90px" }}></div>
      )}

      <div className="layout-button-status">
        <div className="docs-status-button">
          <div
            className={
              bgMau === "white"
                ? "docs-status-button-css docs-status-button-css-1"
                : "docs-status-button-css docs-status-button-css-2"
            }
          >
            <img src={AnhVideo} />
            <span
              class="docs-status-button-css-link"
              style={
                bgMau === "white" ? { color: "#454747" } : { color: "white" }
              }
            >
              {trans("home_status.hello_2", { framework: "react-i18next" })}
            </span>
          </div>
        </div>
        <div className="hr-status-mobile"></div>
        <div className="docs-status-button" onClick={handleToggle2}>
          <div
            className={
              bgMau === "white"
                ? "docs-status-button-css docs-status-button-css-1"
                : "docs-status-button-css docs-status-button-css-2"
            }
          >
            <img src={CamXuc} />
            <span
              className="docs-status-button-css-link"
              style={
                bgMau === "white" ? { color: "#454747" } : { color: "white" }
              }
            >
              {trans("home_status.hello_3", { framework: "react-i18next" })}
            </span>
          </div>
        </div>
        <div className="hr-status-mobile"></div>
        <div className="docs-status-button" onClick={handleToggle3}>
          <div
            className={
              bgMau === "white"
                ? "docs-status-button-css docs-status-button-css-1"
                : "docs-status-button-css docs-status-button-css-2"
            }
          >
            <img src={Location} />
            <span
              className="docs-status-button-css-link"
              style={
                bgMau === "white" ? { color: "#454747" } : { color: "white" }
              }
            >
              {trans("home_status.hello_4", { framework: "react-i18next" })}
            </span>
          </div>
        </div>
      </div>
      <Backdrop
        className={bgMau === "white" ? classes.backdrop : classes.backdrop3}
        open={open}
        onClick={handleClose}
      ></Backdrop>
      <Backdrop className={classes.backdrop2} open={openInPost}>
        <div
          style={{ zIndex: "100000", fontWeight: "bold", marginTop: "-50px" }}
        >
          {trans("home_status.hello_5", { framework: "react-i18next" })}
        </div>
        <div class="dot-carousel"></div>
      </Backdrop>
      <form onSubmit={onPostStory}>
        <ImageUploading
          multiple={datapost.type_post === "lesson" ? false : true}
          value={images}
          onChange={onChangeImages}
          maxNumber={maxNumber}
          acceptType={["jpg", "gif", "png"]}
          onError={(errors) => onErrorImage(errors)}
          maxFileSize={5000000}
        >
          {({ imageList, onImageUpload, errors, dragProps }) => (
            <div
              className="create-status"
              style={
                open === true
                  ? bgMau === "white"
                    ? {
                        backgroundColor: "white",
                        display: "block",
                        color: "black",
                      }
                    : {
                        backgroundColor: "#242526",
                        display: "block",
                        color: "white",
                      }
                  : bgMau === "white"
                  ? {
                      backgroundColor: "white",
                      display: "none",
                      color: "black",
                    }
                  : {
                      backgroundColor: "#242526",
                      display: "none",
                      color: "white",
                    }
              }
              {...dragProps}
            >
              <div
                className="create-status-cha"
                style={
                  stateMenu === true
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <div className="create-status-content">
                  {trans("home_status.hello_6", { framework: "react-i18next" })}
                  <span style={{ float: "right", marginRight: "5px" }}>
                    <IconButton onClick={handleClose}>
                      <CloseIcon
                        style={
                          bgMau === "white"
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      />
                    </IconButton>
                  </span>
                </div>
                <div className="create-status-content-boder"></div>

                <div className="create-status-body">
                  <div className="create-status-css">
                    <a href="">
                      <img
                        src={
                          process.env.PUBLIC_URL + `/foanime/${dataAcc.avatar}`
                        }
                        className="create-status-avt"
                      />
                    </a>
                  </div>
                  <div className="create-status-title">
                    <div className="create-status-title-name">
                      {dataAcc.fristname + " " + dataAcc.lastname}
                    </div>
                    <div className="create-status-title-public">
                      {trans("home_status.hello_7", {
                        framework: "react-i18next",
                      })}
                    </div>
                  </div>
                  <br />
                </div>
                <div className="create-status-prive">
                  <div
                    style={
                      OpenSticker === true
                        ? { display: "none" }
                        : {
                            width: "100%",
                            height: "100px",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                          }
                    }
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        style={{
                          height: "100px",
                          width: "100px",
                        }}
                        src={`/sticker/${reactSticker}`}
                      />
                      <div className="close-gif" onClick={onCloseSticker}></div>
                    </div>
                  </div>
                  {openPrevew && (
                    <div
                      style={{
                        marginBottom: "10px",
                        display: "block",
                      }}
                    >
                      <div style={{ position: "relative" }}>
                        <input
                          type="text"
                          style={
                            bgMau === "white"
                              ? {
                                  outline: "none",
                                  width: "100%",
                                  height: "40px",
                                  paddingLeft: "5px",
                                  border: "0.1px solid white",
                                  marginLeft: "-5px",
                                  marginBottom: "7px",
                                  backgroundColor: "white",
                                  color: "black",
                                }
                              : {
                                  outline: "none",
                                  width: "100%",
                                  height: "40px",
                                  paddingLeft: "5px",
                                  border: "0.1px solid grey",
                                  marginLeft: "-5px",
                                  marginBottom: "7px",
                                  backgroundColor: "#242526",
                                  color: "white",
                                }
                          }
                          id="title-status"
                          placeholder={aletTitle}
                          name="title"
                          onChange={onChaga}
                        />
                        <div
                          className="close-gif2"
                          onClick={onRemoveTitle}
                        ></div>
                      </div>

                      {openPrevewMoney && (
                        <input
                          type="text"
                          style={
                            bgMau === "white"
                              ? {
                                  outline: "none",
                                  width: "100%",
                                  height: "40px",
                                  paddingLeft: "5px",
                                  border: "0.1px solid white",
                                  marginLeft: "-5px",
                                  marginBottom: "7px",
                                  backgroundColor: "white",
                                  color: "black",
                                }
                              : {
                                  outline: "none",
                                  width: "100%",
                                  height: "40px",
                                  paddingLeft: "5px",
                                  border: "0.1px solid grey",
                                  marginLeft: "-5px",
                                  marginBottom: "7px",
                                  backgroundColor: "#242526",
                                  color: "white",
                                }
                          }
                          id="money-status"
                          placeholder={aletMoney}
                          name="money"
                          onChange={onChaga}
                        />
                      )}

                      {openPrevewLink && (
                        <input
                          type="text"
                          style={
                            bgMau === "white"
                              ? {
                                  outline: "none",
                                  width: "100%",
                                  height: "40px",
                                  paddingLeft: "5px",
                                  border: "0.1px solid white",
                                  marginLeft: "-5px",
                                  marginBottom: "7px",
                                  backgroundColor: "white",
                                  color: "black",
                                }
                              : {
                                  outline: "none",
                                  width: "100%",
                                  height: "40px",
                                  paddingLeft: "5px",
                                  border: "0.1px solid grey",
                                  marginLeft: "-5px",
                                  marginBottom: "7px",
                                  backgroundColor: "#242526",
                                  color: "white",
                                }
                          }
                          id="link-status"
                          placeholder={aletLink}
                          name="link"
                          onChange={onChaga}
                        />
                      )}
                    </div>
                  )}
                  <div
                    className="editor-status"
                    onKeyDown={handleKeyDown}
                    onInput={hekegu}
                  >
                    <Editor
                      editorState={state}
                      onClick={onExtractMentions}
                      onChange={setState}
                      plugins={plugins}
                      placeholder={
                        dataAcc.lastname +
                        trans("home_status.hello_8", {
                          framework: "react-i18next",
                        }) +
                        alet
                      }
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
                  <div
                    className="create-status-images"
                    style={
                      openImagesX === true
                        ? { display: "none" }
                        : { display: "block" }
                    }
                  >
                    {progress !== null &&
                      (imgList.length > 0 ? (
                        imgList.map((value, index) => {
                          return (
                            <div>
                              <div style={{ position: "relative" }}>
                                <img
                                  className="create-status-images-img"
                                  src={`/files/${value}`}
                                />
                                {displey && (
                                  <div
                                    className="icon-close-status"
                                    onClick={() =>
                                      onRemoveSingnImage(value, index)
                                    }
                                  >
                                    <MdClose />
                                  </div>
                                )}
                              </div>
                              {countProgress && (
                                <div>
                                  <div
                                    style={{
                                      backgroundColor: "#d2d2d2",
                                      minHeight: "200px",
                                      width: "100%",
                                      marginBottom: "10px",
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
                              )}
                            </div>
                          );
                        })
                      ) : (
                        <div>
                          <div
                            style={{
                              backgroundColor: "#d2d2d2",
                              minHeight: "200px",
                              width: "100%",
                              marginBottom: "10px",
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
                <div
                  style={
                    OpenInputTags === true
                      ? { display: "none" }
                      : { width: "96%", marginLeft: "2%" }
                  }
                >
                  <div style={{ position: "relative" }}>
                    <TagsInput
                      value={inputTags}
                      onChange={onChagaTags}
                      placeholder="hello"
                    />
                    <div className="close-gif2" onClick={onCloseInputTag}></div>
                  </div>
                </div>
                <div className="create-status-livefuction">
                  <Row style={{ marginLeft: "1%", marginRight: "1%" }}>
                    <Col lg="4" xl="4" md="6" sm="12">
                      <Button
                        className={classes.function}
                        onClick={onImageUpload}
                        disabled={openImage}
                        style={
                          openImage
                            ? bgMau === "white"
                              ? { color: "grey", cursor: "not-allowed" }
                              : { color: "grey", cursor: "not-allowed" }
                            : bgMau === "white"
                            ? { color: "black", cursor: "pointer" }
                            : { color: "white", cursor: "pointer" }
                        }
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                            }}
                            src={Imagess}
                          />
                          <span>
                            {trans("home_status.hello_9", {
                              framework: "react-i18next",
                            })}
                          </span>
                        </div>
                      </Button>
                    </Col>
                    <Col lg="4" xl="4" md="6" sm="12">
                      <Button
                        className={classes.function}
                        onClick={onVideoUpload}
                        disabled={openVideo}
                        style={
                          openVideo
                            ? bgMau === "white"
                              ? { color: "grey", cursor: "not-allowed" }
                              : { color: "grey", cursor: "not-allowed" }
                            : bgMau === "white"
                            ? { color: "black", cursor: "pointer" }
                            : { color: "white", cursor: "pointer" }
                        }
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                            }}
                            src={Camera}
                          />
                          {trans("home_status.hello_10", {
                            framework: "react-i18next",
                          })}
                        </div>
                      </Button>
                    </Col>
                    <Col lg="4" xl="4" md="6" sm="12">
                      <Button
                        className={classes.function}
                        onClick={onClickCheckIn}
                        disabled={openCheckIn}
                        style={
                          openCheckIn
                            ? bgMau === "white"
                              ? { color: "grey", cursor: "not-allowed" }
                              : { color: "grey", cursor: "not-allowed" }
                            : bgMau === "white"
                            ? { color: "black", cursor: "pointer" }
                            : { color: "white", cursor: "pointer" }
                        }
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                            }}
                            src={Location}
                          />
                          {trans("home_status.hello_11", {
                            framework: "react-i18next",
                          })}
                        </div>
                      </Button>
                    </Col>
                    <Col lg="4" xl="4" md="6" sm="12">
                      <Button
                        className={classes.function}
                        onClick={onClickMusic}
                        disabled={openMusic}
                        style={
                          openMusic
                            ? bgMau === "white"
                              ? { color: "grey", cursor: "not-allowed" }
                              : { color: "grey", cursor: "not-allowed" }
                            : bgMau === "white"
                            ? { color: "black", cursor: "pointer" }
                            : { color: "white", cursor: "pointer" }
                        }
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                            }}
                            src={Music}
                          />
                          {trans("home_status.hello_12", {
                            framework: "react-i18next",
                          })}
                        </div>
                      </Button>
                    </Col>
                    <Col lg="4" xl="4" md="6" sm="12">
                      <Button
                        className={classes.function}
                        onClick={onClickQuestion}
                        disabled={openQuestion}
                        style={
                          openQuestion
                            ? bgMau === "white"
                              ? { color: "grey", cursor: "not-allowed" }
                              : { color: "grey", cursor: "not-allowed" }
                            : bgMau === "white"
                            ? { color: "black", cursor: "pointer" }
                            : { color: "white", cursor: "pointer" }
                        }
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                            }}
                            src={Question}
                          />
                          {trans("home_status.hello_13", {
                            framework: "react-i18next",
                          })}
                        </div>
                      </Button>
                    </Col>
                    <Col lg="4" xl="4" md="6" sm="12">
                      <Button
                        className={classes.function}
                        disabled={openShops}
                        onClick={onPostCart}
                        style={
                          openShops
                            ? bgMau === "white"
                              ? { color: "grey", cursor: "not-allowed" }
                              : { color: "grey", cursor: "not-allowed" }
                            : bgMau === "white"
                            ? { color: "black", cursor: "pointer" }
                            : { color: "white", cursor: "pointer" }
                        }
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                            }}
                            src={Shopping}
                          />
                          {trans("home_status.hello_14", {
                            framework: "react-i18next",
                          })}
                        </div>
                      </Button>
                    </Col>
                    <Col lg="4" xl="4" md="6" sm="12">
                      <Button
                        className={classes.function}
                        onClick={onClickEvent}
                        disabled={openEvents}
                        style={
                          openEvents
                            ? bgMau === "white"
                              ? { color: "grey", cursor: "not-allowed" }
                              : { color: "grey", cursor: "not-allowed" }
                            : bgMau === "white"
                            ? { color: "black", cursor: "pointer" }
                            : { color: "white", cursor: "pointer" }
                        }
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                            }}
                            src={Events}
                          />
                          {trans("home_status.hello_15", {
                            framework: "react-i18next",
                          })}
                        </div>
                      </Button>
                    </Col>
                    <Col lg="4" xl="4" md="6" sm="12">
                      <Button
                        className={classes.function}
                        onClick={onClickNovel}
                        disabled={openLesson}
                        style={
                          openLesson
                            ? bgMau === "white"
                              ? { color: "grey", cursor: "not-allowed" }
                              : { color: "grey", cursor: "not-allowed" }
                            : bgMau === "white"
                            ? { color: "black", cursor: "pointer" }
                            : { color: "white", cursor: "pointer" }
                        }
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                            }}
                            src={Lesson}
                          />
                          {trans("home_status.hello_16", {
                            framework: "react-i18next",
                          })}
                        </div>
                      </Button>
                    </Col>
                    <Col lg="4" xl="4" md="6" sm="12">
                      <Button
                        className={classes.function}
                        onClick={onClickSticker}
                        disabled={openReacts}
                        style={
                          openReacts
                            ? bgMau === "white"
                              ? { color: "grey", cursor: "not-allowed" }
                              : { color: "grey", cursor: "not-allowed" }
                            : bgMau === "white"
                            ? { color: "black", cursor: "pointer" }
                            : { color: "white", cursor: "pointer" }
                        }
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "100%",
                            textAlign: "left",
                          }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                            }}
                            src={Mood}
                          />
                          {trans("home_status.hello_17", {
                            framework: "react-i18next",
                          })}
                        </div>
                      </Button>
                    </Col>
                  </Row>
                </div>

                <div className="create-status-posttime">
                  <div
                    style={
                      openPost === true
                        ? {
                            cursor: "not-allowed",
                            width: "70%",
                            marginLeft: "15%",
                            marginBottom: "5px",
                          }
                        : {
                            cursor: "pointer",
                            width: "70%",
                            marginLeft: "15%",
                            marginBottom: "5px",
                          }
                    }
                  >
                    <Button
                      disabled={openPost}
                      type="submit"
                      variant="contained"
                      className={classes.button}
                      style={
                        openPost
                          ? bgMau === "white"
                            ? { color: "grey"}
                            : { color: "grey" }
                          : bgMau === "white"
                          ? { color: "black"}
                          : { color: "black"}
                      }
                    >
                      {trans("home_status.hello_18", {
                        framework: "react-i18next",
                      })}
                    </Button>
                  </div>
                </div>
              </div>
              <div
                className="create-status-con"
                style={
                  stateMenu === true
                    ? { display: "none" }
                    : { display: "block" }
                }
              >
                <div className="create-status-content">
                  <span style={{ float: "left", marginLeft: "5px" }}>
                    <IconButton onClick={handlePrev}>
                      <ArrowBackIosIcon
                        style={
                          bgMau === "white"
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      />
                    </IconButton>
                  </span>
                  {trans("home_status.hello_6", { framework: "react-i18next" })}
                  <span style={{ float: "right", marginRight: "5px" }}>
                    <IconButton onClick={handleClose}>
                      <CloseIcon
                        style={
                          bgMau === "white"
                            ? { color: "black" }
                            : { color: "white" }
                        }
                      />
                    </IconButton>
                  </span>
                </div>
                <div className="create-status-content-boder"></div>
                <div
                  className="create-status-content-checkin"
                  style={
                    openMenuCheckIn === true
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <div class="pin bounce"></div>
                  <div class="pulse"></div>
                  <Paper
                    style={{
                      backgroundColor: "#eaeded",
                      width: "80%",
                      marginLeft: "10%",
                      marginTop: "10px",
                      minHeight: "40px",
                      textAlign: "center",
                      lineHeight: "40px",
                    }}
                  >
                    {trans("home_status.hello_19", {
                      framework: "react-i18next",
                    })}
                  </Paper>
                </div>
                <div
                  className="create-status-content-music"
                  style={
                    openMenuMusic === true
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <Paper
                    style={{
                      backgroundColor: "#eaeded",
                      width: "96%",
                      marginLeft: "2%",
                      marginTop: "10px",
                      minHeight: "40px",
                      textAlign: "center",
                      lineHeight: "40px",
                    }}
                  >
                    {trans("home_status.hello_20", {
                      framework: "react-i18next",
                    })}
                  </Paper>
                  <br />
                  <audio
                    id="playms"
                    loop
                    autoPlay
                    src={process.env.PUBLIC_URL + `../music/${musicPlay}`}
                  ></audio>
                  {musicList.map((value, index) => {
                    return (
                      <ButtonGroup key={index} className={classes.function2}>
                        <Button
                          className={classes.function5}
                          id={value.MUSICFILE}
                          onClick={(event) =>
                            onClickSetMusicPlay(
                              event,
                              value.MUSICFILE,
                              value.MUSICTIME
                            )
                          }
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                              cursor: "pointer",
                              zIndex: "10000",
                            }}
                            src={Play}
                          />
                        </Button>
                        <Button
                          className={classes.function5}
                          id={value.MUSICFILE + "xm"}
                          onClick={(event) =>
                            onClickSetMusicPause(event, value.MUSICFILE)
                          }
                          style={{ display: "none" }}
                        >
                          <img
                            style={{
                              height: "80%",
                              width: "30px",
                              marginRight: "5px",
                              cursor: "pointer",
                              zIndex: "10000",
                            }}
                            src={Pause}
                          />
                        </Button>
                        <Button
                          className={classes.function4}
                          onClick={(event) =>
                            onClickPostMusic(event, value.MUSICFILE)
                          }
                        >
                          <div
                            style={{
                              width: "90%",
                              height: "100%",
                              textAlign: "left",
                            }}
                          >
                            {value.MUSICNAME} - {value.MUSICSONG}
                          </div>
                          <div
                            style={{
                              float: "right",
                              width: "10%",
                              height: "100%",
                              textAlign: "left",
                            }}
                          >
                            <span>{value.MUSICTIME}</span>
                          </div>
                        </Button>
                      </ButtonGroup>
                    );
                  })}
                </div>
                <div
                  className="create-status-content-React"
                  style={
                    openMenuReact === true
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  <div className={classes.heading}>
                    <Accordion
                      style={
                        bgMau === "white"
                          ? { backgroundColor: "white", color: "black" }
                          : { backgroundColor: "#242526", color: "white" }
                      }
                    >
                      <Typography></Typography>
                    </Accordion>
                    <div
                      style={
                        typeStickerHide === true
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      <Accordion
                        style={
                          bgMau === "white"
                            ? { backgroundColor: "white", color: "black" }
                            : { backgroundColor: "#242526", color: "white" }
                        }
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography style={{ width: "60%" }}>
                            <Skeleton
                              style={{
                                width: "40px",
                                height: "40px",
                                float: "left",
                              }}
                            />
                            <Skeleton
                              style={{
                                width: "70%",
                                height: "40px",
                                marginLeft: "5px",
                                float: "left",
                              }}
                            />
                          </Typography>
                        </AccordionSummary>
                      </Accordion>
                      <Accordion
                        style={
                          bgMau === "white"
                            ? { backgroundColor: "white", color: "black" }
                            : { backgroundColor: "#242526", color: "white" }
                        }
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography style={{ width: "60%" }}>
                            <Skeleton
                              style={{
                                width: "40px",
                                height: "40px",
                                float: "left",
                              }}
                            />
                            <Skeleton
                              style={{
                                width: "70%",
                                height: "40px",
                                marginLeft: "5px",
                                float: "left",
                              }}
                            />
                          </Typography>
                        </AccordionSummary>
                      </Accordion>
                      <Accordion
                        style={
                          bgMau === "white"
                            ? { backgroundColor: "white", color: "black" }
                            : { backgroundColor: "#242526", color: "white" }
                        }
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography style={{ width: "60%" }}>
                            <Skeleton
                              style={{
                                width: "40px",
                                height: "40px",
                                float: "left",
                              }}
                            />
                            <Skeleton
                              style={{
                                width: "70%",
                                height: "40px",
                                marginLeft: "5px",
                                float: "left",
                              }}
                            />
                          </Typography>
                        </AccordionSummary>
                      </Accordion>
                      <Accordion
                        style={
                          bgMau === "white"
                            ? { backgroundColor: "white", color: "black" }
                            : { backgroundColor: "#242526", color: "white" }
                        }
                      >
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography style={{ width: "60%" }}>
                            <Skeleton
                              style={{
                                width: "40px",
                                height: "40px",
                                float: "left",
                              }}
                            />
                            <Skeleton
                              style={{
                                width: "70%",
                                height: "40px",
                                marginLeft: "5px",
                                float: "left",
                              }}
                            />
                          </Typography>
                        </AccordionSummary>
                      </Accordion>
                    </div>

                    {typeSticker.map((val, idx) => {
                      return (
                        <Accordion
                          key={idx}
                          style={
                            bgMau === "white"
                              ? { backgroundColor: "white", color: "black" }
                              : { backgroundColor: "#242526", color: "white" }
                          }
                        >
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography>{val.REACTNAME}</Typography>
                          </AccordionSummary>
                          <Row>
                            {sticker.map((value, index) => {
                              if (value.REACTS === val.REACTCODE) {
                                return (
                                  <Col lg="3" xl="3" md="4" sm="6" xs="6">
                                    <Button
                                      key={index}
                                      onClick={(event) =>
                                        onClickSetReact(event, value)
                                      }
                                      className={classes.function3}
                                    >
                                      <div
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                          textAlign: "left",
                                          float: "left",
                                        }}
                                      >
                                        <img
                                          style={{
                                            height: "100%",
                                            width: "100%",
                                            marginRight: "5px",
                                          }}
                                          src={
                                            process.env.PUBLIC_URL +
                                            `../sticker/${value.NAME}`
                                          }
                                        />
                                      </div>
                                    </Button>
                                  </Col>
                                );
                              }
                            })}
                          </Row>
                        </Accordion>
                      );
                    })}
                  </div>
                </div>
                <div
                  className="create-status-content-Event"
                  style={
                    openMenuEvent === true
                      ? { display: "block" }
                      : { display: "none" }
                  }
                >
                  Event
                </div>
              </div>
            </div>
          )}
        </ImageUploading>
      </form>
    </div>
  );
}

export default HomeStatus;
