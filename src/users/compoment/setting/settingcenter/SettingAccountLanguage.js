import React, { useState } from "react";

function SettingAccountLanguage(props) {
  const [open, setOpen] = useState(true);
  const [open1, setOpen1] = useState(true);
  const [languagestatus, setLanguage] = useState("Việt Nam");
  const onchangeSetinglanguagestatu = (e) => {
    console.log(e.target.value);
    setLanguage(e.target.value);
  };

  return (
    <div className="seting-center">
      <div className="seting-center-scroll" id="seting-center-scroll-style">
        <div className="seting-center-scroll-nav">Cài đặt ngôn ngữ</div>
        <div className="seting-center-scroll-content">
          <div
            className="seting-center-scroll-content-privacy-row"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              className="seting-center-scroll-content-privacy-th"
              style={{ width: "22%", fontWeight: "600" }}
            >
              Ngôn ngữ trên Fooobe
            </div>
            <div style={{ width: "40%", opacity: "0.7", fontSize: "11pt" }}>
              Ngôn ngữ tiêu đề
            </div>
            {open ? (
              <div style={{ width: "20%" }}>{languagestatus}</div>
            ) : (
              <div
                style={{
                  width: "20%",
                  backgroundColor: "aqua",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <select
                  value={languagestatus}
                  onChange={onchangeSetinglanguagestatu}
                  style={{
                    width: "80%",
                    height: "60%",
                    outline: "none",
                    borderRadius: "10px",
                  }}
                >
                  <option value="Việt Nam">Việt Nam</option>
                  <option value="English">English</option>
                  <option value="Hàn Quốc">Hàn Quốc</option>
                  <option value="Nhật Bản">Nhật Bản</option>
                </select>
              </div>
            )}
            {open ? (
              <div
                style={{ width: "15%" }}
                className="seting-link"
                onClick={() => setOpen(!open)}
              >
                Chỉnh sửa
              </div>
            ) : (
              <div
                style={{
                  width: "18%",
                  backgroundColor: "aqua",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
                className="seting-link"
                onClick={() => setOpen(!open)}
              >
                Đóng
              </div>
            )}
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
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div
              className="seting-center-scroll-content-privacy-th"
              style={{ width: "22%", fontWeight: "600" }}
            >
              Định dạng bài viết
            </div>
            <div style={{ width: "40%", opacity: "0.7", fontSize: "11pt" }}>
              Ngôn ngữ các bài viết
            </div>
            {open1 ? (
              <div style={{ width: "20%" }}>{languagestatus}</div>
            ) : (
              <div
                style={{
                  width: "20%",
                  backgroundColor: "aqua",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <select
                  value={languagestatus}
                  onChange={onchangeSetinglanguagestatu}
                  style={{
                    width: "80%",
                    height: "60%",
                    outline: "none",
                    borderRadius: "10px",
                  }}
                >
                  <option value="Việt Nam">Việt Nam</option>
                  <option value="English">English</option>
                  <option value="Hàn Quốc">Hàn Quốc</option>
                  <option value="Nhật Bản">Nhật Bản</option>
                </select>
              </div>
            )}
            {open1 ? (
              <div
                style={{ width: "15%" }}
                className="seting-link"
                onClick={() => setOpen1(!open1)}
              >
                Chỉnh sửa
              </div>
            ) : (
              <div
                style={{
                  width: "18%",
                  backgroundColor: "aqua",
                  display: "flex",
                  justifyContent: "space-evenly",
                }}
                className="seting-link"
                onClick={() => setOpen1(!open1)}
              >
                Đóng
              </div>
            )}
          </div>

          <div
            style={{
              width: "98%",
              borderBottom: "0.1px solid aqua",
              marginTop: "10px",
            }}
          ></div>
        </div>

        <div style={{ width: "98%", borderBottom: "0.1px solid aqua" }}></div>
        <div className="seting-center-scroll-footer"></div>
      </div>
    </div>
  );
}

export default SettingAccountLanguage;
