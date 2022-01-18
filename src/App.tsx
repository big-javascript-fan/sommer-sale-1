import Project from './pages/project';
import {Route, Switch} from 'wouter';
import Mint from './pages/mint';
import Home from './pages/home';
import Portfolio from './pages/Portfolio';
import Header from './components/Header';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import 'react-notifications-component/dist/theme.css';
import ReactNotification from 'react-notifications-component';

/**
 * @dev This component handles routing for the application
 * @return {any} The children of this router
 */
function App() {
  return (
    <>
      <ReactNotification />
      <Header />
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-900">
        <Switch>
          <Route path="/mint" component={Mint} />
          <Route path="/projects" component={Projects} />
          <Route path="/projects/:id" component={Project} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
