import React from "react";
import Dialog from "@material-ui/core/Dialog";
import { useCookies } from "react-cookie";
import "./settingmenupost.css";
import SMPAdsUser from "./SMPAdsUser";
import SMPFriendsUser from "./SMPFriendsUser";
import SMPMyUser from "./SMPMyUser";
import SMPPagesUser from "./SMPPagesUser";
import SMPReportPost from "./SMPSuppor/SMPReportPost";
import SMPNotificationPost from "./SMPSuppor/SMPNotificationPost";
import SMPAddHastTagPost from "./SMPSuppor/SMPAddHastTagPost";
import SMPEditPost from "./SMPSuppor/SMPEditPost";
import SMPAddTagFriendPost from "./SMPSuppor/SMPAddTagFriendPost";
import SMPDeletePost from "./SMPSuppor/SMPDeletePost";
import SPMChangeDisplayPost from "./SMPSuppor/SPMChangeDisplayPost";
import SMPErrorPost from "./SMPSuppor/SMPErrorPost";
import SMPCopyLinkPost from "./SMPSuppor/SMPCopyLinkPost";
import SMPEmbedLinkPost from "./SMPSuppor/SMPEmbedLinkPost";
import SMPBlockPost from "./SMPSuppor/SMPBlockPost";
import { makeStyles } from "@material-ui/core/styles";
import SMPOnComment from "./SMPSuppor/SMPOnComment";
import SMPOffComment from "./SMPSuppor/SMPOffComment";

function SettingMenuPost({ listFriend, setDataStory, dataStory, classes, idpost, storyid, typepost, bgMau , value, setOpenComment, TOKEN, PATH, keyAPI, openComment, setSnackBar}) {
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const [open, setOpen] = React.useState(false);
  const [event, setEvent] = React.useState(0);
  const useStyles = makeStyles((theme) => ({
    deleteStyle: {
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
      textAlign:"center",
    },
  }));
  const classess = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <form>
        {cookies.fo_uim === idpost ? (
          <div>
            <SMPMyUser
              classes={classes}
              bgMau={bgMau}
              setOpen={setOpen}
              setEvent={setEvent}
              value={value}
              openComment={openComment}
            />
          </div>
        ) : (
          <div>
            {typepost === "ads" ? (
              <div>
                <SMPAdsUser
                  classes={classes}
                  bgMau={bgMau}
                  setOpen={setOpen}
                  setEvent={setEvent}
                />
              </div>
            ) : (
              <div>
                {typepost === "pages" ? (
                  <div>
                    <SMPPagesUser
                      classes={classes}
                      bgMau={bgMau}
                      setOpen={setOpen}
                      setEvent={setEvent}
                    />
                  </div>
                ) : (
                  <div>
                    <SMPFriendsUser
                      classes={classes}
                      bgMau={bgMau}
                      setOpen={setOpen}
                      setEvent={setEvent}
                      value={value}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </form>
      <Dialog open={open} onClose={handleClose} className="settingDiablob">
        {event === 1 && <SMPNotificationPost setDataStory={setDataStory} dataStory={dataStory}  keyAPI={keyAPI} value={value} PATH={PATH} TOKEN={TOKEN} setSnackBar={setSnackBar} classes={classess} setOpen={setOpen} />}
        {event === 2 && <SMPAddHastTagPost classes={classess}  setOpen={setOpen} />}
        {event === 3 && <SMPEditPost listFriend={listFriend} setDataStory={setDataStory} dataStory={dataStory} classes={classess} setOpen={setOpen} keyAPI={keyAPI} value={value} PATH={PATH} TOKEN={TOKEN}  />}
        {event === 4 && <SMPAddTagFriendPost classes={classess} setOpen={setOpen} />}
        {event === 5 && <SPMChangeDisplayPost setDataStory={setDataStory} dataStory={dataStory} classes={classess} setOpen={setOpen} keyAPI={keyAPI} value={value} PATH={PATH} TOKEN={TOKEN} />}
        {event === 6 && <SMPDeletePost  setDataStory={setDataStory} dataStory={dataStory} classes={classess} setOpen={setOpen} keyAPI={keyAPI} value={value} PATH={PATH} TOKEN={TOKEN} />}
        {event === 7 && <SMPErrorPost classes={classess} setOpen={setOpen} />}
        {event === 8 && <SMPCopyLinkPost value={value} classes={classess} setOpen={setOpen} />}
        {event === 9 && <SMPEmbedLinkPost classes={classess} setOpen={setOpen} />}
        {event === 10 && <SMPBlockPost classes={classess} setOpen={setOpen} />}
        {event === 11 && <SMPReportPost classes={classess} setOpen={setOpen} />}
        {event === 12 && <SMPOnComment keyAPI={keyAPI} value={value} PATH={PATH} TOKEN={TOKEN} classes={classess} setOpen={setOpen} setOpenComment={setOpenComment}/>}
        {event === 13 && <SMPOffComment keyAPI={keyAPI} value={value} PATH={PATH} TOKEN={TOKEN} classes={classess} setOpen={setOpen} setOpenComment={setOpenComment}/>}
      </Dialog>
    </div>
  );
}

export default SettingMenuPost;
