import ProjectDetails from './pages/ProjectDetails';
import {Route, Switch} from 'wouter';
import Mint from './pages/Mint';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Projects from './pages/Projects';
import Footer from './components/Footer';

/**
 * @dev This component handles routing for the application
 * @return {any} The children of this router
 */
function App() {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
        <Switch>
          <Route path="/projects/:id" component={ProjectDetails} />
          <Route path="/mint" component={Mint} />
          <Route path="/projects" component={Projects} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
