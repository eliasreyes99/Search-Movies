import { useEffect, useState } from 'react';
import { useFav } from '../hooks/useFav'
import ListOfMovies from '../Components/Movies';

export default function FavoriteMovies() {
  const { favorites } = useFav()

  return (
    <div>
      <ListOfMovies movies={favorites} />
    </div>
  )
}