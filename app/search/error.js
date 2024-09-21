'use client';
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error)
  }, [error])
 
  return (
    <div className='flex justify-center max-w-4xl mx-auto p-4 items-center' >
      <h2>Something went wrong!</h2>
      <button className='primary-btn'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}