import { Switch, Route } from "react-router-dom";
import React, { useState } from "react";
import "./../settingLeft/settingLeftStyle.css";
import SettingLeftPrivacy from "../settingLeft/SettingLeftPrivacy";
import SettingLeftInfo from "../settingLeft/SettingLeftInfo";
import SettingLeftAccount from "../settingLeft/SettingLeftAccount";
import SettingLeftSecurity from "../settingLeft/SettingLeftSecurity";
import SettingLeftAds from "../settingLeft/SettingLeftAds";
import SettingLeftSupport from "../settingLeft/SettingLeftSupport";
import SettingLeftHome from "../settingLeft/SettingLeftHome";

function RouteSettingLeft(props) {
  const [hiden, setHiden] = useState(0);
  return (
    <div>
      <Switch>
        <Route path="/setting/privacy">
          <SettingLeftPrivacy hiden={hiden} />
        </Route>
        <Route path="/setting/privacy/information">
          <SettingLeftPrivacy />
        </Route>
        <Route path="/setting/privacy/profileTag">
          <SettingLeftPrivacy />
        </Route>
        <Route path="/setting/privacy/followersPost">
          <SettingLeftPrivacy />
        </Route>
        <Route path="/setting/privacy/block">
          <SettingLeftPrivacy />
        </Route>

        <Route path="/setting/notifications">
          <SettingLeftInfo />
        </Route>

        <Route path="/setting/account">
          <SettingLeftAccount />
        </Route>
        <Route path="/setting/account/language">
          <SettingLeftInfo />
        </Route>
        <Route path="/setting/account/location">
          <SettingLeftInfo />
        </Route>

        <Route path="/setting/security">
          <SettingLeftSecurity />
        </Route>
        <Route path="/setting/security/application">
          <SettingLeftSecurity />
        </Route>

        <Route path="/setting/advertisers">
          <SettingLeftAds />
        </Route>
        <Route path="/setting/advertisers/adpreferences">
          <SettingLeftAds />
        </Route>
        <Route path="/setting/advertisers/settingadpreference">
          <SettingLeftAds />
        </Route>

        <Route path="/setting/suport">
          <SettingLeftSupport />
        </Route>
        <Route path="/setting/suport/Feedback">
          <SettingLeftSupport />
        </Route>
        <Route path="/setting/suport/community standards">
          <SettingLeftSupport />
        </Route>
        <Route path="/setting">
          <SettingLeftHome hiden={hiden} setHiden={setHiden} />
        </Route>
      </Switch>
    </div>
  );
}

export default RouteSettingLeft;
