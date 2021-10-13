import React, { useState } from "react";
import Skeleton from "@material-ui/lab/Skeleton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { GiShatteredSword, GiEarthAsiaOceania } from "react-icons/gi";
import { RiArrowUpSLine, RiArrowDownSLine, RiGameFill } from "react-icons/ri";
import {
  GrGoogleWallet,
  GrDebian,
  GrRaspberry,
  GrEmoji,
} from "react-icons/gr";
import { AiOutlineHeart, AiFillHome } from "react-icons/ai";
import { FaMapMarkerAlt, FaGlobeAsia, FaJoomla } from "react-icons/fa";
import { MdCreate } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { CgEventbrite } from "react-icons/cg";
import { SiMattermost } from "react-icons/si";
import {
  GoInfo,
  GoQuestion,
  GoVerified,
  GoOctoface,
  GoOrganization,
  GoShield,
} from "react-icons/go";

function TGNMenuUser({ trans, bgMau, keyAPI, dataAcc, accTGN }) {
  const [hidenSkill, setHidenSkill] = useState(false);
  const [hidenAcc, setHidenAcc] = useState(false);
  const [hidenAction, setHidenAction] = useState(true);

  const time_singn = new Date(accTGN.time_singn);
  const time_today = new Date();

  return (
    <div
      style={
        bgMau === "white"
          ? { width: "100%", borderTop: "1px solid white" }
          : { width: "100%", borderTop: "1px solid #242526" }
      }
    >
      <Link to={"/tgn/profile/" + accTGN.id} className="tgn-menu-left-user-1">
        <div className="tgn-menu-left-user-1-avatar">
          <LazyLoadImage
            className="tgn-menu-left-user-1-avatar-css"
            src={`/foanime/${dataAcc.avatar}`}
            placeholder={
              <Skeleton
                animation="wave"
                variant="rect"
                className="tgn-menu-left-user-1-avatar-css"
              />
            }
          />
        </div>
        <div className="tgn-menu-left-user-1-title">
          <div
            className="tgn-menu-left-user-1-title-name"
            style={
              bgMau === "white"
                ? {
                    color: "black",
                  }
                : {
                    color: "white",
                  }
            }
          >
            {dataAcc.fristname + " " + dataAcc.lastname}
          </div>
          <div
            className="tgn-menu-left-user-1-title-star"
            style={
              bgMau === "white"
                ? {
                    color: "#808181",
                  }
                : {
                    color: "#808181",
                  }
            }
          >
            {accTGN.GLORY !== null
              ? accTGN.GLORY
              : Number(time_today.getTime()) - Number(time_singn.getTime()) >
                604800000
              ? "Member"
              : "Newbie"}
          </div>
        </div>
      </Link>
      <div
        style={
          bgMau === "white"
            ? {
                width: "95%",
                marginLeft: "3%",
                height: "0.1px",
                backgroundColor: "rgb(230, 230, 230)",
                zIndex: "1",
              }
            : {
                width: "95%",
                marginLeft: "3%",
                height: "0.1px",
                backgroundColor: "#4e4e4e",
                zIndex: "1",
              }
        }
      ></div>
      <Link to="/tgn" className="tgn-menu-left-user-2">
        <div
          className="tgn-menu-left-user-2-icons"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          <AiFillHome />
        </div>
        <div
          className="tgn-menu-left-user-2-title"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          Trang chủ
        </div>
        <div className="tgn-menu-left-user-2-noti"></div>
      </Link>

      <div
        style={
          bgMau === "white"
            ? {
                width: "95%",
                marginLeft: "3%",
                height: "0.1px",
                backgroundColor: "rgb(230, 230, 230)",
                zIndex: "1",
              }
            : {
                width: "95%",
                marginLeft: "3%",
                height: "0.1px",
                backgroundColor: "#4e4e4e",
                zIndex: "1",
              }
        }
      ></div>
      <Link to="/tgn/area" className="tgn-menu-left-user-2">
        <div
          className="tgn-menu-left-user-2-icons"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          <GiEarthAsiaOceania />
        </div>
        <div
          className="tgn-menu-left-user-2-title"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          Khu vực
        </div>
        <div className="tgn-menu-left-user-2-noti"></div>
      </Link>
      <Link to="/tgn/fostory" className="tgn-menu-left-user-2">
        <div
          className="tgn-menu-left-user-2-icons"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          <MdCreate />
        </div>
        <div
          className="tgn-menu-left-user-2-title"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          Truyện tranh, truyện chữ
        </div>
        <div className="tgn-menu-left-user-2-noti"></div>
      </Link>
      <div
        className="tgn-menu-left-user-3"
        onClick={() => {
          setHidenSkill(!hidenSkill);
        }}
      >
        <div
          className="tgn-menu-left-user-3-title"
          style={
            bgMau === "white"
              ? {
                  color: "#8c8c8c",
                }
              : {
                  color: "#8c8c8c",
                }
          }
        >
          Sức mạnh siêu nhiên
        </div>
        <div
          className="tgn-menu-left-user-3-noti"
          style={
            bgMau === "white"
              ? {
                  color: "#666767",
                }
              : {
                  color: "#666767",
                }
          }
        >
          {hidenSkill === false ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </div>
      </div>
      {hidenSkill && (
        <Link to="/tgn/skilllove" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <AiOutlineHeart />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Yêu thích
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenSkill && (
        <Link to="/tgn/skilljob" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <GrEmoji />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Nghề nghiệp thường
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenSkill && (
        <Link to="/tgn/skillpro" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <GrDebian />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Nghề người chơi chuyên nghiệp
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenSkill && (
        <Link to="/tgn/superpower" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            
            <GrRaspberry />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Siêu năng
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}

      {/*  */}
      <div
        className="tgn-menu-left-user-3"
        onClick={() => {
          setHidenAction(!hidenAction);
        }}
      >
        <div
          className="tgn-menu-left-user-3-title"
          style={
            bgMau === "white"
              ? {
                  color: "#8c8c8c",
                }
              : {
                  color: "#8c8c8c",
                }
          }
        >
          Hoạt động {"&"} hỗ trợ
        </div>
        <div
          className="tgn-menu-left-user-3-noti"
          style={
            bgMau === "white"
              ? {
                  color: "#666767",
                }
              : {
                  color: "#666767",
                }
          }
        >
          {hidenAction === false ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </div>
      </div>
      {hidenAction && (
        <Link to="/tgn/buypgd" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <FaGlobeAsia />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Mua PGD
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenAction && (
        <Link to="/tgn/pvp" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <FaJoomla />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            PvP
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenAction && (
        <Link to="/tgn/dugeon" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <SiMattermost />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Phó bản
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenAction && (
        <Link to="/tgn/train" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <GiShatteredSword />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Tập luyện
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenAction && (
        <Link to="/tgn/orgazine" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <GrGoogleWallet />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Tổ chức
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}

      {hidenAction && (
        <Link to="/tgn/market" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <FaMapMarkerAlt />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Chợ
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenAction && (
        <Link to="/tgn/random" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <RiGameFill />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Thử vận may
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenAction && (
        <Link to="/" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <GoQuestion />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Hướng dẫn sử dụng
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {/*  */}
      <div
        className="tgn-menu-left-user-3"
        onClick={() => {
          setHidenAcc(!hidenAcc);
        }}
      >
        <div
          className="tgn-menu-left-user-3-title"
          style={
            bgMau === "white"
              ? {
                  color: "#8c8c8c",
                }
              : {
                  color: "#8c8c8c",
                }
          }
        >
          Nâng cấp tài khoản
        </div>
        <div
          className="tgn-menu-left-user-3-noti"
          style={
            bgMau === "white"
              ? {
                  color: "#666767",
                }
              : {
                  color: "#666767",
                }
          }
        >
          {hidenAcc === false ? <RiArrowDownSLine /> : <RiArrowUpSLine />}
        </div>
      </div>
      {hidenAcc && (
        <Link to="/" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <GoVerified />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Người chơi chuyên nghiệp
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenAcc && (
        <Link to="/" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <GoOctoface />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Đăng ký siêu năng
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenAcc && (
        <Link to="/" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <GoOrganization />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Câu lạc bộ
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      {hidenAcc && (
        <Link to="/" className="tgn-menu-left-user-2">
          <div
            className="tgn-menu-left-user-2-icons"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            <GoShield />
          </div>
          <div
            className="tgn-menu-left-user-2-title"
            style={
              bgMau === "white"
                ? {
                    color: "#545555",
                  }
                : {
                    color: "white",
                  }
            }
          >
            Bảo mật tài khoản
          </div>
          <div className="tgn-menu-left-user-2-noti"></div>
        </Link>
      )}
      <Link to="/" className="tgn-menu-left-user-2">
        <div
          className="tgn-menu-left-user-2-icons"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          <CgEventbrite />
        </div>
        <div
          className="tgn-menu-left-user-2-title"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          Event
        </div>
        <div className="tgn-menu-left-user-2-noti"></div>
      </Link>
      <Link to="/" className="tgn-menu-left-user-2">
        <div
          className="tgn-menu-left-user-2-icons"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          <BiError />
        </div>
        <div
          className="tgn-menu-left-user-2-title"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          Báo lỗi
        </div>
        <div className="tgn-menu-left-user-2-noti"></div>
      </Link>
      <Link to="/" className="tgn-menu-left-user-2">
        <div
          className="tgn-menu-left-user-2-icons"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          <GoInfo />
        </div>
        <div
          className="tgn-menu-left-user-2-title"
          style={
            bgMau === "white"
              ? {
                  color: "#545555",
                }
              : {
                  color: "white",
                }
          }
        >
          Điều khoản sử dụng
        </div>
        <div className="tgn-menu-left-user-2-noti"></div>
      </Link>
    </div>
  );
}

export default TGNMenuUser;
