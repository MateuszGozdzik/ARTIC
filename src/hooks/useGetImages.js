import { useState, useEffect } from 'react';

export const useGetImages = () => {
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [firstStart, setFirstStart] = useState(true);

  const fetchImages = async () => {
    try {
      const res = await fetch(
        `https://api.artic.edu/api/v1/artworks?page=${page}&fields=title,api_link,image_id`
      );
      setPage(page + 1);
      const data = await res.json();
      setImages(data);
      console.log(images);
    } catch (e) {
      setError('Could not fetch weather');
    }
  };
  if (firstStart) {
    fetchImages();
    setFirstStart(false);
  }
  return images;
};
