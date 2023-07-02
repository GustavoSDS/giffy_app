import { useContext } from 'react'
import GifsContext from '../context/GifContext'

export const useGlobalGifs = () => {
  const { gifs } = useContext(GifsContext)

  return gifs;
}
