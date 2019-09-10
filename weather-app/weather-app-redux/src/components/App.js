import React from 'react';

import WeatherContainer from './weather/WeatherContainer'
import Title from './Title';

const App = () => {
    return (
        <div>
            <Title />
            <WeatherContainer />
        </div>
    )
}

export default App;