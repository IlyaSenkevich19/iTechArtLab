import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Loading from "./components/Loading";

const API_KEY = '6a07bd6f742763532d7553722f09ccf3';


class App extends React.Component {

  state = {
    temperature: null,
    city: null,
    country: null,
    description: null,
    humidity: null,
    showSpinner: false,
    error: null
  }

  getApiWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const day = e.target.elements[2].value;
    console.log(day);

    this.setState({
      showSpinner: true
    });

    try {
      const getApi = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`, {
        method: 'GET',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        }
      });

      const data = await getApi.json();


      const forFiveDay = data.list[39].dt_txt;
      console.log(forFiveDay);







      console.log(data);

      this.setState({
        temperature: data.list[0].main.temp,
        city: data.city.name,
        country: data.city.country,
        description: data.list[0].weather[0].description,
        humidity: data.list[0].main.humidity,
        showSpinner: false
      });
    }
    catch (err) {
      console.log("ERROR", err)
    }
  }


  render() {
    if (this.state.showSpinner) { return <Loading /> }
    else {
      return (
        <div>
          <Title />
          <Form getApiWeather={this.getApiWeather} />
          <Weather weather={this.state} />
        </div>
      )
    }
  }
};

export default App;

