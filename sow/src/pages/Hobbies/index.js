import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Hobbies() {
  return (
    <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://png.pngtree.com/png-vector/20220313/ourmid/pngtree-man-listen-music-silhouette-png-image_4491034.png',
    title: 'Music',
  },
  {
    img: 'https://w0.peakpx.com/wallpaper/631/345/HD-wallpaper-sai-pallavi-actress-angel-dance-malayalam-actress-saipallavi-telugu-actress.jpg',
    title: 'Dancing',
  },
  {
    img: 'https://iso.500px.com/wp-content/uploads/2016/03/pedroquintela-1500x844.jpg',
    title: 'Camera',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
  },
  {
    img: 'https://us.123rf.com/450wm/colorfuelstudio/colorfuelstudio2001/colorfuelstudio200101328/138518375-happy-cute-kid-girl-play-badminton.jpg?ver=6',
    title: 'Badminton',
  },
];
