import React from 'react';
import { connect } from 'react-redux';

import { itemsFetchData, chooseDay, selectCity, onSubmitSuccess } from '../../actions/actions';
import Loading from "../Loading";
import Form from "../Form";
import WeatherList from './WeatherList';
import Weather from './weather';

const API_KEY = '6a07bd6f742763532d7553722f09ccf3';

class WeatherContainer extends React.PureComponent {

    getCity = e => {
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

        } else if (this.props.submit) {
            const { forecast, selectedCity, data, days, submit } = this.props;

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
                        data={days}
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    data: state.data.items,
    error: state.data.hasErrored,
    loading: state.data.isLoading,
    forecast: state.data.forecast,
    days: state.data.typeForecast,
    selectedCity: state.data.selectCity,
    submit: state.data.submit
})


const mapDispatchToProps = dispatch => ({
    fetchData: url => dispatch(itemsFetchData(url)),
    chooseDays: type => dispatch(chooseDay(type)),
    selectCityInput: city => dispatch(selectCity(city)),
    submitSuccess: type => dispatch(onSubmitSuccess(type))
})


export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);