import { useEffect } from "react";
import { useState } from "react";
import getGifs from "../services/getGifs";
import GifContext from "../context/GifContext";
import { useContext } from "react";


function useGifs({ keyword, search = "gifs" } = { keyword: null }) {
  const INITIAL_PAGE = 0;

  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || "trending";
  const searchToUse = search || localStorage.getItem('lastSearch') || "gifs";

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, limit: 16, type: searchToUse })
      .then((gifs) => {
        setGifs(gifs)
        setLoading(false);

        localStorage.setItem('lastKeyword', keywordToUse);
        localStorage.setItem('lastSearch', search);
      });
      
  }, [keywordToUse, setGifs, searchToUse]);

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
export default useGifs;