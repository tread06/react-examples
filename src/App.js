import './App.css';
import CustomHooksComponent from './components/custom-hooks-component/custom-hooks-component';
import ContextHookComponent from './components/context-hook-component/context-hook-component';
import DividerComponent from './components/divider-component/divider-component';
import ConditionalRenderingComponent from './components/conditional-rendering-component/conditional-rendering-component';
import RefsComponent from './components/refs-component/refs-component';
import RenderPropsWrapperComponent from './components/render-props-wrapper-component/render-props-wrapper-component';
import RenderPropsBar1Component from './components/render-props-bar1-component/render-props-bar1-component';
import RenderPropsBar2Component from './components/render-props-bar2-component/render-props-bar2-component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Examples</h1>
      </header>
      <main>
        <CustomHooksComponent />
        <DividerComponent />
        <ContextHookComponent />
        <DividerComponent />
        <ConditionalRenderingComponent />
        <DividerComponent />
        <RefsComponent />
        <DividerComponent />
        <RenderPropsWrapperComponent
          bar1={(current, max) => {
            return <RenderPropsBar1Component current={current} max={max} />;
          }}
          bar2={(current, max) => {
            return <RenderPropsBar2Component current={current} max={max} />;
          }}
        />
        <DividerComponent />
      </main>
    </div>
  );
}

export default App;
