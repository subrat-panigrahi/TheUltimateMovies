// import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import MovieCard from '../app/components/MovieCard';

let data = {
    "adult": false,
    "backdrop_path": "/fe5NMpbgZiYIYNpMBKqp9sbQ2Jy.jpg",
    "genre_ids": [
        28,
        53
    ],
    "id": 1024127,
    "original_language": "en",
    "original_title": "King of Killers",
    "overview": "Garan is a part of a group of international hitmen who are contracted to take out the most dangerous killer in the world, only to find out that they're the ones being hunted.",
    "popularity": 523.654,
    "poster_path": "/x5AreOAgkTBzUSL58o4jsYortw2.jpg",
    "release_date": "2023-09-01",
    "title": "King of Killers",
    "video": false,
    "vote_average": 6.484,
    "vote_count": 125
};

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/MovieCard',
  component: MovieCard,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    movie: {control: 'movie'}
   // backgroundColor: { control: 'color' },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
};

export default meta;
// type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
/* export const Primary = {
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary = {
  args: {
    label: 'Button',
  },
};

export const Large = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    label: 'Button',
  },
}; */

export const MovieCardWithCompleteData = {
  args: {
    movie: data,
    isEager: false
  }
};
