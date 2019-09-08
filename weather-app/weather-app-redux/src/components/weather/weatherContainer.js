import React, { Component } from 'react';
import { connect } from 'react-redux';
import  Weather  from './weather';

import { itemsFetchData } from '../../actions/actions';
import Loading from "../Loading";
import Form from "../Form"

const API_KEY = '6a07bd6f742763532d7553722f09ccf3';

class WeatherContainer extends Component {

    getCity(e) {
        e.preventDefault();
        const cityName = e.target.elements.city.value;
        this.props.fetchData(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&APPID=${API_KEY}&units=metric`);
    }

    componentDidMount() {
        this.props.fetchData(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=Minsk&APPID=${API_KEY}&units=metric`)
    }

    render() {
        if (this.props.error) {
            return <p>Sorry! There was an error loading the items</p>;
        }
        if (this.props.loading) {
            return (<Loading />);
        } else {
            return (
                <div>
                    <Form getCity={this.getCity} />
                    <Weather data={this.props.data} />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        data: state.data.items,
        error: state.data.hasErrored,
        loading: state.data.isLoading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchData: url => dispatch(itemsFetchData(url))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);