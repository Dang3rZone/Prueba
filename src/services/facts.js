const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';

// can't use axios/react query, not allowed
// get the cat fact
export const getRandomFact = async () => {
  const response = await fetch(CAT_ENDPOINT_RANDOM_FACT);
  const data = await response.json();
  const { fact } = data;
  return fact;
};
