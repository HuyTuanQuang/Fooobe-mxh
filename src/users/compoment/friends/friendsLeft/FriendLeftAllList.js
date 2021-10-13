import React from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { CgUserList } from "react-icons/cg";
import { AiFillStar } from "react-icons/ai";
import { IoAddOutline } from "react-icons/io5";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function FriendLeftAllList(props) {
  return (
    <div>
      <Link to="/friends">
        <div className="friend-left-prev-all-list">
          <GrLinkPrevious />
        </div>
      </Link>
      <div style={{ float: "left", marginLeft: "10px" }}>
        <h2>Danh sách tùy chỉnh </h2>
      </div>

      <Link to="/">
        <div className="friend-left-icons-all-list">
          <CgUserList />
        </div>
        <div className="friend-left-title-icons-all-list">
          <b>Danh sách chưa đặt tên</b>
        </div>
      </Link>
      <Link to="/">
        <div className="friend-left-icons-all-list">
          <CgUserList />
        </div>
        <div className="friend-left-title-icons-all-list">
          <b>Bị hạn chế</b>
        </div>
      </Link>
      <Link to="/">
        <div className="friend-left-icons-all-list">
          <CgUserList />
        </div>
        <div className="friend-left-title-icons-all-list">
          <b>Người quen</b>
        </div>
      </Link>
      <Link to="/">
        <div className="friend-left-icons-all-list">
          <AiFillStar />
        </div>
        <div className="friend-left-title-icons-all-list">
          <b>Bạn thân</b>
        </div>
      </Link>
      <Link to="/">
        <div
          style={{ color: "#1876f2", backgroundColor: "#e7f3ff" }}
          className="friend-left-icons-all-list"
        >
          <IoAddOutline />
        </div>
        <div className="friend-left-title-icons-all-list">
          <b style={{ color: "#1876f2" }}>Tạo danh sách</b>
        </div>
      </Link>
    </div>
  );
}

export default FriendLeftAllList;
