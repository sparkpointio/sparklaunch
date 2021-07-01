import { Flex, Button, Heading, Text } from '@sparkpointio/sparkswap-uikit';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { CustomThemeContext } from 'ThemeContext';

const Container = styled(Flex)`
    margin: 10px;
    width: 100%;
    height: auto;
`;

const NavOptions = styled(Button)<{activeIndex: boolean}>`
    background-color: transparent;
    color: ${({theme, activeIndex}) => activeIndex? theme.colors.text: theme.colors.textSubtle};
    border-bottom: ${({theme, activeIndex}) => activeIndex && `3px solid ${theme.colors.primary}`};
`

const FooterNav = ({ index = 0}: { index?: number }) => {
    const theme = useContext(ThemeContext);
    const customTheme = useContext(CustomThemeContext);
    return (
        <Flex alignItems="center" style={{margin: '10px 10px 0px 10px', padding: '20px 20px 0px 20px'}}>
           <NavOptions activeIndex={index === 0}>Project Details</NavOptions>
           <NavOptions activeIndex={index === 1}>Schedule</NavOptions>
           <NavOptions activeIndex={index === 2}>Your Allocation</NavOptions>
        </Flex>
    );
};

const FooterDetails: React.FC = () => {
    const theme = useContext(ThemeContext);
    const customTheme = useContext(CustomThemeContext);

    return (
        <Container
            style={{ backgroundColor: theme.isDark ? customTheme.customColors?.BG1 : customTheme.customColors?.BG2 }}
            flexDirection="column"
        >
        <div style={{marginBottom: '10px', borderBottom: `1px solid ${theme.colors.primary}`}}>
            <FooterNav />
        </div>
            <Flex padding="20px" margin="20px" justifyContent="space-between">
                <Flex flex="1" flexDirection="column" marginRight="10px">
                    <Heading margin="10px 0px 30px 0" bold>Pool Information</Heading>
                    <Flex justifyContent="space-between">
                        <Text>
                            Opens
                        </Text> 
                        <Text color="textSubtle">
                            06/12/2021 7:00 UTC
                        </Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>
                            Closes
                        </Text> 
                        <Text color="textSubtle">
                            06/31/2021 7:00 UTC
                        </Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>
                            Cap
                        </Text> 
                        <Text color="textSubtle">
                            150 BNB
                        </Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>
                            Total Users Participated
                        </Text> 
                        <Text color="textSubtle">
                            123456789
                        </Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>
                            Total Funds Swapped
                        </Text> 
                        <Text color="textSubtle">
                            118 BNB
                        </Text>
                    </Flex>
                </Flex>
                <Flex flex="1" marginLeft="10px" flexDirection="column">
                    <Heading margin="10px 0px 30px 0px" bold> Token Information</Heading>
                    <Flex justifyContent="space-between">
                        <Text>
                            Name
                        </Text> 
                        <Text color="textSubtle">
                            OWNLY
                        </Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>
                            Token Symbol
                        </Text> 
                        <Text color="textSubtle">
                            OWN
                        </Text>
                    </Flex>
                    <Flex justifyContent="space-between">
                        <Text>
                            Total Supply
                        </Text> 
                        <Text color="textSubtle">
                            165,000,000.00
                        </Text>
                    </Flex>

                </Flex>
            </Flex>
        </Container>
    );
};

export default FooterDetails;
