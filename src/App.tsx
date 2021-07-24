import React, {lazy} from 'react';
import { Router, Redirect, Route, Switch, BrowserRouter, HashRouter } from 'react-router-dom';
import SuspenseWithChunkError from 'components/SuspenseWithChunkError'
import PageLoader from 'components/PageLoader'
import Menu from 'components/Menu'
import history from './routerHistory'

const Home = lazy(() => import('./pages/Home'));
const Project = lazy(() => import('./pages/Launchpad/Project/Layout'));
const LaunchPad = lazy(() => import('./pages/Launchpad'));
// const Staking = lazy(() => import('./pages/Staking'))

const App: React.FC = () => {
  return (
   <HashRouter  >
    <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <Switch>
            <Route path='/' exact>
                <Home />
            </Route>
            <Route path='/projects' exact>
              <LaunchPad />
            </Route>
            <Route path='/projects/:ProjectAddress' component={Project} />

            {/* <Route path="/staking" exact>
              <Staking />
            </Route> */}
            {/* Redirects */}
            {/* <Route path="/" exact> */}
            {/*    <Redirect to="/" /> */}
            {/* </Route> */}
            {/* <Route><Redirect to="/" /></Route> */}
          </Switch>
        </SuspenseWithChunkError>
    </Menu>
   </HashRouter>
  );
}

export default App;
