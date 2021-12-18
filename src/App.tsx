import Project from './pages/project';
import {Route} from 'wouter';
import Mint from './pages/mint';
import Home from './pages/home';

/**
 * @dev This component handles routing for the application
 * @return {any} The children of this router
 */
function App() {
  return (
    <>
      <Route path="/project/:id" component={Project} />
      <Route path="/mint" component={Mint} />
      <Route path="/" component={Home} />
    </>
  );
}

export default App;
