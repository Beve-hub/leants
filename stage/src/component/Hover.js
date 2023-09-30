
import UpdatedComponent from './Withcounter';

function Hover({ increase, count }) {
    
  return (
    <div>
      <h2 onMouseOver={increase}>Hover {count} times</h2>
    </div>
  )
}

export default UpdatedComponent(Hover)
