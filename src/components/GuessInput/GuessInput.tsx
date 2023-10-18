import React, { useState, FormEvent } from "react";

type GuessInputProps = {
  disabled: boolean;
  handleSubmitGuess: (guess: string) => void;
};

function GuessInput({ disabled, handleSubmitGuess }: GuessInputProps) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmitGuess(guess);
    setGuess("");
  }

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        name="guess-input"
        type="text"
        value={guess}
        onChange={(e) => {
          setGuess(e.target.value.toUpperCase());
        }}
        maxLength={5}
        pattern="[A-Z]{5}"
        title="5 letter word"
        required
        disabled={disabled}
      />
    </form>
  );
}

export default GuessInput;
