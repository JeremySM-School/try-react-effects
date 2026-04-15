import React from "react";
const ComputerThrow = ({ computerChoice, isAnimating }) => {
    const imageSrc = computerChoice === '?' ? '/images/question.png' : `/images/${computerChoice}.png`;

    return(
        <section className="computer-throw">
        <h3>Computer's Throw</h3>
        <div className={`computer-image-container ${isAnimating ? 'animating' : ''}`}>
        <img
            src={imageSrc}
            alt={computerChoice === '?' ? 'waiting' : computerChoice}
        />
        </div>
    </section>
    );
    };
    export default ComputerThrow;