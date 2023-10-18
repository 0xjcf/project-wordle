import React from "react";

type GuessInputProps = {
  handleSubmitGuess: (guess: string) => void;
};

function GuessInput({ handleSubmitGuess }: GuessInputProps) {
  const [guess, setGuess] = React.useState("");
  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmitGuess(guess);
        setGuess("");
      }}
    >
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
        required
      />
    </form>
  );
}

export default GuessInput;