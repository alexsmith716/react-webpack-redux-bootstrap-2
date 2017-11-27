
import { GET_DATA } from './AboutActions';

const initialState = { data: '' };


const AboutReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_DATA :
      return {
        data: action.data,
      };

    default:
      return state;

  }

};

export default AboutReducer;
