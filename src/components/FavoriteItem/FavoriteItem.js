import React, {useCallback, useState} from 'react';
import styles from './FavoriteItem.module.scss'
import {NavLink} from "react-router-dom";
import {Button, Card, Checkbox} from '@material-ui/core';
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import {addToFavorite, deleteCountry, removeFavorite} from "../../redux/actions";

const Div = styled.div`
height: 110px;
width: 210px;
`
const SmallDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Container = styled.div`
margin: 7px;
`

function FavoriteItem({country, index}) {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(true)
    country.isFavorite = isFavorite

    const handleClick = useCallback(() => {
        country.isFavorite = false
        dispatch(removeFavorite(index))
    }, [index, dispatch, removeFavorite, setIsFavorite])

    const handleChange = useCallback(() => {
        country.isFavorite = setIsFavorite((isFavorite) => !isFavorite)
        if (!isFavorite) {
            dispatch(addToFavorite(country))
            dispatch(deleteCountry(index))
        } else {
            dispatch(removeFavorite(index))
        }
    }, [index, dispatch, addToFavorite, isFavorite, removeFavorite])


    return (
        <Div className={styles.card}>
            <Card>
                <NavLink to={`/infopage/:${country.name}`}>
                    <Container>
                        {country.name}
                    </Container>
                    <Container>
                        {country.alpha2Code}
                    </Container>
                </NavLink>
                <SmallDiv className={styles.box}>
                    <Button variant="contained" color="secondary" onClick={handleClick} style={{cursor: 'pointer'}}>
                        Delete
                    </Button>
                    <Checkbox onChange={handleChange} checked={country.isFavorite}/>
                </SmallDiv>
            </Card>
        </Div>
    );
}

export default FavoriteItem;
