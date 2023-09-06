
import './App.css';
import Bind from './component/Bind';
import Eventbind from './component/Eventbind';
import FunctionClick from './component/FunctionClick';
import Greeting from './component/Greeting';
import ParentComponent from './component/ParentComponent';
import Stae from './component/Stae';


function App() {
  return (
    <div className="App">
      <Greeting  name="Nigeria" hero="giant of africa"/>
      <Greeting  name="united state" hero=" giant of america"/>
      <Greeting  name="russia" hero="giant of europe"/>
      <Stae/>
      <FunctionClick/>
      <Eventbind/>
      <Bind/>
      <ParentComponent/>
    </div>
  );
}

export default App;
