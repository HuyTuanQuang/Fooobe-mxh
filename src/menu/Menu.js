import React from "react";
import "./style/BigStyle.css";
import "./style/SmaillStyle.css";
import "./style/CenterStyle.css";
import MenuTabSmall from "./component/MenuTabSmall";
import MenuTabBig from "./component/MenuTabBig";
import MenuTabCenter from "./component/MenuTabCenter";
import { useLocation } from "react-router-dom";

function Menu({ bgMau, setBgMau, keyAPI, dataAcc, handScroll, TOKEN, PATH }) {
  const pathurl = useLocation().pathname;
  const index = () => {
    if (pathurl === "/newstory") {
      document.title = "Fooobe";
      return 0;
    } else if (pathurl === "/friends") {
      document.title = "Bạn bè | Fooobe";
      return 1;
    } else if (pathurl === "/watch") {
      document.title = "Watch | Fooobe";
      return 2;
    } else if (pathurl === "/play") {
      document.title = "Play | Fooobe";
      return 3;
    } else if (pathurl === "/notifications") {
      document.title = "Thông báo | Fooobe";
      return 4;
    } else if (pathurl === "/tab-menu") {
      document.title = "Fooobe";
      return 5;
    } else if (pathurl === "/search") {
      document.title = "Search | Fooobe";
      return 6;
    } else if (pathurl === "/messenger") {
      document.title = "Messenger | Fooobe";
      return 7;
    } else if (pathurl === "/") {
      document.title = "Fooobe";
      return 0;
    } else {
      return 8;
    }
  };

  const [value, setValue] = React.useState(index);

  //Sự kiện xử lý quay lại trang trước của trình duyệt
  window.onpopstate = () => {
    setValue(index);
  };
  const deleteEvent = (e) => {
    e.preventDefault();
  };
  return (
    <div onContextMenu={deleteEvent}>
      <div className="BigScreen">
        <MenuTabBig
          bgMau={bgMau}
          setBgMau={setBgMau}
          keyAPI={keyAPI}
          dataAcc={dataAcc}
          value={value}
          setValue={setValue}
          TOKEN={TOKEN}
          PATH={PATH}
        />
      </div>
      <div className="CenterScreen">
        <MenuTabCenter
          bgMau={bgMau}
          setBgMau={setBgMau}
          keyAPI={keyAPI}
          dataAcc={dataAcc}
          value={value}
          setValue={setValue}
        />
      </div>
      <div className="SmallScreen">
        <MenuTabSmall
          bgMau={bgMau}
          setBgMau={setBgMau}
          keyAPI={keyAPI}
          dataAcc={dataAcc}
          value={value}
          setValue={setValue}
          handScroll={handScroll}
        />
      </div>
    </div>
  );
}

export default Menu;
