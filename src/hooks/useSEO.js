import { useEffect, useRef } from "react";

export default function useTitle({ title, description }) {
  const prevTitle = useRef(document.title)
  const prevDescription = useRef(document.querySelector('meta[name="description"]').getAttribute('content'));

  useEffect(() => {
    const previusTitle = prevTitle.current;

    document.title = `${title} | Giffy`;
    return () => {
      document.title = previusTitle;
      prevTitle.current = previusTitle;
    }
  }, [title])

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]');
    const previusDescription = prevDescription.current;
    
    if (description) {
      metaDescription.setAttribute('content', description);
      prevDescription.current = description;
    }

    return () => { metaDescription.setAttribute('content', previusDescription); }

  }, [description])

}