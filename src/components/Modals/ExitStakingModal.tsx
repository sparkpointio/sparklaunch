import React, { useCallback, useState } from 'react'
import { Modal, Flex, Heading, Text, Button} from '@sparkpointio/sparkswap-uikit';
import styled from 'styled-components';
import { ExternalLink } from 'react-feather';
import { StyledImage } from 'pages/Launchpad/components/styled';
import { AwaitConfirm } from './WithdrawModal';
import { ModalBody } from './styleds';



interface AppProps {
    onDismiss?: () => void;
}

type ExitProcess = 'first' | 'second' | 'await' | 'confirmed' | null;

const WarningMessage = styled(Flex)`
    text-align: center;
`

const ModalActions = styled(Flex)`
margin: 20px 0px 12px 0px;
    & > * {
        color: ${({theme}) => theme.colors.text };
        font-weight: 300;
        width: 300px;
        margin-top: 5px;
    }
`

const Bold = styled.span`
    font-weight: bold;
`
const Icon = styled(StyledImage)`
    margin: 0px 3px 0px 5px;
`

const ExitConfirmed: React.FC<{onDismiss?: () => void}> = ({onDismiss}) => {
    const RewardToken:React.ReactElement = <Bold>10, 433.552 <Icon src={`${process.env.PUBLIC_URL}/images/icons/srk.png`} size="20px"/> SRK tokens</Bold> 
    const StakingToken:React.ReactElement = <Bold>1110.407 <Icon src={`${process.env.PUBLIC_URL}/images/icons/ownly.png`} size="20px"/> OWNLY tokens</Bold> 

    return (
        <ModalBody flexDirection="column" alignItems="center">
            <Heading>
                Confirmed Withdrawal
            </Heading>
            <WarningMessage flexDirection="column" alignItems="center">
                <Text>
                  You have withdrawn your { RewardToken } and { StakingToken }. If desired, you may check Binance Smart Chain to Confirm the transaction
                </Text>
            </WarningMessage>
            <Text color="textSubtle">View on BscScan <ExternalLink /> </Text>
            <ModalActions flexDirection="column" alignItems="center">
                <Button onClick={onDismiss}>Close</Button>
            </ModalActions>
        </ModalBody>
    )
} 

const ConfirmExit: React.FC<{handleProcess: (process:string) => void;}> = ({handleProcess}) => {
    const RewardToken:React.ReactElement = <Bold>10, 433.552 <Icon src={`${process.env.PUBLIC_URL}/images/icons/srk.png`} size="20px"/> SRK tokens</Bold> 
    const StakingToken:React.ReactElement = <Bold>1110.407 <Icon src={`${process.env.PUBLIC_URL}/images/icons/ownly.png`} size="20px"/> OWNLY tokens</Bold> 
    return (
        <ModalBody flexDirection="column" alignItems="center">
            <Heading>
                Confirm Withdrawal
            </Heading>
            <WarningMessage flexDirection="column" alignItems="center">
                <Text>
                   In this step, you complete the transaction that withdraws your { RewardToken } and { StakingToken }
                </Text>
            </WarningMessage>
            <ModalActions flexDirection="column" alignItems="center">
                <Button onClick={() => handleProcess('await')}>Confirm</Button>
            </ModalActions>
        </ModalBody>
    )
}


const WarningProcess: React.FC<{handleProcess: (process:string) => void; onDismiss?: () => void}> = ({ handleProcess, onDismiss}) => {
    const Not:React.ReactElement = <span style={{fontWeight: 'bold'}}>NOT</span>

    const confirmProcess = () => {
        handleProcess('second');
    }
    return (
        <ModalBody flexDirection="column" alignItems="center">
            <Heading>
                Unstake your SRK
            </Heading>
            <WarningMessage flexDirection="column" alignItems="center">
                <Text>Warning:</Text>
                <Text>
                    The amount of tokens you unstake will {Not} count towards your tier level for upcoming projects
                </Text>
            </WarningMessage>
            <ModalActions flexDirection="column" alignItems="center">
                <Button onClick={() => handleProcess('second')}>I understand, proceed to unstake</Button>
                <Button variant="text" onClick={onDismiss}>No, take me back</Button>
            </ModalActions>
        </ModalBody>
    )
}


const ExitModal: React.FC<AppProps> = ({onDismiss}) => {
    const [ process, setProcess ] = useState<ExitProcess>('first')

    const handleProcess = (state) => {
        setProcess(state);
    }

    // temporary function 
    React.useEffect(() => {
        if (process === 'await' ) { 
            setTimeout(() => {
                setProcess('confirmed')
            }, 3000)
        }
    }, [process])

    return (
        <Modal title="" onDismiss={onDismiss}>
            <Flex flexDirection="column">
                { process === 'first' && <WarningProcess handleProcess={handleProcess} onDismiss={onDismiss} /> }
                { process === 'second' && <ConfirmExit handleProcess={handleProcess} />}
                { process === 'await' && <AwaitConfirm /> }
                { process === 'confirmed' && <ExitConfirmed onDismiss={onDismiss} />}
            </Flex>
        </Modal>
    )
}

export default ExitModal ;