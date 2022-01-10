import React, { Children, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Text, Flex } from '@sparkpointio/sparkswap-uikit';
import useMedia from 'use-media';
import { Facebook, Twitter, Mail, Send } from 'react-feather';
import { SiDiscord } from 'react-icons/si'
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { customMeta, DEFAULT_META } from 'config/constants/meta';
import Powered from 'assets/icons/Powered.svg';
import './App.css';
import ScrollButton from 'pages/Home/ScrollButton';

const StyledPage = styled.div`
    min-height: calc(100vh - 64px);
    // padding-top: 16px;
    padding-bottom: 16px;

    ${({ theme }) => theme.mediaQueries.sm} {
        // padding-top: 24px;
        padding-bottom: 24px;
    }
    ${({ theme }) => theme.mediaQueries.lg} {
        // padding-top: 32px;
        padding-bottom: 32px;
    }
`;

const StyledFooter = styled.div`
    height: auto;
    min-height: 20vh;
    background-color: #111122;
    display: flex;
    justify-content: space-around;
    padding: 10px 10px 40px 35px;
    width: 100%;
`;

const CustomLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    margin: 5px;
    
`;
const StyledLink = styled(CustomLink)`
    color: white;
    @media (min-width: 500px) {
        &:after {
            content: '';
            border-right: 2px solid ${({ theme }) => theme.colors.primary};
            padding-right: 15px;
        }
        &:before {
            content: '';
            border-left: 2px solid ${({ theme }) => theme.colors.primary};
            padding-left: 15px;
        }
    }

`;
 

const SocLink = ({socLink, children}) => (
    <a href={socLink}>{children}</a>
)

const PageFooter = () => {
    const theme = useContext(ThemeContext);
    const isMobile = useMedia({maxWidth: 500});

    return (
        <StyledFooter>
            <Flex flexDirection="column" justifyContent="space-evenly" style={{ textAlign: 'left' }}>
                <a href="https://sparkpoint.io/">
                    <img src={Powered} alt="powered-logo" style={{ width: '60%', margin: '20px 0px' }} />
                </a>
                <Flex flexDirection={isMobile? "column" : "row"} justifyContent="space-evenly" style={{ width: '100%' }}>
                    <CustomLink href="https://sparkpointio.github.io/terms_and_conditions/sparkdefi-launchpad/"><h5>Terms & Conditions</h5></CustomLink>
                    <StyledLink href="https://sparkpointio.github.io/privacy_policies/sparkdefi-launchpad/">Privacy Policy</StyledLink>
                    <CustomLink href="https://srk.finance/#roadmap"><h5>Sitemap</h5></CustomLink>
                </Flex>
            </Flex>
            <Flex
                flexDirection="column"
                justifyContent="space-evenly"
                style={{ maxWidth: '250px', width: '100%', textAlign: 'center' }}
            >
                <Flex justifyContent="space-evenly" style={{margin: '20px' }}>
                    <SocLink socLink="https://www.facebook.com/sparkpointio/"><Facebook size="30" color="#FFFFFF" /></SocLink>
                    <SocLink socLink="https://twitter.com/sparkpointio"><Twitter size="30" color="#FFFFFF" />  </SocLink>
                    <SocLink socLink="https://t.me/SparkPointOfficial"><Send size="30" color="#FFFFFF" /></SocLink>
                    <SocLink socLink="mailto: support@sparkpoint.io"><Mail size="30" color="#FFFFFF" /></SocLink>
                    <SocLink socLink="https://discord.com/invite/Sgc6yDEAAe"><SiDiscord size="30" color="#FFFFFF" /></SocLink>
                </Flex>
                <h5>© SparkLaunch 2022</h5>
            </Flex>
            <ScrollButton/>
           
        </StyledFooter>
    );
};

const PageMeta = () => {
    const { pathname } = useLocation();
    const pageMeta = customMeta[pathname] || {};
    const { title, description, image } = { ...DEFAULT_META, ...pageMeta };

    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={image} />
        </Helmet>
    );
};

const Page: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
    return (
        <>
            <PageMeta />
            <StyledPage {...props}>{children}</StyledPage>
            <PageFooter />
        </>
    );
};

export default Page;
