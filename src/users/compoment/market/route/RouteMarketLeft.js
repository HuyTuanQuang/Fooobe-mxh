import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import MarketLeftMenu from "../marketLeft/MarketLeftMenu";
import MarketLeftCategory from "../marketLeft/MarketLeftCategory";
import "../marketLeft/marketLeftStyle.css";

function RouteMarketLeft(props) {
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
                  <MarketLeftCategory marketCategoryvalue={val.name} />
                </Route>
              );
            })}
            {/* <Route path="/marketplace/live-shopping">
              <MarketLeft />
            </Route>
            <Route path="/marketplace/notifications">
              <MarketLeft />
            </Route>
            <Route path="/marketplace/inbox">
              <MarketLeft />
            </Route>
            <Route path="/marketplace/you/selling">
              <MarketLeft />
            </Route>
            <Route path="/marketplace/create/item">
              <MarketLeft />
            </Route>
            <Route path="/marketplace/cart">
              <MarketLeft />
            </Route>
            <Route path="/marketplace/create">
              <MarketLeft />
            </Route> */}
            <Route path="/marketplace">
              <MarketLeftMenu />
            </Route>
          </Switch>
        </div>
      );
}

export default RouteMarketLeft;