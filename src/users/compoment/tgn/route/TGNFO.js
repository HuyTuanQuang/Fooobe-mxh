import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import TGNHome from "../tgnCenter/TGNHome";
import Axios from "axios";
import UserTGNProfile from "../tgnCenter/function/UserTGNProfile";
import FuctionAreaTGN from "../tgnCenter/function/FuctionAreaTGN";
import FuctionSkillLoveTGN from "../tgnCenter/function/FuctionSkillLoveTGN";
import { Redirect } from "react-router-dom";
import FuctionProfessionTGN from "../tgnCenter/function/FuctionProfessionTGN";
import FuctionSuperPowerTGN from "../tgnCenter/function/FuctionSuperPowerTGN";
import FuctionJobTGN from "../tgnCenter/function/FuctionJobTGN";
import FuctionNovelMangaTGN from "../../storys/layer/fostory/FuctionNovelMangaTGN";
import FuctionBuyPGDTGN from "../tgnCenter/function/FuctionBuyPGDTGN";
import FuctionMarketTGN from "../tgnCenter/function/FuctionMarketTGN";

import FuctionRandomTGN from "../tgnCenter/function/FuctionRandomTGN";
import FuctionPvPTGN from "../tgnCenter/function/FuctionPvPTGN";
import FuctionTrainTGN from "../tgnCenter/function/FuctionTrainTGN";
import FuctionDugeonTGN from "../tgnCenter/function/FuctionDugeonTGN";
import FuctionOrgazineTGN from "../tgnCenter/function/FuctionOrgazineTGN";
import NotFile from "../../../NotFile";

function TGNFO({ bgMau, setBgMau, keyAPI, dataAcc, TOKEN, PATH, setWarning }) {
  document.documentElement.setAttribute("lang", "vi");
  const [accTGN, setAccTGN] = useState(null);
  const [userTGN, setUserTGN] = useState(null);
  const [job, setJob] = useState(null);
  const [updateUser, setUpdateUser] = useState(0);
  const [updateAcc, setUpdateAcc] = useState(0);
  const [updateJob, setUpdateJob] = useState(0);

  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNLoadAcc, {
        id: PATH,
        token: TOKEN,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              setAccTGN(data.tgn[0]);
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
  }, [keyAPI, updateAcc]);
  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNLoadUser, {
        id: PATH,
        token: TOKEN,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
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
    }
  }, [keyAPI, updateUser, accTGN]);

  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNJob, {
        id: PATH,
        token: TOKEN,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              setJob(data.tgn);
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
  }, [keyAPI, updateJob]);

  if (PATH === null || PATH === undefined) {
    return <Redirect to={"/login"} />;
  }
  return (
    <div>
      <Switch>
      
        {userTGN !== null ? (
          userTGN.map((val) => {
            return (
              <Route path={"/tgn/profile/" + val.id}>
                <UserTGNProfile
                  keyAPI={keyAPI}
                  valAccTGN={val}
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
          <UserTGNProfile
            keyAPI={keyAPI}
            valAccTGN={accTGN}
            accTGN={accTGN}
            userTGN={userTGN}
          />
        </Route>
        <Route path="/tgn/fostory">
          <FuctionNovelMangaTGN />
        </Route>
        <Route path={"/tgn/area"}>
          <FuctionAreaTGN
            PATH={PATH}
            TOKEN={TOKEN}
            bgMau={bgMau}
            keyAPI={keyAPI}
            accTGN={accTGN}
            userTGN={userTGN}
            setUpdateUser={setUpdateUser}
            setUpdateAcc={setUpdateAcc}
            setWarning={setWarning}
          />
        </Route>
        <Route path={"/tgn/skilllove"}>
          <FuctionSkillLoveTGN
            job={job}
            keyAPI={keyAPI}
            PATH={PATH}
            TOKEN={TOKEN}
            bgMau={bgMau}
            setUpdateJob={setUpdateJob}
            accTGN={accTGN}
            setUpdateAcc={setUpdateAcc}
          />
        </Route>
        <Route path={"/tgn/skilljob"}>
          <FuctionJobTGN
            job={job}
            keyAPI={keyAPI}
            PATH={PATH}
            TOKEN={TOKEN}
            bgMau={bgMau}
            setUpdateJob={setUpdateJob}
            accTGN={accTGN}
            setUpdateAcc={setUpdateAcc}
          />
        </Route>
        <Route path={"/tgn/skillpro"}>
          <FuctionProfessionTGN
            job={job}
            keyAPI={keyAPI}
            PATH={PATH}
            TOKEN={TOKEN}
            bgMau={bgMau}
            setUpdateJob={setUpdateJob}
            accTGN={accTGN}
            setUpdateAcc={setUpdateAcc}
          />
        </Route>
        <Route path={"/tgn/superpower"}>
          <FuctionSuperPowerTGN
            job={job}
            keyAPI={keyAPI}
            PATH={PATH}
            TOKEN={TOKEN}
            bgMau={bgMau}
            setUpdateJob={setUpdateJob}
            accTGN={accTGN}
            setUpdateAcc={setUpdateAcc}
          />
        </Route>
        <Route path="/tgn/buypgd">
          <FuctionBuyPGDTGN
            PATH={PATH}
            TOKEN={TOKEN}
            accTGN={accTGN}
            keyAPI={keyAPI}
          />
        </Route>
        <Route path="/tgn/market">
          <FuctionMarketTGN
            PATH={PATH}
            TOKEN={TOKEN}
            accTGN={accTGN}
            keyAPI={keyAPI}
            userTGN={userTGN}
            bgMau={bgMau}
            setUpdateAcc={setUpdateAcc}
          />
        </Route>
        <Route path="/tgn/random">
          <FuctionRandomTGN
            PATH={PATH}
            TOKEN={TOKEN}
            accTGN={accTGN}
            keyAPI={keyAPI}
            userTGN={userTGN}
            bgMau={bgMau}
            setUpdateAcc={setUpdateAcc}
          />
        </Route>
        <Route path="/tgn/pvp">
          <FuctionPvPTGN />
        </Route>
        <Route path="/tgn/train">
          <FuctionTrainTGN />
        </Route>
        <Route path="/tgn/dugeon">
          <FuctionDugeonTGN />
        </Route>
        <Route path="/tgn/orgazine">
          <FuctionOrgazineTGN
            PATH={PATH}
            TOKEN={TOKEN}
            accTGN={accTGN}
            keyAPI={keyAPI}
            bgMau={bgMau}
            setUpdateAcc={setUpdateAcc}
          />
        </Route>
        <Route path="/tgn">
          <TGNHome accTGN={accTGN} />
        </Route>
        
        <Route path="*">
          <NotFile />
        </Route>
      </Switch>
    </div>
  );
}

export default TGNFO;
