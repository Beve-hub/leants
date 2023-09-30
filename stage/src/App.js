import FragmentDemo from "./component/FragmentDemo";
import Hero from "./component/Hero";
import PortalDom from "./component/PortalDom";
import Refsmemo from "./component/Refsmemo";
import Table from "./component/Table";
import  Counter from './component/Counter';
import Hover from "./component/Hover";
import Clickcount from "./component/Clickcount";
import HoverCounter2 from "./component/HoverCounter2";
import User from "./component/User";
import CountOn from "./component/CountOn";
import ComponentC from "./component/ComponentC";
import { UserProvider } from "./component/UserContext";


function App() {
  return (
   <div>
   {/* <CountOn render={(count,handleClick) => (
      <Clickcount count={count} handleClick={handleClick}/>
    )}/>
     <CountOn render={(count,handleClick) => (
      <HoverCounter2 count={count} handleClick={handleClick}/>
    )}/>
    <Table/>
    <FragmentDemo/>
    <Refsmemo/>
    <PortalDom/>
    < Counter/>
    <Hover/>
    <Hero heroname="Batman"/>
    <Hero heroname="Superman"/>
    <Clickcount/>
    <HoverCounter2/>
    <User render={(isLoggedIn)
     =>isLoggedIn ? 'victor' : 'Guest'} /> */}
     <UserProvider value="victor">
     <ComponentC/>
     </UserProvider>
    </div>
  );
}

export default App;
 