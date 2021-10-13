import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import HomeMenuLeft from "./SuporMenuLeft";

import { Link } from "react-router-dom";

function MenuLeft({ setIndex, index, friend,}) {
    const [statusLocal, setStatusLocal] = useState(-1);

  const IndexOnClick = function (val, idx) {
    setIndex({
      ...index,
      id: val.id,
      primary: val.primary,
      secondary: val.secondary,
      person: val.person,
    });
    setStatusLocal(idx);
  };

  const useStylesScrollBar = makeStyles((theme) => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    grow: {
      flexGrow: 1,
    },
    listItem: {
      border: 0,
      borderRadius: "10px 10px 10px 10px",
      padding: "0px 10px 0px 10px",
    },
    selectItem: {
      border: 0,
      borderRadius: "10px 10px 10px 10px",
      backgroundColor: "#eaf3ff",
      padding: "0px 10px 0px 10px",
    },
  }));

  const classes = useStylesScrollBar();

  return (
    
    <div className="container-left">
      <HomeMenuLeft/>
      <div className="body">
        <div className="box-scroll">
          <CssBaseline />
          {friend.map((val, idx) => {
            return (
                <List>
                  <React.Fragment key={idx}>
                    <Link className="linkFriend" to={"/messenger/" + val.id}>
                      <ListItem
                        className={
                          statusLocal === idx
                            ? classes.selectItem
                            : classes.listItem
                        }
                        button
                        onClick={function (event) {
                          IndexOnClick(val, idx);
                        }}
                      >
                        <ListItemAvatar>
                          <Avatar alt="Profile Picture" src={val.person} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={val.primary}
                          secondary={val.secondary}
                        />
                      </ListItem>
                    </Link>
                  </React.Fragment>
                </List>
            
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MenuLeft;