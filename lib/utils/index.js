const fetchWithTimeout = (url, options = {}, timeout = 30000) => {
  console.log('url is', url);
    const controller = new AbortController();
    const { signal } = controller;
  
    const fetchTimeout = setTimeout(() => {
      controller.abort();
    }, timeout);
  
    return fetch(url, { ...options, signal })
      .then(response => {
        if (!response.ok) {
          console.log('response', response.status);
          throw new Error(`Failed from utility`);
        }
        return response.json(); // or response.text(), etc., depending on your need
      })
      .catch(error => {
        if (error.name === 'AbortError') {
          console.error(`Fetch request aborted after ${timeout / 1000} seconds.`);
        } else {
          console.error('Fetch failed:', error.message);
        }
        throw error;
      })
      .finally(() => {
        clearTimeout(fetchTimeout);
      });
  };

  export default fetchWithTimeout;
