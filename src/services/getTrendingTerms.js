import { API_KEY, API_URL } from "./settings";

export default async function getTrendingTerms() {

  const url = `${API_URL}/trending/searches?api_key=${API_KEY}`;

  return fetch(url)
    .then(res => res.json())
    .then(({ data }) => { return data })
    .catch(err => console.log(err));
}

