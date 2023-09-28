import Bind from './component/Bind';
import Eventbind from './component/Eventbind';
import Form from './component/Form';
import FunctionClick from './component/FunctionClick';
import Greeting from './component/Greeting';
import LifecycleA from './component/LifecycleA';
import NameList from './component/NameList';
import ParentComponent from './component/ParentComponent';
import Stae from './component/Stae';
import UserGreeting from './component/UserGreeting';
import Tipping from './component/practice/Tipping';






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
      <Tipping/>
      <UserGreeting/>
      <LifecycleA/>
      <NameList/>
      <Form/>
    </div>
  );
}

export default App;
