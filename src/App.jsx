import React, {useState, useEffect} from "react";
import PlayerThrow from "./components/PlayerThrow";
import ComputerThrow from "./components/ComputerThrow";
import ResultDisplay from "./components/ResultDisplay";
import './styles.css';

function App(){
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState('?');
    const [result, setResult] = useState(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const choices = ["rock", "paper", "scissors"];

    const handlePlayerSelect = (choice) => {
        setPlayerChoice(choice);
        setIsAnimating(true);
        setResult('');
    };

    useEffect(() => {
        if (!isAnimating) return;

        const shuffleInterval = setInterval(() => {
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            setComputerChoice(randomChoice);
        }, 500);

        const stopTimer = setTimeout(() => {
            clearInterval(shuffleInterval);
            setIsAnimating(false);

            const finalComputerChoice = choices[Math.floor(Math.random() * choices.length)];
            setComputerChoice(finalComputerChoice);
            determineResult(playerChoice, finalComputerChoice);
        }, 3000);

        return () => {
            clearInterval(shuffleInterval);
            clearTimeout(stopTimer);
        };
    }, [isAnimating, playerChoice]);

    const determineResult = (player, computer) => {
        if (player === computer) {
            setResult("It's a tie!");
        } else if ((player === "rock" && computer === "scissors") ||
                   (player === "paper" && computer === "rock") ||
                   (player === "scissors" && computer === "paper")) {
            setResult("You win!");
        } else {
            setResult("You Lose!");
        }
        };
    return(
        <main>
            <h1>Rock Paper Scissors</h1>
            <PlayerThrow onSelect={handlePlayerSelect} selectedChoice={playerChoice} isAnimating={isAnimating} />
            <ComputerThrow computerChoice={computerChoice} isAnimating={isAnimating} />
            <ResultDisplay result={result} />
        </main>
    );
}

export default App;