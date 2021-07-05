import {ADD_TO_FAVORITE, DELETE_COUNTRY, FETCH_COUNTRY, REMOVE_FAVORITE} from "./types";

const initialState = {
    country: [],
    favoriteCountry: []
}

export const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COUNTRY:
            return {...state, country: action.payload}
        case DELETE_COUNTRY:
            return {...state, country: state.country.filter((country, index) => index !== action.payload)}
        case ADD_TO_FAVORITE:
            return {...state, favoriteCountry: state.favoriteCountry.concat(action.payload)}
        case REMOVE_FAVORITE:
            return {...state, favoriteCountry: state.favoriteCountry.filter((country, index) => index !== action.payload)}
        default:
            return state
    }
}
