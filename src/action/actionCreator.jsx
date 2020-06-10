export function SET_HEROES(data) {
    return {
        type: "SET_HEROES",
        payload: data
    }
}

export function FETCH_HEROES(url) {
    return dispatch => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch(SET_HEROES(res))
        })
    }
}

export function ADD(data) {
    return {
        type: "ADD",
        payload: data
    }
}

export function ADD_HEROES(data) {
    return dispatch => {
        fetch('http://localhost:3000/heroes', {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch(ADD(res))
        })
    }
}

export function ADD_TEAM(data) {
    return {
        type: "ADD_TEAM",
        payload: data
    }
}

export function SET_TEAM(data) {
    return dispatch => {
        fetch('http://localhost:3000/teams', {
            method: "POST",
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch(ADD_TEAM(res))
        })
    }
}
export function SET_TEAMS(data) {
    return {
        type: "SET_TEAMS",
        payload: data
    }
}

export function FETCH_TEAMS(url) {
    return dispatch => {
        fetch(url)
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch(SET_TEAMS(res))
        })
    }
}

export function DELETE(id) {
    return {
        type: "DELETE",
        id: id
    }
}

export function DELETE_TEAM(id) {
    return dispatch => {
        fetch(`http://localhost:3000/teams/${id}`, {
            method: "DELETE"
        })
        .then(res => {
            return res.json()
        })
        .then(res => {
            dispatch(DELETE(id))
        })
    }
}