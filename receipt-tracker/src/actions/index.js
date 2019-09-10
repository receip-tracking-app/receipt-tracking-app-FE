// 
import axios from 'axios';


export const FETCH_USER_START = "FETCH_USER_START";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_CATEGORIES_START = "FETCH_CATEGORIES_START";
export const FETCH_CATEGORIES_SUCCESS = "FETCH_CATEGORIES_SUCCESS";
export const FETCH_CATEGORIES_FAILURE = "FETCH_CATEGORIES_FAILURE";



export const fetchUser = (id) => dispatch => {
    dispatch({type:FETCH_USER_START});
    axios.get(`http://localhost:5000/user/${id}`)
    .then(res => dispatch({type: FETCH_USER_SUCCESS, payload: res.data}))
    .catch(err=> dispatch({type: FETCH_USER_FAILURE, payload:err}));
};


export const fetchCategories = () => dispatch => {
    dispatch({type:FETCH_CATEGORIES_START});
    axios.get('http://localhost:5000/categories')
    .then(res=> dispatch({type: FETCH_CATEGORIES_SUCCESS, payload: res.data}))
    .catch(res=> dispatch({type: FETCH_CATEGORIES_FAILURE, payload: res.data}));
};
