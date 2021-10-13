import React, { useState, useEffect } from "react";
import FuctionOrgazineTGNSubManageBANKList from "./FuctionOrgazineTGNSubManageBANKList";

function FuctionOrgazineTGNSubManageBANK({
    mem,
    allMem,
    PATH,
    TOKEN,
    keyAPI,
    setHight,
}) {
  const [valuev, setValue] = useState("");
  const [oldMem, setOldMem] = useState(null);
  const searchMems = (event) => {
    setValue(event.target.value);
  };
  function removeText(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }
  useEffect(() => {
    if (valuev.length > 0) {
      setOldMem(
        allMem.filter(
          (item) =>
            removeText(item.NAME.toLowerCase()).indexOf(
              removeText(valuev).toLowerCase()
            ) !== -1
        )
      );
    } else {
      setOldMem(null);
    }
  }, [valuev]);
  return (
    <div>
      <div className="fuction-orgazine-tgn-pvp">
        <div className="fuction-orgazine-tgn-pvp-title">TẠO THÔNG BÁO</div>
        <div className="fuction-orgazine-tgn-pvp-play"></div>
      </div>
      <div className="fuction-orgazine-tgn-pvp">
        <div className="fuction-orgazine-tgn-pvp-title">
          DANH SÁCH NGƯỜI DÙNG
        </div>
        <div className="fuction-orgazine-tgn-sub-profile-search">
          <input
            type="text"
            placeholder="Bạn muốn tìm ai?"
            id="fuction-orgazine-tgn-sub-profile-search-id"
            onChange={searchMems}
          />
        </div>
        <div
          className="fuction-orgazine-tgn-pvp-play"
          style={{ minHeight: "500px" }}
        >
          {oldMem === null
            ? allMem.map((val, idx) => {
                return (
                  <div>
                    {idx < 20 && (
                      <FuctionOrgazineTGNSubManageBANKList 
                        setHight={setHight}
                        PATH={PATH}
                        TOKEN={TOKEN}
                        keyAPI={keyAPI}
                        val={val}
                        mem={mem}
                      />
                    )}
                  </div>
                );
              })
            : oldMem.map((val, idx) => {
                return (
                  <div>
                    {idx < 20 && (
                      <FuctionOrgazineTGNSubManageBANKList 
                        setHight={setHight}
                        PATH={PATH}
                        TOKEN={TOKEN}
                        keyAPI={keyAPI}
                        val={val}
                        mem={mem}
                      />
                    )}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
  );
}

export default FuctionOrgazineTGNSubManageBANK;
