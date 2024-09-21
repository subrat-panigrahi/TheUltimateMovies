'use client';
import { useEffect } from 'react';

export default function GlobalError({ error, reset }) {
  useEffect(() => {
    //use sentry 
    console.error("app error", error);
  }, [error]);

  return (
    <html>
      <body className="text-center">
        <h2>Something went wrong during serach!</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
