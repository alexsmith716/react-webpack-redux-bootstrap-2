
import { combineReducers } from 'redux';

// import Reducers
import home from './modules/Home/HomeReducer';
import about from './modules/About/AboutReducer';
import contact from './modules/Contact/ContactReducer';
import signup from './modules/Signup/SignupReducer';
import login from './modules/Login/LoginReducer';

// combine all reducers into root reducer
export default combineReducers({
    home,
    about,
    contact,
    signup,
    login,
});