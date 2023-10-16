import React from 'react';
import HookThree from './component/HookThree'
import Hooksitems from './component/Hooksitems'
import EffectItems from './component/EffectItems'
import MouseContainer from './component/MouseContainer';
import Counter from './component/Counter';
import Api from './component/Api';
import ComponentC from './component/ComponentC';
import Counter5 from './component/Counter5';
import Counter6 from './component/Counter6';
import DatafetchingOne from './component/DatafetchingOne';
import Parent from './component/Parent';
import FocusInput from './component/FocusInput';
import Timer from './component/Timer';
import DocTitleOne from './component/DocTitleOne';
import Custom from './component/Custom';
import InputFoc from './component/InputFoc';




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
      </UserContext.Provider>
      <Counter5/>
      <Counter6/>*/}
      <DatafetchingOne/>
      <Parent/>
      <FocusInput/>
      <Timer/>
      <DocTitleOne/> 
      <Custom/>
      <InputFoc/> 
    </div>
  );
}

export default App;
 