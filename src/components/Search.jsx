import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Search = props => {
    function handleSubmit(e){
        e.preventDefault();

        props.search();
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Input 
                type="text" 
                placeholder="Search for a movie..." 
                className="searchbox"
                onChange={props.handleInput}
                value={props.value}
            />
            <Icon ><FontAwesomeIcon icon={faSearch} /></Icon>
        </Form>
    );
}

const Form = styled.form`
    background-color: #fff;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .2);
    border-radius: 8px;
    margin: 25px;
    padding: 20px 40px;
    width: 100%;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    transition: 200ms ease-out;

    :hover{
        box-shadow: 0px 0px 5px 1px #4484C4;
    }
`;

const Input = styled.input`
    border: none;
    outline: none;
    background-color: transparent;
    font-size: 1.4rem;
    width: 100%;
    color: #444;
`;

const Icon = styled.button`
    color: white;
    background-color: transparent;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    color: #444;
`;

export default Search;