import React from 'react';
import "./tgnhome.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Skeleton from "@material-ui/lab/Skeleton";

function TGNPoster(props) {
    return (
        <div className="tgn-home-poster-css">
            <LazyLoadImage
              className="tgn-home-poster-css-img"
              src={`/files/poster.png`}
              placeholder={
                <Skeleton
                  animation="wave"
                  variant="rect"
                  className="tgn-home-poster-css-img"
                />
              }
            />
        </div>
    );
}

export default TGNPoster;