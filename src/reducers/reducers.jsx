const initialState = {
    heroes: [],
    teams: []
}

export default function reducers(state = initialState, action) {
    switch(action.type) {
        case "SET_HEROES":
            return {
                ...state,
                heroes: action.payload
            }
        case "SET_TEAMS":
            return {
                ...state,
                teams: action.payload
            }
        case "ADD": 
            return {
                ...state,
                heroes: state.heroes.concat([action.payload])
            }
        case "ADD_TEAM":
            return {
                ...state,
                teams: [...state.teams, action.payload]
            }
        case "DELETE":
            return {
                ...state,
                teams: state.teams.filter(el => el.id !== action.id)
            }
    }
    return state
}