'use client';
import ImageBuilder from '../../lib/components/ImageBuilder';
import TextLabel from '../../lib/components/TextLabel';
export default function MovieCard({ movie, isEager }) {
    return (
        <div className='max-w-4xl mx-auto p-4'>
            <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
                <div className='md:w-1/3 bg-moviePoster bg-repeat-space'>
                <ImageBuilder src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} width='100' height='100' fallbackSrc='/images/movie.svg' alt={movie.title} className='w-full h-full object-cover' loading={isEager? 'eager': 'lazy'} priority={isEager}/>
                </div>
                <div className='md:w-2/3 p-6'>
                    <TextLabel label='Title' value={movie.title} />
                    <TextLabel label='Release Date' value={movie.release_date} />
                    <TextLabel value={movie.overview} />
                </div>
            </div>
        </div>
    );
}