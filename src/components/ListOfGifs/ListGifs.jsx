import React from "react";
import Gif from "../Gif/Gif";
import useGifs from "../../hooks/useGifs";
import { Error } from "../Messages/Error";
import ThreeDots from "../Loaders/ThreeDots";

import "./ListOfGifs.css";

export const ListOfGifs = ({ params }) => {

  const { keyword, search } = params;
  const { gifs, loading } = useGifs({ keyword, search });

  if (loading) {
    return <ThreeDots />;
  } else if (gifs.length === 0) {
    return <Error />;
  } else {
    return (
      <React.Fragment>
        {
          keyword && <h2 className="ListOfGifs-title">{decodeURI(keyword.replace(/,/g, " ").toUpperCase())}</h2>
        }

        <div className="gifs">
          {gifs.map(({ id, url, title }) => (
            <Gif
              key={url}
              id={id}
              url={url}
              title={title}
            />
          ))}
        </div>

      </React.Fragment>
    );
  }
}

