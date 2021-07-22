import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { ExternalLink } from 'react-feather';
import { Heading, Modal, Text, Flex, Button } from '@sparkpointio/sparkswap-uikit';
import { StyledImage } from 'pages/Launchpad/components/styled';
import { ModalAction, ModalBody, } from './styleds'



interface AppProps {
    onDismiss?: () => void;
}

type process = 'confirm' | 'confirming' | 'confirmed' | null

const TokenIcon = styled(StyledImage)`
    margin: 0px 4px 0px 4px;
`

const StyledModalAction= styled(Flex)`
    margin: 10px 0px;
    min-width: 250px;
    margin: 15px auto;

    & > * {
        margin: 10px 0px
    }
`
const StyledModalBody = styled(ModalBody)`
    margin-top: -50px;
    & > * {
        margin: 25px 0px;
    }
`

export const AwaitConfirm:React.FC = () => {
    return ( 
        <Flex justifyContent="center" alignItems="center">
            <Text style={{marginTop: '-50px'}}>Wallet Confirmation Details</Text>
        </Flex>
    )
}

const OnConfirmWithdraw: React.FC<{handleProcess: (process: string) => void}> = ({handleProcess}) => {
    const TokenReward:React.ReactElement = <span style={{fontWeight: 'bold',}}>110.407 <TokenIcon src={`${process.env.PUBLIC_URL}/images/icons/ownly.png`} size="18px" />OWNLY tokens</span>

    return (
        <>
            <StyledModalBody flexDirection="column" alignItems="center">
                    <Heading>Confirm Withdrawal</Heading>
                    <Flex style={{textAlign: 'center'}}>
                    <Text>In this step, you complete the transaction that withdraws your {TokenReward}. </Text>
                    </Flex>
                </StyledModalBody>
                <StyledModalAction>
                    <Button fullWidth onClick={() => handleProcess('confirming')}>Confirm</Button>
            </StyledModalAction>
        </>
    )
}

const SuccessWithdraw: React.FC<{onDismiss?: () => void}> = ({onDismiss}) => {
    const TokenInformation:React.ReactElement = <span style={{fontWeight: 'bold',}}>110.407 <TokenIcon src={`${process.env.PUBLIC_URL}/images/icons/ownly.png`} size="18px" />OWNLY tokens</span>

    return (
        <>
             <StyledModalBody flexDirection="column" alignItems="center">
                    <Heading>Confirmed Withdrawal</Heading>
                    <Flex style={{textAlign: 'center'}} flexDirection="column">
                        <Text>You have withdrawn your { TokenInformation }.</Text>
                        <Text>If desired, you may check Binance Smart Chain to confirm the transaction.</Text>
                    </Flex>
                </StyledModalBody>
                <StyledModalAction flexDirection="column" alignItems="center">
                    <Text color="textSubtle">View on BscScan <ExternalLink /></Text>
                    <Button fullWidth onClick={onDismiss}>Close</Button>
            </StyledModalAction>
        </>
    )
}

const WithdrawModal: React.FC<AppProps> = ({onDismiss}) => {

    const [ process, setProcess ] =  useState<process>('confirm')
    const handleProcess = useCallback((state) => {
        setProcess(state)
    }, [])

    // temporary function 
    React.useEffect(() => {
        if ( process === 'confirming') {
            setTimeout(() => {
                setProcess('confirmed')
            }, 3000)
        }
    }, [process])

    return (
        <Modal title="" onDismiss={onDismiss}>
            { process === 'confirm' && <OnConfirmWithdraw  handleProcess={handleProcess} />}
            { process === 'confirming' && <AwaitConfirm />}
            { process === 'confirmed' && <SuccessWithdraw onDismiss={onDismiss} />}
        </Modal>
    )
}

export default WithdrawModal;