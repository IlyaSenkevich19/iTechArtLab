const API_KEY = '6a07bd6f742763532d7553722f09ccf3';



export default function getApiWeather(city) {
    return async function(dispatch) {
        try {
            const getApi = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`, {
                mode: 'cors',
                headers: {
                    'Content-Type': ["image/png", 'application/json'],
                    'Accept': 'application/json',
                }
            });

            const data = await getApi.json();
            console.log(data)
            const list = data.list;
            dispatch(FETCH_DATA)



        }

        catch (err) {
            console.log("ERROR", err)
        }
    }
}