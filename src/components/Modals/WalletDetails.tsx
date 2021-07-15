import React from 'react'
import { Modal, Flex, Text } from '@sparkpointio/sparkswap-uikit';
import styled from 'styled-components';


interface AppProps {
    onDismiss?: () => void;
}

const StyledFlex = styled(Flex)`
    width: 450px;
    height: 200px;
`

const WalletDetails: React.FC<AppProps> = ({onDismiss}) => {
    return (
        <Modal title="" onDismiss={onDismiss}>
            <StyledFlex justifyContent="center" alignItems="center">
                <Text style={{marginTop: '-50px'}}>Wallet Confirmation Details</Text>
            </StyledFlex>
        </Modal>
    )
}

export default WalletDetails;