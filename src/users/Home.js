import React, { useState } from "react";
import HomeProfile from "./compoment/HomeProfile";
import "./style/HomeStyle.css";
import Pages from "../users/Pages";
import HomeMenuRight from "./compoment/HomeMenuRight";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { makeStyles } from "@material-ui/core/styles";

function Home({
  bgMau,
  setBgMau,
  keyAPI,
  dataAcc,
  trans,
  postNewStory,
  listFriend,
  dataStory,
  setPage,
  loadingStory,
  page,
  TOKEN,
  PATH,
  setWarning,
  warning,
  setNewFeed,
  setFooobe,
  setSnackBar,
  setDataStory,
  setTOKEN,
  setPATH
}) {
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
    textStylex: {
      color: "black",
      marginTop: "0px",
      marginBottom: "30px",
      display: "flex",
      justifyContent: "center",
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
  const [tabMess, setTabMess] = useState({
    id: null,
    primary: '',
    secondary: "",
    person: '',
  })
  const handleClose = () => {
    setWarning(null);
  };
  return (
    <div className="home-controller">
      <div className="home-profile">
        {PATH !== null && PATH !== undefined && PATH !== "" ? (
          <HomeProfile
            trans={trans}
            bgMau={bgMau}
            keyAPI={keyAPI}
            dataAcc={dataAcc}
            tabMess={tabMess}
            setTabMess={setTabMess}
          />
        ) : (
          <div></div>
        )}
      </div>
      <div className="home-page">
        <Pages
          TOKEN={TOKEN}
          PATH={PATH}
          loadingStory={loadingStory}
          page={page}
          listFriend={listFriend}
          bgMau={bgMau}
          setBgMau={setBgMau}
          keyAPI={keyAPI}
          dataAcc={dataAcc}
          trans={trans}
          dataStory={dataStory}
          setPage={setPage}
          setWarning={setWarning}
          setNewFeed={setNewFeed}
          setFooobe={setFooobe}
          setSnackBar={setSnackBar}
          tabMess={tabMess}
          setDataStory={setDataStory}
          setTOKEN={setTOKEN}
          setPATH={setPATH}
        />
      </div>
      <div className="home-advertisement">
        {PATH !== null && PATH !== undefined && PATH !== "" ? (
          <HomeMenuRight trans={trans} tabMess={tabMess} />
        ) : (
          <div></div>
        )}
      </div>
      <Dialog
        open={warning !== null ? true : false}
        onClose={handleClose}
        style={{ zIndex: "50000" }}
      >
        <DialogContent className={classes.titleStyle}>
          Th??ng b??o t??? Fooobe
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
        <DialogContent className={classes.textStylex}>
          {warning === 401 &&
            `Xin ch??o ${dataAcc.lastname}, <br/> C?? v??? nh?? t??i kho???n c???a b???n ??ang c?? nh???ng h??nh ?????ng spam ch???c n??ng n??o ????. ?????ng lo l???ng, ch??ng t??i ch??? t???m th???i c???m b???n s??? d???ng t??nh n??ng ???? trong m???t kho???ng th???i gian.`}
          {warning === 402 &&
            `Xin ch??o ${dataAcc.lastname}, <br/> C?? v??? nh?? n???i dung b???n g???i kh??ng ch??nh x??c, b???n vui l??ng th??? l???i.`}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Home;
