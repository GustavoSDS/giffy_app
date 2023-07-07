import React from "react";
import Gif from "../Gif";
import useGifs from "../../hooks/useGifs";
import { Error } from "../Messages/Error";
import ThreeDots from "../Loaders/ThreeDots";

import "./ListOfGifs.css";

const ListOfGifs = ({ params }) => {
  const { keyword, type, rating } = params;
  const { gifs, loading } = useGifs({ keyword, type, rating });

  if (loading) {
    return <ThreeDots />;
  } else if (!gifs) {
    return <Error />;
  }
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
            rating={rating}
            type={type}
          />
        ))}
      </div>

    </React.Fragment>
  );

}

export default React.memo(ListOfGifs);