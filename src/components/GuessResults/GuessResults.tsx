import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { Guesses } from "../../types";

type GuessResultsProps = {
  guesses: Guesses;
  answer: string;
};

function GuessResults({ guesses, answer }: GuessResultsProps) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((i: number) => {
        return (
          <Guess
            key={`guess-${guesses[i]?.id || i}`}
            value={guesses[i]?.value}
            answer={answer}
          />
        );
      })}
    </div>
  );
}

export default GuessResults;
