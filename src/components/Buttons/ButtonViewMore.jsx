import React from 'react'
import useGifs from '../../hooks/useGifs';

const ButtonViewMore = ({ keyword, search }) => {
  const { gifs, setPage } = useGifs({ keyword, search });

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  }

  if (gifs.length > 0) {
    return (
      <button
        style={ { width: '150px' } }
        className="ListOfGifs-button"
        onClick={handleNextPage}>
        View more
      </button>
    )
  } else if (gifs.length === 0) {
    localStorage.setItem('lastKeyword', 'trending');
  }
}

export default React.memo(ButtonViewMore);
