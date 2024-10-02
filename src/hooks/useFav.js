import { useState, useEffect } from 'react';

export function useFav() {
    const [favorites, setFavorites] = useState(() => {
        const storedFavorites = window.localStorage.getItem('fav');
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });

    useEffect(() => {
        window.localStorage.setItem('fav', JSON.stringify(favorites));
    }, [favorites]);

    const fav = (movie) => {
        const movieExisted = favorites.some(fav => fav.id === movie.id)
        if (!movieExisted) {
            setFavorites([...favorites, movie])
            alert('Movie add to favorites')
        } else {
            alert('Existed Movie in favorites')
        }
    }

    const removeFav = (id) => {
        setFavorites(prevFavorites => {
            const updatedFavorites = prevFavorites.filter(fav => fav.id !== id);
            console.log("Updated favorites:", updatedFavorites); // Verificar el nuevo estado
            return updatedFavorites;
        });

        window.location.reload()

        alert('Successfully removed from favorites');
    };


    return { fav, removeFav, favorites };
}
