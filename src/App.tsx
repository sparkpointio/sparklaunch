import React, { lazy } from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuspenseWithChunkError from 'components/SuspenseWithChunkError';
import PageLoader from 'components/PageLoader';
import Menu from 'components/Menu';

const Home = lazy(() => import('./pages/Home'));
const Project = lazy(() => import('./pages/Launchpad/Project/Layout'));
const LaunchPad = lazy(() => import('./pages/Launchpad'));
// const Staking = lazy(() => import('./pages/Staking'))

const App: React.FC = () => {
    return (
        <HashRouter>
            <Menu>
                <SuspenseWithChunkError fallback={<PageLoader />}>
                    <ToastContainer
                        position='top-right'
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
                        {/* <Route path="/staking" exact>
                          <Staking />
                        </Route> */}
                        {/* Redirects */}
                        {/* <Route path="/" exact> */}
                        {/*    <Redirect to="/" /> */}
                        {/* </Route> */}

                        <Route component={() => {
                            window.location.href = 'https://app.sparkswap.finance/#/launch';
                            return null;
                        }} />
                    </Switch>
                </SuspenseWithChunkError>
            </Menu>
        </HashRouter>
    );
};

export default App;
