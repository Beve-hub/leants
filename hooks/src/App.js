import React from 'react';
import HookThree from './component/HookThree'
import Hooksitems from './component/Hooksitems'
import EffectItems from './component/EffectItems'
import MouseContainer from './component/MouseContainer';
import Counter from './component/Counter';
import Api from './component/Api';
import ComponentC from './component/ComponentC';
import Counter5 from './component/Counter5';



export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

function App() {
  return (
    <div >
     {/* <HookThree/>
      <Hooksitems/>
      <EffectItems/>
      <HookMount/>
      <MouseContainer/>
      <Counter/>
      <Api/>
      <UserContext.Provider value={'victor'}>
         <ChannelContext.Provider value={'conden'}>
         <ComponentC/>
         </ChannelContext.Provider>
      </UserContext.Provider>*/}
      <Counter5/>
    </div>
  );
}

export default App;
 