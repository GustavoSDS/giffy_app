import { API_KEY, API_URL } from "./settings";

export default async function getGifs({ type, limit = 10, keyword, page = 0, rating } = {}) {  

  const url = `${API_URL}/${type}/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`;
  
  return fetchGifs(url);
}

export async function fetchGifs(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw new Error("Results not found");

    const { data } = await response.json();
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.original.mp4,
    }));

    return gifs;

  } catch (error) {
    console.log(error);
  }
}