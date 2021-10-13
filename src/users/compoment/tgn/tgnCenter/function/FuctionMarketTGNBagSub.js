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
import ShopIcon from "@material-ui/icons/Shop";
import StorefrontIcon from "@material-ui/icons/Storefront";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import SurroundSoundIcon from "@material-ui/icons/SurroundSound";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

function FuctionMarketTGNBagSub({
  val,
  TOKEN,
  PATH,
  keyAPI,
  bgMau,
  accTGN,
  setUpdatePro,
}) {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [hiden, setHiden] = useState(false);
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
  const valueForm = {
    price: "",
    content: "",
  };
  const [values, setValues] = useState(valueForm);
  function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); } 
  const onChage = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
    if(name === "price"){
      if (value.length > 0 && values.content.length > 0 && isNumber(Number(value)) === true) {
        setHiden(true)
      }else{
        setHiden(false)
      }
    }else{
      if (value.length > 0 && values.price.length > 0 && isNumber(Number(values.price)) === true) {
        setHiden(true)
      }else{
        setHiden(false)
      }
    }
  }
  const handleClose = () => {
    setOpen(false);
    setOpen2(false);
  };

  const creEvent = (event, sk) => {
    
    if(sk === "postcard"){
      setOpen(false);
      Axios.post(keyAPI.apiTGNEventMarket, {
        id: PATH,
        token: TOKEN,
        ev: "postcard",
        idz: val.tgn_market_history_stt,
        pgd: values.price,
        ts: values.content,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul === "postcard") {
                setUpdatePro(
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
    }else if(sk === "addprev"){
      setOpen2(false);
      Axios.post(keyAPI.apiTGNEventMarket, {
        id: PATH,
        token: TOKEN,
        ev: "addprev",
        idz: val.tgn_market_history_stt,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul === "addprev") {
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
    }
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
        <div className="fuction-market-tgn-list-item-title-content">
          {val.TGNCONTENT}
        </div>
        <div className="fuction-market-tgn-list-item-title-limit">
          {val.TGNLIMIT}
        </div>
      </div>
      <div className="fuction-market-tgn-list-item-button">
        {val.sell === "notsell" ? (
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={()=>setOpen(true)}
          >
            <ShopIcon />
          </IconButton>
        ) : (
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={()=>setOpen2(true)}
          >
            <RemoveShoppingCartIcon />
          </IconButton>
        )}
        <IconButton color="primary" aria-label="add to shopping cart" disabled>
          <StorefrontIcon />
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart" disabled>
          <SurroundSoundIcon />
        </IconButton>
      </div>
      <Dialog open={open} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          Bán vật phẩm
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
          <div className="fuction-market-tgn-list-item-button-text">Mời nhập giá : </div><input onChange={onChage} type="text" name="price" autoComplete="off" placeholder=" price. . ."/>
          <div className="fuction-market-tgn-list-item-button-text">Mời nhập nội dung : </div><TextareaAutosize onChange={onChage} name="content" aria-label="minimum height" minRows={3} placeholder=" content. . ." />
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            style={{ textTransform: "none", fontWeight: "600" }}
            onClick={handleClose}
          >
            Thôi
          </Button>
          {
            hiden === true ? <Button
            color="primary"
            style={{ textTransform: "none", fontWeight: "600" }}
            onClick={(event) => creEvent(event, "postcard")}
          >
            Bán
          </Button>:<Button
            color="primary"
            style={{ textTransform: "none", fontWeight: "600" }}
            disabled
          >
            Bán
          </Button>
          }
         
        </DialogActions>
      </Dialog>
      <Dialog open={open2} onClose={handleClose} style={{ zIndex: "50000" }}>
        <DialogContent className={classes.titleStyle}>
          Gỡ đăng bán
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
        Bạn có chắc muốn lấy về không?
        </DialogContent>
        <DialogActions>
          <Button
            color="primary"
            style={{ textTransform: "none", fontWeight: "600" }}
            onClick={handleClose}
          >
            Thôi
          </Button>
        <Button
            color="primary"
            style={{ textTransform: "none", fontWeight: "600" }}
            onClick={(event) => creEvent(event, "addprev")}
          >
            Lấy về
          </Button>
          
         
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default FuctionMarketTGNBagSub;
