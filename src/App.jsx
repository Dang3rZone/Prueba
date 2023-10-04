import { useEffect, useState } from 'react';
import './App.css';
import { getRandomFact } from './services/facts';
import { useCatImage } from './hooks/useCatImage';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App() {
  const [fact, setFact] = useState();
  const { imageUrl } = useCatImage({ fact });

  useEffect(() => {
    getRandomFact().then((newFact) => setFact(newFact));
  }, []);

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
            alt="image of a cat"
          />
        )}
      </section>
    </main>
  );
}
