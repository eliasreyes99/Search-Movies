import { searchMovies } from '../services/searchMovies'
import { useMemo, useRef, useState, useCallback } from "react";
export function useMovie({ search, sort }) {

    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(false)
    const previousSearch = useRef(search)

    const getMovies = useCallback(async () => {
        if (search === previousSearch.current) return
        try {
            setLoading(true)
            previousSearch.current = search
            const newMovies = await searchMovies({ search })
            setMovies(newMovies)

        } catch (error) {
            throw new Error('Error')

        } finally {
            setLoading(false)
        }
    }, [search])
    const sortedMovie = useMemo(() => {
        return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
    }, [sort, movies])

    return { movies: sortedMovie, getMovies, loading }
}