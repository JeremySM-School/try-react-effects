import React from "react";

const PlayerThrow = ({ onSelect, selectedChoice, isAnimating }) => {
    const choices = ["rock", "paper", "scissors"];
    return (
        <div className="player-throw">
            {choices.map((choice) => (
                <img
                    key={choice}
                    src = {`/images/${choice}.png`}
                    alt={choice}
                    onClick={() => !isAnimating && onSelect(choice)}
                    className={selectedChoice === choice ? "selected" : ""}
                />
            ))}
        </div>
    );
};

export default PlayerThrow;