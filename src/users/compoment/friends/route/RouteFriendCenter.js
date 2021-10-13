import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewsFriends from "../friendsCenter/NewsFriends";
import HomeFriends from "../friendsCenter/HomeFriends";
import "./../friendsCenter/friendCenterStyle.css";
import FriendSingn from "../friendsCenter/FriendSingn";
import FriendSuggestion from "../friendsCenter/FriendSuggestion";
import FriendList from "../friendsCenter/FriendList";
import FriendSong from "../friendsCenter/FriendSong";
import LOGO from "./../../../../img/b06dc514-5775-4c35-8230-2ba546b070b9aaaaaa - Copy.png";

function Friends(props) {
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
          <FriendSingn />
        </Route>
        {friend.map((value) => {
          return (
            <Route path={"/friends/friends-request/" + value.id}>
              <NewsFriends friend={friend} />
            </Route>
          );
        })}
        <Route path="/friends/suggestions">
          <FriendSingn />
        </Route>
        {friend.map((value) => {
          return (
            <Route path={"/friends/friends-suggestion/" + value.id}>
              <FriendSuggestion friend={friend} />
            </Route>
          );
        })}
        <Route path="/friends/list">
          <FriendSingn />
        </Route>
        {friend.map((value) => {
          return (
            <Route path={"/friends/friends-list/" + value.id}>
              <FriendList friend={friend} />
            </Route>
          );
        })}
        <Route path="/friends/friendlist">
          <FriendSong />
        </Route>
        <Route path="/friends">
          <HomeFriends friend={friend} />
        </Route>
      </Switch>
    </div>
  );
}

export default Friends;
