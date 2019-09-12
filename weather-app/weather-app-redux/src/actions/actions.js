export const itemsFetchDataSuccess = items => ({
    type: 'ITEMS_FETCH_DATA_SUCCESS',
    payload: items
})


export const itemsHasErrored = bool => ({
    type: 'ITEMS_HAS_ERRORED',
    payload: bool
})


export const itemsIsLoading = bool => ({
    type: 'ITEMS_IS_LOADING',
    payload: bool
})


export const setForecast = forecast => ({
    type: 'SET_FORECAST',
    payload: forecast
})


export const chooseDay = type => ({
    type: "CHOOSE_TYPE",
    payload: type
})

export const selectCity = city => ({
    type: "SELECT_CITY",
    payload: city
})


export const onSubmitSuccess = type => ({
    type: "SET_SUBMIT_TYPE",
    payload: type
})


export const itemsFetchData = url => dispatch => {

    dispatch(itemsIsLoading(true));

    fetch(url, {
        mode: 'cors',
        headers: {
            'Content-Type': ["image/png", 'application/json'],
            'Accept': 'application/json',
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(itemsIsLoading(false));
            return response;
        })
        .then(response => response.json())
        .then(items => {
            console.log(items)
            if (items.cod !== '404') {
                dispatch(setForecast(items.list.map(day => {
                    return {
                        temp: day.main.temp,
                        description: day.weather[0].description,
                        icon: day.weather[0].icon,
                        day: day.dt
                    }
                })))
                dispatch(itemsFetchDataSuccess(items));
                dispatch(onSubmitSuccess(true))
            }
        })
        .catch(() => dispatch(itemsHasErrored(true)));
}