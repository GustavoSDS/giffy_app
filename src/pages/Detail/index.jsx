import React from "react";
import useSingleGif from "../../hooks/useSingleGif"
import GifDeatil from "../../components/Gif/GifDeatil";
import ThreeDots from "../../components/Loaders/ThreeDots";
import { Redirect } from "wouter";
import { Helmet } from "react-helmet";

import "./Detail.css"

const Index = ({ params }) => {
  const { id } = params;
  const { gif, isLoading, isError } = useSingleGif({ id })

  const title = gif ? `${gif.title}` : ''
  // useTitle({description: `Description of ${title}`, title})

  if (isLoading) return (
    <>
      <Helmet>
        <title>Cargando...</title>
        <meta name="description" content={`Description of ${title}`} />
        <link rel="canonical" href="https://gifay-gsds.vercel.app/details/" />
      </Helmet>
      <ThreeDots />
    </>
  )
  if (isError) return <Redirect to="/404" />
  if (!gif) return null;

  return (
    <div className="App-content--detail">
      <Helmet>
        <title>{title} | GIFAY</title>
        <meta name="description" content={`Description of ${title}`} />
      </Helmet>

      <GifDeatil {...gif} />
    </div>
  )
}

export default Index