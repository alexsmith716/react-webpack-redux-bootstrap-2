
import { GET_DATA } from './HomeActions';

const initialState = { data: '' };


const HomeReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_DATA :
      return {
        data: action.data,
      };

    default:
      return state;

  }
  
};

export default HomeReducer;
