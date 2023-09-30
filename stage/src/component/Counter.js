import UpdatedComponent from './Withcounter';

function Counter({ increase, count }) {
  return (
    <div>
      <button onClick={increase}>Clicked {count} times</button>
    </div>
  );
}

export default UpdatedComponent(Counter);
