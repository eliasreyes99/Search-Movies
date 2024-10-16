import { createContext, useState, useContext } from "react";
export const favContext = createContext();

export function FavProvider({ children }){
    const [favorite, setFavorite] = useState(()=> JSON.parse(window.localStorage.getItem('favorite')) || [])

    const updateStorage = favorite => {
        window.localStorage.setItem('favorite',JSON.stringify(favorite))
    }
    const addFavorite = fav => {
        const favExisted = favorite.some(item => item.id === fav.id);
        if(!favExisted){
            const newfav = [...favorite, fav]
            setFavorite(newfav)
            updateStorage(newfav)
        }
        return
    }
    const removeFav = fav => {
        const newfav = favorite.filter(item => item.id !== fav.id)
        setFavorite(newfav)
        updateStorage(newfav)
    }
    return(
        <favContext.Provider value={{favorite, removeFav, addFavorite}} >{children}</favContext.Provider>
    )
}
export const useFav = () => useContext(favContext);