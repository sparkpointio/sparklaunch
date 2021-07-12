import { Flex, Button, Heading, Text } from '@sparkpointio/sparkswap-uikit';
import { useWeb3React } from '@web3-react/core';
import { IPoolInformation, IProjects, ITokens } from 'config/constants/type';
import React, { useContext, useState, useCallback } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { CustomThemeContext } from 'ThemeContext';
import { TBHeader, TBBody } from './styled';

const Container = styled(Flex)`
    margin: 10px;
    width: 100%;
    height: auto;
`;

const NavOptions = styled(Button)<{ activeIndex: boolean }>`
    background-color: transparent;
    color: ${({ theme, activeIndex }) => (activeIndex ? theme.colors.text : theme.colors.textSubtle)};
    border-bottom: ${({ theme, activeIndex }) => activeIndex && `3px solid ${theme.colors.primary}`};
`;

type AppProps = {
    pool: IPoolInformation;
    project: IProjects;
    buyingToken?: ITokens;
}

const FooterNav = ({ activeIndex = 0, handleClick}: { activeIndex?: number; handleClick: (i:number) => void }) => {
    const theme = useContext(ThemeContext);
    const customTheme = useContext(CustomThemeContext);
    return (
        <Flex alignItems="center" style={{ margin: '10px 10px 0px 10px', padding: '20px 20px 0px 20px' }}>
            <NavOptions activeIndex={activeIndex === 0} onClick={() => handleClick(0)}>Project Details</NavOptions>
            <NavOptions activeIndex={activeIndex === 1} onClick={() => handleClick(1)}>Schedule</NavOptions>
            <NavOptions activeIndex={activeIndex === 2} onClick={() => handleClick(2)}>Your Allocation</NavOptions>
        </Flex>
    );
};

const AllocationSection = () => {
    return (
        <Flex margin="20px" padding="20px" flexDirection="column">
            <TBHeader justifyContent="space-between" >
                <Text bold>No.</Text>
                <Text bold>Token Allocation</Text>
                <Text bold>Date</Text>
                <Text bold>Token(s) claimed</Text>
                <Text bold>Action</Text>
            </TBHeader>
            <TBBody justifyContent="space-between" >
                <Text color="textSubtle">001</Text>
                <Text color="textSubtle">159662.6 OWN</Text>
                <Text color="textSubtle">06/24/2021</Text>
                <Text color="textSubtle">OWNLY</Text>
                <Text color="textSubtle">SWAP</Text>
            </TBBody>
        </Flex>
    )
}

const FooterDetails: React.FC<AppProps> = ({pool, project, buyingToken}) => {
    const theme = useContext(ThemeContext);
    const { account } = useWeb3React();
    const customTheme = useContext(CustomThemeContext);
    const [ activeIndex , setActive ] = useState<number>(0);
    const { open, close, cap, totalUserParticipated, totalFundsSwapped } = pool;
    const handleClick = useCallback((i) => {
        setActive(i)
    }, [])
    

    return (
        <Container
            style={{ backgroundColor: theme.isDark ? customTheme.customColors?.BG1 : customTheme.customColors?.BG2 }}
            flexDirection="column"
        >
            <div style={{ marginBottom: '10px', borderBottom: `1px solid ${theme.colors.primary}` }}>
                <FooterNav handleClick={handleClick} activeIndex={activeIndex} />
            </div>
            { activeIndex === 0 && <Flex padding="20px" margin="20px" justifyContent="space-between">
                <Flex flex="1" flexDirection="column" marginRight="10px">
                    <Heading margin="10px 0px 30px 0" bold>
                        Pool Information
                    </Heading>
                    <Flex justifyContent="space-between">
                        <Text>Opens</Text>
                        <Text color="textSubtle">{open}</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>Closes</Text>
                        <Text color="textSubtle">{close}</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>Cap</Text>
                        <Text color="textSubtle">{cap} {buyingToken?.symbol}</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>Total Users Participated</Text>
                        <Text color="textSubtle">{totalUserParticipated}</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>Total Funds Swapped</Text>
                        <Text color="textSubtle">{totalFundsSwapped} {buyingToken?.symbol}</Text>
                    </Flex>
                </Flex>
                <Flex flex="1" marginLeft="10px" flexDirection="column">
                    <Heading margin="10px 0px 30px 0px" bold>
                        
                        Token Information
                    </Heading>
                    <Flex justifyContent="space-between">
                        <Text>Name</Text>
                        <Text color="textSubtle">{project.title}</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>Token Symbol</Text>
                        <Text color="textSubtle">{project.symbol}</Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>Total Supply</Text>
                        <Text color="textSubtle">{project.ownSale}</Text>
                    </Flex>
                </Flex>
            </Flex>
            }
            {
                account && activeIndex === 2 && (
                    <AllocationSection />
                )
            }
        </Container>
    );
};

export default FooterDetails;
