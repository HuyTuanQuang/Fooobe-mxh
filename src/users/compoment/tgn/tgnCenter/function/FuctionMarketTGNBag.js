import React, { useEffect, useState } from "react";
import FuctionMarketTGNBagSub from "./FuctionMarketTGNBagSub";

function FuctionMarketTGNBag({
  listPro,
  TOKEN,
  PATH,
  keyAPI,
  bgMau,
  accTGN,
  setUpdatePro,
}) {
  const [newList, setNewList] = useState([]);
  useEffect(() => {
    setNewList(
      listPro
        .filter((item) => item.id === accTGN.id)
        .sort((a, b) => {
          a = new Date(a.time_post);
          b = new Date(b.time_post);
          return a > b ? -1 : a < b ? 1 : 0;
        })
        .filter((item) => item.sell !== "sell")
    );
  }, [listPro]);

  return (
    <div>
      {newList.map((val) => {
        return (
          <FuctionMarketTGNBagSub
            val={val}
            PATH={PATH}
            TOKEN={TOKEN}
            bgMau={bgMau}
            keyAPI={keyAPI}
            setUpdatePro={setUpdatePro}
          />
        );
      })}
    </div>
  );
}

export default FuctionMarketTGNBag;
