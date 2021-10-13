import React, { useEffect, useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import { makeStyles } from "@material-ui/core/styles";
import "./FullScreenImagesCSS.css";
import { MdClose } from "react-icons/md";
import { BiDownload} from "react-icons/bi";
import { RiFullscreenLine, RiFullscreenExitLine } from "react-icons/ri";
import { GrPrevious, GrNext } from "react-icons/gr";

function FullScreenImages({ images, openImages, setOpenImages, idx }) {
  const [index, setIndex] = useState(idx);
  const [fullScreen, setFullScreen] = useState(false);

  const useStyles = makeStyles((theme) => ({
    backdrop: {
      zIndex: "100000",
      background: "rgba(0, 0, 0, 0.6)",
      height: "100vh",
    },
  }));
  const classes = useStyles();
  var elem = document.documentElement;
  const handleToggleClose = (event) => {
    setOpenImages(false);
    document.body.style.overflow = "auto";
    setFullScreen(false);
  };
  const openFullScreen = () => {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
      setFullScreen(true);
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
      setFullScreen(true);
    } else if (elem.msRequestFullscreen) {
      /* IE11 */
      elem.msRequestFullscreen();
      setFullScreen(true);
    }
  };

  const exitFullScreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullScreen(false);
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
      setFullScreen(false);
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
      setFullScreen(false);
    }
  };
  const exitImages = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      setFullScreen(false);
    } else if (document.webkitExitFullscreen) {
      /* Safari */
      document.webkitExitFullscreen();
      setFullScreen(false);
    } else if (document.msExitFullscreen) {
      /* IE11 */
      document.msExitFullscreen();
      setFullScreen(false);
    }
    setOpenImages(false);
    document.body.style.overflow = "auto";
  };
  document.addEventListener("fullscreenchange", exitHandler);
  document.addEventListener("webkitfullscreenchange", exitHandler);
  document.addEventListener("mozfullscreenchange", exitHandler);
  document.addEventListener("MSFullscreenChange", exitHandler);
  function exitHandler() {
    if (
      !document.fullscreenElement &&
      !document.webkitIsFullScreen &&
      !document.mozFullScreen &&
      !document.msFullscreenElement
    ) {
      setFullScreen(false);
    }
  }
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      setOpenImages(false);
      document.body.style.overflow = "auto";
    }
  });
  const eventPrev = (event) => {
    if (images.length === 1) {
      event.preventDefault();
    } else {
      if (index === 0) {
        setIndex(images.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  };
  const eventNext = (event) => {
    if (images.length === 1) {
      event.preventDefault();
    } else {
      if (index === images.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };
  const deleteEvent = (e) => {
    e.preventDefault();
  };

  return (
    <div onContextMenu={deleteEvent}>
      <Backdrop className={classes.backdrop} open={openImages}>
        <div className="fullscreenImages">
          <div className="fullscreenImages-img">
            <img src={process.env.PUBLIC_URL + `../files/${images[index]}`} />
          </div>
          {fullScreen ? (
            <div className="fullscreenImages-close" onClick={exitImages}>
              <MdClose />
            </div>
          ) : (
            <div className="fullscreenImages-close" onClick={handleToggleClose}>
              <MdClose />
            </div>
          )}
          {fullScreen ? (
            <div
              className="fullscreenImages-fullscreen"
              onClick={exitFullScreen}
            >
              <RiFullscreenExitLine />
            </div>
          ) : (
            <div
              className="fullscreenImages-fullscreen"
              onClick={openFullScreen}
            >
              <RiFullscreenLine />
            </div>
          )}
          <a
            href={process.env.PUBLIC_URL + `../files/${images[index]}`}
            download
            className="fullscreenImages-dowload"
          >
            <BiDownload />
          </a>
          {fullScreen === false && images.length > 1 && (
            <div className="fullscreenImages-prev" onClick={eventPrev}>
              <GrPrevious />
            </div>
          )}
          {fullScreen === false && images.length > 1 &&(
            <div className="fullscreenImages-next" onClick={eventNext}>
              <GrNext />
            </div>
          )}
        </div>
      </Backdrop>
    </div>
  );
}

export default FullScreenImages;
