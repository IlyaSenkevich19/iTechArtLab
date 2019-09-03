import React from "react";

import Title from "./components/Title";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Loading from "./components/Loading";

import ThreeDays from "./components/ThreeDays";

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
    error: undefined
  }

  getApiWeather = async (e) => {
    e.preventDefault();

    const city = e.target.elements.city.value;
    const day = e.target.elements[2].value;

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
          error: "Введите верный город",
          showSpinner: false
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
          showSpinner: false
        });

        console.log(data)
        const fiveDay = data.list[39].dt_txt;
        const fourDay = data.list[33].dt_txt;
        const thirdDay = data.list[25].dt_txt;
        const twoDay = data.list[17].dt_txt;
        console.log("Второй день: ", twoDay);
        console.log("Третий день: ", thirdDay);
        console.log("Четвертый день: ", fourDay);
        console.log("Пятый день: ", fiveDay);
        

        switch (day) {
          case "за 1 день": return;
          case "за 3 дня": return;
          case "за 5 дней": return;
          default: ;
        }




      }
    }
    catch (err) {
      console.log("ERROR", err)
    }
  }

  componentDidMount = async () => {
    try {
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
        showSpinner: false
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

          <ThreeDays  />

        </div>
      )
    }
  }
};

export default App;
