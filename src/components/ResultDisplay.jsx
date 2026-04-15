import React from 'react';

const ResultDisplay = ({ result }) => {
    if (!result) return null;

    return (
        <section className="result-display">
            <h2>{result}</h2>
        </section>

    );
};
export default ResultDisplay;