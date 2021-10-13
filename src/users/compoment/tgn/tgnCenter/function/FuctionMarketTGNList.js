import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "@material-ui/lab/Skeleton";

function FuctionMarketTGNList({ listMarket }) {
  const [newList, setNewList] = React.useState(listMarket);
  function removeText(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }
  const onChage = (event) => {
    const val = event.target.value;
    if (val.length > 2) {
      setNewList(
        newList.filter(
          (item) =>
            removeText(item.name.toLowerCase()).indexOf(
              removeText(val).toLowerCase()
            ) !== -1
        )
      );
    } else {
      setNewList(listMarket);
    }
  };

  return (
    <div className="fuction-market-tgn-list">
      <div className="fuction-market-tgn-list-input">
        <input
          onChange={onChage}
          className="fuction-market-tgn-list-input-css"
          type="text"
          placeholder=" Bạn cần tìm gì nào..."
        />
      </div>
      {newList.map((value) => {
        return (
          <div className="fuction-market-tgn-list-item">
            <div className="fuction-market-tgn-list-item-img">
              <LazyLoadImage
                className="fuction-market-tgn-list-item-img-css"
                src={`/files/${value.img}`}
                placeholder={
                  <Skeleton
                    animation="wave"
                    variant="rect"
                    className="fuction-market-tgn-list-item-img-css"
                  />
                }
              />
            </div>
            <div className="fuction-market-tgn-list-item-title">
              <div className="fuction-market-tgn-list-item-title-name">
                {value.name}
              </div>
              <div className="fuction-market-tgn-list-item-title-content">
                {value.content}
              </div>
              <div className="fuction-market-tgn-list-item-title-limit">
                {value.limits}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default FuctionMarketTGNList;
