import HookThree from './component/HookThree'
import Hooksitems from './component/Hooksitems'
import EffectItems from './component/EffectItems'
import HookMount from './component/HookMount';
import MouseContainer from './component/MouseContainer';
import Counter from './component/Counter';

function App() {
  return (
    <div >
      <HookThree/>
      <Hooksitems/>
      <EffectItems/>
      {/*<HookMount/>*/}
      <MouseContainer/>
      <Counter/>
    </div>
  );
}

export default App;
