import './App.css';
import { useCatFacts } from './hooks/useCatFacts';
import { useCatImage } from './hooks/useCatImage';

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
        {imageUrl && <img src={imageUrl} alt='image of a cat' />}
      </section>
    </main>
  );
}
