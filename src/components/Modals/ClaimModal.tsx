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
    contract: any
}

const TokenIcon = styled(StyledImage)`
    margin: 0px 4px 0px 4px;
`
const ClaimModal: React.FC<ModalProps> = ({ title, onDismiss, rewards, contract }) => {
    const [confirmed, setConfirm] = useState(false);
    const [hash, setHash] = useState("https://bscscan.com/tx/");
    const handleConfirm = async () => {

        try {
            const tx = await contract.redeemTokens()
            setHash(`https://bscscan.com/tx/${tx.hash}`)
            setConfirm(true);
        }
        catch(e) {
            const code = e.code;
            const message = e.data ? e.data.message : e.message;
            toast.error(`${code} ${message}`, {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }

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
                            <Text>In this step, you complete the transaction that claims your {TokenReward}.</Text>
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
                            <Text>You have claimed your {TokenReward}. If desired, you may check Binance Smart Chain to confirm the transaction.</Text>
                        </Flex>
                        <a href={hash} target="_blank" rel="noopener noreferrer"><Text color="textSubtle">View on BscScan <ExternalLink /></Text></a>
                        <Flex style={{ width: '100%', padding: '24px' }}>
                            <Button fullWidth onClick={onDismiss}>Close</Button>
                        </Flex>
                    </>
                )}
            </Flex>
        </Modal>
    );
};

export default ClaimModal;
