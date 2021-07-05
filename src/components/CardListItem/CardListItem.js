import React, {useCallback, useEffect, useState} from 'react';
import styles from './CardListItem.module.scss'
import {NavLink} from "react-router-dom";
import {Button, Card, Checkbox} from '@material-ui/core';
import styled from "styled-components";
import {useDispatch} from 'react-redux';
import {addToFavorite, deleteCountry, removeFavorite} from "../../redux/actions";
import removeByAttr from "../../utils/utils";

const Div = styled.div`
height: 110px;
width: 210px;
margin: 5px 10px 5px 10px;
`
const SmallDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Container = styled.div`
margin: 7px;
`

function CardListItem({country, index}) {
    const [isFavorite, setIsFavorite] = useState(false)
    country.isFavorite = isFavorite

    let data = JSON.parse(localStorage.getItem('favorite'))

    useEffect(() => {
        if (isFavorite) {
            data.push(country)
            localStorage.setItem('favorite', JSON.stringify(data))
        } else {
            removeByAttr(data, "name", country.name)
            localStorage.setItem('favorite', JSON.stringify(data))
        }
    }, [isFavorite])

    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        setIsFavorite(false)
        country.isFavorite = isFavorite
        dispatch(deleteCountry(index))
    }, [index, dispatch, deleteCountry, setIsFavorite])

    const handleChange = useCallback(() => {
        country.isFavorite = setIsFavorite((isFavorite)=>!isFavorite)
        if (!isFavorite) {
            dispatch(addToFavorite(country))
            dispatch(deleteCountry(index))
        }else {dispatch(removeFavorite(index))}
    }, [index, dispatch, addToFavorite, isFavorite, removeFavorite, ])

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
                    <Checkbox onChange={handleChange}/>
                </SmallDiv>
            </Card>
        </Div>
    );
}

export default CardListItem;
