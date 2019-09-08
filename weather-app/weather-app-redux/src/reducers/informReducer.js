const initialState = {
    hasErrored: false,
    isLoading: false,
    items: []
}

const itemsFetchData = (state, data) => {
    return {
        ...state,
        items: data
    }
};

const hasErrored = (state, bool) => {
     return {
         ...state,
         hasErrored: bool
     }
 }

const isLoading = (state, bool) => {
     return {
         ...state,
         isLoading: bool
     }
 }

export const informReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED' :
            return hasErrored(state, action.payload);
        case 'ITEMS_IS_LOADING' :
            return isLoading(state, action.payload);
        case 'ITEMS_FETCH_DATA_SUCCESS' :
            return itemsFetchData(state, action.payload);
        default: return state;
    }
}