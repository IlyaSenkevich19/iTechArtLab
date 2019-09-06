import React from "react";

import Form from './Form';
import Loader from './Loader';
import Weather from './Weather'

import { connect } from 'react-redux';

import  {fetchData, setSearchValue } from '../actions/weatherActions'

const API_KEY = '6a07bd6f742763532d7553722f09ccf3';

class Main extends React.Component {

    state = {
        value: '',
        showSpinner: false,

    }

    changeCity = (e) => {
        let value = e.target.value;
        this.setState({
            value: value
        })
        return this.state.value
    }

    getData = async () => {
        this.setState({
            showSpinner: true
        });
        try {
            const getApi = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=${this.changeCity()}&APPID=${API_KEY}&units=metric`, {
                mode: 'cors',
                headers: {
                    'Content-Type': ["image/png", 'application/json'],
                    'Accept': 'application/json',
                }
            });
            const data = await getApi.json();

            this.props.fetchData(data)
        }
        catch (err) {
            console.log("ERROR", err)
        }
        this.setState({
            showSpinner: false
        });
    }

    componentDidMount = async () => {
        this.setState({
            showSpinner: true
        });
        try {
            const getApi = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/forecast?q=Minsk&APPID=${API_KEY}&units=metric`, {
                mode: 'cors',
                headers: {
                    'Content-Type': ["image/png", 'application/json'],
                    'Accept': 'application/json',
                }
            });
            const data = await getApi.json();
            this.props.fetchData(data)
        }
        catch (err) {
            console.log("ERROR", err)
        }
        this.setState({
            showSpinner: false
        });
    }

    render() {
        console.log(this.props.data)
        if (this.state.showSpinner) { return <Loader /> } else {
            return (
                <div>
                    <Form changeCity={this.changeCity} />
                    <Weather weather={this.props.data} />
                </div>
            )
        }
    };


}
 
const mapStateToProps = state => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = dispatch => ({
    fetchData: (res) => dispatch(fetchData(res)),
    changeCityValue: (value) => dispatch(setSearchValue(value))
})



export default connect(mapStateToProps, mapDispatchToProps)(Main);


