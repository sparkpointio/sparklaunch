import React from 'react';
import { Web3ReactProvider } from '@web3-react/core';
import { ModalProvider } from '@sparkpointio/sparkswap-uikit';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import store from 'state';

import getLibrary from './utils/getLibrary';
import { CustomThemeContextProvider, ThemeContextProvider } from './ThemeContext';

const Providers: React.FC = ({ children }) => {
    return (
        <Web3ReactProvider getLibrary={getLibrary}>
            <Provider store={store}>
                <HelmetProvider>
                    <ThemeContextProvider>
                        <CustomThemeContextProvider>
                            <ModalProvider>{children}</ModalProvider>
                        </CustomThemeContextProvider>
                    </ThemeContextProvider>
                </HelmetProvider>
            </Provider>
        </Web3ReactProvider>
    );
};

export default Providers;
