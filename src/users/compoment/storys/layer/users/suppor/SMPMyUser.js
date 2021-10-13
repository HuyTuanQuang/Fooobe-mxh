import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Code from "../../../../../../img/codes.png";
import { MdModeEdit, MdPublic, MdDelete, MdError } from "react-icons/md";
import { IoMdNotificationsOff, IoMdNotifications } from "react-icons/io";
import { FaCommentSlash, FaComment } from "react-icons/fa";
import { HiOutlineHashtag, HiLink, HiOutlineCode } from "react-icons/hi";
import { FaTags } from "react-icons/fa";

function SMPMyUser({ classes, bgMau, setOpen, setEvent, value, openComment }) {
  const handleClickOpen = (event, index) => {
    setOpen(true);
    setEvent(index);
  };
  return (
    <div>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 1)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          {value !== undefined && value.STORYNOTICE === "offnotice" ? (
            <IoMdNotificationsOff
              style={{
                height: "20px",
                width: "20px",
                marginRight: "5px",
              }}
            />
          ) : (
            <IoMdNotifications
              style={{
                height: "20px",
                width: "20px",
                marginRight: "5px",
              }}
            />
          )}
          {value !== undefined && value.STORYNOTICE === "offnotice"
            ? "Bật thông báo bài viết"
            : "Tắt thông báo bài viết"}
        </div>
      </Button>
      {openComment === "on" ? (
        <Button
          style={bgMau === "white" ? { color: "black" } : { color: "white" }}
          className={classes.function}
          onClick={(event) => handleClickOpen(event, 13)}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
            }}
          >
            <FaCommentSlash
              style={{
                height: "20px",
                width: "20px",
                marginRight: "5px",
              }}
            />
            Tắt tính năng bình luận
          </div>
        </Button>
      ) : (
        <Button
          style={bgMau === "white" ? { color: "black" } : { color: "white" }}
          className={classes.function}
          onClick={(event) => handleClickOpen(event, 12)}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              textAlign: "left",
            }}
          >
            <FaComment
              style={{
                height: "18px",
                width: "18px",
                marginRight: "7px",
              }}
            />
            Bật tính năng bình luận
          </div>
        </Button>
      )}
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 2)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <HiOutlineHashtag
            style={{
              height: "18px",
              width: "18px",
              marginRight: "7px",
            }}
          />
          Thêm hastag vào bài viết
        </div>
      </Button>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 3)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <MdModeEdit
            style={{
              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          Chỉnh sửa bài viết
        </div>
      </Button>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 4)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <FaTags
            style={{
              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          Gắn thẻ bạn bè
        </div>
      </Button>
      <div className="settingmenupost-hr"></div>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 5)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <MdPublic
            style={{
              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          Thay đổi hiển thị
        </div>
      </Button>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 6)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <MdDelete
            style={{
              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          Xóa bài viết
        </div>
      </Button>
      <div className="settingmenupost-hr"></div>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 7)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <MdError
            style={{
              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          Báo lỗi
        </div>
      </Button>
      <div className="settingmenupost-hr"></div>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={() => {
          navigator.clipboard.writeText(
            `https://fooobe.com/post/${value.story_stt}`
          );
          const nextNotices = document.getElementById("snackbar-fooobe");
          nextNotices.className = "showSnackBarFooobe";
          nextNotices.innerText = "Đã sao chép liên kết bài viết";
          setTimeout(function () {
            nextNotices.className = nextNotices.className.replace(
              "showSnackBarFooobe",
              "showSnackBarFooobe-2"
            );
          }, 5000);
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <HiLink
            style={{
              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          Sao chép liên kết
        </div>
      </Button>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 9)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <HiOutlineCode
            style={{
              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          Nhúng
        </div>
      </Button>
    </div>
  );
}

export default SMPMyUser;
