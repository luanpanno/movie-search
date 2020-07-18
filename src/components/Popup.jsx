import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const Popup = props => {
    return (
        <Section className="popup">
            <div className="content">
                <img src={props.selected.Poster} alt="poster"/>
                <div className="info">
                    <h2>{props.selected.Title} <span>({props.selected.Year})</span></h2>
                    <p>{props.selected.Plot}</p>
                    <p>Rating IMDB: <span>{props.selected.imdbRating}</span></p>
                    <p>Director: <span>{props.selected.Director}</span></p>
                    <p>Writer(s): <span>{props.selected.Writer}</span></p>
                    <p>Actors: <span>{props.selected.Actors}</span></p>
                    <p>Release: <span>{props.selected.Released}</span></p>
                    <p>Genre: <span>{props.selected.Genre}</span></p>
                    <button className="close" onClick={props.closePopup}><FontAwesomeIcon icon={faTimes} /></button>
                </div>
            </div>
        </Section>
    );
}

const Section = styled.section`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    background-color: rgba(255, 255, 255, .8);
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        min-width: 40%;
    }

    .content{
        display: flex;
        width: 100%;
        max-width: 960px;
        background-color: white;
        border-radius: 8px;
        box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, .4);
        max-width: 960px;
        position: relative;
    }

    .info{
        padding: 15px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    p{
        font-weight: 500;
        font-size: 1.2rem;

        span{
            font-weight: 300;
        }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -10px;
        right: -10px;
        font-size: 1.5rem;
        width: 35px;
        height: 35px;
        border: 2px solid #6e0000;
        border-radius: 100%;
        color: white;
        background-color: #ff5353;
        cursor: pointer;
    }
`;

export default Popup;