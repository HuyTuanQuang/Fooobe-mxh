import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MarketCenterCategory from "../marketCenter/MarketCenterCategory";
import MarketCenter from "../marketCenter/MarketCenter";
import MarketCenterAccount from "../marketCenter/MarketCenterAccount";
import MarketCenterCart from "../marketCenter/MarketCenterCart";
import MarketCenterCreate from "../marketCenter/MarketCenterCreate";
import MarketCenterInbox from "../marketCenter/MarketCenterInbox";
import MarketCenterLive from "../marketCenter/MarketCenterLive";
import MarketCenterNofication from "../marketCenter/MarketCenterNofication";
import "./../marketCenter/marketCenterStyle.css";

function RouteMarketCenter(props) {
  const value = [
    {
      id: "1",
      avatar: "oto.jpg",
      name: "Xe cộ",
      route: "/marketplace/category/vehicles",
      status: "normal",
    },
    {
      id: "2",
      avatar: "oto.jpg",
      name: "Bán nhà",
      route: "/marketplace/category/propertyforsale",
      status: "normal",
    },
    {
      id: "3",
      avatar: "oto.jpg",
      name: "Gia đình",
      route: "/marketplace/category/family",
      status: "normal",
    },
    {
      id: "4",
      avatar: "oto.jpg",
      name: "Giải trí",
      route: "/marketplace/category/entertainment",
      status: "normal",
    },
    {
      id: "5",
      avatar: "oto.jpg",
      name: "Làm vườn & hoạt động ngoài trời",
      route: "/marketplace/category/garden",
      status: "normal",
    },
    {
      id: "6",
      avatar: "oto.jpg",
      name: "Nhạc cụ",
      route: "/marketplace/category/instruments",
      status: "normal",
    },
    {
      id: "7",
      avatar: "oto.jpg",
      name: "Rao vặt",
      route: "/marketplace/category/classifieds",
      status: "normal",
    },
    {
      id: "8",
      avatar: "oto.jpg",
      name: "Miễn phí",
      route: "/marketplace/category/free",
      status: "normal",
    },
    {
      id: "9",
      avatar: "oto.jpg",
      name: "Xe cộ",
      route: "/marketplace/category/vehicles",
      status: "normal",
    },
    {
      id: "10",
      avatar: "oto.jpg",
      name: "Xe cộ",
      route: "/marketplace/category/vehicles",
      status: "normal",
    },
    {
      id: "11",
      avatar: "oto.jpg",
      name: "Xe cộ",
      route: "/marketplace/category/vehicles",
      status: "normal",
    },
  ];
  const [marketCategory, setMarketCategory] = useState(value);

  return (
    <div>
      <Switch>
        {marketCategory.map((val) => {
          return (
            <Route path={val.route}>
              <MarketCenterCategory marketCategoryvalue={val.name} />
            </Route>
          );
        })}
        <Route path="/marketplace/live-shopping">
          <MarketCenterLive />
        </Route>
        <Route path="/marketplace/notifications">
          <MarketCenterNofication />
        </Route>
        <Route path="/marketplace/inbox">
          <MarketCenterInbox />
        </Route>
        <Route path="/marketplace/you/selling">
          <MarketCenterAccount />
        </Route>
        <Route path="/marketplace/cart">
          <MarketCenterCart />
        </Route>
        <Route path="/marketplace/create">
          <MarketCenterCreate />
        </Route>
        <Route path="/marketplace">
          <MarketCenter />
        </Route>
      </Switch>
    </div>
  );
}

export default RouteMarketCenter;
