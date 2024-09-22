'use client';

import Searchbar from './Searchbar';
import ImageBuilder from '../../lib/components/ImageBuilder';
import { useRouter, useSearchParams } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Specify the type of searchTerm to be string or null
  const appendQuery = (searchTerm) => {
    if (!searchTerm) {
      router.push('/');
    } else {
      router.push(`/search?query=${searchTerm.toString()}`);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-2 sticky top-0 bg-background">
      <ImageBuilder
        className="flex p-2"
        src="/images/logo_ultimate_movies.jpeg"
        width="100"
        height="100"
        fallbackSrc="/images/fallbackImage.jpg"
        alt="logo"
        priority
      />
      <Searchbar
        value={searchParams.get('query') || ''}
        onSearch={(searchTerm) => {
          appendQuery(searchTerm);
        }}
      />
    </div>
  );
}