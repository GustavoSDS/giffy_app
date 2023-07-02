import React from "react";
import { Link } from "wouter";
import eye from "../../assets/eye.png";

import "./Gif.css";

export const Gif = ({ id, title, url }) => {
  return (
    <div className="gif">
      <Link className="gif" to={`/gifs/${title.split(" ")}`} key={id}>
        <img src={url} alt={title} />
        {title.length > 20 ? <h4>{title}</h4> : null}
      </Link>
      <Link to={`/details/gif/${id}`} className="eye">
        <img src={eye} alt="eye" className="image-eye" />
      </Link>
    </div>
  );
}