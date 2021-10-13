import React from "react";
import Button from "@material-ui/core/Button";
import { IoMdNotificationsOff, IoMdNotifications } from "react-icons/io";
import { MdReport } from "react-icons/md";
import { HiLink, HiOutlineCode } from "react-icons/hi";
import { ImDownload } from "react-icons/im";

function SMPFriendsUser({ classes, bgMau, setOpen, setEvent, value }) {
  const handleClickOpen = (event, index) => {
    setOpen(true);
    setEvent(index);
  };
  return (
    <div >
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
      <div className="settingmenupost-hr"></div>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 10)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <ImDownload
            style={{
              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          Ẩn bài viết
        </div>
      </Button>
      <Button
        style={bgMau === "white" ? { color: "black" } : { color: "white" }}
        className={classes.function}
        onClick={(event) => handleClickOpen(event, 11)}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            textAlign: "left",
          }}
        >
          <MdReport
            style={{
              height: "20px",
              width: "20px",
              marginRight: "5px",
            }}
          />
          Báo cáo
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

export default SMPFriendsUser;
