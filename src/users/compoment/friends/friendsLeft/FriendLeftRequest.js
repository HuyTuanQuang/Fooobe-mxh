import React from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";

function FriendLeftRequest({ friend }) {
  return (
    <div>
      <Link to="/friends">
        <div className="friend-left-prev-request">
          <GrLinkPrevious />
        </div>
      </Link>

      <div style={{ float: "left", marginLeft: "10px" }}>
        <h2>Lời mời kết bạn</h2>
      </div>

      <hr style={{ width: "300px" }} />

      <h4
        style={{
          textAlign: "left",
          marginLeft: "20px",
          marginTop: "10px",
          fontSize: "17px",
        }}
      >
        {friend.length} lời mời kết bạn
      </h4>
      <div className="friend-left-send-request">
        <Link style={{ textDecoration: "none" }}>
          <p>Xem lời mời đã gửi</p>
        </Link>
      </div>

      {friend.map((value) => {
        return (
          <Link
            style={{ textDecoration: "none" }}
            to={"/friends/friends-request/" + value.id}
          >
            <div style={{ position: "relative", bottom: "30px" }}>
              <div className="friend-left-avatar-request">
                <img src={value.avt} />
              </div>

              <h4
                style={{
                  textAlign: "left",
                  marginLeft: "90px",
                  marginBottom: "10px",
                }}
              >
                {value.fullname}
              </h4>

              <button className="friend-left-button-confirm-request">
                Xác nhận
              </button>
              <button className="friend-left-button-delete-request">Xóa</button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default FriendLeftRequest;
