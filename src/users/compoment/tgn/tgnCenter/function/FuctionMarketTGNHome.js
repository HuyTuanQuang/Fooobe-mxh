import React, { useEffect, useState } from "react";

import FuctionMarketTGNHomeSub from "./FuctionMarketTGNHomeSub";

function FuctionMarketTGNHome({
  listPro,
  TOKEN,
  PATH,
  keyAPI,
  bgMau,
  accTGN,
  setUpdateAcc,
  setUpdatePro,
}) {
  const [newList, setNewList] = useState([]);
  useEffect(() => {
    setNewList(
      listPro
        .filter((item) => item.sell === "onsell")
        .sort((a, b) => {
          a = new Date(a.time_post);
          b = new Date(b.time_post);
          return a > b ? -1 : a < b ? 1 : 0;
        })
    );
  }, [listPro]);

  return (
    <div>
      {newList.map((val) => {
        return (
          <FuctionMarketTGNHomeSub
            val={val}
            PATH={PATH}
            TOKEN={TOKEN}
            bgMau={bgMau}
            keyAPI={keyAPI}
            accTGN={accTGN}
            setUpdateAcc={setUpdateAcc}
            setUpdatePro={setUpdatePro}
          />
        );
      })}
    </div>
  );
}

export default FuctionMarketTGNHome;
