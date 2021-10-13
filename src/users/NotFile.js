import React from "react";
import ImageNotFound from "./../img/notfound.png";
import { useHistory, Link } from "react-router-dom";

function NotFile(props) {
  const history = useHistory();
  return (
    <div style={{ paddingTop: "20%" }}>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <img src={ImageNotFound} style={{ width: "100px", height: "100px" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "600",
          fontSize: "22px",
          paddingTop: "10px",
          color: "rgb(124, 124, 124)",
        }}
      >
        Không tìm thấy trang này
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "500",
          fontSize: "15px",
          paddingTop: "10px",
          color: "rgb(124, 124, 124)",
          maxWidth: "500px",
          textAlign: "center",
          margin: "0 auto",
        }}
      >
        Có thể liên kết đã hỏng hoặc bạn không có quyền xem nội dung này. Hãy
        thử kiểm tra lại liên kết hoặc lựa chọn các tính năng sau.
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "600",
          fontSize: "17px",
          paddingTop: "10px",
          color: "rgb(124, 124, 124)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            fontWeight: "500",
            fontSize: "15px",
            color: "rgb(124, 124, 124)",
            width: "200px",
            textAlign: "center",
            margin: "0 auto",
            backgroundColor: "cyan",
            alignItems: "center",
            height: "30px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          <Link
            to="/newstory"
            style={{ textDecoration: "none", color: "black" }}
          >
            Đi đến bảng tin
          </Link>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "600",
          fontSize: "17px",
          paddingTop: "10px",
          color: "rgb(124, 124, 124)",
          cursor: "pointer",
        }}
      >
        <span
          onClick={() => {
            history.goBack();
          }}
        >
          Quay lại
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          fontWeight: "600",
          fontSize: "17px",
          paddingTop: "10px",
          color: "rgb(124, 124, 124)",
          cursor: "pointer",
        }}
      >
        Trang trợ giúp
      </div>
    </div>
  );
}

export default NotFile;
