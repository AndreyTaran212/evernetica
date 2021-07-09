import React, {useCallback} from 'react';
import styles from './FavoriteItem.module.scss'
import {NavLink} from 'react-router-dom';
import {Button, Card, Checkbox} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {removeFavorite} from '../../redux/actions';
import {Div} from '../StyledComponent/Div';
import {Container} from '../StyledComponent/Container';
import {SmallDiv} from '../StyledComponent/SmallDiv';

function FavoriteItem({country, index}) {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(removeFavorite(index))
    }, [index, dispatch])

    const handleChange = useCallback(() => {
        country.isFavorite = !country.isFavorite
        dispatch(removeFavorite(index))
    }, [index, dispatch, country])

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

export default FavoriteItem;
