import "./App.css";
import Menu from "../src/menu/Menu";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Home from "./users/Home";
import { useCookies } from "react-cookie";
import { withTranslation, useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { RiWifiOffFill, RiWifiFill } from "react-icons/ri";
import { useSwipeable } from "react-swipeable";

function App() {
  //State
  let history = useHistory();
  const [trans, i18n] = useTranslation("common");
  const keyAPIValue = [];
  const [keyAPI, setkeyAPI] = useState(keyAPIValue);
  const [idSetting, setIdSetting] = useState(keyAPIValue);
  const [dataAcc, setDataAcc] = useState(keyAPIValue);
  const [bgMau, setBgMau] = useState("white");
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const [TOKEN, setTOKEN] = useState(cookies.fo_token);
  const [PATH, setPATH] = useState(cookies.fo_uim);
  const [listFriend, setListFriend] = useState([]);
  const [handScroll, setHandScroll] = useState(0);
  const [dataStory, setDataStory] = useState([]);
  const [page, setPage] = useState(0);
  const [loadingStory, setLoadingStory] = useState(true);
  const [warning, setWarning] = useState(null);
  const [fooobe, setFooobe] = useState(false);
  const [openNetwork, setOpenNetwork] = useState("online");
  const [newFeed, setNewFeed] = useState(0);
  const [snackBar, setSnackBar] = useState({
    key: false,
    value: "Thông báo",
    color: "black",
    up: 0,
  });
  if (bgMau === "white") {
    document.body.style.backgroundColor = "#f9f9f9";
  } else {
    document.body.style.backgroundColor = "#18191a";
  }
  //load api
  useEffect(() => {
    Axios.get("http://localhost/fooobe/src/api/request-api.php")
      //Axios.get("https://fooobe.com/api/request-api.php")

      .then(({ data }) => {
        setkeyAPI(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Truy vấn có vấn đề");
        } else if (error.request) {
          console.log("Không nhận được phản hồi");
        } else {
          console.log("I am Nhân by Fo");
        }
      });
  }, []);
  //Load setting display
  useEffect(() => {
    if (
      cookies.fo_uim !== null &&
      cookies.fo_uim !== undefined &&
      cookies.fo_uim !== "" &&
      keyAPI !== "undefined"
    ) {
      Axios.post(keyAPI.apiGetSetting, {
        id: cookies.fo_uim,
      })
        .then(({ data }) => {
          setIdSetting(data[0]);
          setBgMau(data[0].back_ground_fooobe);
        })
        .catch((error) => {
          if (error.response) {
            console.log("Truy vấn có vấn đề");
          } else if (error.request) {
            console.log("Không nhận được phản hồi");
          } else {
            console.log("I am Nhân by Fo");
          }
        });
    } else {
      setBgMau("white");
    }
  }, [keyAPI, TOKEN]);
  //Load data hastag
  useEffect(() => {
    if (
      cookies.fo_uim !== null &&
      cookies.fo_uim !== undefined &&
      cookies.fo_uim !== "" &&
      keyAPI !== "undefined"
    ) {
      Axios.post(keyAPI.apiGetListFriends, {
        id: cookies.fo_uim,
        token: cookies.fo_token,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            setListFriend(data.friend);
          }
        })
        .catch((error) => {
          if (error.response) {
            console.log("Truy vấn có vấn đề");
          } else if (error.request) {
            console.log("Không nhận được phản hồi");
          } else {
            console.log("I am Nhân by Fo");
          }
        });
    }
  }, [keyAPI, TOKEN]);

  //Load data acc
  useEffect(() => {
    if (
      cookies.fo_uim !== null &&
      cookies.fo_uim !== undefined &&
      cookies.fo_uim !== "" &&
      keyAPI !== "undefined"
    ) {
      Axios.post(keyAPI.apiProfileAccount, {
        id: cookies.fo_uim,
      })
        .then(({ data }) => {
          setDataAcc(data[0]);
        })
        .catch((error) => {
          if (error.response) {
            console.log("Truy vấn có vấn đề");
          } else if (error.request) {
            console.log("Không nhận được phản hồi");
          } else {
            console.log("I am Nhân by Fo");
          }
        });
    }
  }, [keyAPI, TOKEN]);
  const handScrol = () => {
    setHandScroll(handScroll + 1);
  };
  // Load data post
  useEffect(() => {
    if (
      cookies.fo_uim !== null &&
      cookies.fo_uim !== undefined &&
      cookies.fo_uim !== "" &&
      typeof keyAPI !== "undefined"
    ) {
      Axios.post(keyAPI.apiStorys, {
        id: cookies.fo_uim,
        token: TOKEN,
        page: page,
      })
        .then(({ data }) => {
          if (data.check === "xp") {
            history.push("/logout");
          } else {
            if (typeof data.story !== "undefined" && data.story.length > 0) {
              setDataStory(dataStory.concat(data.story));
            } else {
              setLoadingStory(false);
            }
          }
        })
        .catch((error) => {
          console.log(error);
          if (error.response) {
            console.log("Truy vấn có vấn đề");
          } else if (error.request) {
            console.log("Không nhận được phản hồi");
          } else {
            console.log("I am Nhân by Fo");
          }
        });
    }
    setFooobe(true);
  }, [keyAPI, page, TOKEN, newFeed]);
  // useEffect(() => {
  //   if (
  //     cookies.fo_uim !== undefined &&
  //     cookies.fo_uim !== "" &&
  //     typeof keyAPI !== "undefined" &&
  //     newFeed !== 0
  //   ) {
  //     setDataStory([]);
  //     setPage(0);
  //     Axios.post(keyAPI.apiStorys, {
  //       id: cookies.fo_uim,
  //       token: cookies.fo_token,
  //       page: 0,
  //     })
  //       .then(({ data }) => {
  //         if (typeof data.story !== "undefined" && data.story.length > 0) {
  //           setDataStory(data.story);
  //         }
  //         if (data.check === "xp") {
  //           return <Redirect to={"/logout"} />;
  //         }
  //         console.clear();
  //         console.log(
  //           "%cFooobe %cthông báo hãy dừng lại%c!",
  //           "color: #83fdfe; font-weight: bold; font-size: 3rem; text-shadow: 0 0 5px rgba(0,0,0,0.2);",
  //           "color: #ff7b5f; font-weight: bold; font-size: 3rem; text-shadow: 0 0 5px rgba(0,0,0,0.2);",
  //           "color: #ff7b5f; font-weight: bold; font-size: 3rem; text-shadow: 0 0 5px rgba(0,0,0,0.2);"
  //         );
  //         console.log(
  //           "%cViệc dán mã nguồn vào đây có thể khiến cho tài khoản, thông tin của bạn bị xâm phạm. Đừng tin lời bất kỳ ai, hãy đóng tab lại.",
  //           "color: #363535; font-weight: bold; font-size: 1rem; text-shadow: 0 0 5px rgba(0,0,0,0.2);"
  //         );
  //       })
  //       .catch((error) => {
  //         if (error.response) {
  //           console.log("Truy vấn có vấn đề");
  //         } else if (error.request) {
  //           console.log("Không nhận được phản hồi");
  //         } else {
  //           console.log("I am Nhân by Fo");
  //         }
  //       });
  //   }
  // }, [newFeed]);

  // })

  // var articles = document.getElementsByTagName('a');
  //   	for (var i = 0; i < articles.length; i++) {
  //   		const lea = document.getElementsByTagName('a')[i].href
  // 	    articles[i].addEventListener("click", function(event){
  // 		  event.preventDefault();
  // 		  if(getDomain(lea) == 'fooobe.com'){
  // 		  	window.location= lea;
  // 		  }else{
  // 		  	window.open(lea, "_blank");
  // 		  }

  // 		});
  // 	}
  // 	function getDomain(url) {

  //     url = url.replace(/(https?:\/\/)?(www.)?/i, '');

  //     if (url.indexOf('/') !== -1) {
  //         return url.split('/')[0];
  //     }

  //     return url;
  // }
  // const condition = ;

  window.addEventListener("offline", function (e) {
    setOpenNetwork("offline");
    const nextNotices = document.getElementById("snackbar-fooobe");
    nextNotices.className = "showSnackBarFooobe";
    nextNotices.innerText = "Mất kết nối, vui lòng kiểm tra lại mạng";
  });

  window.addEventListener("online", function (e) {
    if (openNetwork === "offline") {
      setOpenNetwork("online");
      const nextNotices = document.getElementById("snackbar-fooobe");
      nextNotices.className = "showSnackBarFooobe";
      nextNotices.innerText = "Mạng đã được kết nối";
      setTimeout(function () {
        nextNotices.className = nextNotices.className.replace(
          "showSnackBarFooobe",
          "showSnackBarFooobe-2"
        );
      }, 4000);
    }
  });

  const onDisplaySnakbar = useSwipeable({
    onSwipedUp: () => {
      const nextNotices = document.getElementById("snackbar-fooobe");
      nextNotices.className = nextNotices.className.replace(
        "showSnackBarFooobe",
        "showSnackBarFooobe-2"
      );
    },
  });
  return (
    <div
      className="App"
      style={
        bgMau === "white"
          ? { backgroundColor: "#f9f9f9" }
          : { backgroundColor: "#18191a" }
      }
      onScroll={handScrol}
      onTouchMove={handScrol}
    >
      <Menu
        bgMau={bgMau}
        setBgMau={setBgMau}
        dataAcc={dataAcc}
        keyAPI={keyAPI}
        handScroll={handScroll}
        TOKEN={TOKEN}
        PATH={PATH}
      />
      {fooobe && (
        <Home
          bgMau={bgMau}
          listFriend={listFriend}
          setBgMau={setBgMau}
          dataAcc={dataAcc}
          keyAPI={keyAPI}
          trans={trans}
          loadingStory={loadingStory}
          page={page}
          dataStory={dataStory}
          setDataStory={setDataStory}
          setPage={setPage}
          TOKEN={TOKEN}
          PATH={PATH}
          warning={warning}
          setWarning={setWarning}
          setNewFeed={setNewFeed}
          setFooobe={setFooobe}
          setSnackBar={setSnackBar}
          setTOKEN={setTOKEN}
          setPATH={setPATH}
        />
      )}
      <div {...onDisplaySnakbar} id="snackbar-fooobe">
        <div>{snackBar.value}</div>
      </div>
    </div>
  );
}

export default withTranslation("common")(App);

/*install
  - npm install @material-ui/core
  - npm install @material-ui/icons
  - npm install axios
  - npm install react-router-dom
  - npm install react-cookie
  - npm install --save react-images-uploading
  - npm install draft-js react react-dom
  - npm install @draft-js-plugins/mention
  - npm install @draft-js-plugins/editor
  - npm i style-loader css-loader --save-dev
  - npm install @draft-js-plugins/hashtag
  - npm i --save react-lazy-load-image-component
*/
