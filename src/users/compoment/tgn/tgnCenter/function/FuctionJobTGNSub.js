import React, { useEffect, useState } from "react";
import { IoMdAddCircleOutline, IoMdAddCircle } from "react-icons/io";
import Axios from "axios";
import { Redirect } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";
import Tooltip from "@material-ui/core/Tooltip";
import FuctionJobTGNOpenSkill from "./FuctionJobTGNOpenSkill";

function FuctionJobTGNSub({
  val,
  keyAPI,
  TOKEN,
  PATH,
  bgMau,
  setUpdateJob,
  accTGN,
  setUpdateAcc,
}) {
  const [hiden, setHiden] = useState(false);
  const [open, setOpen] = useState(false);
  const [listSkill, setListSkill] = useState(null);
  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined" && open === true) {
      Axios.post(keyAPI.apiTGNSkill, {
        id: PATH,
        token: TOKEN,
        idz: val.tgn_job_stt,
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              setListSkill(data.tgn);
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
  }, [open]);
  const eventOpenSkill = () => {
    setHiden(!hiden);
    setOpen(true);
  };
  const eventAddSkillLove = () => {
    if (val !== null) {
      Axios.post(keyAPI.apiTGNEventJob, {
        id: PATH,
        token: TOKEN,
        idz: val.tgn_job_stt,
        ev: "add",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul === "add") {
                setUpdateJob(
                  val.tgn_job_stt + Math.floor(Math.random() * 100000)
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
  const eventRemoveSkillLove = () => {
    if (val !== null) {
      Axios.post(keyAPI.apiTGNEventJob, {
        id: PATH,
        token: TOKEN,
        idz: val.tgn_job_stt,
        ev: "remove",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              if (data.resul === "remove") {
                setUpdateJob(
                  val.tgn_job_stt + Math.floor(Math.random() * 100000)
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
    <div
      className="fuction-job-tgn"
      style={bgMau === "white" ? { color: "black" } : { color: "white" }}
    >
      <div className="fuction-job-tgn-button" onClick={eventOpenSkill}>
        <div className="fuction-job-tgn-button-name">{val.name}</div>
        <div className="fuction-job-tgn-button-event">
          {val.MODELOVE === "0" ? (
            val.JOBLOVE === "0" ? (
              <Tooltip title="Thêm vào yêu thích" aria-label="add">
                <IoMdAddCircleOutline onClick={eventAddSkillLove} />
              </Tooltip>
            ) : (
              <IoMdAddCircle onClick={eventRemoveSkillLove} />
            )
          ) : (
            <IoMdAddCircle />
          )}
        </div>
      </div>
      {hiden && (
        <div>
          {listSkill === null ? (
            <div>
              <Skeleton
                animation="wave"
                style={{ width: "100%", height: "120px" }}
              />
              <Skeleton
                animation="wave"
                style={{ width: "100%", height: "120px" }}
              />
              <Skeleton
                animation="wave"
                style={{ width: "100%", height: "120px" }}
              />
            </div>
          ) : (
            <div>
              {listSkill.map((value) => {
                return (
                  <div className="fuction-job-tgn-skill">
                    <div className="fuction-job-tgn-skill-name">
                      {value.name}
                    </div>
                    <div className="fuction-job-tgn-skill-action">
                      <div className="fuction-job-tgn-skill-action-name">
                        Tác dụng :
                      </div>
                      <div className="fuction-job-tgn-skill-action-content">
                        {value.content}
                      </div>
                    </div>
                    <div>Tốn {" " + value.consuming} khi sử dụng</div>
                    <div className="fuction-job-tgn-skill-action">
                      <div className="fuction-job-tgn-skill-action-title">
                        Tầm đánh :
                      </div>
                      <div> {" " + value.attack_anger} feet</div>
                    </div>
                    <div className="fuction-job-tgn-skill-action">
                      <div className="fuction-job-tgn-skill-action-title">
                        Khả năng quan sát :
                      </div>
                      <div> {" " + value.visibility} %</div>
                    </div>
                    <div className="fuction-job-tgn-skill-action">
                      <div className="fuction-job-tgn-skill-action-title">
                        Tốc độ phản ứng :
                      </div>
                      <div> {" " + value.reaction_rate} m/s</div>
                    </div>
                    <div className="fuction-job-tgn-skill-action">
                      <div className="fuction-job-tgn-skill-action-title">
                        Thời gian hồi chiêu :
                      </div>
                      <div> {" " + value.cooldown_time} m/s</div>
                    </div>
                    <div className="fuction-job-tgn-skill-action">
                      <div className="fuction-job-tgn-skill-action-title">
                        Đạo cụ bắt buộc :
                      </div>
                      <div>
                        {" "}
                        {val.equipment_required === null
                          ? "Không yêu cầu"
                          : val.equipment_required}
                      </div>
                    </div>
                    <div className="fuction-job-tgn-skill-action">
                      <FuctionJobTGNOpenSkill
                        value={value}
                        accTGN={accTGN}
                        TOKEN={TOKEN}
                        PATH={PATH}
                        keyAPI={keyAPI}
                        setUpdateAcc={setUpdateAcc}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FuctionJobTGNSub;
