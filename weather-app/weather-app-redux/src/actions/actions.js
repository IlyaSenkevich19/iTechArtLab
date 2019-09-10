export const itemsFetchDataSuccess = items => {
    return {
        type: 'ITEMS_FETCH_DATA_SUCCESS',
        payload: items
    };
}

export const itemsHasErrored = bool => {
    return {
        type: 'ITEMS_HAS_ERRORED',
        payload: bool
    };
}

export const itemsIsLoading = bool => {
    return {
        type: 'ITEMS_IS_LOADING',
        payload: bool
    };
}

export const setForecast = forecast => {
    return {
        type: 'SET_FORECAST',
        payload: forecast
    }
}

export const chooseDay = type => {
    return {
        type: "CHOOSE_TYPE",
        payload: type
    }
}
export const selectCity = city => {
    return {
        type: "SELECT_CITY",
        payload: city
    }
}

export const onSubmitSuccess = type => {
  return {
      type: "SET_SUBMIT_TYPE",
      payload: type
  }
}

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
            if (items.cod !== '404') {
                dispatch(setForecast(items.list.map(day => {
                    return {
                        temp: day.main.temp,
                        description: day.weather[0].description,
                        icon: day.weather[0].icon,
                        day: day.dt
                    }
                })))
                dispatch(itemsFetchDataSuccess(items))
            } 
        })
        .catch(() => dispatch(itemsHasErrored(true)));

}