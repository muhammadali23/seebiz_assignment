function Child(props) {
  // eslint-disable-next-line react/prop-types
  const { onIncrement, onDecrement } = props;
  return (
    <div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  );
}

export default Child;
