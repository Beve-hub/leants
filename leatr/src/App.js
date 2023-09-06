
import './App.css';
import Greeting from './component/Greeting';
import Stae from './component/Stae';

function App() {
  return (
    <div className="App">
      <Greeting  name="Nigeria" hero="giant of africa"/>
      <Greeting  name="united state" hero=" giant of america"/>
      <Greeting  name="russia" hero="giant of europe"/>
      <Stae/>
    </div>
  );
}

export default App;
