import './App.css';
import { useCatFacts } from './hooks/useCatFacts';
import { useCatImage } from './hooks/useCatImage';

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com';

export function App () {
  const { fact, refreshRandomFact } = useCatFacts();
  const { imageUrl } = useCatImage({ fact });

  const handleClick = async () => {
    refreshRandomFact();
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
