import React from "react";
import FuctionJobTGNSub from "./FuctionJobTGNSub";
import "./fuctionjobtgn.css";

function FuctionSkillLoveTGN({
  job,
  keyAPI,
  TOKEN,
  PATH,
  bgMau,
  setUpdateJob,
  accTGN,
  setUpdateAcc,
}) {
  return (
    <div style={{ paddingTop: "20px" }}>
      {job !== null && (
        <div>
          <div
            style={{
              width: "96%",
              margin: "0 auto",
              fontWeight: "bold",
              fontSize: "25px",
              color: "rgb(196, 196, 196)",
              paddingTop: "5px",
              paddingBottom: "10px",
            }}
          >
            Nghề nghiệp
          </div>
          {job.map((val) => {
            return (
              <div>
                {(val.type_job === "pro" && val.JOBLOVE === "1") ||
                (val.type_job === "often" && val.JOBLOVE === "1") ||
                (val.type_job === "pro" && val.MODELOVE === "1") ||
                (val.type_job === "often" && val.MODELOVE === "1") ? (
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
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
          <div
            style={{
              width: "96%",
              margin: "0 auto",
              fontWeight: "bold",
              fontSize: "25px",
              color: "rgb(196, 196, 196)",
              paddingTop: "5px",
              paddingBottom: "10px",
            }}
          >
            Siêu năng
          </div>
          {job.map((val) => {
            return (
              <div>
                {(val.type_job === "supe" && val.JOBLOVE === "1") ||
                (val.type_job === "supe" && val.MODELOVE === "1") ? (
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
                ) : (
                  <div></div>
                )}
              </div>
            );
          })}
          <div
            style={{
              width: "96%",
              margin: "0 auto",
              fontWeight: "bold",
              fontSize: "25px",
              color: "rgb(196, 196, 196)",
              paddingTop: "5px",
              paddingBottom: "10px",
            }}
          >
            Kỹ năng tự do
          </div>
          {job.map((val) => {
            return (
              <div>
                {val.type_job === "free" && (
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

export default FuctionSkillLoveTGN;
