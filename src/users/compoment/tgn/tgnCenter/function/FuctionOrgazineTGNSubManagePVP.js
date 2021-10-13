import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Axios from "axios";
import FuctionOrgazineTGNSubManagePVPHistory from "./FuctionOrgazineTGNSubManagePVPHistory";
import FuctionOrgazineTGNSubManagePVPList from "./FuctionOrgazineTGNSubManagePVPList";

function FuctionOrgazineTGNSubManagePVP({
  val,
  mem,
  allMem,
  PATH,
  TOKEN,
  keyAPI,
  accTGN,
  setUpdateAcc,
  setHight,
}) {
  const values = {
    type: "solo",
    pa: "",
    pb: "",
    tour: "often",
    content: "",
  };
  const [fom, setFom] = useState(values);
  const [list, setList] = useState(null);
  const [open, setOpen] = useState(false);
  const [history, setHistory] = useState([]);
  const [open1, setOpen1] = useState(false);
  const [rand, setRand] = useState(1);
  const [valuev, setValue] = useState("");
  const [oldMem, setOldMem] = useState(null);
  const onChage = (event) => {
    const { name, value } = event.target;
    setFom({
      ...fom,
      [name]: value,
    });
    if ((name === "pa" && fom.pb !== "") || (name === "pb" && fom.pa !== "")) {
      setOpen(true);
    }
    if (name === "type") {
      setFom({
        ...fom,
        pa: "",
        pb: "",
        [name]: value,
      });
      document.getElementById("my_select_pvp_1").selectedIndex = 0;
      document.getElementById("my_select_pvp_2").selectedIndex = 0;
      setOpen(false);
    }
  };
  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined") {
      Axios.post(keyAPI.apiTGNEventOrgazine, {
        id: PATH,
        token: TOKEN,
        ev: "club",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              setList(data.resul);
            }
          } else {
            setList([]);
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
  }, [keyAPI]);
  useEffect(() => {
    if (PATH !== null && keyAPI !== "undefined" && open1 === true) {
      Axios.post(keyAPI.apiTGNEventOrgazine, {
        id: PATH,
        token: TOKEN,
        ev: "listhr",
      })
        .then(({ data }) => {
          if (typeof data !== undefined) {
            if (data.check === "xp") {
              return <Redirect to={"/logout"} />;
            } else {
              setHistory(data.resul);
            }
          } else {
            setHistory([]);
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
  }, [keyAPI, rand, open1]);
  const handCreatePVP = () => {
    setOpen(false);
    Axios.post(keyAPI.apiTGNEventOrgazine, {
      id: PATH,
      token: TOKEN,
      ev: "addpvp",
      tsv: fom.pa,
      tsy: fom.pb,
      tsc: fom.tour,
      ts: fom.content,
      tsx: fom.type,
    })
      .then(({ data }) => {
        if (typeof data !== undefined) {
          if (data.check === "xp") {
            return <Redirect to={"/logout"} />;
          } else {
            if (data.resul === "OK") {
              setOpen1(true);
              setRand(Math.floor(Math.random() * 100000));
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
  };
  const searchMems = (event) => {
    setValue(event.target.value);
  };
  function removeText(str) {
    return str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/đ/g, "d")
      .replace(/Đ/g, "D");
  }
  useEffect(() => {
    if (valuev.length > 0) {
      setOldMem(
        allMem.filter(
          (item) =>
            removeText(item.NAME.toLowerCase()).indexOf(
              removeText(valuev).toLowerCase()
            ) !== -1
        )
      );
    } else {
      setOldMem(null);
    }
  }, [valuev]);
  return (
    <div>
      <div className="fuction-orgazine-tgn-pvp">
        <div className="fuction-orgazine-tgn-pvp-title">
          TỔNG KẾT MỘT TRẬN PVP
        </div>
        <div className="fuction-orgazine-tgn-pvp-play">
          <div className="fuction-orgazine-tgn-pvp-play-input">
            <div>Loại trận đấu</div>{" "}
            <select name="type" onChange={onChage}>
              <option value="solo">Solo</option>
              <option value="team">Team</option>
            </select>
          </div>
          <div className="fuction-orgazine-tgn-pvp-play-input">
            <div>Giải đấu</div>{" "}
            <select name="tour" onChange={onChage}>
              <option value="often">Tự do</option>
              <option value="pro">Chuyên nghiệp</option>
            </select>
          </div>
          <div className="fuction-orgazine-tgn-pvp-play-input">
            <div>{fom.type === "solo" ? "Đối thủ " : "Đội tuyển "}</div>
            {fom.type === "solo" ? (
              <select name="pa" onChange={onChage} id="my_select_pvp_1">
                <option selected disabled>
                  Vui lòng chọn tuyển thủ
                </option>
                {allMem.map((valu) => {
                  return (
                    <option value={valu.id}>
                      {valu.NAME + " (" + valu.id + ")"}
                    </option>
                  );
                })}
              </select>
            ) : (
              <select name="pa" onChange={onChage} id="my_select_pvp_1">
                <option selected disabled>
                  Vui lòng chọn đội tuyển
                </option>
                {list !== null && list !== undefined ? (
                  list.map((valu) => {
                    return (
                      <option value={valu.tgn_club_stt}>{valu.name}</option>
                    );
                  })
                ) : (
                  <option>Không có đội tuyển nào</option>
                )}
              </select>
            )}
          </div>
          <div className="fuction-orgazine-tgn-pvp-play-input">
            <div>{fom.type === "solo" ? "Đối thủ " : "Đội tuyển "}</div>
            {fom.type === "solo" ? (
              <select name="pb" onChange={onChage} id="my_select_pvp_2">
                <option selected disabled>
                  Vui lòng chọn tuyển thủ
                </option>
                {allMem.map((valu) => {
                  return (
                    <option value={valu.id}>
                      {valu.NAME + " (" + valu.id + ")"}
                    </option>
                  );
                })}
              </select>
            ) : (
              <select name="pb" onChange={onChage} id="my_select_pvp_2">
                <option selected disabled>
                  Vui lòng chọn đội tuyển
                </option>
                {list !== null && list !== undefined ? (
                  list.map((valu) => {
                    return (
                      <option value={valu.tgn_club_stt}>{valu.name}</option>
                    );
                  })
                ) : (
                  <option>Không có đội tuyển nào</option>
                )}
              </select>
            )}
          </div>
          <div className="fuction-orgazine-tgn-pvp-play-input">
            <div>Nội dung</div>{" "}
            <textarea name="content" onChange={onChage} type="text" />
          </div>
          {open ? (
            <div
              className="fuction-orgazine-tgn-pvp-play-button"
              onClick={handCreatePVP}
            >
              Tạo trận đấu
            </div>
          ) : (
            <div
              className="fuction-orgazine-tgn-pvp-play-button"
              style={{ cursor: "no-drop" }}
            >
              Tạo trận đấu
            </div>
          )}
        </div>
        <div className="fuction-orgazine-tgn-pvp-list">
          <div
            onClick={() => setOpen1(!open1)}
            style={{
              cursor: "pointer",
              width: "100%",
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "20px",
              textDecoration: "underline",
            }}
          >
            {open1 ? "Ẩn " : "Hiển thị "}danh sách{open1 ? " các " : " 20 "}trận
            đấu
          </div>
          {open1 && history !== undefined && history !== null ? (
            history.map((vala) => {
              return (
                <FuctionOrgazineTGNSubManagePVPHistory
                  setRands={setRand}
                  vala={vala}
                  keyAPI={keyAPI}
                  TOKEN={TOKEN}
                  PATH={PATH}
                />
              );
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="fuction-orgazine-tgn-pvp">
        <div className="fuction-orgazine-tgn-pvp-title">TẠO THÔNG BÁO</div>
        <div className="fuction-orgazine-tgn-pvp-play"></div>
      </div>
      <div className="fuction-orgazine-tgn-pvp">
        <div className="fuction-orgazine-tgn-pvp-title">
          DANH SÁCH NGƯỜI DÙNG
        </div>
        <div className="fuction-orgazine-tgn-sub-profile-search">
          <input
            type="text"
            placeholder="Bạn muốn tìm ai?"
            id="fuction-orgazine-tgn-sub-profile-search-id"
            onChange={searchMems}
          />
        </div>
        <div className="fuction-orgazine-tgn-pvp-play" style={{minHeight:"500px"}}>
          {oldMem === null
            ? allMem.map((val, idx) => {
                return (
                  <div>
                    {idx < 20 && (
                      <FuctionOrgazineTGNSubManagePVPList
                        setHight={setHight}
                        PATH={PATH}
                        TOKEN={TOKEN}
                        keyAPI={keyAPI}
                        val={val}
                        mem={mem}
                      />
                    )}
                  </div>
                );
              })
            : oldMem.map((val, idx) => {
                return (
                  <div>
                    {idx < 20 && (
                      <FuctionOrgazineTGNSubManagePVPList
                        setHight={setHight}
                        PATH={PATH}
                        TOKEN={TOKEN}
                        keyAPI={keyAPI}
                        val={val}
                        mem={mem}
                      />
                    )}
                  </div>
                );
              })}
        </div>
      </div>
    </div>
    
  );
}

export default FuctionOrgazineTGNSubManagePVP;
