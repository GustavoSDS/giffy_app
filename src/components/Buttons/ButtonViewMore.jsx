import React from 'react'
import useGifs from '../../hooks/useGifs';

const ButtonViewMore = ({ keyword, search }) => {
  const { gifs, setPage } = useGifs({ keyword, search });

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  }

  if (gifs) {
    return (
      <button
        style={ { width: '150px' } }
        className="ListOfGifs-button"
        onClick={handleNextPage}>
        View more
      </button>
    )
  }
}

export default React.memo(ButtonViewMore);
