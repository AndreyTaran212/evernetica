import React from 'react';
import CardListItem from './CardListItem/CardListItem';
import {useSelector} from 'react-redux';
import FavoriteItem from "./FavoriteItem/FavoriteItem";

function CardList() {
    const countries = useSelector(state => state.card.country)
    const favoriteCountry = useSelector(state => state.card.favoriteCountry)

    return (countries.length || favoriteCountry.length
            ?
            <>
                {favoriteCountry.length > 0 ? favoriteCountry.map((country, index) => <FavoriteItem index={index}
                                                                                                    country={country}
                                                                                                    key={country.name}/>) : null}
                {countries.map((country, index) => <CardListItem index={index} country={country} key={country.name}/>)}
            </>
            :
            <p>Type country in search area</p>
    )
}

export default CardList
