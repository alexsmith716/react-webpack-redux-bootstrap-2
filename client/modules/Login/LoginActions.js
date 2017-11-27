
import callApi from '../../apiCaller';

export const GET_DATA = 'GET_DATA';


export function getData(pageSchema) {

  return {
    type: GET_DATA,
    data: pageSchema,
  };

}

export function fetchData() {

  return (dispatch) => {

    return callApi('data', 'post', { pageName: 'loginPage' }).then(res => dispatch(getData(res.pageSchema.text)));
    
  };

}
