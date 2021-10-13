import React from 'react';
import Button from "@material-ui/core/Button";
import "./StyleSettings.css";

function SettingFriend({classes, bgMau, setOpen,  setEvent  }) {
    return (
        <div>
            <Button style={bgMau === "white"?{color:"black"}:{color:"white"}} className={classes.function}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "left",
                }}
                
              >
                Báo cáo bình luận này
              </div>
            </Button>
            <Button style={bgMau === "white"?{color:"black"}:{color:"white"}} className={classes.function}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "left",
                }}
                
              >
              
                Đã có lỗi sảy ra?
              </div>
            </Button>
        </div>

    );
}

export default SettingFriend;