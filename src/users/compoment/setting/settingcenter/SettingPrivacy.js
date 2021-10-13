import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";

function SettingPrivacy(props) {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [youFriend, SetyouFriend] = useState("Công khai");
  const [youFriend1, SetyouFriend1] = useState("Công khai");
  const onchaneFfriend = (e) => {
    SetyouFriend(e.target.value);
  };

  return (
    <div className="seting-center">
      <div className="seting-center-scroll" id="seting-center-scroll-style">
        <div className="seting-center-scroll-nav">
          Cài đặt quyền riêng tư và công cụ
        </div>
        <div className="seting-center-scroll-content">
          <div className="seting-center-scroll-content-privacy-row">
            <div
              className="seting-center-scroll-content-privacy-th"
              style={{ width: "24%" }}
            >
              Lối tắt quyền riêng tư
            </div>
            <div className="seting-center-scroll-content-privacy-td">
              <label className="seting-center-scroll-content-privacy-td-label">
                Kiểm tra một vài cài đặt{" "}
                <label className="seting-font-pale">
                  {" "}
                  Xem vài cài đặt quan trọng để bảo đảm an toàn
                </label>
              </label>
            </div>
          </div>
          <div className="seting-center-scroll-content-privacy-row">
            <div className="seting-center-scroll-content-privacy-th"></div>
            <div className="seting-center-scroll-content-privacy-td">
              <label className="seting-center-scroll-content-privacy-td-label">
                Quản lý trang cá nhân{" "}
                <label className="seting-font-pale">
                  {" "}
                  Đi đến trang cá nhân để chỉnh sửa ngày sinh hoặc các mối quan
                  hệ
                </label>
              </label>
            </div>
          </div>
          <div className="seting-center-scroll-content-privacy-row">
            <div className="seting-center-scroll-content-privacy-th"></div>
            <div className="seting-center-scroll-content-privacy-td">
              <label className="seting-center-scroll-content-privacy-td-label">
                Tìm hiểu thêm về quyền riêng tư cơ bản{" "}
                <label className="seting-font-pale">
                  {" "}
                  Xem vài cài đặt quan trọng
                </label>
              </label>
            </div>
          </div>
          <div
            style={{
              width: "98%",
              borderBottom: "0.1px solid aqua",
              marginTop: "10px",
            }}
          ></div>
          <div
            className="seting-center-scroll-content-privacy-row"
            style={{ justifyContent: "flex-end" }}
          >
            <div
              className="seting-center-scroll-content-privacy-th"
              style={{ width: "32%" }}
            >
              Hoạt động của bạn
            </div>
            <div
              className="seting-center-scroll-content-privacy-td"
              style={{ width: "29%" }}
            >
              <label className="seting-center-scroll-content-privacy-td-label">
                Ai có thể thấy bạn
              </label>
            </div>
            {open ? (
              <div
                className="seting-center-scroll-content-privacy-td"
                style={{ width: "20%" }}
              >
                <label className="seting-center-scroll-content-privacy-td-label">
                  {youFriend}
                </label>
              </div>
            ) : (
              <div
                className="seting-center-scroll-content-privacy-td"
                style={{ width: "20%", borderRadius: "0px" }}
              >
                <select
                  onChange={onchaneFfriend}
                  value={youFriend}
                  style={{
                    outline: "none",
                    borderRadius: "10px",
                    height: "60%",
                    width: "100%",
                    fontSize: "10pt",
                    border: "0.5px solid aqua",
                    marginLeft: "5px",
                  }}
                >
                  <option value="Công khai">Công Khai</option>
                  <option value="Bạn bè ">Bạn bè</option>
                  <option value="Chỉ mình tôi">Chỉ mình tôi</option>
                </select>
              </div>
            )}
            {open ? (
              <div
                className="seting-center-scroll-content-privacy-td"
                style={{ width: "15%" }}
              >
                <label
                  onClick={() => setOpen(!open)}
                  className="seting-center-scroll-content-row-link"
                >
                  Chỉnh sửa
                </label>
              </div>
            ) : (
              <div
                className="seting-center-scroll-content-privacy-td"
                style={{ width: "15%", borderRadius: "0px" }}
              >
                <label
                  onClick={() => setOpen(!open)}
                  className="seting-center-scroll-content-row-link"
                  style={{ paddingLeft: "30%" }}
                >
                  Đóng
                </label>
              </div>
            )}
          </div>
          <div className="seting-center-scroll-content-privacy-row">
            <div className="seting-center-scroll-content-privacy-th"></div>
            <div className="seting-center-scroll-content-privacy-td">
              <label className="seting-center-scroll-content-privacy-td-label">
                Nhật ký hoạt động{" "}
                <label className="seting-font-pale">
                  {" "}
                  Xem lại nhật ký hoạt động của bạn
                </label>
              </label>
            </div>
          </div>
          <div
            className="seting-center-scroll-content-privacy-row"
            style={{ justifyContent: "left" }}
          >
            <div
              className="seting-center-scroll-content-privacy-th"
              style={{ width: "36%" }}
            ></div>
            <div
              className="seting-center-scroll-content-privacy-td"
              style={{ width: "40%" }}
            >
              <label className="seting-center-scroll-content-privacy-td-label">
                Những người có thể theo dõi bạn
              </label>
            </div>
            <div
              className="seting-center-scroll-content-privacy-td"
              style={{
                width: "25%",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <div
                className="seting-center-scroll-content-privacy-td"
                style={{ borderRadius: "0px" }}
              >
                <select
                  onChange={(e) => SetyouFriend1(e.target.value)}
                  value={youFriend1}
                  style={{
                    outline: "none",
                    borderRadius: "10px",
                    height: "60%",
                    width: "100%",
                    fontSize: "10pt",
                    border: "0.5px solid aqua",
                    marginLeft: "5px",
                  }}
                >
                  <option value="Công khai">Công Khai</option>
                  <option value="Bạn bè ">Bạn bè</option>
                  <option value="Chỉ mình tôi">Chỉ mình tôi</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "98%", borderBottom: "0.1px solid aqua" }}></div>
        <div className="seting-center-scroll-footer"></div>
      </div>
    </div>
  );
}

export default SettingPrivacy;
