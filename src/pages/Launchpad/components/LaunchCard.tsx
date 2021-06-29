import React, { useContext } from 'react';
import { Card, Text, Button, Progress, Flex } from '@sparkpointio/sparkswap-uikit';
import { useWeb3React } from '@web3-react/core'
import { Globe, Twitter, Send } from 'react-feather';
import styled, { ThemeContext } from 'styled-components';
import PlaceHolder from 'pages/Home/AboutSection/icons';
import UnlockButton from 'components/ConnectWalletButton';

const Img = styled.img`
    border-radius: 50%;
    height: 60px;
    width: 60px;
    margin-right: 15px;
`;

const CardHeader = styled(Flex)`
    padding: 20px;
    align-items: center;
`;
const CardBody = styled(Flex)`
    flex-direction: column;
    text-align: left;
    padding: 15px;
`;

const CardAction = styled(Flex)`
    padding: 25px 15px;
`

const Options = styled(Flex)`
    padding: 10px;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 10px;
`;

const SocmedGroup = styled(Flex)`
    flex: 0.5;
    justify-content: space-evenly;
`;

const Details = styled(Flex)`
    flex-direction: column;
`;
const ProgressGroup = styled(Flex)`
    flex-direction: column;
    margin: 15px 0px;
`;

const DataGroup = styled(Flex)`
    & > * {
        margin: 5px 0px;
    }
`;

const LaunchCard: React.FC = ({ children }) => {
    const { account } = useWeb3React()
    const theme = useContext(ThemeContext);

    return (
        <Card style={{padding: '5px'}}>
            <CardHeader>
                <Img src={PlaceHolder} alt="token-logo" />
                <Text bold fontSize="24px">
                    Ownly
                </Text>
            </CardHeader>
            <CardBody>
                <Options>
                    <SocmedGroup>
                        <Globe />
                        <Twitter fill={theme.colors.text} />
                        <Send fill={theme.colors.text} />
                    </SocmedGroup>
                    <Button style={{ backgroundColor: '#32a31b', height: '35px', borderRadius: '5px' }}>
                        LIVE NOW
                    </Button>
                </Options>
                <Details>
                    <Text>
                        CryptoArt is still a foreign concept to many artists. The Combination of art and blockchain
                        seems too complicated. However, we believe its rather simple.
                    </Text>
                    <ProgressGroup>
                        <Text as="h1">Progress</Text>
                        <Progress primaryStep={25} />
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">25%</Text>
                            <Text color="textSubtle">118.0&nbsp;/&nbsp;150.0BNB</Text>
                        </Flex>
                    </ProgressGroup>
                    <DataGroup flexDirection="column">
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">Total Raise</Text>
                            <Text>150.0 BNB</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">OWN For Sale</Text>
                            <Text>165,000,000.0</Text>
                        </Flex>
                        <Flex justifyContent="space-between">
                            <Text color="textSubtle">Buying Coin</Text>
                            <Text>BNB</Text>
                        </Flex>
                    </DataGroup>
                </Details>
            </CardBody>
            <CardAction>
                {!account?( <UnlockButton fullWidth/> ): (<Button fullWidth style={{backgroundColor: '#32a31b'}}> Participate </Button>)}
            </CardAction>
        </Card>
    );
};

export default LaunchCard;
