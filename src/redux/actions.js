import {
    FETCH_COUNTRY,
    HIDE_LOADER,
    SHOW_LOADER,
    DELETE_COUNTRY,
    ADD_TO_FAVORITE,
    REMOVE_FAVORITE, DOWNLOAD_FAVORITE
} from './types';

export function fetchCountry(name, status) {
    if (name.length > 0) {
        return async dispatch => {
            dispatch(showLoader())
            const response = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
            const json = await response.json()
            json.map((country, index) => country.isFavorite = status)
            dispatch({type: FETCH_COUNTRY, payload: json})
            dispatch(hideLoader())
        }
    }
    return dispatch => {
        dispatch({type: FETCH_COUNTRY, payload: []})
    }
}

export function fetchFavorite(code) {

    if (code !== null) {
        const res = code.replace(/,/g, ";" ).toLowerCase()
        console.log(res, 'result')
        return async dispatch => {
            dispatch(showLoader())
            const response = await fetch(`https://restcountries.eu/rest/v2/alpha?codes=${res}`)
            const json = await response.json()
            json.map((country, index) => country.isFavorite = true)
            dispatch({type: DOWNLOAD_FAVORITE, payload: json})
            dispatch(hideLoader())
        }
    }
    return dispatch => {
        dispatch({type: FETCH_COUNTRY, payload: []})
    }
}


export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}

export function deleteCountry(index) {
    return {
        type: DELETE_COUNTRY,
        payload: index
    }
}

export function addToFavorite(data) {
    return {
        type: ADD_TO_FAVORITE,
        payload: data
    }
}

export function removeFavorite(index) {
    return {
        type: REMOVE_FAVORITE,
        payload: index
    }
}

