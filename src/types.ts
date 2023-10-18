export type UUID = `${string}-${string}-${string}-${string}-${string}`;

export type GuessStatus = "correct" | "incorrect" | "misplaced";

export type CheckedGuess = { letter: string; status: GuessStatus };

export type GameStatus = "won" | "lost" | "running";

export type Guess = {
  value: string;
  id: UUID;
};

export type Guesses = Guess[];
