import './App.css';
import CustomHooksComponent from './components/custom-hooks-component/custom-hooks-component';
import ContextHookComponent from './components/context-hook-component/context-hook-component';
import DividerComponent from './components/divider-component/divider-component';
import ConditionalRenderingComponent from './components/conditional-rendering-component/conditional-rendering-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Examples</h1>
      </header>
      <CustomHooksComponent />
      <DividerComponent />
      <ContextHookComponent />
      <DividerComponent />
      <ConditionalRenderingComponent />
    </div>
  );
}

export default App;
