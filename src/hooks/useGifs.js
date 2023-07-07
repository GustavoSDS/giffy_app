import { useEffect } from "react";
import { useState } from "react";
import getGifs from "../services/getGifs";
import GifContext from "../context/GifContext";
import { useContext } from "react";


function useGifs({ keyword, type = 'gifs', rating } = { keyword: null }) {
  const INITIAL_PAGE = 0;

  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(INITIAL_PAGE);

  let keywordToUse;

  if (keyword === undefined) {
    keywordToUse = localStorage.getItem('lastKeyword');
    if (keywordToUse === undefined) {
      keywordToUse = 'trending';
    }
  } else {
    keywordToUse = keyword;
  }

  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse, limit: 16, type, rating })
      .then((gifs) => {
        setGifs(gifs)
        setLoading(false);

        localStorage.setItem('lastKeyword', keywordToUse);
        localStorage.setItem('lasttype', type);
      });

  }, [keyword, type, rating, setGifs, keywordToUse]);

  useEffect(() => {
    if (page === INITIAL_PAGE) return;

    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUse, limit: 12, type: type, page, rating })
      .then((nextGifs) => {
        setGifs((prevGifs) => [...prevGifs, ...nextGifs]);
        setLoadingNextPage(false);
      });

  }, [page, keyword, type, rating, setGifs, keywordToUse]);

  return { loading, loadingNextPage, gifs, setPage };
}
export default useGifs;