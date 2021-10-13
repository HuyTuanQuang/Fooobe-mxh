import React, { useEffect, useState } from "react";
import "./style/HomeStoryStyle.css";
import { Link, useHistory } from "react-router-dom";
import StorysOften from "../layer/users/StorysOften";
import StorysCheckIn from "../layer/users/StorysCheckIn";
import StorysEvents from "../layer/users/StorysEvents";
import StorysImages from "../layer/users/StorysImages";
import StorysLesson from "../layer/users/StorysLesson";
import StorysMusic from "../layer/users/StorysMusic";
import StorysQuestion from "../layer/users/StorysQuestion";
import StorysReact from "../layer/users/StorysReact";
import StorysShops from "../layer/users/StorysShops";
import StorysTogetther from "../layer/users/StorysTogetther";
import StorysTogettherCheckIn from "../layer/users/StorysTogettherCheckIn";
import StorysVideos from "../layer/users/StorysVideos";
import StorysWorldDabate from "../layer/users/StorysWorldDabate";
import Skeleton from "@material-ui/lab/Skeleton";
//

function HomeStorys({
  bgMau,
  setBgMau,
  keyAPI,
  listFriend,
  dataAcc,
  dataStory,
  setPage,
  loadingStory,
  page,
  TOKEN,
  PATH,
  setSnackBar,
  setDataStory,
}) {
  let history = useHistory();
  const [timeSkip, setTimeSkip] = useState(0);
  window.onscroll = function (ev) {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
      var deadTime = Number(new Date());
      if (timeSkip === 0) {
        setTimeSkip(Number(new Date()));
        setPage(page + 10);
      } else {
        if (deadTime - timeSkip > 5000) {
          setTimeSkip(Number(new Date()));
          setPage(page + 10);
        }
      }
    }
  };

  if (TOKEN === null || TOKEN === undefined || TOKEN === "") {
    history.push("/logout");
  }
  return (
    <div id="disPhe" className="story-box">
      {dataStory.map((value, index) => {
        if (value.type_post === "often") {
          return (
            <StorysOften
              PATH={PATH}
              setSnackBar={setSnackBar}
              TOKEN={TOKEN}
              dataAcc={dataAcc}
              index={index}
              bgMau={bgMau}
              value={value}
              keyAPI={keyAPI}
              listFriend={listFriend}
              setDataStory={setDataStory}
              dataStory={dataStory}
            />
          );
        }
        if (value.type_post === "video") {
          return <StorysVideos />;
        }
        if (value.type_post === "images") {
          return (
            <StorysImages
              PATH={PATH}
              setSnackBar={setSnackBar}
              TOKEN={TOKEN}
              dataAcc={dataAcc}
              index={index}
              bgMau={bgMau}
              value={value}
              keyAPI={keyAPI}
              listFriend={listFriend}
              setDataStory={setDataStory}
              dataStory={dataStory}
            />
          );
        }
        if (value.type_post === "worlddabate") {
          return <StorysWorldDabate />;
        }
        if (value.type_post === "togetthercheckin") {
          return <StorysTogettherCheckIn />;
        }
        if (value.type_post === "togetther") {
          return <StorysTogetther />;
        }
        if (value.type_post === "shops") {
          return (
            <StorysShops
              PATH={PATH}
              setSnackBar={setSnackBar}
              TOKEN={TOKEN}
              dataAcc={dataAcc}
              index={index}
              bgMau={bgMau}
              value={value}
              keyAPI={keyAPI}
              listFriend={listFriend}
              setDataStory={setDataStory}
              dataStory={dataStory}
            />
          );
        }
        if (value.type_post === "react") {
          return <StorysReact />;
        }
        if (value.type_post === "question") {
          return (
            <StorysQuestion
              PATH={PATH}
              setSnackBar={setSnackBar}
              TOKEN={TOKEN}
              dataAcc={dataAcc}
              index={index}
              bgMau={bgMau}
              value={value}
              keyAPI={keyAPI}
              listFriend={listFriend}
              setDataStory={setDataStory}
              dataStory={dataStory}
            />
          );
        }
        if (value.type_post === "music") {
          return <StorysMusic />;
        }
        if (value.type_post === "lesson") {
          return (
            <StorysLesson
              PATH={PATH}
              setSnackBar={setSnackBar}
              TOKEN={TOKEN}
              dataAcc={dataAcc}
              index={index}
              bgMau={bgMau}
              value={value}
              keyAPI={keyAPI}
              listFriend={listFriend}
              setDataStory={setDataStory}
              dataStory={dataStory}
            />
          );
        }
        if (value.type_post === "event") {
          return <StorysEvents />;
        }
        if (value.type_post === "checkin") {
          return <StorysCheckIn />;
        }
      })}
      {loadingStory === true ? (
        <div
          style={{
            width: "100%",
          }}
        >
          <div
            className={
              bgMau === "white"
                ? "story-container-loadding"
                : "story-container-loadding2"
            }
          >
            <div>
              <Skeleton
                animation="wave"
                style={{ height: "30px", width: "70px" }}
              />
            </div>
            <div>
              <Skeleton
                animation="wave"
                style={{ height: "30px", width: "100px" }}
              />
            </div>
          </div>
          <div
            className={
              bgMau === "white"
                ? "story-container-loadding"
                : "story-container-loadding2"
            }
          >
            <div>
              <Skeleton
                animation="wave"
                style={{ height: "30px", width: "70px" }}
              />
            </div>
            <div>
              <Skeleton
                animation="wave"
                style={{ height: "30px", width: "100px" }}
              />
            </div>
          </div>
          <div
            className={
              bgMau === "white"
                ? "story-container-loadding"
                : "story-container-loadding2"
            }
          >
            <div>
              <Skeleton
                animation="wave"
                style={{ height: "30px", width: "70px" }}
              />
            </div>
            <div>
              <Skeleton
                animation="wave"
                style={{ height: "30px", width: "100px" }}
              />
            </div>
          </div>
        </div>
      ) : (
        <div
          style={
            bgMau === "white"
              ? {
                  width: "100%",
                  height: "150px",
                  textAlign: "center",
                  marginTop: "20px",
                  fontWeight: "bold",
                  color: "black",
                }
              : {
                  width: "100%",
                  height: "150px",
                  textAlign: "center",
                  marginTop: "20px",
                  fontWeight: "bold",
                  color: "white",
                }
          }
        >
          Hết rồi ! <br />
          Có vẻ như bạn rất ít bạn bè nhỉ, hãy thử <br />
          <Link to="/friends">tìm thêm bạn mới</Link> hoặc follow người khác{" "}
          <br />
          thông quá #hastag nhé
        </div>
      )}
    </div>
  );
}

export default HomeStorys;
