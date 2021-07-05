import React from 'react';
import {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CircularProgress} from '@material-ui/core';
import CardList from '../components/CardList';
import styled from 'styled-components';
import {fetchCountry} from "../redux/actions";


const DivMain = styled.div`
height: 100%;
width: 100%;
margin: 5px 5px 5px 5px;
display: flex;
align-items: center;
flex-direction: row;
flex-wrap: wrap;
`
const Form = styled.form`
width: 95vw;
`


function SearchPage() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const loading = useSelector(state => state.app.loading)
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = e => {
        e.preventDefault()
        setInput(e.target.value);
    };

    const handleRefresh = e => {
        e.preventDefault()
        setInput('');
    };

    useEffect(() => dispatch(fetchCountry(input)), [input]);

    return (
        <DivMain>
            <Form>
                <>
                    <input
                        placeholder='type country'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}/>
                    <button onClick={handleRefresh}>
                        Reset
                    </button>
                </>
            </Form>
            {
                loading ? <CircularProgress/> : <CardList/>
            }
        </DivMain>
    )
}

export default SearchPage
