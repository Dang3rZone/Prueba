import { useEffect, useState } from 'react';
import './App.css';
import { getRandomFact } from './services/facts';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App () {
  const [fact, setFact] = useState();
  const [imageUrl, setImageUrl] = useState();

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

  // get the cat image url
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

  const handleClick = async () => {
    const newFact = await getRandomFact();
    setFact(newFact);
  };
  return (
    <main>
      <h1>App de mascotas</h1>
      <section>
        <button onClick={handleClick}>Get new fact</button>
        {fact && <p>Fact: {fact}</p>}
        {imageUrl && (
          <img
            src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
            alt='image of a cat'
          />
        )}
      </section>
    </main>
  );
}
