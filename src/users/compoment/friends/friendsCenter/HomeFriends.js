import React from "react";

function HomeFriends({ friend }) {
  return (
    <div>
      <h3 style={{ float: "left", marginLeft: "30px" }}>Lời mời kết bạn</h3>
      <br />
      <br />
      <br />
      {friend.map((value) => {
        return (
          <div
            style={{
              width: "20%",
              height: "300px",
              float: "left",
              backgroundColor: "white",
              marginRight: "10px",
              marginLeft: "20px",
            }}
          >
            <img
              style={{ objectFit: "cover", width: "100%", height: "50%" }}
              src={value.avt}
            />
            <h4> {value.fullname}</h4>
            <button className="friend-center-button-share-suggestion">Xác nhận</button>
            <button className="friend-center-button-delete-home-friend">Xoá</button>
          </div>
        );
      })}
    </div>
  );
}

export default HomeFriends;
