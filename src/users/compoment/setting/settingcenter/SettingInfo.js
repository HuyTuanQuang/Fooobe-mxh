import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function SettingInfo(props) {
  const [openSetinginfo, setOpenSetinginfo] = useState(false);
  const onClickOpen = () => {
    setOpenSetinginfo(!openSetinginfo);
  };
  const [openSetingfriend, setOpenSetingfriend] = useState(false);
  const onClickOpenfriend = () => {
    setOpenSetingfriend(!openSetingfriend);
  };
  const [openSetingmarket, setopenSetingmarket] = useState(false);
  const onClickOpenmarket = () => {
    setopenSetingmarket(!openSetingmarket);
    console.log(openSetingmarket);
  };

  const [openSetinginfocoment, setopenSetinginfocoment] = useState(true);
  const onClickopenSetinginfocoment = () => {
    setopenSetinginfocoment(!openSetinginfocoment);
    console.log(openSetinginfocoment);
  };

  return (
    <div className="seting-center">
      <div className="seting-center-scroll" id="seting-center-scroll-style">
        <div className="seting-center-scroll-nav">Cài đặt thông báo</div>
        <div
          className="seting-center-scroll-content"
          style={{
            border: "0.1px solid aqua",
            width: "96%",
            marginLeft: "1%",
            borderRadius: "10px",
          }}
        >
          <div
            className="seting-center-scroll-content-info-row"
            onClick={onClickOpen}
          >
            <div className="seting-center-scroll-content-info-row-th">
              <label
                style={{
                  marginLeft: "4px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15pt",
                  marginRight: "5px",
                  outline: "none",
                }}
              >
                <GoComment />
              </label>{" "}
              <label className="seting-center-scroll-content-privacy-td-label">
                Bình luận<label className="seting-font-pale">abc</label>
              </label>
            </div>
            <div className="seting-center-scroll-content-info-row-icon">
              {openSetinginfo ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          </div>
          {openSetinginfo && (
            <div className="seting-center-scroll-content-info-row-content">
              <label className="seting-center-scroll-content-privacy-td-label">
                Nơi bạn nhận thông báo
              </label>
              <div className="seting-center-scroll-content-info-row-content-td">
                <label
                  style={{
                    marginLeft: "4px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15pt",
                    outline: "none",
                  }}
                >
                  <GoComment />
                </label>
                <div className="seting-center-scroll-content-info-row-content-td-info">
                  {" "}
                  Thông báo
                </div>
                <div className="seting-center-scroll-content-info-row-content-td-open">
                  {" "}
                  <label class="seting-center-scroll-content-info-row-content-td-open-switch">
                    <input
                      checked={openSetinginfocoment}
                      onClick={onClickopenSetinginfocoment}
                      type="checkbox"
                      className="seting-center-scroll-content-info-row-content-td-open-input"
                    />
                    <span class="seting-center-scroll-content-info-row-content-td-open-input-slider seting-center-scroll-content-info-row_content_td_open_input_round"></span>
                  </label>
                </div>
              </div>
              <div className="seting-center-scroll-content-info-row-content-td">
                <label
                  style={{
                    marginLeft: "4px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15pt",
                    outline: "none",
                  }}
                >
                  <GoComment />
                </label>
                <div className="seting-center-scroll-content-info-row-content-td-info">
                  {" "}
                  Thông báo
                </div>
                <div className="seting-center-scroll-content-info-row-content-td-open">
                  {" "}
                  <label class="seting-center-scroll-content-info-row-content-td-open-switch">
                    <input
                      checked={openSetinginfocoment}
                      onClick={onClickopenSetinginfocoment}
                      type="checkbox"
                      className="seting-center-scroll-content-info-row-content-td-open-input"
                    />
                    <span class="seting-center-scroll-content-info-row-content-td-open-input-slider seting-center-scroll-content-info-row-content-td-open-input-round"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div
            style={{
              width: "96%",
              borderBottom: "0.1px solid aqua",
              marginLeft: "2%",
              marginTop: "4px",
            }}
          ></div>
          <div
            className="seting-center-scroll-content-info-row"
            onClick={onClickOpenfriend}
          >
            <div className="seting-center-scroll-content-info-row-th">
              <label
                style={{
                  marginLeft: "4px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15pt",
                  marginRight: "5px",
                  outline: "none",
                }}
              >
                <GoComment />
              </label>{" "}
              <label className="seting-center-scroll-content-privacy-td-label">
                Bình luận<label className="seting-font-pale">abc</label>
              </label>
            </div>
            <div className="seting-center-scroll-content-info-row-icon">
              {openSetingfriend ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          </div>
          {openSetingfriend && (
            <div className="seting-center-scroll-content-info-row-content">
              <label className="seting-center-scroll-content-privacy-td-label">
                Nơi bạn nhận thông báo
              </label>
              <div className="seting-center-scroll-content-info-row-content-td">
                <label
                  style={{
                    marginLeft: "4px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15pt",
                    outline: "none",
                  }}
                >
                  <GoComment />
                </label>
                <div className="seting-center-scroll-content-info-row-content-td-info">
                  {" "}
                  Thông báo
                </div>
                <div className="seting-center-scroll-content-info-row-content-td-open">
                  {" "}
                  <label class="seting-center-scroll-content-info-row-content-td-open-switch">
                    <input
                      checked={openSetinginfocoment}
                      onClick={onClickopenSetinginfocoment}
                      type="checkbox"
                      className="seting-center-scroll-content-info-row-content-td-open-input"
                    />
                    <span class="seting-center-scroll-content-info-row-content-td-open-input-slider seting-center-scroll-content-info-row_content_td_open_input_round"></span>
                  </label>
                </div>
              </div>
              <div className="seting-center-scroll-content-info-row-content-td">
                <label
                  style={{
                    marginLeft: "4px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15pt",
                    outline: "none",
                  }}
                >
                  <GoComment />
                </label>
                <div className="seting-center-scroll-content-info-row-content-td-info">
                  {" "}
                  Thông báo
                </div>
                <div className="seting-center-scroll-content-info-row-content-td-open">
                  {" "}
                  <label class="seting-center-scroll-content-info-row-content-td-open-switch">
                    <input
                      checked={openSetinginfocoment}
                      onClick={onClickopenSetinginfocoment}
                      type="checkbox"
                      className="seting-center-scroll-content-info-row-content-td-open-input"
                    />
                    <span class="seting-center-scroll-content-info-row-content-td-open-input-slider seting-center-scroll-content-info-row-content-td-open-input-round"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div
            style={{
              width: "96%",
              borderBottom: "0.1px solid aqua",
              marginLeft: "2%",
              marginTop: "4px",
            }}
          ></div>
          <div
            className="seting-center-scroll-content-info-row"
            onClick={onClickOpenmarket}
          >
            <div className="seting-center-scroll-content-info-row-th">
              <label
                style={{
                  marginLeft: "4px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: "15pt",
                  marginRight: "5px",
                  outline: "none",
                }}
              >
                <FaUserFriends />
              </label>{" "}
              <label className="  seting-center-scroll-content-privacy-td-label">
                Marketplace<label className="seting-font-pale">abc</label>
              </label>
            </div>
            <div className="seting-center-scroll-content-info-row-icon">
              {openSetingmarket ? <FiChevronUp /> : <FiChevronDown />}
            </div>
          </div>
          {openSetingmarket && (
            <div className="seting-center-scroll-content-info-row-content">
              <label className="seting-center-scroll-content-privacy-td-label">
                Nơi bạn nhận thông báo
              </label>
              <div className="seting-center-scroll-content-info-row-content-td">
                <label
                  style={{
                    marginLeft: "4px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15pt",
                    outline: "none",
                  }}
                >
                  <GoComment />
                </label>
                <div className="seting-center-scroll-content-info-row-content-td-info">
                  {" "}
                  Thông báo
                </div>
                <div className="seting-center-scroll-content-info-row-content-td-open">
                  {" "}
                  <label class="seting-center-scroll-content-info-row-content-td-open-switch">
                    <input
                      checked={openSetinginfocoment}
                      onClick={onClickopenSetinginfocoment}
                      type="checkbox"
                      className="seting-center-scroll-content-info-row-content-td-open-input"
                    />
                    <span class="seting-center-scroll-content-info-row-content-td-open-input-slider seting-center-scroll-content-info-row_content_td_open_input_round"></span>
                  </label>
                </div>
              </div>
              <div className="seting-center-scroll-content-info-row-content-td">
                <label
                  style={{
                    marginLeft: "4px",
                    height: "50px",
                    display: "flex",
                    alignItems: "center",
                    fontSize: "15pt",
                    outline: "none",
                  }}
                >
                  <GoComment />
                </label>
                <div className="seting-center-scroll-content-info-row-content-td-info">
                  {" "}
                  Thông báo
                </div>
                <div className="seting-center-scroll-content-info-row-content-td-open">
                  {" "}
                  <label class="seting-center-scroll-content-info-row-content-td-open-switch">
                    <input
                      checked={openSetinginfocoment}
                      onClick={onClickopenSetinginfocoment}
                      type="checkbox"
                      className="seting-center-scroll-content-info-row-content-td-open-input"
                    />
                    <span class="seting-center-scroll-content-info-row-content-td-open-input-slider seting-center-scroll-content-info-row-content-td-open-input-round"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          <div
            style={{
              width: "96%",
              borderBottom: "0.1px solid aqua",
              marginLeft: "2%",
              marginTop: "4px",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default SettingInfo;
