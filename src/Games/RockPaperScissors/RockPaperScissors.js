import React from "react";
import { useState } from "react";
import { useRef } from "react";
import rockIMG from "../../images/rock.png"
import paperIMG from "../../images/paper.png"
import scissorsIMG from "../../images/scissors.png"
import player from "../../images/player.png"
import computer from "../../images/computer.png"
import { Nav } from "../../Nav/Nav";

export const RockPaperScissors = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const playerChoiceImageRef = useRef(null)
    const computerChoiceImageRef = useRef(null)
    const [playerChoice, setPlayerChoice] = useState(null)
    const [computerChoice, setComputerChoice] = useState(null)
    const titleRef = useRef(null)

    const determineWinner = (playerChoice, computerChoice) => {

        if (playerChoice === computerChoice) {

            return titleRef.current.innerHTML = `Tie!`
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return titleRef.current.innerHTML = `You win!`
            
        } else {
            return titleRef.current.innerHTML = `Computer win!`
        }
        setPlayerChoice(null)
    };


    const handlePlayerChoice = (choice) => {
        const randomIndex = Math.floor(Math.random() * choices.length);
        const randomComputerChoice = choices[randomIndex];

        setPlayerChoice(choice);
        setComputerChoice(randomComputerChoice)
        determineWinner(choice, randomComputerChoice);

        if (computerChoiceImageRef.current) {
            if (randomComputerChoice === 'rock') {
                computerChoiceImageRef.current.src = rockIMG;
            } else if (randomComputerChoice === 'paper') {
                computerChoiceImageRef.current.src = paperIMG;
            } else if (randomComputerChoice === 'scissors') {
                computerChoiceImageRef.current.src = scissorsIMG;
            }
        }

        if (playerChoiceImageRef.current) {
            if (choice === 'rock') {
                playerChoiceImageRef.current.src = rockIMG;
            } else if (choice === 'paper') {
                playerChoiceImageRef.current.src = paperIMG;
            } else if (choice === 'scissors') {
                playerChoiceImageRef.current.src = scissorsIMG;
            }
        }
    };

    return (
        <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-sky-500 dark:from-sky-950 via-sky-500 dark:via-sky-800 to-yellow-500 dark:to-sky-950 w-[1620px] h-screen">
                <Nav />
                <div className="flex flex-col items-center justify-center">
                    <h2 ref={titleRef} className="text-3xl font-bold text-white dark:text-cyan-300 mb-10 mt-2">Rock Paper Scissors</h2>
                    <div className="flex flex-col bg-inherit relative">
                        <div className="flex">
                            <div className="mx-auto border-4 dark:border-cyan-500 bg-sky-500 w-36 sm:w-72 md:w-80 h-auto lg:w-96 flex items-center justify-center">
                                <img className="w-6 sm:w-8 md:w-10 lg:w-12 mt-2 mb-2" src={player} alt="player" />
                            </div>
                            <div className="mx-auto border-4 dark:border-cyan-500 bg-red-500 w-36 sm:w-72 md:w-80 h-auto lg:w-96 flex items-center justify-center">
                                <img className="w-6 sm:w-8 md:w-10 lg:w-12 mt-2 mb-2" src={computer} alt="computer" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="mx-auto border-2 dark:border-cyan-500 w-36 h-36 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:h-96 lg:w-96">
                                {playerChoice === 'rock' && <img src={rockIMG} ref={playerChoiceImageRef} alt="Player Choice" />}
                                {playerChoice === 'paper' && <img src={paperIMG} ref={playerChoiceImageRef} alt="Player Choice" />}
                                {playerChoice === 'scissors' && <img src={scissorsIMG} ref={playerChoiceImageRef} alt="Player Choice" />}
                            </div>
                            <div className="mx-auto border-2 dark:border-cyan-500 w-36 h-36 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:h-96 lg:w-96">
                                {computerChoice === 'rock' && <img src={rockIMG} ref={computerChoiceImageRef} alt="Computer Choice" />}
                                {computerChoice === 'paper' && <img src={paperIMG} ref={computerChoiceImageRef} alt="Computer Choice" />}
                                {computerChoice === 'scissors' && <img src={scissorsIMG} ref={computerChoiceImageRef} alt="Computer Choice" />}
                            </div>
                        </div>
                        <div className="my-20 flex justify-center items-center">
                            <button onClick={() => handlePlayerChoice('rock')} class="bg-sky-600 border-b-2 border-sky-700 hover:bg-sky-700  hover:border-sky-600 dark:hover:border-cyan-500 dark:border-cyan-300  dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mx-auto transition ease-in-out delay-150 hover:-translate-y-1 shadow-xl flex items-center justify-center w-14 h-8 text-sm sm:text-sm sm:w-16 sm:h-10 md:text-sm md:w-16 md:h-9 lg:text-lg lg:w-24 lg:h-12">
                                Rock
                            </button>
                            <button onClick={() => handlePlayerChoice('paper')} class="bg-sky-600 border-b-2 border-sky-700 hover:bg-sky-700  hover:border-sky-600 dark:hover:border-cyan-500 dark:border-cyan-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mx-auto transition ease-in-out delay-150 hover:-translate-y-1 shadow-xl flex items-center justify-center w-14 h-8 text-sm sm:text-sm sm:w-16 sm:h-10 md:text-sm md:w-16 md:h-9 lg:text-lg lg:w-24 lg:h-12">
                                Paper
                            </button>
                            <button onClick={() => handlePlayerChoice('scissors')} class="bg-sky-600 border-b-2 border-sky-700 hover:bg-sky-700  hover:border-sky-600 dark:hover:border-cyan-500 dark:border-cyan-300 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded mx-auto transition ease-in-out delay-150 hover:-translate-y-1 shadow-xl flex items-center justify-center w-14 h-8 text-sm sm:text-sm sm:w-16 sm:h-10 md:text-sm md:w-16 md:h-9 lg:text-lg lg:w-24 lg:h-12">
                                Scissors
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}