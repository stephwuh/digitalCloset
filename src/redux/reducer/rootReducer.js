import { combineReducers } from 'redux';
import outfitSelectionReducer from './outfitSelectionReducer.js';
import signInStatusReducer from './signInStatusReducer.js';
import loadClosetReducer from './loadClosetReducer.js';
import outfitCategoryReducer from './outfitCategoryReducer.js';
import weatherReducer from './weatherReducer.js'

const reducers = {
    outfitSelection: outfitSelectionReducer,
    signinStatus: signInStatusReducer,
    loadCloset: loadClosetReducer,
    outfitCategory: outfitCategoryReducer,
    weather: weatherReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer;