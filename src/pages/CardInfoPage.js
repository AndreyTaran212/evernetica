import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchCountry} from "../redux/actions";
import {CircularProgress} from '@material-ui/core';

function CardInfoPage() {
    const dispatch = useDispatch()
    const history = useHistory()
    const {code} = useParams()
    const searchParams = new URLSearchParams(history.location.search)
    const item = searchParams.get('country')
    const isFavorite = searchParams.get('isFavorite')
    const isTrue = isFavorite === "true";
    const countries = useSelector(state => state.card.country)
    if (countries.length === 0){
        dispatch(fetchCountry(item, isTrue))
    }
    const oneCountry = countries.find(item => item.name === code.slice(1)) || countries[0]

    return (<>{
        countries.length === 0 ? <CircularProgress/> :
            <div>
                <h1>{oneCountry.name} {oneCountry.isFavorite ? "Pinned" : ''}</h1>
                <p>Alt spelling:</p>
                {oneCountry.altSpellings.length ? oneCountry.altSpellings.map((spelling, index) => {
                    return <li key={index}>{spelling}</li>
                }) : <p>none</p>}
                <p>Borders:</p>
                {oneCountry.borders.length ? oneCountry.borders.map((border, index) => {
                    return <li key={index}>{border}</li>
                }) : <p>none</p>}
            </div>
    }
        </>
    )
}

export default CardInfoPage
