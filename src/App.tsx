import React, {lazy} from 'react';
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
   <Router history={history}>
    <Menu>
        <SuspenseWithChunkError fallback={<PageLoader />}>
          <ToastContainer
           position="top-right"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
          />
          <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/projects" exact>
              <LaunchPad />
            </Route>
            <Route path="/projects/:ProjectAddress" component={Project} />

            {/* <Route path="/staking" exact>
              <Staking />
            </Route> */}
            {/* Redirects */}
            <Route path="/" exact>
                <Redirect to="/" />
            </Route>
            <Route><Redirect to="/" /></Route>
          </Switch>
        </SuspenseWithChunkError>
    </Menu>
   </Router>
  );
}

export default App;
