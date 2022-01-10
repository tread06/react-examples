import './App.css';
import CustomHooksComponent from './components/custom-hooks-component/custom-hooks-component';
import ContextHookComponent from './components/context-hook-component/context-hook-component';
import DividerComponent from './components/divider-component/divider-component';
import ConditionalRenderingComponent from './components/conditional-rendering-component/conditional-rendering-component';
import RefsComponent from './components/refs-component/refs-component';
import RenderPropsWrapperComponent from './components/render-props-wrapper-component/render-props-wrapper-component';
import RenderPropsBar1Component from './components/render-props-bar1-component/render-props-bar1-component';
import RenderPropsBar2Component from './components/render-props-bar2-component/render-props-bar2-component';
import ReduxToDoComponent from './components/redux-to-do-component/redux-to-do-component';
import AxiosComponent from './components/axios-component/axios-component';
import HomeComponent from './components/home-component/home-component';

//routing
import { Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Examples</h1>
      </header>
      <main>
        <div className='links-container'>
          <Link className='link' to="/">Home</Link>  
          <Link className='link' to="customhooks">Custom Hooks</Link>
          <Link className='link' to="context">Context</Link>
          <Link className='link' to="conditionalrendering">Conditional Rendering</Link>
          <Link className='link' to="refs">Refs</Link>
          <Link className='link' to="renderprops">Render Props</Link>
          <Link className='link' to="redux">Redux</Link>
          <Link className='link' to="axios">Axios</Link>  
        </div>

      <Routes>
        <Route path="/" element={<HomeComponent />} />    
        <Route path="customhooks" element={<CustomHooksComponent />} /> 
        <Route path="context" element={<ContextHookComponent />} /> 
        <Route path="conditionalrendering" element={<ConditionalRenderingComponent />} /> 
        <Route path="refs" element={<RefsComponent />} /> 
        <Route path="renderprops" element={<RenderPropsWrapperComponent
          bar1={(current, max) => {
            return <RenderPropsBar1Component current={current} max={max} />;
          }}
          bar2={(current, max) => {
            return <RenderPropsBar2Component current={current} max={max} />;
          }}
        />  } /> 
        <Route path="redux" element={<ReduxToDoComponent />} /> 
        <Route path="axios" element={<AxiosComponent />} />     
      </Routes>
      <DividerComponent /> 
      </main>
    </div>
  );
}

export default App;
