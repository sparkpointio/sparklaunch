import React, { useEffect, useState } from 'react';
import { Modal, Flex, Heading, Text, Button } from '@sparkpointio/sparkswap-uikit';
import styled from 'styled-components'
import { toast } from 'react-toastify';
import { ExternalLink } from 'react-feather';
import { StyledImage } from 'pages/Launchpad/components/styled';

interface Rewards {
    token: string;
    amount: string;
}

interface ModalProps {
    title?: string;
    onDismiss?: () => void;
    rewards: Rewards;
}

const TokenIcon = styled(StyledImage)`
    margin: 0px 4px 0px 4px;
`
const ClaimModal: React.FC<ModalProps> = ({ title, onDismiss, rewards }) => {
    const [confirmed, setConfirm] = useState(false);
    const handleConfirm = () => {
        setConfirm(true);
    }
    const TokenReward:React.ReactElement = <span style={{fontWeight: 'bold',}}> {rewards.amount} <TokenIcon src={`${process.env.PUBLIC_URL}/images/icons/ownly.png`} size="18px" />{rewards.token} tokens</span>
    
    return (
        <Modal title="" onDismiss={onDismiss}>
            <Flex flexDirection="column" alignItems="center" style={{ marginTop: '-40px', maxWidth: '500px' }}>
                {!confirmed ? (
                    <>
                        <Text fontSize="24px" bold>
                            Confirm Claim
                        </Text>
                        <Flex style={{ margin: '15px', textAlign: 'center' }}>
                            <Text>In this step, you complete the transaction that withdraws your {TokenReward}</Text>
                        </Flex>
                        <Flex style={{ width: '100%', padding: '24px' }}>
                            <Button fullWidth onClick={handleConfirm}>Confirm</Button>
                        </Flex>
                    </>
                ) : (
                    <>
                         <Text fontSize="24px" bold>
                            Claimed Succesfully
                        </Text>
                        <Flex style={{ margin: '15px', textAlign: 'center' }}>
                            <Text>You have withdrawn your {TokenReward}. If desired, you may check Binance Smart Chain to confirm the transaction</Text>
                        </Flex>
                        <a href="https://bscscan.com/"><Text color="textSubtle">View on BscScan <ExternalLink /></Text></a>
                        <Flex style={{ width: '100%', padding: '24px' }}>
                            <Button fullWidth onClick={handleConfirm}>Close</Button>
                        </Flex>
                    </>
                )}
            </Flex>
        </Modal>
    );
};

export default ClaimModal;
