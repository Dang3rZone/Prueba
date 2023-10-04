import { useEffect, useState } from 'react';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';
// const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&jason=true`;
export function App () {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();
  // can't use axios/react query, not allowed
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then((response) => response.json())
      .then((data) => {
        const { fact } = data;
        setFact(fact);

        const firstThreeWords = fact.split(' ', 3).join(' ');
        console.log(firstThreeWords);

        fetch(
          `https://cataas.com/cat/says/${firstThreeWords}?size=50&color=red&json=true`
        )
          .then((res) => res.json())
          .then((response) => {
            const { url } = response;
            setImageUrl(url);
          });
      });
  }, []);
  return (
    <main>
      <h1>App de mascotas</h1>
      {fact && <p>Fact: {fact}</p>}
      {imageUrl && (
        <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='image of a cat' />
      )}
    </main>
  );
}
