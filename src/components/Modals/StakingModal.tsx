import React, { useContext, useState } from 'react';
import { Heading, Modal, Flex, Text, Button, Radio, useModal } from '@sparkpointio/sparkswap-uikit';
import styled, { ThemeContext } from 'styled-components';
import Slider from 'components/Slider'
import { StyledImage } from 'pages/Launchpad/components/styled'
import { ModalBody, ModalDescription, ModalAction, StakingInput } from './styleds';
import WalletDetails from './WalletDetails';


interface ModalProps { 
    onDismiss?: () => void;
}


const CurrencyLogo = styled(StyledImage)`
    border-radius: 50%;
`

const Option = styled.div`
  padding: 0 0px;
  margin-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 450px) {
    align-items: space-between;
    width: 100%;
    margin: 5px;
  }
`

const RenderStakingAction: React.FC = () => {
    const [liquidity, setliquidity] = useState(0);
    const handleChange = (val) => setliquidity(val)
    const [ onWalletDetails ] = useModal(<WalletDetails />)
    return (
        <ModalBody flexDirection="column">
                <Heading>Stake in Pool</Heading>
                <Flex flexDirection="column">
                    <Flex justifyContent="space-between">
                        <Text bold>Stake:</Text>
                        <Flex>
                        <CurrencyLogo src={`${process.env.PUBLIC_URL}/images/icons/srk.png`} size="24px"/>
                        <Text>SRK</Text>
                        </Flex>
                    </Flex>
                    <Flex flexDirection="column">
                    <StakingInput>
                        <Text fontSize="30px">308.5028</Text>
                        <Text fontSize="21px" color="textSubtle">~51.6693 USD</Text>
                    </StakingInput>
                    <Text color="textSubtle">Balance: 308.5028</Text>
                    </Flex>
                </Flex>
                <ModalAction flexDirection="column">
                    <Flex>
                    <Slider value={liquidity} onChange={e=> handleChange(e)}/>
                    </Flex>
                    <Flex justifyContent="space-between">
                    {['0', '25', '50', '75', '100'].map(val => {
                        return (
                            <Option key={val}>
                                <Radio
                                    scale="sm"
                                    name="staking_percent"
                                />
                                <Text style={{ marginLeft: '5px' }}>{val === '100'? 'max': `${val} %`} </Text>
                            </Option>
                        )
                    })}
                    </Flex>
                <Button fullWidth onClick={onWalletDetails}>Confirm</Button>
                </ModalAction>
        </ModalBody>
    )
}

const RenderInsufficientBalance: React.FC<ModalProps> = ({onDismiss}) => {
    // const theme = useContext(ThemeContext)
    return (
        <ModalBody flexDirection="column" alignItems="center">
            <Heading>SRK required</Heading>
            <ModalDescription flexDirection="column" alignItems="center">
                <Text color="red">Insufficient SRK balance</Text>
                <Text>You will need to buy SRK to stake in the pool!</Text>
            </ModalDescription>
            <ModalAction flexDirection="column" alignItems="center">
                <Button fullWidth>Buy SRK</Button>
                <Button variant="text" fullWidth onClick={onDismiss}>Close Window</Button>
            </ModalAction>
        </ModalBody>        
    )
}

const StakeModal:React.FC<ModalProps> = ({onDismiss}) => {
    
    return (
        <Modal title='' onDismiss={onDismiss} >
            <Flex flexDirection="column">
                {/* <RenderInsufficientBalance onDismiss={onDismiss}/> */}
                <RenderStakingAction />
            </Flex>
        </Modal>
    )
}

export default StakeModal;