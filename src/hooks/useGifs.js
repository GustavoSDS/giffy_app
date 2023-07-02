import { useEffect } from "react";
import { useState } from "react";
import getGifs from "../services/getGifs";
import GifContext from "../context/GifContext";
import { useContext } from "react";


export default function useGifs({ keyword, search = "gifs" }) {
  const INITIAL_PAGE = 0;
  
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || "random";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, limit: 12, type: search }).then((gifs) => {
      setTimeout(() => {
        setGifs(gifs)
        setLoading(false);

        localStorage.setItem('lastKeyword', keywordToUse);
        localStorage.setItem('lastSearch', search);
      }, 350)
    });
  }, [keywordToUse, setGifs, search]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, limit: 12, type: search, page })
      .then((nextGifs) => {
        setGifs(prevGifs => prevGifs.concat(nextGifs));
        setLoadingNextPage(false);
      });

  }, [page, keywordToUse, setGifs, search]);

  return { loading, loadingNextPage, gifs, setPage };
}