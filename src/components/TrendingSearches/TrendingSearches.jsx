import React, { useEffect, useState } from "react";
import getTrendingTerms from "../../services/getTrendingTerms";
import Category from "../Category/Category";

const TrendingSearches = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);

  return <Category options={trends} name={'tendencias'} />
}
export default React.memo(TrendingSearches);