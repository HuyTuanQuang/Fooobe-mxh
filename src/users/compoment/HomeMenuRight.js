import React from "react";
import UserProfile from "./profile/profileLeft/UserProfile";
import { Switch, Route } from "react-router-dom";
import HomeMenu from "./storys/storysLeft/HomeMenu";
import PlayMenu from "./plays/palysLeft/PlayMenu";
import WatchMenu from "./watch/watchLeft/WatchMenu";
import LoginPanel from "../../singn/LoginPanel";

import RouteRight from "./messenger/route/RouteRight";
import RouteFriendRight from "./friends/route/RouteFriendRight";
import RouteSettingRight from "./setting/route/RouteSettingRight";
import RouteMarketRight from "./market/route/RouteMarketRight";

function HomeMenuRight({ trans, tabMess }) {
  return (
    <div>
      <Switch>
        <Route path="/newstory">
          <HomeMenu trans={trans} />
        </Route>
        <Route path="/watch">
          <WatchMenu />
        </Route>
        <Route path="/friends">
          <RouteFriendRight />
        </Route>
        <Route path="/play">
          <PlayMenu />
        </Route>
        <Route path="/marketplace">
          <RouteMarketRight />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/messenger">
          <RouteRight tabMess={tabMess} />
        </Route>
        <Route path="/setting">
          <RouteSettingRight />
        </Route>
     
        <Route path="/login">
          <LoginPanel />
        </Route>
        <Route path="/singn">
          <LoginPanel />
        </Route>

        <Route exact path="/">
          <HomeMenu trans={trans} />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </div>
  );
}

export default HomeMenuRight;
