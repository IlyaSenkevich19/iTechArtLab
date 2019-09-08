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

export const itemsFetchData = url => {
    return (dispatch) => {
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
            .then(items => dispatch(itemsFetchDataSuccess(items)))
            .catch(() => dispatch(itemsHasErrored(true)));
    };
}