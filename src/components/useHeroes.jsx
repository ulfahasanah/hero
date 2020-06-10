import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FETCH_HEROES } from '../action/actionCreator'

export default function useHeroes(url) {
    const dispatch = useDispatch()
    const heroes = useSelector( state => state.heroes )

    useEffect( () => {
        dispatch(FETCH_HEROES(url))
    }, [dispatch, url])

    return {
        heroes
    }
}