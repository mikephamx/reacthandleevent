
import './App.css';
import HandleEvent from './Component/HandleEvent/HandleEvent';
import RenderingCondition from './Component/RenderCondition/RenderingCondition';
import State from './Component/StateAndSetState/State';
import Styling from './Component/StylingCSS/Styling';

function App() {
  return (
    <div className="App">
      <HandleEvent />
      <RenderingCondition/>
      <State/>
      <Styling/>
    </div>
  );
}

export default App;
