import { API_KEY, API_URL } from "./settings";

export default function getSingleGif({ id }) {
  const url = `${API_URL}/gifs/${id}?api_key=${API_KEY}`;

  return fetch(url)
    .then(response => response.json())
    .then(fromApiResponseToGif)
}

const fromApiResponseToGif = (response) => {
  const { data } = response;
  const { id, title, images } = data;
  const { mp4 } = images.fixed_height;
  return { id, title, mp4 };
}