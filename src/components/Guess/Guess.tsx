import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

type CellProps = {
  value: string;
  status: string;
};

function Cell({ value, status }: CellProps) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{value}</span>;
}

type GuessProps = {
  value: string;
  answer: string;
};

function Guess({ value, answer }: GuessProps) {
  const checkedGuess = checkGuess(value, answer);
  return (
    <div className="guess">
      {range(5).map((i: number) => (
        <Cell
          key={`cell-${i}`}
          value={checkedGuess?.[i]?.letter}
          status={checkedGuess?.[i]?.status}
        />
      ))}
    </div>
  );
}

export default Guess;
