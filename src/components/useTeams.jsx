import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FETCH_TEAMS } from '../action/actionCreator'

export default function useTeams(url) {
    const dispatch = useDispatch()
    const teams = useSelector(state => state.teams)

    useEffect(() => {
        dispatch(FETCH_TEAMS(url))
    }, [dispatch, url])

    return {
        teams
    }
}
