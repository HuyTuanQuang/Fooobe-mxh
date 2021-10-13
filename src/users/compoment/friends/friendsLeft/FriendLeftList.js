import React from "react";
import { GrLinkPrevious } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

function FriendLeftList({ friend }) {
  const [search, setSearch] = useState("");
  return (
    <div>
      <Link to="/friends">
        <div className="friend-left-prev-list">
          <GrLinkPrevious />
        </div>
      </Link>
      <div style={{ float: "left", marginLeft: "10px" }}>
        <h2>Tất cả bạn bè 1</h2>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          backgroundColor: "#e4e6eb",
          borderRadius: "20px",
          alignItems: "center",
        }}
      >
        <div style={{ marginLeft: "10px", marginTop: "6px" }}>
          <AiOutlineSearch />
        </div>
        <div>
          <input
            style={{
              float: "left",
              border: "none",
              height: "30px",
              outline: "none",
              backgroundColor: "#e4e6eb",
            }}
            placeholder="Tìm kiếm Bạn bè"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
        </div>
      </div>

      <hr style={{ width: "300px" }} />
      <br />
      <br />
      <br />

      {friend
        .filter((val) => {
          if (search == "") {
            return val;
          } else if (
            val.fullname.toLowerCase().includes(search.toLowerCase())
          ) {
            return val;
          }
        })
        .map((value, key) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              to={"/friends/friends-list/" + value.id}
            >
              <div style={{ position: "relative", top: "30px" }} key={key}>
                <div className="friend-left-avatar-list">
                  <img src={value.avt} />
                </div>

                <h4>{value.fullname}</h4>
                <p>{value.mutualfriends} bạn chung</p>
              </div>
            </Link>
          );
        })}
      <div></div>
    </div>
  );
}

export default FriendLeftList;
