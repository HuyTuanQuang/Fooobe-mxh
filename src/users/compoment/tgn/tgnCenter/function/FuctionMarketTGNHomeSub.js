import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "@material-ui/lab/Skeleton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import Axios from "axios";
import { Redirect } from "react-router-dom";

function FuctionMarketTGNHomeSub({
  val,
  TOKEN,
  PATH,
  keyAPI,
  bgMau,
  accTGN,
  setUpdateAcc,
  setUpdatePro,
}) {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [hiden, setHiden] = useState(true);
  const useStyles = makeStyles((theme) => ({
    boxStyle: {
      fontWeight: "bold",
      fontSize: "0.9rem",
      backgroundColor: "#23b4c5",
      textTransform: "none",
    },
    textStyle: {
      color: "black",
      marginTop: "-20px",
      marginBottom: "20px",
    },
    titleStyle: {
      color: "black",
      marginTop: "-10px",
      marginBottom: "-10px",
      fontWeight: "bold",
      fontSize: "1.4rem",
    },
  }));
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen1(false);
    setUpdatePro(
      val.tgn_market_history_stt + Math.floor(Math.random() * 100000)
    );
    
  };
  const creEvent = () => {
    setOpen(false);
    Axios.post(keyAPI.apiTGNEventMarket, {
      id: PATH,
      token: TOKEN,
      ev: "buycard",
      idz: val.tgn_market_history_stt,
      pgd: val.price,
      ts: "Mua " + val.TGNNAME,
      tsv: val.tgn_market_stt,
      tsc: (Number(val.price)/100*90),
      tsy: val.id
    })
      .then(({ data }) => {
        if (typeof data !== undefined) {
          if (data.check === "xp") {
            return <Redirect to={"/logout"} />;
          } else {
            if (data.resul === "buycard") {
              setOpen1(true);
              setUpdateAcc(
                val.tgn_market_history_stt + Math.floor(Math.random() * 100000)
              );
            }else{
              setUpdatePro(
                val.tgn_market_history_stt + Math.floor(Math.random() * 100000)
              );
            }
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log("Truy vấn có vấn đề");
        } else if (error.request) {
          console.log("Không nhận được phản hồi");
        } else {
          console.log("I am Nhân by Fo");
        }
      });
  };
  return (
    <div className="fuction-market-tgn-list-item">
      <div className="fuction-market-tgn-list-item-img">
        <LazyLoadImage
          className="fuction-market-tgn-list-item-img-css"
          src={`/files/${val.TGNIMG}`}
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
          {val.TGNNAME}
        </div>
        <div className="fuction-market-tgn-list-item-title-limit">
          {val.content}
        </div>
        <div className="fuction-market-tgn-list-item-title-1">
          <div className="fuction-market-tgn-list-item-title-1-name">
            Giá bán :
          </div>
          <div>{val.price + " PGD"}</div>
        </div>
        <div className="fuction-market-tgn-list-item-title-1">
          <div className="fuction-market-tgn-list-item-title-1-name">
            Người bán :
          </div>
          <div>{val.NAME}</div>
        </div>
      </div>
      <div className="fuction-market-tgn-list-item-button">
       
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={() => setOpen(true)}
          >
            <AddShoppingCartIcon />
          </IconButton>
      
      </div>
      <Dialog open={open1} onClose={handleClose2} style={{ zIndex: "50000" }}>
        <div
          style={{
            width: "200px",
            height: "150px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div class="fuction-market-tgn-success-checkmark">
            <div class="fuction-market-tgn-check-icon">
              <span class="icon-line line-tip"></span>
              <span class="icon-line line-long"></span>
              <div class="icon-circle"></div>
              <div class="icon-fix"></div>
            </div>
          </div>
          ĐÃ MUA
        </div>
      </Dialog>
      <Dialog open={open} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          Mua sản phẩm này
        </DialogContent>
        <div
          style={{
            width: "100%",
            height: "0.1px",
            backgroundColor: "rgba(201, 192, 192, 0.966)",
            marginTop: "10px",
            marginBottom: "15px",
          }}
        ></div>
        <DialogContent className={classes.textStyle}>
          Bạn có chắc muốn mua vật phẩm này không?
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            style={{ textTransform: "none", fontWeight: "600" }}
            onClick={handleClose}
          >
            Thôi
          </Button>
          {Number(accTGN.PGD) > Number(val.price) - 1 ? (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              disableElevation
              onClick={creEvent}
            >
              Ok, mua luôn
            </Button>
          ) : (
            <Button
              className={classes.boxStyle}
              variant="contained"
              color="primary"
              disableElevation
              disabled
            >
              Oh, không đủ tiền
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FuctionMarketTGNHomeSub;
