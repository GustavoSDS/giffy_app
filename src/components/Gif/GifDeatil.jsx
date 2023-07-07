import React from 'react'
import { Link } from 'wouter'

import "./Gif.css";

const GifDeatil = ({gif, type="gifs", rating="g" }) => {
  const { title, id, mp4, url } = gif;
  return (
    <div className="gif-detail">
      {
        title?.length > 0
          ? <h3 className="title-detail">{title}</h3>
          : null
      }

      <Link to={`/${type}/${title?.split(" ")}/${rating}`} key={id}>
        <div className="video-container">
          <video
            width={300}
            height={300}
            autoPlay
            loop
            muted
            className='video-detail'
          >
            <source
              src={mp4 || url}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </Link>
    </div>
  )
}

export default React.memo(GifDeatil)
