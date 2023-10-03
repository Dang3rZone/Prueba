import { useEffect, useState } from 'react';

export function App () {
  const [fact, setFact] = useState('lorem cat facts');
  // can't use axios, not allowed
  useEffect(() => {
    fetch('https://catfact.ninja/fact')
      .then((response) => response.json())
      .then((data) => setFact(data.fact));
  }, []);
  return (
    <main>
      <h1>App de mascotas</h1>)<p>{fact}</p>
    </main>
  );
}
