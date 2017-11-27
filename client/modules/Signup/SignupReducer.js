
import { GET_DATA } from './SignupActions';

const initialState = { data: '' };


const SignupReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_DATA :
      return {
        data: action.data,
      };

    default:
      return state;

  }

};

export default SignupReducer;
