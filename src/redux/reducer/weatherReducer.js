
const initialState = {
    location: [],
    current: [],
    day1: [],
    day2: [],
    day3: []
}


const weatherReducer = ( state = initialState , action ) => {
    switch (action.type) {
        case 'loadWeather/loadLocation':
            return {...state, location: action.payload}
        case 'loadWeather/loadCurrent':
            return {...state, current: action.payload}
        case 'loadWeather/loadDay1':
            return {...state, day1: action.payload}
        case 'loadWeather/loadDay2':
            return {...state, day2: action.payload}
        case 'loadWeather/loadDay3':
            return {...state, day3: action.payload}
        default:
            return state;
    }
}

export default weatherReducer;