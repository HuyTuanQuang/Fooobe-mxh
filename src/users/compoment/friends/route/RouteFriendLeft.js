import React, {useState} from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FriendLeftRequest from "../friendsLeft/FriendLeftRequest";
import FriendLeftSuggestions from "../friendsLeft/FriendLeftSuggestions";
import FriendLeftAllList from "../friendsLeft/FriendLeftAllList";
import FriendLeftList from "../friendsLeft/FriendLeftList";
import FriendMenu from "../friendsLeft/FriendMenu";
import "./../friendsLeft/friendLeftStyle.css";
import LOGO from "./../../../../img/b06dc514-5775-4c35-8230-2ba546b070b9aaaaaa - Copy.png"

function RouteFriendLeft(props) {
  const [friend, setFriend] = useState([
    {
      id: "1",
      fullname: "Phuong",
      name: "P",
      avt: LOGO,
      coverphoto: LOGO,
      work: "Công ty A",
      study: "Trường THPT A",
      live: "Hà Nội",
      relationship: "Độc thân",
      caption: "abcxyz",
      mutualfriends: "100",
    },
    {
      id: "2",
      fullname: "Phuong1",
      name: "P1",
      avt: LOGO,
      coverphoto: LOGO,
      work: "Công ty B",
      study: "Trường THPT B",
      live: "TP HCM",
      relationship: "Đã kết hôn",
      caption: "abcxyz",
      mutualfriends: "20",
    },
    {
      id: "3",
      fullname: "Phuong2",
      name: "P2",
      avt: LOGO,
      coverphoto: LOGO,
      work: "Công ty C",
      study: "Trường THPT C",
      live: "Đà Nẵng",
      relationship: "Độc thân",
      caption: "abcxyz",
      mutualfriends: "10",
    },
    {
      id: "4",
      fullname: "Phuong3",
      name: "P3",
      avt: LOGO,
      coverphoto: LOGO,
      work: "Công ty D",
      study: "Trường THPT D",
      live: "Thái Nguyên",
      relationship: "Hẹn hò",
      caption: "abcxyz",
      mutualfriends: "230",
    },
  ]);
  return (
    <div>
      <Switch>
        <Route path="/friends/requests">
          <FriendLeftRequest friend={friend} />
        </Route>
        <Route path="/friends/suggestions">
          <FriendLeftSuggestions friend={friend} />
        </Route>
        <Route path="/friends/list">
          <FriendLeftList friend={friend} />
        </Route>
        <Route path="/friends/alllist">
          <FriendLeftAllList />
        </Route>
        {friend.map((value) => {
          return (
            <Route path={"/friends/friends-request/" + value.id}>
              <FriendLeftRequest friend={friend} />
            </Route>
          );
        })}

        {friend.map((value) => {
          return (
            <Route path={"/friends/friends-suggestion/" + value.id}>
              <FriendLeftSuggestions friend={friend} />
            </Route>
          );
        })}

        {friend.map((value) => {
          return (
            <Route path={"/friends/friends-list/" + value.id}>
              <FriendLeftList friend={friend} />
            </Route>
          );
        })}
        <Route path="/friends">
          <FriendMenu />
        </Route>
      </Switch>
    </div>
  );
}

export default RouteFriendLeft;
