import React, { useState } from "react";

import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import GameWonBanner from "../GameWonBanner";
import GameLostBanner from "../GameLostBanner";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import { GameStatus, Guesses } from "../../types";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState<Guesses>([]);
  const [gameStatus, setGameStatus] = useState<GameStatus>("running");

  const handleSubmitGuess = (guess: Uppercase<string>) => {
    const nextGuess = { value: guess, id: crypto.randomUUID() };
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);

    if (guess === answer) {
      setGameStatus("won");
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus("lost");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput
        disabled={gameStatus != "running"}
        handleSubmitGuess={handleSubmitGuess}
      />
      {gameStatus === "won" && <GameWonBanner guessCount={guesses.length} />}
      {gameStatus === "lost" && <GameLostBanner answer={answer} />}
    </>
  );
}

export default Game;
