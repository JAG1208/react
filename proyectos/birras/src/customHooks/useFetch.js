// customHook es una funcion personalizada que involucra uno o mas hooks
// custom hook es meramente funcional
import {useEffect,useState} from "react";
const BASE_URL="https://api.punkapi.com/v2";
export const useFetch = (endpoint, initialState = []) => {
  const [data, setData] = useState(initialState);
  const [fetching, setFetching] = useState(true);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      const result = await fetch(`${BASE_URL}/${endpoint}`);
      const data = await result.json();
      setData(data);
      setFetching(false);
    } catch (e) {
      setData(initialState);
      setFetching(false);
      setError(true);
    }
  };
  useEffect(() => {
    fetchData();
  }, [endpoint]);

  return [data, fetching, error];
};
