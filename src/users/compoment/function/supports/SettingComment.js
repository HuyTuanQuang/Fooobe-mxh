import React from "react";
import { useCookies } from "react-cookie";
import SettingFriend from "./SettingFriend";
import SettingFriendPage from "./SettingFriendPage";
import SettingUserComment from "./SettingUserComment";
import SettingUserPageComment from "./SettingUserPageComment";
import Dialog from "@material-ui/core/Dialog";
import DeleteComment from "./resupports/DeleteComment";
import EditComment from "./resupports/EditComment";
import ReportComment from "./resupports/ReportComment";


function SettingComment({ value, classes, bgMau, apiValue, setValue, TOKEN, PATH, keyAPI }) {
  const [cookies, setCookie, removeCookie] = useCookies(["fo_uim", "fo_token"]);
  const [open, setOpen] = React.useState(false);
  const [event, setEvent] = React.useState(0);
 
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div key={value.STT} style={bgMau === "white" ? {backgroundColor:"white"}:{backgroundColor:"#18191a", borderRadius:"15px"}}>
      {cookies.fo_uim === value.ID ? (
        <div>
          <SettingUserComment
            setOpen={setOpen}
            classes={classes}
            bgMau={bgMau}
            setEvent={setEvent}
          />
        </div>
      ) : value.TYPECMT === "user" ? (
        <div>
          <SettingFriend
            setOpen={setOpen}
            classes={classes}
            bgMau={bgMau}
            setEvent={setEvent}
          />
        </div>
      ) : value.PAGEID === cookies.fo_uim ? (
        <div>
          <SettingUserPageComment />
        </div>
      ) : (
        <div>
          <SettingFriendPage />
        </div>
      )}
      <Dialog open={open} onClose={handleClose} className="settingDiablob">
          {event === 1 && <DeleteComment value={value} apiValue={apiValue} setValue={setValue} setOpen={setOpen} keyAPI={keyAPI} TOKEN={TOKEN} PATH={PATH}/>}
          {event === 2 && <EditComment setOpen={setOpen}/>}
          {event === 3 && <ReportComment setOpen={setOpen}/>}
      </Dialog>
    </div>
  );
}

export default SettingComment;
