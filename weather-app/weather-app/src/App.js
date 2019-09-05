import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Loading from "./components/Loading";

import DaysList from "./components/DaysList";

const API_KEY = '6a07bd6f742763532d7553722f09ccf3';

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    humidity: undefined,
    showSpinner: false,
    icon: undefined,
    error: undefined,
    list: null,
    days: 'за 1 день',
  }

  getApiWeather = async e => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const day = document.querySelector('select').value;

    this.setState({
      showSpinner: true
    });

    try {
      const getApi = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`, {
        mode: 'cors',
        headers: {
          'Content-Type': ["image/png", 'application/json'],
          'Accept': 'application/json',
        }
      });

      const data = await getApi.json();

      if (data.cod === '404' || !city) {
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          description: undefined,
          humidity: undefined,
          icon: undefined,
          error: "Enter the correct city name",
          showSpinner: false,
          list: undefined,
          days: undefined,
        })
        return;
      } else {
        this.setState({
          temperature: data.list[0].main.temp,
          city: data.city.name,
          country: data.city.country,
          description: data.list[0].weather[0].description,
          humidity: data.list[0].main.humidity,
          icon: data.list[0].weather[0].icon,
          showSpinner: false,
          list: data.list,
          days: day,
        });
      }
    }
    catch (err) {
      console.log("ERROR", err)
    }
  }

  componentDidMount = async () => {
    try {

      this.setState({
        showSpinner: true
      })

      const getApi = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=Minsk&APPID=${API_KEY}&units=metric`, {
        mode: 'cors',
        headers: {
          'Content-Type': ["image/png", 'application/json'],
          'Accept': 'application/json',
        }
      });

      const data = await getApi.json();

      this.setState({
        temperature: data.list[0].main.temp,
        city: data.city.name,
        country: data.city.country,
        description: data.list[0].weather[0].description,
        humidity: data.list[0].main.humidity,
        icon: data.list[0].weather[0].icon,
        showSpinner: false,
        list: data.list,
      });
    }
    catch (err) {
      console.log(err);
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
          <div className='addInfo'>Additional weather information at different times</div>
          <DaysList weather={this.state} />
        </div>
      )
    }
  }
};

export default App;


