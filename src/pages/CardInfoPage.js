import React from 'react';
import {useParams} from "react-router-dom";
import {useSelector} from 'react-redux';

function CardInfoPage() {
    const countries = useSelector(state => state.card.country)
    const favorite = useSelector(state=>state.card.favoriteCountry)
    const all = countries.concat(favorite)
    const {code} = useParams();
    const oneCountry = all.find(item => item.name === code.slice(1)) || JSON.parse(localStorage.getItem("onecountry"))
    localStorage.setItem("onecountry", JSON.stringify(oneCountry));


    return (
        <div>
            <h1>{oneCountry.name}</h1>
            <p>Alt spelling:</p>
            {oneCountry.altSpellings.length ? oneCountry.altSpellings.map((spelling, index) => {
                return <li key={index}>{spelling}</li>
            }) : <p>none</p>}
            <p>Borders:</p>
            {oneCountry.borders.length ? oneCountry.borders.map((border, index) => {
                return <li key={index}>{border}</li>
            }) : <p>none</p>}
        </div>
    )
}

export default CardInfoPage
