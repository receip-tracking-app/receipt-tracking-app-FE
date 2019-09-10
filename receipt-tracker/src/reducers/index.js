//import variables friom actions

import{
    FETCH_USER_START,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    FETCH_CATEGORIES_START, 
    FETCH_CATEGORIES_SUCCESS,
     FETCH_CATEGORIES_FAILURE
} from '../actions';


const initialState = {
    isLoggedIn: false,
    isFetchingUserData: false,
    error:'',
    user: 
    {     
    id: 1,
    created_at: "2019-09-05 05:05:20",
    userName: "user1",
    password: "password0",
    firstName: "John",
    lastName: "Finkle",
    dateOfBirth: null,
    email: "user1@email.com",
    address: "1234 Some St.",
    city: "New City",
    state: "Road Island",
    phone: "555-555-5555",
    profileImageURL: ""
    },
    categories:[
        {
            id:1,
            categoryName: "Food"
        },
        {
            id:2,
            categoryName: "Gas"
        },
        {
            id:3,
            categoryName: "Entertainment"
        }
    ]

};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {

        case FETCH_USER_START:
            console.log('im fetching now')
            return {
                ...state,
                isFetchingUserData: true,
                error:''
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isFetchingUserData: false,
                user: action.payload
            }; 
        case FETCH_USER_FAILURE:
            return{
                ...state,
                isFetchingUserData: false,
                error: action.payload
            };

        case FETCH_CATEGORIES_START:
            return {
                ...state,
                isFetchingUserData: true,
                error:''
            };
            
        case FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                isFetchingUserData:false,
                categories: action.payload
            };
            
        case FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                isFetchingUserData: false,
                error: action.payload
            };    
    
        default:
            return state;
    }
};

export default rootReducer;