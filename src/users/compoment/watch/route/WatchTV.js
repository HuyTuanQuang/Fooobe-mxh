import React from "react";
import { Switch, Route } from "react-router-dom";
import FollowVideo from "../watchCenter/FollowVideo";
import TrendVideo from "../watchCenter/TrendVideo";
import HomeVideo from "../watchCenter/HomeVideo";

function WatchTV(props) {
  return (
    <div>
      <Switch>
        <Route path="/watch/trend">
          <TrendVideo/>
        </Route>
        <Route path="/watch/follow">
          <FollowVideo/>
        </Route>
        <Route path="/watch">
          <HomeVideo/>
        </Route>
        <Route path="/">
        <HomeVideo/>
        </Route>
      </Switch>
    </div>
  );
}

export default WatchTV;
