import React from "react";
import UserProfile from "./profile/profileLeft/UserProfile";
import { Switch, Route } from "react-router-dom";
import HomeMenu from "./storys/storysLeft/HomeMenu";
import PlayMenu from "./plays/palysLeft/PlayMenu";
import FriendMenu from "./friends/friendsLeft/FriendMenu";
import WatchMenu from "./watch/watchLeft/WatchMenu";
import LoginPanel from "../../singn/LoginPanel";
import TGNProfile from "./tgn/tgnLeft/TGNProfile";
import TGNLeftRoute from "./tgn/route/TGNLeftRoute";
import RouteLeft from "./messenger/route/RouteLeft";
import RouteFriendLeft from "./friends/route/RouteFriendLeft";
import RouteSettingLeft from "./setting/route/RouteSettingLeft";
import RouteMarketLeft from "./market/route/RouteMarketLeft";

function HomeProfile({trans, bgMau, keyAPI, dataAcc, tabMess, setTabMess }) {
 
  return (
    <div>
      <Switch>
        <Route path="/newstory">
          <HomeMenu trans={trans}/>
        </Route>
        <Route path="/watch">
          <WatchMenu/>
        </Route>
        <Route path="/friends">
          <RouteFriendLeft />
        </Route>
        <Route path="/marketplace">
          <RouteMarketLeft />
        </Route>
        <Route path="/profile">
          <UserProfile/>
        </Route>
        <Route path="/messenger">
          <RouteLeft tabMess={tabMess} setTabMess={setTabMess}/>
        </Route>
        <Route path="/setting">
          <RouteSettingLeft />
        </Route>
        <Route path="/tgn">
          <TGNLeftRoute trans={trans} bgMau={bgMau} keyAPI={keyAPI} dataAcc={dataAcc}/>
        </Route>
        <Route path="/login">
          <LoginPanel/>
        </Route>
        <Route path="/singn">
          <LoginPanel/>
        </Route>
        
        <Route exact path="/">
          <HomeMenu  trans={trans}/>
        </Route>
        <Route path="*">
        </Route>
      </Switch>
    </div>
  );
}

export default HomeProfile;
