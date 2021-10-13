import React, { useState } from "react";
import "./images.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "@material-ui/lab/Skeleton";
import FullScreenImages from "../function/FullScreenImages";

function Images({ images }) {
  const [openImages, setOpenImages] = useState(false);
  const [preLoading, setPreLoading] = useState(true);
  const [displey, setDisplay] = useState(false);
  const [idx, setIdx] = useState(0);
  const onPreview = () => {
    setPreLoading(false);
    setTimeout(() => {
      setDisplay(true);
    }, 1000);
  };
  const openImage = (value) => {
    setIdx(value);
    setOpenImages(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div>
      {openImages && (
        <FullScreenImages
          idx={idx}
          images={images}
          openImages={openImages}
          setOpenImages={setOpenImages}
        />
      )}
      {
        //Có thể dùng placeholder như bên dưới, nhưng dùng cách này có vẻ sẽ hay hơn
        images !== undefined && images.length >= 0? (
          preLoading && (
            <Skeleton
              animation="wave"
              variant="rect"
              width="100%"
              height={250}
            />
          )
        ) : (
          <div> </div>
        )
      }
      {images !== undefined && images.length > 2? (
        images.map((value, index) => {
          if (index === 0) {
            return (
              <LazyLoadImage
                className="images-hover-opacity"
                src={process.env.PUBLIC_URL + `../files/${value}`}
                beforeLoad={onPreview}
                threshold="100"
                onClick={() => openImage(0)}
                title={"Hình ảnh được đăng tải trên Fooobe"}
                alt={"Fooobe Image"}
                // placeholder={<Skeleton animation="wave" variant="rect" width="100%" height="200px" /> }
              />
            );
          }
          if (index === 1) {
            return (
              <LazyLoadImage
                className="images-hover-opacity-left"
                src={process.env.PUBLIC_URL + `../files/${value}`}
                beforeLoad={onPreview}
                threshold="100"
                onClick={() => openImage(1)}
                title={"Hình ảnh được đăng tải trên Fooobe"}
                alt={"Fooobe Image"}
                // placeholder={<Skeleton animation="wave" variant="rect" width="100%" height="200px" /> }
              />
            );
          }
          if (index === 2) {
            if (images.length === 3) {
              return (
                <div className="images-hover-opacity-right">
                  <LazyLoadImage
                    className="lazy-img-right"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    src={process.env.PUBLIC_URL + `../files/${value}`}
                    beforeLoad={onPreview}
                    threshold="100"
                    onClick={() => openImage(2)}
                    title={"Hình ảnh được đăng tải trên Fooobe"}
                    alt={"Fooobe Image"}
                    // placeholder={<Skeleton animation="wave" variant="rect" width="100%" height="200px" /> }
                  />
                </div>
              );
            } else {
              return (
                <div
                  className="images-hover-opacity-right"
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <LazyLoadImage
                    className="lazy-img-right"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      opacity: "0.4",
                    }}
                    src={process.env.PUBLIC_URL + `../files/${value}`}
                    beforeLoad={onPreview}
                    threshold="100"
                    onClick={() => openImage(2)}
                    title={"Hình ảnh được đăng tải trên Fooobe"}
                    alt={"Fooobe Image"}
                    // placeholder={<Skeleton animation="wave" variant="rect" width="100%" height="200px" /> }
                  />

                  {images.length - 3 === 0 ? (
                    <div class="homestory-image-text"></div>
                  ) : (
                    <div
                      class="homestory-image-text"
                      style={
                        displey === true
                          ? { display: "block" }
                          : { display: "none" }
                      }
                    >
                      +{images.length - 3}
                    </div>
                  )}
                </div>
              );
            }
          }
        })
      ) : images !== undefined &&  images.length === 1 ? (
        images.map((value, index) => {
          return (
            <LazyLoadImage
              alt={"Hello"}
              className="preload-images"
              src={process.env.PUBLIC_URL + `../files/${value}`}
              beforeLoad={onPreview}
              threshold="100"
              onClick={() => openImage(0)}
              title={"Hình ảnh được đăng tải trên Fooobe"}
              alt={"Fooobe Image"}
              // placeholder={<Skeleton animation="wave" variant="rect" width="100%" height="200px" /> }
            />

            // <img
            //   src={}
            //   style={{ width: "100%", height: "100%" }}
            // />
          );
        })
      ) : images !== undefined && images.length === 2 ? (
        images.map((value, index) => {
          return (
            <LazyLoadImage
              className="preload-images-high"
              src={process.env.PUBLIC_URL + `../files/${value}`}
              beforeLoad={onPreview}
              threshold="100"
              onClick={() => openImage(index)}
              title={"Hình ảnh được đăng tải trên Fooobe"}
              alt={"Fooobe Image"}
              // placeholder={<Skeleton animation="wave" variant="rect" width="100%" height="200px" /> }
            />
          );
        })
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Images;
