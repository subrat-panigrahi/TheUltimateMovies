import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null); // For storing the data
  const [loading, setLoading] = useState(true); // For loading state
  const [error, setError] = useState(null); // For error handling

  useEffect(() => {
    const controller = new AbortController(); // Create an AbortController instance
    const signal = controller.signal; // Get the abort signal

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        // Set a 10-second timeout for aborting the fetch request
        const timeoutId = setTimeout(() => {
          controller.abort(); // Abort the fetch request after 10 seconds
        }, 10000);

        const response = await fetch(url, { ...options, signal });
        
        // Clear the timeout if the fetch succeeds
        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const result = await response.json();
        setData(result); // Set the fetched data
      } catch (err) {
        if (err.name === 'AbortError') {
          console.log('Fetch request aborted due to timeout.');
        } else {
          setError(err.message); // Capture error message
        }
      } finally {
        setLoading(false); // Done loading
      }
    };

    fetchData();

    // Cleanup function to abort the fetch request if the component unmounts
    return () => {
      clearTimeout(); // Clear timeout on component unmount
      controller.abort(); // Aborts the fetch if necessary
    };
  }, [url, options]);

  return { data, loading, error }; // Return the data, loading state, and error
}

export default useFetch;
