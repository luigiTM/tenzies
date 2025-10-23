import { useState } from 'react';
import './App.css';
import Die from './components/Die';
import { nanoid } from 'nanoid';
import Confetti from 'react-confetti';

const MAX_DICE = 10;

function App() {
  const [dice, setDice] = useState(() => generateDiceElements(MAX_DICE));

  const gameWon =
    dice.every((die) => die.isHeald) &&
    dice.every((die) => die.value === dice[0].value);

  function generateDiceElements(numberOfDice: number) {
    return Array(numberOfDice)
      .fill(null)
      .map(() => ({
        id: nanoid(),
        value: Math.ceil(Math.random() * 6),
        isHeald: false,
      }));
  }

  function rollDice() {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeald
          ? die
          : {
              ...die,
              value: Math.ceil(Math.random() * 6),
            }
      )
    );
  }

  function newGame() {
    setDice(generateDiceElements(MAX_DICE));
  }

  function holdDie(id: string) {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.id === id ? { ...die, isHeald: !die.isHeald } : die
      )
    );
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <div aria-live="polite" className="sr-only">
        {gameWon && (
          <p>
            Parabéns! Você ganhou! Precione o botão "Novo Jogo" para começar
            novamente.
          </p>
        )}
      </div>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Role os dados até todos terem o mesmo valor. Clique em cada dado para
        manter o valor atual.
      </p>
      <div className="dice-container">
        {dice.map((die) => (
          <Die
            key={die.id}
            value={die.value}
            isHeald={die.isHeald}
            holdDie={() => holdDie(die.id)}
          />
        ))}
      </div>
      <button className="roll-dice" onClick={gameWon ? newGame : rollDice}>
        {gameWon ? 'Novo jogo' : 'Rolar dados'}
      </button>
    </main>
  );
}

export default App;
