import React, { Children, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Text, Flex } from '@sparkpointio/sparkswap-uikit';
import { Facebook, Twitter, Mail, Send } from 'react-feather';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { customMeta, DEFAULT_META } from 'config/constants/meta';
import Powered from 'assets/icons/Powered.svg';
import './App.css';

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

const StyledFooter = styled.footer`
    height: auto;
    max-height: 20vh;
    background-color: #111122;
    display: flex;
    justify-content: space-around;
    padding: 30px 0px;
`;

const CustomLink = styled.a`
    color: ${({ theme }) => theme.colors.text};
    margin: 5px;
`;
const StyledLink = styled(CustomLink)`
    color: white;
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
`;


const SocLink = ({socLink, children}) => (
    <a href={socLink}>{children}</a>
)

const PageFooter = () => {
    const theme = useContext(ThemeContext);
    return (
        <StyledFooter>
            <Flex flexDirection="column" justifyContent="space-evenly" style={{ textAlign: 'left' }}>
                <img src={Powered} alt="powered-logo" style={{ width: '60%', margin: '20px' }} />
                <Flex justifyContent="space-evenly" style={{ width: '100%' }}>
                <CustomLink href="#"><h5>Terms & Conditions</h5></CustomLink>
                    <StyledLink href="#">Privacy Policy</StyledLink>
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
                    <SocLink socLink="https://www.gmail.com"><Mail size="30" color="#FFFFFF" /></SocLink>
                </Flex>
                <h5>© SparkLaunch 2021</h5>
            </Flex>
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
