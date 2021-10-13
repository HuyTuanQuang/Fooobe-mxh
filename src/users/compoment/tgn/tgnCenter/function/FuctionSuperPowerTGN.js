import React from 'react';
import FuctionJobTGNSub from "./FuctionJobTGNSub";
import "./fuctionjobtgn.css";

function FuctionSuperPowerTGN({
    job,
    keyAPI,
    TOKEN,
    PATH,
    bgMau,
    setUpdateJob,
    accTGN,
    setUpdateAcc
  }) {
    return (
        <div style={{ paddingTop: "20px" }}>
      {job !== null && (
        <div>
          {job.map((val) => {
            return (
              <div>
                {val.type_job === "supe" && (
                  <FuctionJobTGNSub
                    val={val}
                    keyAPI={keyAPI}
                    PATH={PATH}
                    TOKEN={TOKEN}
                    bgMau={bgMau}
                    setUpdateJob={setUpdateJob}
                    accTGN={accTGN}
                    setUpdateAcc={setUpdateAcc}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
    );
}

export default FuctionSuperPowerTGN;