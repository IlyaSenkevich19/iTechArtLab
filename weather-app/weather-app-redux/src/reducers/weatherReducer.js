const initialState = {
    fetchData: [],
    searchValue: ''
}


const fetchData = (state, res) => {
    return {
        ...state,
        fetchData: res,
    }
}

const handleSetSearchValue = (state, searchValue) => {
    return {
        ...state,
        searchValue
    }
}



export default (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_DATA":
            return fetchData(state, action.payload);
        case "SET_SEARCH_VALUE":
            return handleSetSearchValue(state, action.payload);
        default: return state;
    }
}