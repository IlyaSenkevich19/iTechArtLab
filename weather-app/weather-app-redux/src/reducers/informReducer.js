const initialState = {
    hasErrored: false,
    isLoading: false,
    items: [],
    forecast: [{}],
    typeForecast: 'за 1 день',
    selectCity: 'Minsk',
    submit: true

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

 const setForecastInfo = (state, forecast) => {
     return {
         ...state,
        forecast: forecast
     }
 }

 const chooseDayType = (state, type) => {
     return {
         ...state,
         typeForecast: type
     }
 }

 const selectCityName = (state, city) => {
     return {
         ...state,
         selectCity: city
     }
 }

 const onSubmitSuccess = (state, type) => {
     return {
         ...state,
         submit: type
     }
 }

export const informReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ITEMS_HAS_ERRORED':
            return hasErrored(state, action.payload);
        case 'ITEMS_IS_LOADING':
            return isLoading(state, action.payload);
        case 'ITEMS_FETCH_DATA_SUCCESS':
            return itemsFetchData(state, action.payload);
        case "SET_FORECAST":
            return setForecastInfo(state, action.payload);
        case "CHOOSE_TYPE":
            return chooseDayType(state, action.payload);
        case "SELECT_CITY":
            return selectCityName(state, action.payload);
        case "SET_SUBMIT_TYPE": 
          return onSubmitSuccess(state, action.payload);    
        default: return state;
    }
}