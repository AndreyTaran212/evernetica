import React, {useCallback, useState} from 'react';
import styles from './CardListItem.module.scss'
import {NavLink} from 'react-router-dom';
import {Button, Card, Checkbox} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {addToFavorite, deleteCountry} from '../../redux/actions';
import {Div} from '../StyledComponent/Div';
import {Container} from '../StyledComponent/Container';
import {SmallDiv} from '../StyledComponent/SmallDiv';

function CardListItem({country, index}) {
    const [isFavorite, setIsFavorite] = useState(country.isFavorite)
    const dispatch = useDispatch();


    const handleClick = useCallback(() => {
        dispatch(deleteCountry(index))
    }, [index, dispatch])

    const handleChange = useCallback(() => {
        country.isFavorite = !isFavorite
        setIsFavorite(!isFavorite)
        dispatch(addToFavorite(country))
        dispatch(deleteCountry(index))

    }, [dispatch, country, isFavorite, index])

    return (
        <Div className={styles.card}>
            <Card>
                <NavLink to={`/infopage/:${country.name}?country=${country.name}&isFavorite=${country.isFavorite}`}>
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

export default CardListItem;
