import React from 'react';
import {useState, useRef, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {CircularProgress} from '@material-ui/core';
import CardList from '../components/CardList';
import {fetchCountry} from "../redux/actions";
import {DivMain} from "../components/StyledComponent/DivMain";
import {Form} from "../components/StyledComponent/Form";
import {useHistory} from "react-router-dom";


function SearchPage() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    const loading = useSelector(state => state.app.loading)
    const history = useHistory()
    const inputRef = useRef(null)
    const searchParams = new URLSearchParams(history.location.search)
    const item = searchParams.get('text')

    useEffect(() => {
        inputRef.current.focus();
    });


    const handleChange = e => {
        e.preventDefault()
        setInput(e.target.value)
    };

    const handleRefresh = e => {
        e.preventDefault()
        setInput('')
    };

    useEffect(() => dispatch(fetchCountry(input || item, false)), [input]);

    return (
        <DivMain>
            <Form>
                <input
                    placeholder='type country'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}/>
                <input type="submit" value="Submit"/>
                <button onClick={handleRefresh}>
                    Reset
                </button>
            </Form>
            {
                loading ? <CircularProgress/> : <CardList/>
            }
        </DivMain>
    )
}

export default SearchPage
