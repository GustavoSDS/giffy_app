import React from "react";
import { Gif } from "../Gif";
import useGifs from "../../hooks/useGifs";
import { Error } from "../../components/Messages/Error";
import ThreeDots from "../../components/Loaders/ThreeDots";

import "./ListOfGifs.css";

export const ListOfGifs = ({...props}) => {

  const { keyword, search } = props.params;
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

        <div className="App-content ListOfGifs-content">
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

