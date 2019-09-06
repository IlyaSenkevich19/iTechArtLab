export const setSearchValue = searchValue => ({
    type: "SET_SEARCH_VALUE",
    payload: searchValue
})

export const fetchData = res => dispatch => {
    dispatch({
        type: 'FETCH_DATA',
        payload: res
    })
}