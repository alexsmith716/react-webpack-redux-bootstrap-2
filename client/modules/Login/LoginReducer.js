
import { GET_DATA } from './LoginActions';

const initialState = { data: '' };


const LoginReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_DATA :
      return {
        data: action.data,
      };

    default:
      return state;

  }

};

export default LoginReducer;
