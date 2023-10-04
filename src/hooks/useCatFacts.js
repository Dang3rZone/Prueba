import { useEffect, useState } from 'react';
import { getRandomFact } from '../services/facts';

export function useCatFacts () {
  const [fact, setFact] = useState();
  const refreshRandomFact = () =>
    getRandomFact().then((newFact) => setFact(newFact));

  useEffect(refreshRandomFact, []);

  return { fact, refreshRandomFact };
}