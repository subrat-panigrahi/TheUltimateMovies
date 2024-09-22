'use client';
import { useEffect } from 'react';

//Catches all kind of uncought errors.
export default function GlobalError({ error, reset }) {
  useEffect(() => {
    //use sentry 
    console.error("app error", error);
  }, [error]);

  return (
    <html>
      <body className="text-center">
        <h2>Something went wrong!</h2>
        <button className='primary-btn' onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
