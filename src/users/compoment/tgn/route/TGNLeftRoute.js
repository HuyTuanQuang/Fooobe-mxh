import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { useCookies } from "react-cookie";
import Axios from "axios";
import TGNProfile from "../tgnLeft/TGNProfile";

function TGNLeftRoute({ bgMau, trans, keyAPI, dataAcc }) {
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const [accTGN, setAccTGN] = useState(null);
  const [userTGN, setUserTGN] = useState(null);
  const [accessTGN, setAccessTGN] = useState(false);
  useEffect(() => {
    if (cookies.fo_uim !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNLoadUser, {
        id: cookies.fo_uim,
        token: cookies.fo_token,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
            } else {
              setUserTGN(data.tgn);
            }
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
      Axios.post(keyAPI.apiTGNLoadAcc, {
        id: cookies.fo_uim,
        token: cookies.fo_token,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
            } else {
              setAccTGN(data.tgn[0]);
              setAccessTGN(
                data.tgn[0].type_account === "admin" ||
                  data.tgn[0].type_account === "operator" ||
                  data.tgn[0].type_account === "mod" ||
                  data.tgn[0].type_account === "adchap"
                  ? true
                  : false
              );
            }
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
  }, [keyAPI]);
  return (
    <div>
      <Switch>
        {userTGN !== null ? (
          userTGN.map((val) => {
            return (
              <Route path={"/tgn/profile/" + val.id}>
                <TGNProfile
                  accessTGN={accessTGN}
                  trans={trans}
                  bgMau={bgMau}
                  keyAPI={keyAPI}
                  dataAcc={dataAcc}
                  accTGN={accTGN}
                  userTGN={userTGN}
                />
              </Route>
            );
          })
        ) : (
          <div></div>
        )}
        <Route path="/tgn/profile/">
          <TGNProfile
            accessTGN={accessTGN}
            trans={trans}
            bgMau={bgMau}
            keyAPI={keyAPI}
            dataAcc={dataAcc}
            accTGN={accTGN}
            userTGN={userTGN}
          />
        </Route>
        <Route path="/tgn">
          <TGNProfile
            accessTGN={accessTGN}
            trans={trans}
            bgMau={bgMau}
            keyAPI={keyAPI}
            dataAcc={dataAcc}
            accTGN={accTGN}
            userTGN={userTGN}
          />
        </Route>
        
      
      </Switch>
    </div>
  );
}

export default TGNLeftRoute;
