import { useRef, useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

function Fourth() {
  const context = useContext(CounterContext);
  const numberInputRef = useRef(null);

  const handleClick = () => {
    context.dispatch({
      type: 'USER_INPUT',
      payload: numberInputRef.current.value,
    });
    numberInputRef.current.value = 0;
  };

  return (
    <div>
      {context.state}
      <button onClick={() => context.dispatch({ type: 'INCREMENT' })}>
        Increment
      </button>
      <button onClick={() => context.dispatch({ type: 'DECREMENT' })}>
        Decrement
      </button>
      <button onClick={() => context.dispatch({ type: 'RESET' })}>Reset</button>
      <input type="number" ref={numberInputRef} />
      <button onClick={handleClick}>Add to count</button>
    </div>
  );
}
export default Fourth;
