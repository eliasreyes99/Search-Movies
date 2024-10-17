
import { Alert } from "../Components/Alert";
import { createContext, useState, useContext, useMemo } from "react";

export const favContext = createContext();

export function FavProvider({ children }){
    const [favorite, setFavorite] = useState(()=> JSON.parse(window.localStorage.getItem('favorite')) || [])
    const [alert, setAlert] = useState({status:'', description:''})

    const updateStorage = favorite => {
        window.localStorage.setItem('favorite',JSON.stringify(favorite))
    }
    const addFavorite = fav => {
        const favExisted = favorite.some(item => item.id === fav.id);
        if(!favExisted){
            const newfav = [...favorite, fav]
            setFavorite(newfav)
            updateStorage(newfav)
            setAlert({status: 'alert-success', description:'Movie add to favorites'})
        }
        if(favExisted){
            setAlert({status: 'alert-error', description:'Movie exists in favorites'})
        }
        return
    }
    const removeFav = fav => {
        const newfav = favorite.filter(item => item.id !== fav.id)
        setFavorite(newfav)
        updateStorage(newfav)
        setAlert({status:'alert-success', description:'Movie removed from favorites'})
    }
    return(
        <favContext.Provider value={{favorite, alert, removeFav, addFavorite}} >{children}
        {alert.description && <Alert status={alert.status} description={alert.description} /> }
        </favContext.Provider>
    )
}
export const useFav = () => useContext(favContext);