import React from "react";
import { Link } from "wouter";

import "./Gif.css";

const Gif = ({ id, title, url }) => {

  return (
    <div className="gif">
      <Link className="gif" to={`/gifs/${title?.split(" ")}`} key={id}>
        <video width={300} height={300} autoPlay loop muted>
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {title?.length > 0 ? <p>{title}</p> : null}
      </Link>
      <Link to={`/details/gif/${id}`} className="eye">
      <svg width="24px" height="24px" className="icon-open" viewBox="0 0 24 24" fill="#FF6000" xmlns="http://www.w3.org/2000/svg" color="#F60"><path d="M22 8.862a5.95 5.95 0 01-1.654 4.13c-2.441 2.531-4.809 5.17-7.34 7.608-.581.55-1.502.53-2.057-.045l-7.295-7.562c-2.205-2.286-2.205-5.976 0-8.261a5.58 5.58 0 018.08 0l.266.274.265-.274A5.612 5.612 0 0116.305 3c1.52 0 2.973.624 4.04 1.732A5.95 5.95 0 0122 8.862z" stroke="none"></path></svg>
      </Link>
    </div>
  );
}

export default Gif;