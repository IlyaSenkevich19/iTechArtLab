import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Loading from "./components/Loading";

import DaysList from "./components/DaysList";

const API_KEY = '6a07bd6f742763532d7553722f09ccf3';

class App extends React.PureComponent {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    description: undefined,
    humidity: undefined,
    showSpinner: false,
    icon: undefined,
    error: undefined,
    list: undefined,
    days: '1',
  }

  refreshPage = () => {
    window.location.reload();
  }
  
  fetchData = async city => {
    const day = document.querySelector('select').value;

    try {
      this.setState({
        showSpinner: true
      });

      const getApi = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`, {
        mode: 'cors',
        headers: {
          'Content-Type': ["image/png", 'application/json'],
          'Accept': 'application/json',
        }
      });

      const data = await getApi.json();

      if (data.cod === '404' || data.cod === '400') {
        this.setState({
          error: "Enter the correct city name",
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


  getWeather = () => {
    const city = document.querySelector('.input').value;
    this.fetchData(city)
  }


  componentDidMount = () => {
    this.fetchData("Minsk");
  }

  render() {
    if (this.state.error) {
      return (<p className='error'>{this.state.error}<button onClick={this.refreshPage}>Try again</button></p>)
    }
    if (this.state.showSpinner) { return <Loading /> }
    else {
      return (
        <div>
          <Title />
          <Form getApiWeather={this.getWeather} />
          <Weather weather={this.state} />
          <div className='addInfo'>Additional weather information at different times</div>
          <DaysList weather={this.state} />
        </div>
      )
    }
  }
};

export default App;


