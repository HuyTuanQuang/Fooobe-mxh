import React, {useState} from "react";
import { DiAptana } from "react-icons/di";
import { FiUsers } from "react-icons/fi";
import { FiUserPlus } from "react-icons/fi";
import { CgUserList } from "react-icons/cg";
import { AiFillGift } from "react-icons/ai";
import { RiUserSharedLine } from "react-icons/ri";
import { GrNext } from "react-icons/gr";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function FriendMenu(props) {
  const [valueTrend, setValueTrend] = useState(0);
  const [valueFollow, setValueFollow] = useState(0);
  const onClickTrend = (event, value) => {
    setValueTrend(value);
    setValueFollow(0);
  };
  const onClickFollow = (event, value) => {
    setValueTrend(0);
    setValueFollow(value);
  };
  return (
    <div>
      <div className="friend-left-title-menu-left">
        <h2>Bạn bè</h2>
      </div>
      <div className="friend-left-setting-menu-left">
        <DiAptana />
      </div>

      <Link to="/friends">
        <div className="friend-left-icons-menu-left">
          <FiUsers />
        </div>
        <div className="friend-left-title-icons-menu-left">
          <b>Trang chủ</b>
        </div>
      </Link>

      <Link to="/friends/requests">
        <div className="friend-left-icons-menu-left">
          <RiUserSharedLine />
        </div>
        <div className="friend-left-title-icons-menu-left">
          <b>Lời mời kết bạn</b>
        </div>
        <div className="friend-left-next-menu-left">
          <GrNext />
        </div>
      </Link>

      <Link to="/friends/suggestions">
        <div className="friend-left-icons-menu-left">
          <FiUserPlus />
        </div>
        <div className="friend-left-title-icons-menu-left">
          <b>Gợi ý</b>
        </div>
        <div className="friend-left-next-menu-left">
          <GrNext />
        </div>
      </Link>

      <Link to="/friends/list">
        <div className="friend-left-icons-menu-left">
          <CgUserList />
        </div>
        <div className="friend-left-title-icons-menu-left">
          <b>Tất cả bạn bè</b>
        </div>
        <div className="friend-left-next-menu-left">
          <GrNext />
        </div>
      </Link>

      <Link to="/friends/birthdays">
        <div className="friend-left-icons-menu-left">
          <AiFillGift />
        </div>
        <div className="friend-left-title-icons-menu-left">
          <b>Sinh nhật</b>
        </div>
      </Link>

      <Link to="/friends/friendlist">
        <div className="friend-left-icons-menu-left">
          <CgUserList />
        </div>
        <div className="friend-left-title-icons-menu-left">
          <b>Danh sách tùy chỉnh</b>
        </div>
        <div className="friend-left-next-menu-left">
          <GrNext />
        </div>
      </Link>
    </div>
  );
}

export default FriendMenu;
