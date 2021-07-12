import React from 'react'
import { useWeb3React } from '@web3-react/core'
import { Button, ButtonProps, ConnectorId, useWalletModal } from '@sparkpointio/sparkswap-uikit'
import { injected, walletconnect, bsc } from 'connectors'

const UnlockButton: React.FC<ButtonProps> = props => {
    const { account, activate, deactivate } = useWeb3React()
  
    const handleLogin = (connectorId: ConnectorId) => {
      if (connectorId === 'walletconnect') {
        return activate(walletconnect)
      }
      if (connectorId === 'bsc') {
        return activate(bsc)
      }
      return activate(injected)
    }
  
    const { onPresentConnectModal } = useWalletModal(handleLogin, deactivate, account as string)
  
    return (
      <Button onClick={onPresentConnectModal} {...props} >
        Unlock Wallet
      </Button>
    )
  }
  
  export default UnlockButton