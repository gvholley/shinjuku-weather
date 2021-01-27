import {useEffect, useState } from 'react';

const useFetch = url => {
  const [data, setData] = useState(initialState: null);
  const [error, setError] = useState(initialState: null);
  const [inProgress, setInProgress] = useState(initialState: false);
}

useEffect(effect: () => {
  setInProgress(true);
  fetch(url)
    .then(onfulfilled: r => r.json())
    .then(onfulfilled: data => {
      setInProgress(false);
      setData(data);
    })
    .catch(onrejected: error => {
      setInProgress(false);
      setError(error);
    })
}, inputs: [])

return( { data, error, inProgress };

);

export default useFetch;
