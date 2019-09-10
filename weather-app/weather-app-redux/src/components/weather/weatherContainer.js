import React, { Component } from 'react';
import { connect } from 'react-redux';
import Weather from './Weather';

import { itemsFetchData, chooseDay, selectCity, onSubmitSuccess } from '../../actions/actions';
import Loading from "../Loading";
import Form from "../Form";
import WeatherList from './WeatherList';


const API_KEY = '6a07bd6f742763532d7553722f09ccf3';

class WeatherContainer extends React.PureComponent {


    getCity = async (e) => {
        e.preventDefault();
        const cityName = e.target.elements.city.value;
        const day = document.querySelector('select').value;
        this.props.chooseDays(day);
        this.props.selectCityInput(cityName);
        this.props.fetchData(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${API_KEY}&units=metric`);
    }

    refreshPage = () => {
        window.location.reload();
    }

    componentDidMount() {
        this.props.fetchData(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=Minsk&APPID=${API_KEY}&units=metric`);
    }

    render() {
        if (this.props.error) {
            return <p className='error'>Sorry! Enter the correct city <button onClick={this.refreshPage}>Try again</button></p>;
        }
        if (this.props.loading) {
            return (<Loading />);
<<<<<<< HEAD
        } else {
            console.log(this.props.data.list)
            const { forecast } = this.props;
=======
        } else if(this.props.submit) {
            const { forecast, selectedCity, data, days, submit } = this.props;
>>>>>>> 353c3e0f2deaf972d882900176bef29563522b02
            return (
                <div>
                    <Form
                        getCity={this.getCity}
                        submit={submit}
                    />
                    <Weather
                        city={selectedCity}
                        forecast={forecast}
                    />
                    <WeatherList
                        infoData={data}
                        data={days} />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        data: state.data.items,
        error: state.data.hasErrored,
        loading: state.data.isLoading,
        forecast: state.data.forecast,
        days: state.data.typeForecast,
        selectedCity: state.data.selectCity,
        submit: state.data.submit
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url)),
        chooseDays: type => dispatch(chooseDay(type)),
        selectCityInput: city => dispatch(selectCity(city)),
        submitSuccess: type => dispatch(onSubmitSuccess(type))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);