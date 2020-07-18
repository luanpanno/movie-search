import React from 'react';
import styled from 'styled-components';

import Result from './Result';

const Results = props => {
    return (
        <Section className="results">
            {(props.results !== undefined) 
                ? props.results.map(result => (
                    <Result result={result} key={result.imdbID} openPopup={props.openPopup} />
                ))
                : <p>Result not found.</p>}
            
        </Section>
    );
}

const Section = styled.section`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
    max-width: 960px;
`;

export default Results;