import React from 'react';

import WeatherContainer from './weather/weatherContainer'
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