import React, {lazy} from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import PageLoader from 'components/PageLoader'
import Menu from 'components/Menu'
import history from './routerHistory'

const Home = lazy(() => import('./pages/Home'));
const Project = lazy(() => import('./pages/Launchpad/Project/Layout'));
const LaunchPad = lazy(() => import('./pages/Launchpad'));
const Staking = lazy(() => import('./pages/Staking'))

const App: React.FC = () => {
  return (
   <Router history={history}>
    <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path="/launch" exact>
                <Home />
            </Route>
            <Route path="/launch/projects" exact>
              <LaunchPad />
            </Route>
            <Route path="/launch/staking" exact>
              <Staking />
            </Route>
            <Route path="/launch/projects/:ProjectAddress" component={Project} />
            {/* Redirects */}
            <Route path="/" exact>
                <Redirect to="/launch" />
            </Route>
          </Switch>
        </SuspenseWithChunkError>
    </Menu>
   </Router>
  );
}

export default App;
