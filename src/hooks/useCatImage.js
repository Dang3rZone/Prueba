import { useEffect, useState } from 'react';

// get the cat image url
export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    if (!fact) return;

    const firstThreeWords = fact.split(' ', 3).join(' ');

    fetch(
      `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
    )
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImageUrl(url);
      });
  }, [fact]);
  return { imageUrl };
}
