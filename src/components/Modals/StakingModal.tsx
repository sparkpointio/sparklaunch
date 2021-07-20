import React, { useContext, useEffect, useState } from 'react';
import { Heading, Modal, Flex, Text, Button, Radio, useModal } from '@sparkpointio/sparkswap-uikit';
import styled, { ThemeContext } from 'styled-components';
import Slider from 'components/Slider'
import { StyledImage } from 'pages/Launchpad/components/styled'
import { ModalBody, ModalDescription, ModalAction, StakingInput } from './styleds';
import WalletDetails from './WalletDetails';

interface ModalProps { 
    onDismiss?: () => void;
    random?: boolean;
    stakeToken?: string;
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

const RenderStakingAction: React.FC<{stakeToken?: string}> = ({stakeToken}) => {
    const [sliderVal, setSliderVal] = useState(0);
    const [radioVal, setRadioVal] = useState(sliderVal.toString());

    const handleSliderChange = (val) => {
        setSliderVal(val)
        setRadioVal(val.toString())
    }
    const handleRadioChange = (evt) => {
        const { value } = evt.target
        setRadioVal(value);
        setSliderVal(parseInt(value));
    }
    

    const tokenName = stakeToken?.toUpperCase();
    const src = stakeToken?.toLowerCase();

    const [ onWalletDetails ] = useModal(<WalletDetails />)
    
    return (
        <ModalBody flexDirection="column">
                <Heading>Stake in Pool</Heading>
                <Flex flexDirection="column">
                    <Flex justifyContent="space-between">
                        <Text bold>Stake:</Text>
                        <Flex>
                        <CurrencyLogo src={`${process.env.PUBLIC_URL}/images/icons/${src}.png`} size="24px"/>
                        <Text>{tokenName}</Text>
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
                    <Slider value={sliderVal} onChange={e => handleSliderChange(e)}/>
                    </Flex>
                    <Flex justifyContent="space-between">
                    {['0', '25', '50', '75', '100'].map(val => {
                        return (
                            <Option key={val}>
                                <Radio
                                    scale="sm"
                                    name="staking_percent"
                                    value={val}
                                    checked={radioVal === val}
                                    onChange={e => handleRadioChange(e)}
                                />
                                <Text style={{ marginLeft: '5px' }}>{val === '100'? 'MAX': `${val} %`} </Text>
                            </Option>
                        )
                    })}
                    </Flex>
                <Button fullWidth onClick={onWalletDetails} disabled={sliderVal ===0}>Confirm</Button>
                </ModalAction>
        </ModalBody>
    )
}

const RenderInsufficientBalance: React.FC<ModalProps> = ({onDismiss}) => {
    // const theme = useContext(ThemeContext)
    return (
        <ModalBody flexDirection="column" alignItems="center">
            <Heading>SRKb required</Heading>
            <ModalDescription flexDirection="column" alignItems="center">
                <Text color="red">Insufficient SRKb balance</Text>
                <Text>You will need to buy SRKb to stake in the pool!</Text>
            </ModalDescription>
            <ModalAction flexDirection="column" alignItems="center">
                <Button fullWidth>Buy SRKb</Button>

                <Button variant="text" fullWidth onClick={onDismiss}>Close Window</Button>
            </ModalAction>
        </ModalBody>        
    )
}

const StakeModal:React.FC<ModalProps> = ({onDismiss, random, stakeToken}) => {

    return (
        <Modal title='' onDismiss={onDismiss} >
            <Flex flexDirection="column">
            { random? <RenderStakingAction stakeToken={stakeToken}/> : <RenderInsufficientBalance onDismiss={onDismiss}/> }  
            </Flex>
        </Modal>
    )
}

export default StakeModal;