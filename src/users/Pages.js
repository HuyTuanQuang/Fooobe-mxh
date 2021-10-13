import React from "react";
import { Switch, Route } from "react-router-dom";
import NewStory from "../users/compoment/storys/route/NewStory";
import WatchTV from "../users/compoment/watch/route/WatchTV";
import Profile from "../users/compoment/profile/route/Profile";
import HomeStatus from "../users/compoment/storys/storysStatus/HomeStatus";
import UserStatus from "../users/compoment/profile/profileCenter/UserStatus";
import Login from "../singn/Login";
import Singn from "../singn/Singn";
import EndLogin from "../singn/EndLogin";
import TabLogin from "../singn/TabLogin";

import RouteCenter from "./compoment/messenger/route/RouteCenter";

import NotFile from "./NotFile";
import RouteFriendCenter from "./compoment/friends/route/RouteFriendCenter";
import RouteSettingCenter from "./compoment/setting/route/RouteSettingCenter";
import RouteMarketCenter from "./compoment/market/route/RouteMarketCenter";

function Pages({
  bgMau,
  setBgMau,
  keyAPI,
  dataAcc,
  trans,
  listFriend,
  dataStory,
  setPage,
  loadingStory,
  page,
  TOKEN,
  PATH,
  setWarning,
  setNewFeed,
  setFooobe,
  setSnackBar,
  tabMess,
  setDataStory,
  setTOKEN,
  setPATH
}) {
  return (
    <div>
      <Switch>
        <Route path="/newstory">
          <HomeStatus
            listFriend={listFriend}
            bgMau={bgMau}
            setBgMau={setBgMau}
            dataAcc={dataAcc}
            keyAPI={keyAPI}
            trans={trans}
            setNewFeed={setNewFeed}
            setPage={setPage}
            setDataStory={setDataStory}
            TOKEN={TOKEN}
            PATH={PATH}
          />
        </Route>
        <Route path="/watch">
          <HomeStatus
            listFriend={listFriend}
            bgMau={bgMau}
            setBgMau={setBgMau}
            dataAcc={dataAcc}
            keyAPI={keyAPI}
            trans={trans}
            setNewFeed={setNewFeed}
            setPage={setPage}
            setDataStory={setDataStory}
            TOKEN={TOKEN}
            PATH={PATH}
          />
        </Route>
        <Route path="/friends">
        </Route>
        <Route path="/marketplace"></Route>
        <Route path="/profile">
          <UserStatus bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/notifications">
          <UserStatus bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/tab-menu">
          <UserStatus bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/search">
          <UserStatus bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/setting">
        </Route>
        <Route path="/messenger"></Route>
        <Route path="/login">
          <TabLogin />
        </Route>
        <Route path="/singn">
          <TabLogin />
        </Route>
        <Route exact path="/">
          <HomeStatus
            listFriend={listFriend}
            bgMau={bgMau}
            setBgMau={setBgMau}
            dataAcc={dataAcc}
            keyAPI={keyAPI}
            trans={trans}
            setNewFeed={setNewFeed}
            setPage={setPage}
            setDataStory={setDataStory}
            TOKEN={TOKEN}
            PATH={PATH}
          />
        </Route>
        <Route path="*"></Route>
      </Switch>

      {/* Chia ra 2 phần*/}
      <Switch>
        <Route path="/newstory">
          <NewStory
            loadingStory={loadingStory}
            page={page}
            dataStory={dataStory}
            setPage={setPage}
            dataAcc={dataAcc}
            listFriend={listFriend}
            bgMau={bgMau}
            setBgMau={setBgMau}
            keyAPI={keyAPI}
            TOKEN={TOKEN}
            PATH={PATH}
            setSnackBar={setSnackBar}
            setDataStory={setDataStory}
          />
        </Route>
        <Route path="/watch">
          <WatchTV bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/friends">
          <RouteFriendCenter />
        </Route>
        <Route path="/marketplace">
          <RouteMarketCenter />
        </Route>
        <Route path="/profile">
          <Profile bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/notifications">
          <Profile bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/tab-menu">
          <Profile bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/search">
          <Profile bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/setting">
          <RouteSettingCenter />
        </Route>
        <Route path="/messenger">
          <RouteCenter index={tabMess} />
        </Route>
      

        <Route path="/login">
          <Login keyAPI={keyAPI} setFooobe={setFooobe} setTOKEN={setTOKEN} setPATH={setPATH} TOKEN={TOKEN}/>
        </Route>
        <Route path="/singn">
          <Singn keyAPI={keyAPI} PATH={PATH} />
        </Route>
        <Route path="/logout">
          <EndLogin setBgMau={setBgMau} setFooobe={setFooobe} keyAPI={keyAPI} TOKEN={TOKEN} />
        </Route>
        <Route exact path="/">
          <NewStory
            loadingStory={loadingStory}
            page={page}
            dataStory={dataStory}
            setPage={setPage}
            dataAcc={dataAcc}
            listFriend={listFriend}
            bgMau={bgMau}
            setBgMau={setBgMau}
            keyAPI={keyAPI}
            TOKEN={TOKEN}
            PATH={PATH}
            setSnackBar={setSnackBar}
            setDataStory={setDataStory}
          />
        </Route>
        <Route path="*">
          <NotFile />
        </Route>
      </Switch>
    </div>
  );
}

export default Pages;
