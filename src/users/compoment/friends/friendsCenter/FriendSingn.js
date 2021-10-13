import React from "react";
import { BsFillPeopleFill } from "react-icons/bs";

function FriendSingn(props) {
  return (
    <div>
      <div style={{ fontSize: "80px", color: "#65676b", marginTop: "3em" }}>
        <BsFillPeopleFill />
      </div>

      <div style={{ color: "#65676b" }}>
        <h3>Chọn tên của người mà bạn muốn xem trước trang cá nhân.</h3>
      </div>
    </div>
  );
}

export default FriendSingn;
