import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Axios from "axios";
import "./CommentsCSS.css";
import Comment from "./Comment";

function Comments({
  keyAPI,
  storyID,
  bgMau,
  listFriend,
  dataAcc,
  countCMT,
  index,
  loadComment,
  openComment,
  valueStory,
  TOKEN,
  PATH,
}) {
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState([]);
  const [newSendComment, setNewSendComment] = useState([]);
  const [deley, setDeley] = useState(1);
  const [countReCmt, setCountReCmt] = useState(0);
  const [cmtSTT, setCmtSTT] = useState(0);
  const [newSTT, setNewSTT] = useState(0);

  useEffect(() => {
    if (loadComment === 0) {
      Axios.post(keyAPI.apiComment, {
        id: cookies.fo_uim,
        token: cookies.fo_token,
        story: storyID,
      })
        .then(({ data }) => {
          if (typeof data.comment !== "undefined" && data.comment.length > 0) {
            setComment(data.comment);
            setCmtSTT(data.comment[0].STT);
            setNewSTT(data.comment[data.comment.length - 1].STT);
            setCountReCmt(countCMT - 2);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [keyAPI]);

  useEffect(() => {
    if (loadComment !== 0) {
      Axios.post(keyAPI.apiNewComment, {
        id: cookies.fo_uim,
        token: cookies.fo_token,
        story: storyID,
        stt: newSTT,
      })
        .then(({ data }) => {
          if (typeof data.comment !== "undefined" && data.comment.length > 0) {
            setNewSendComment(newSendComment.concat(data.comment));
            if (data.comment.length === 1) {
              setNewSTT(data.comment[0].STT);
            } else {
              setNewSTT(data.comment[data.comment.length - 1].STT);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [keyAPI, loadComment]);

  // const delayCMT = () => {
  //   // if (contentRep === true) {
  //      setDeley(deley + 1);
  //   // }
  // };
  // setInterval(delayCMT, 5000);
  const updateCMT = () => {
    Axios.post(keyAPI.apiRealComment, {
      id: cookies.fo_uim,
      token: cookies.fo_token,
      story: storyID,
      stt: cmtSTT,
    })
      .then(({ data }) => {
        if (typeof data.comment !== "undefined" && data.comment.length > 0) {
          setNewComment(data.comment.concat(newComment));
          if (data.comment[0].NEWCOUNTCMT > 50) {
            setCountReCmt(countReCmt - 50);
          } else {
            setCountReCmt(countReCmt - Number(data.comment[0].NEWCOUNTCMT));
          }

          setCmtSTT(data.comment[0].STT);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hideCMT = () => {
    setCmtSTT(comment[0].STT);
    setNewComment([]);
    setCountReCmt(countCMT - 2);
  };


  return (
    <div>
      {newComment.length > 2 && (
        <div
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#959595",
            marginTop: "-45px",
            marginBottom: "5px",
          }}
          onClick={hideCMT}
        >
          Ẩn bớt bình luận
        </div>
      )}
      {Number(countReCmt) > 0 ? (
        <div
          style={{
            fontSize: "1rem",
            fontWeight: "bold",
            cursor: "pointer",
            color: "#959595",
            marginTop: "-45px",
            marginBottom: "5px",
          }}
          onClick={updateCMT}
        >
          Xem thêm {countReCmt} bình luận
        </div>
      ) : (
        <a></a>
      )}
      {newComment.map((value, idx) => {
        return (
          <div key={idx}>
        
              <Comment
                key={idx}
                value={value}
                listFriend={listFriend}
                bgMau={bgMau}
                dataAcc={dataAcc}
                keyAPI={keyAPI}
                openComment={openComment}
                valueStory={valueStory}
                TOKEN={TOKEN}
                PATH={PATH}
                setValue={setNewComment}
                apiValue={newComment}
              />
            
          </div>
        );
      })}
      {comment.map((value, idx) => {
        return (
          <div key={idx}>
           
              <Comment
                key={idx}
                value={value}
                listFriend={listFriend}
                bgMau={bgMau}
                dataAcc={dataAcc}
                keyAPI={keyAPI}
                openComment={openComment}
                valueStory={valueStory}
                TOKEN={TOKEN}
                PATH={PATH}
                setValue={setComment}
                apiValue={comment}
              />
           
          </div>
        );
      })}
      {newSendComment.map((value, idx) => {
        return (
          <div key={idx}>
          
              <Comment
                key={idx}
                value={value}
                listFriend={listFriend}
                bgMau={bgMau}
                dataAcc={dataAcc}
                keyAPI={keyAPI}
                openComment={openComment}
                valueStory={valueStory}
                TOKEN={TOKEN}
                PATH={PATH}
                setValue={setNewSendComment}
                apiValue={newSendComment}
              />
           
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
