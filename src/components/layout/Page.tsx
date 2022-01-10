import React, { Children, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Text, Flex, Footer } from '@sparkpointio/sparkswap-uikit';
import useMedia from 'use-media';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router';
import { customMeta, DEFAULT_META } from 'config/constants/meta';
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


const PageFooter = () => {

    return (
        <Footer
            helperLinks={[
                {
                    label: 'Terms and Conditions',
                    href: 'https://sparkpointio.github.io/terms_and_conditions/sparkdefi-launchpad/',
                },
                {
                    label: 'Privacy',
                    href: 'https://sparkpointio.github.io/privacy_policies/sparkdefi-launchpad/',
                },
                {
                    label: 'Sitemap',
                    href: 'https://srk.finance/#roadmap',
                },
            ]}
            socLinks={[
                {
                    label: 'facebook',
                    href: 'https://www.facebook.com/sparkpointio/',
                },
                {
                    label: 'twitter',
                    href: 'https://twitter.com/sparkpointio',
                },
                {
                    label: 'telegram',
                    href: 'https://t.me/SparkPointOfficial',
                },
                {
                    label: 'email',
                    href: 'mailto: support@sparkpoint.io',
                },
                {
                    label: 'discord',
                    href: 'https://discord.com/invite/Sgc6yDEAAe',
                },
            ]}
            title="SparkLaunch 2022"
        />
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
