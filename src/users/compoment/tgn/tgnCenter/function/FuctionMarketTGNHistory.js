import React from "react";

function FuctionMarketTGNHistory({ listPro, accTGN }) {
  return (
    <div className="fuction-market-tgn-history">
      {listPro
        .filter((item) => item.sell !== "notsell")
        .sort((a, b) => {
          a = new Date(a.time_post);
          b = new Date(b.time_post);
          return a > b ? -1 : a < b ? 1 : 0;
        })
        .map((val) => {
          return (
            <div style={{ display: "flex" }}>
              <div className="fuction-market-tgn-history-1">{val.time_post + " :"}</div>
              <div className="fuction-market-tgn-history-2">{val.sell === "sell" ? val.NAME + " đã mua một sản phẩm": val.NAME + " đã bán một sản phẩm"}</div>
              <div className="fuction-market-tgn-history-3">{accTGN.type_market === '1' && " ("+val.TGNNAME+")"}</div>
            </div>
          );
        })}
    </div>
  );
}

export default FuctionMarketTGNHistory;
