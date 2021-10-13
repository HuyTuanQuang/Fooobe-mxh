import React from "react";
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { BiShare } from "react-icons/bi";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function FriendSuggestion({ friend }) {
  return (
    <div>
      {friend.map((value) => {
        return (
          <div>
            <Route path={"/friends-suggestion/" + value.id}>
              <div style={{ backgroundColor: "white" }}>
                <img
                  style={{ objectFit: "cover", width: "38em", height: "15em" }}
                  src={value.coverphoto}
                />

                <div className="friend-center-profile-avatar-suggestion">
                  <img src={value.avt} />
                </div>

                <h1>{value.fullname}</h1>

                <hr style={{ width: "38em" }} />
                <div style={{ display: "flex" }}>
                  <Link style={{ color: "#65676b", textDecoration: "none" }}>
                    <h5 style={{ marginLeft: "10px", marginRight: "5px" }}>
                      Bài viết
                    </h5>
                  </Link>

                  <Link style={{ color: "#65676b", textDecoration: "none" }}>
                    <h5 style={{ marginLeft: "5px", marginRight: "5px" }}>
                      Giới thiệu
                    </h5>
                  </Link>

                  <Link style={{ color: "#65676b", textDecoration: "none" }}>
                    <h5 style={{ marginLeft: "5px", marginRight: "5px" }}>
                      Bạn bè
                    </h5>
                  </Link>

                  <Link style={{ color: "#65676b", textDecoration: "none" }}>
                    <h5 style={{ marginLeft: "5px", marginRight: "5px" }}>
                      Ảnh
                    </h5>
                  </Link>

                  <Link style={{ color: "#65676b", textDecoration: "none" }}>
                    <h5 style={{ marginLeft: "5px", marginRight: "5px" }}>
                      Video
                    </h5>
                  </Link>

                  <Link style={{ color: "#65676b", textDecoration: "none" }}>
                    <h5 style={{ marginLeft: "5px", marginRight: "5px" }}>
                      Check in
                    </h5>
                  </Link>

                  <Link style={{ color: "#65676b", textDecoration: "none" }}>
                    <h5 style={{ marginLeft: "5px", marginRight: "5px" }}>
                      Xem thêm
                    </h5>
                  </Link>

                  <div
                    style={{ position: "relative", right: "20px", top: "10px" }}
                  >
                    <button className="friend-center-button-add-friend-suggestion-1">
                      <h4>Thêm bạn bè</h4>
                    </button>
                    <button className="friend-center-button-message-suggestion">
                      <h4>Nhắn tin</h4>
                    </button>
                    <button className="friend-center-button-seemore-suggestion">
                      <h4>...</h4>
                    </button>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-around",
                  marginTop: "5%",
                }}
              >
                <div
                  style={{
                    width: "40%",
                    background: "white",
                    borderRadius: "5%",
                    textAlign: "left",
                    marginLeft: "10px",
                  }}
                >
                  <div style={{ marginLeft: "20px", marginBottom: "20px" }}>
                    <h3>Giới thiệu</h3>

                    <div>
                      Làm việc tại <b>{value.work}</b>
                    </div>

                    <div>
                      Sống tại <b>{value.live}</b>
                    </div>

                    <div>
                      Từng học tại <b>{value.study}</b>
                    </div>

                    <div>{value.relationship}</div>
                  </div>
                </div>

                <div
                  style={{
                    width: "362px",
                    background: "white",
                    borderRadius: "5%",
                    height: "65px",
                    textAlign: "left",
                  }}
                >
                  <div style={{ marginLeft: "10px" }}>
                    <h3>Bài viết</h3>
                  </div>

                  <div
                    style={{
                      height: "530px",
                      background: "white",
                      borderRadius: "5%",
                      marginTop: "40px",
                    }}
                  >
                    <Link to={value.id} style={{ textDecoration: "none" }}>
                      <div className="friend-center-profile-avatar-suggestion-1">
                        <img src={value.avt} />
                        <h4 style={{ marginLeft: "10px" }}>
                          {value.fullname} đã cập nhật ảnh đại diện của anh ấy
                        </h4>
                      </div>
                    </Link>
                    <p style={{ marginLeft: "15px" }}>{value.caption}</p>
                    <img
                      style={{
                        objectFit: "cover",
                        width: "362px",
                        height: "150px",
                      }}
                      src={value.coverphoto}
                    />
                    <div className="friend-center-post-avatar-suggestion">
                      <img src={value.avt} />
                    </div>
                    <hr />
                    <AiFillLike /> 200
                    <div style={{ float: "right" }}>
                      200 bình luận 10 lượt chia sẻ
                    </div>
                    <hr />
                    <div style={{ display: "flex" }}>
                      <div className="friend-center-button-like-suggestion">
                        <AiOutlineLike />
                        Thích
                      </div>
                      <div className="friend-center-button-comments-suggestion">
                        <BiComment />
                        Bình luận
                      </div>
                      <div className="friend-center-button-share-suggestion">
                        <BiShare />
                        Chia sẻ
                      </div>
                    </div>
                    <hr />
                    <Link to={value.id} style={{ textDecoration: "none" }}>
                      <div className="friend-center-profile-avatar-suggestion-1">
                        <img style={{ marginTop: "0px" }} src={value.avt} />

                        <input
                          style={{
                            border: "none",
                            width: "80%",
                            height: "30px",
                            outline: "none",
                            backgroundColor: "#e4e6eb",
                            borderRadius: "20px",
                            marginLeft: "10px",
                            marginBottom: "10px",
                          }}
                          placeholder="Viết bình luận..."
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                style={{
                  width: "40%",
                  background: "white",
                  borderRadius: "5%",
                  textAlign: "left",
                  marginLeft: "15px",
                }}
              >
                <div style={{ marginLeft: "20px", marginTop: "10px" }}>
                  <h3 style={{ position: "relative", top: "10px" }}>Ảnh</h3>

                  <div style={{ width: "100%" }}>
                    <img
                      style={{
                        width: "28%",
                        height: "100px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                      src={value.avt}
                    />
                    <img
                      style={{
                        width: "28%",
                        height: "100px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                      src={value.avt}
                    />
                    <img
                      style={{
                        width: "28%",
                        height: "100px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                      src={value.avt}
                    />
                    <img
                      style={{
                        width: "28%",
                        height: "100px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                      src={value.avt}
                    />
                    <img
                      style={{
                        width: "28%",
                        height: "100px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                      src={value.avt}
                    />
                    <img
                      style={{
                        width: "28%",
                        height: "100px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                      src={value.avt}
                    />
                    <img
                      style={{
                        width: "28%",
                        height: "100px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                      src={value.avt}
                    />
                    <img
                      style={{
                        width: "28%",
                        height: "100px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                      src={value.avt}
                    />
                    <img
                      style={{
                        width: "28%",
                        height: "100px",
                        marginRight: "10px",
                        marginBottom: "10px",
                        objectFit: "cover",
                      }}
                      src={value.avt}
                    />
                  </div>
                </div>
              </div>
            </Route>
          </div>
        );
      })}
    </div>
  );
}

export default FriendSuggestion;
