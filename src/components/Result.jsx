import React from 'react';
import styled from 'styled-components';

const Result = props => {
    return (
        <Div className="result" onClick={() => props.openPopup(props.result.imdbID)}>
            <img src={props.result.Poster} alt="poster" />
            <h3>{props.result.Title}</h3>
        </Div>
    );
}

const Div = styled.div`
    width: 30%;
    min-width: 250px;
    padding: 10px 0;
    margin: 0 5px;
    display: flex;
    flex-direction: column;
    text-align: center;
    cursor: pointer;
    min-height: 500px;

    :hover h3{
        color: white;
        background-color: #445565;
    }
    
    img{
        display: block;
        width: 100%;
    }
    
    h3{
        font-size: 20px;
        font-weight: 600;
        padding: 10px;
        flex: 1 1 100%;
        transition: 200ms ease-out;
        background-color: #FFF;
        color: #223343;
        box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, .5);
        border-bottom-right-radius: 8px;
        border-bottom-left-radius: 8px;
    }
`;

export default Result;