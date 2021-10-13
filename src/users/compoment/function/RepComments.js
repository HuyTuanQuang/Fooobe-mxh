import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import Axios from "axios";
import "./RepCommentsCSS.css";

import RepComment from "./RepComment";

function RepComments({
  bgMau,
  keyAPI,
  commentID,
  contentRep,
  setLoaddingCmtRep,
  setHideComment,
  dataAcc,
  valueStory,
}) {
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const [deley, setDeley] = useState(1);
  const [dataReply, setDataRepLy] = useState([]);

  

  useEffect(() => {
    if (contentRep === true) {
      Axios.post(keyAPI.apiRepComment, {
        id: cookies.fo_uim,
        token: cookies.fo_token,
        comment: commentID,
      })
        .then(({ data }) => {
          if (typeof data.comment !== "undefined" && data.comment.length > 0) {
            if (data.comment.length > dataReply.length) {
              setDataRepLy(data.comment);
            }
            setLoaddingCmtRep(false);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [keyAPI]);

  // const delayCMT = () => {
  //   if (contentRep === true) {
  //     setDeley(deley + 1);
  //   }
  // };
  // setInterval(delayCMT, 10000);
  
  return (
    <div>
      {dataReply.map((value, index) => {
        return (
          <div>
            <RepComment  valueStory={valueStory} keyAPI={keyAPI} dataAcc={dataAcc} bgMau={bgMau} setHideComment={setHideComment} index={index} value={value}/>
          </div>
        );
      })}
    </div>
  );
}

export default RepComments;
