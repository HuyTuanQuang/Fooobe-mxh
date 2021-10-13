import React from "react";
import { Switch, Route } from "react-router-dom";
import SettingAccount from "../settingcenter/SettingAccount";
import SettingAccountLanguage from "../settingcenter/SettingAccountLanguage";
import SettingAds from "../settingcenter/SettingAds";
import SettingHome from "../settingcenter/SettingHome";
import SettingInfo from "../settingcenter/SettingInfo";
import SettingPrivacy from "../settingcenter/SettingPrivacy";
import SettingPrivacyBlock from "../settingcenter/SettingPrivacyBlock";
import SettingPrivacyInfo from "../settingcenter/SettingPrivacyInfo";
import SettingPrivacyPost from "../settingcenter/SettingPrivacyPost";
import SettingPrivacyProfile from "../settingcenter/SettingPrivacyProfile";
import SettingSecurity from "../settingcenter/SettingSecurity";
import SettingSupport from "../settingcenter/SettingSupport";
import "./../settingcenter/settingCenterStyle.css";

function RouteSettingCenter(props) {
  return (
    <div>
      <Switch>
        <Route path="/setting/privacy/information">
          {" "}
          <SettingPrivacyInfo />
        </Route>
        <Route path="/setting/privacy/profileTag">
          {" "}
          <SettingPrivacyProfile />
        </Route>
        <Route path="/setting/privacy/followersPost">
          <SettingPrivacyPost />
        </Route>
        <Route path="/setting/privacy/block">
          {" "}
          <SettingPrivacyBlock />
        </Route>
        <Route path="/setting/account/language">
          <SettingAccountLanguage />
        </Route>
        <Route path="/setting/account/location">
          <SettingAccount />
        </Route>
        <Route path="/setting/security/application">
          <SettingSecurity />
        </Route>
        <Route path="/setting/advertisers/adpreferences">
          <SettingAds />
        </Route>
        <Route path="/setting/advertisers/settingadpreference">
          <SettingAds />
        </Route>
        <Route path="/setting/suport/Feedback">
          <SettingSupport />
        </Route>
        <Route path="/setting/suport/community">
          <SettingSupport />
        </Route>
        <Route path="/setting/privacy">
          <SettingPrivacy />
        </Route>
        <Route path="/setting/notifications">
          <SettingInfo />
        </Route>
        <Route path="/setting/account">
          <SettingAccount />
        </Route>
        <Route path="/setting/security">
          <SettingSecurity />
        </Route>
        <Route path="/setting/advertisers">
          <SettingAds />
        </Route>
        <Route path="/setting/suport">
          <SettingSupport />
        </Route>
        <Route path="/setting">
          <SettingHome />
        </Route>
      </Switch>
    </div>
  );
}

export default RouteSettingCenter;
