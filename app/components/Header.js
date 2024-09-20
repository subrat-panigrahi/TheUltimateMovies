'use client';
import React from 'react'
import Searchbar from './Searchbar';
import ImageBuilder from '../../lib/components/ImageBuilder';
import { useRouter, /*useSearchParams*/ } from 'next/navigation';
import { Suspense } from 'react'

export default function Header({value}) {
    const router = useRouter();
    //const searchParams = useSearchParams();

  const appendQuery = (searchTerm) => {
    console.log('searchTerm', searchTerm);
    if(!searchTerm) {
        router.push('/');
    } else{
        router.push(`/search?query=${searchTerm.toString()}`);
    }
   
  };
    return (
        <div className="max-w-4xl mx-auto p-2">
            <Suspense fallback={<div>Loading...</div>}>
            <ImageBuilder className='flex p-2' src='/images/logo.webp' width='100' height='100' fallbackSrc='/images/fallbackImage.jpg' alt='logo'/>
            <Searchbar value={value} onSearch={(searchTerm) => {
                    appendQuery(searchTerm);
            }} />
            </Suspense>
        </div>
    )
}
