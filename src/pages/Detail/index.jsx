import React from "react";
import useSingleGif from "../../hooks/useSingleGif"
import GifDeatil from "../../components/Gif/GifDeatil";
import ThreeDots from "../../components/Loaders/ThreeDots";
import { Redirect } from "wouter";
import useTitle from "../../hooks/useSEO";

import "./Detail.css"

const Index = ({ params }) => {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif({ id })

  const title = gif ? `${gif.title}` : ''
  useTitle({description: `Description of ${title}`, title})

  if (isLoading) return <ThreeDots />
  if (isError) return <Redirect to="/404"/>
  if (!gif) return null;

  return (
    <div className="App-content--detail">
      <GifDeatil
        {...gif}
      />
    </div>
  )
}

export default Index