import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeStorys from "../storysCenter/HomeStorys";
import TrendStory from "../storysCenter/TrendStory";
import FollowStory from "../storysCenter//FollowStory";

function NewStory({ setDataStory, bgMau, setBgMau, keyAPI, postNewStory, listFriend, dataAcc, dataStory, setPage, loadingStory, page, TOKEN, PATH , setSnackBar}) {
  return (

    <div>
      <Switch>
        <Route path="/newstory/trend">
          <TrendStory bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/newstory/follow">
          <FollowStory bgMau={bgMau} setBgMau={setBgMau} />
        </Route>
        <Route path="/newstory">
          <HomeStorys setDataStory={setDataStory} setSnackBarr={setSnackBar} PATH={PATH} TOKEN={TOKEN}  loadingStory={loadingStory} page={page}  dataAcc={dataAcc} listFriend={listFriend} bgMau={bgMau} setBgMau={setBgMau} keyAPI={keyAPI} dataStory={dataStory} setPage={setPage}/>
        </Route>
        <Route path="/">
          <HomeStorys setDataStory={setDataStory} setSnackBar={setSnackBar} PATH={PATH} TOKEN={TOKEN}  loadingStory={loadingStory} page={page}  dataAcc={dataAcc} listFriend={listFriend}  bgMau={bgMau} setBgMau={setBgMau} keyAPI={keyAPI} dataStory={dataStory} setPage={setPage}/>
        </Route>
      </Switch>
    </div>
  );
}

export default NewStory;
