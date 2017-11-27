
import { GET_DATA } from './ContactActions';

const initialState = { data: '' };


const ContactReducer = (state = initialState, action) => {

  switch (action.type) {

    case GET_DATA :
      return {
        data: action.data,
      };

    default:
      return state;

  }

};

export default ContactReducer;
