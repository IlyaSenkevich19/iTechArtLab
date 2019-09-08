import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Weather } from '../components/Weather';

import { getData } from '../../fetchData' 

class WeatherContainer extends Component {

   


    render() {
        return(
            <div>
                <Weather />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {

    }
}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, mapDispatchToProps)(WeatherContainer);