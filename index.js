import React, { useState, useEffect } from 'react';
import './App.css';

const TamagotchiApp = () => {
  const [hunger, setHunger] = useState(0);
  const [happiness, setHappiness] = useState(0);
  const [energy, setEnergy] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setHunger(prevHunger => prevHunger + 1);
      setHappiness(prevHappiness => prevHappiness - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const feed = () => {
    if (hunger > 0) {
      setHunger(prevHunger => prevHunger - 1);
    }
  };

  const play = () => {
    if (energy > 10) {
      setHappiness(prevHappiness => prevHappiness + 1);
      setEnergy(prevEnergy => prevEnergy - 10);
    }
  };

  const sleep = () => {
    if (energy < 100) {
      setEnergy(prevEnergy => prevEnergy + 10);
    }
  };

  return (
    <div className="tamagotchi-container">
      <h1>Tamagotchi App</h1>
      <div>
        <h2>Hunger: {hunger}</h2>
        <button onClick={feed}>Feed</button>
      </div>
      <div>
        <h2>Happiness: {happiness}</h2>
        <button onClick={play}>Play</button>
      </div>
      <div>
        <h2>Energy: {energy}</h2>
        <button onClick={sleep}>Sleep</button>
      </div>
    </div>
  );
};

export default TamagotchiApp;