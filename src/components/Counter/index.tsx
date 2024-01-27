import { useState, useEffect } from 'react';

type CounterProps = {
  initialCount: number;
  onMount: () => void;
  onUnmount: () => void;
  onUpdate: (value: number) => void;
};

export const Counter: React.FC<CounterProps> = ({ initialCount, onMount, onUnmount, onUpdate }) => {
  const [count, setCount] = useState(initialCount);

  useEffect(() => {
    onMount();

    const cleanup = () => {
      onUnmount();
    };

    return cleanup;
  }, []);

  useEffect(() => {
    onUpdate(count);

    if (count === 10) {
      setCount(0);
    }
  }, [count]);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <h2>Contador: {count}</h2>
      <button onClick={handleIncrement}>Incrementar +</button>
    </div>
  );
};
