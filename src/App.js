import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';

function App() {
  const apiUrl = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

  const [query, setQuery] = useState({
    s: "",
    results: [],
    selected: {}
  });

  function handleInput(e){
    let s = e.target.value;

    setQuery(prevState => {
      return {...prevState, s}
    });
  }

  function search(e){
    if(query.s.length <= 0 || !query.s.trim()){
      return null;
    }
    axios(`${apiUrl}&s=${query.s}`)
      .then(({data}) => {
        let results = data.Search;
        setQuery(prevState => {
          return {...prevState, results}
        });
      });
      setQuery(prevState => {
        return {...prevState, s: ''}
      })
  }

  function openPopup(id){
    axios(`${apiUrl}&i=${id}`)
      .then(({data}) => {
        let result = data;
        setQuery(prevState => {
          return {...prevState, selected: result}
        });
      })
  }

  function closePopup(){
    setQuery(prevState => {
      return {...prevState, selected: {}}
    })
  }

  return (
    <div className="App">
      <Header className="App-header">
        <h1>Movie Search</h1>
      </Header>
      <Main>
        <Search value={query.s} handleInput={handleInput} search={search} />
        <Results results={query.results} openPopup={openPopup} />

        {
          (typeof query.selected.Title !== 'undefined') 
            ? <Popup selected={query.selected} closePopup={closePopup} /> 
            : null
        }
      </Main>
    </div>
  );
}

const Header = styled.header`
  background-color: #333;
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 15px 0;

  h1{
    border: 1px solid white;
    display: inline-block;
    padding: 10px;
  }
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export default App;
