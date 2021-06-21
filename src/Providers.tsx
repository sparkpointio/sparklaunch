import React from 'react'
import { ModalProvider } from '@sparkpointio/sparkswap-uikit'
import { ThemeContextProvider } from './ThemeContext'

const Providers: React.FC = ({ children }) => {
    return (
        <ThemeContextProvider>
            <ModalProvider>{children}</ModalProvider>
        </ThemeContextProvider>
    )
}

export default Providers;