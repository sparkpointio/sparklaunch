import React, { ReactElement } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import { Heading, Flex, Text } from '@sparkpointio/sparkswap-uikit'
import { useFindProject } from 'state/hooks'
import styled from 'styled-components';
import Page from 'components/layout/Page';
import ProjectComponent from './ProjectComponent';

const Container = styled(Flex)`
    flex-direction: column;
    align-items: center;
    padding: 20px;
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;
`
const CustomBreadcrumbs = styled(Text)`
    display: flex;
    align-items: center;
`

const Layout: React.FC <RouteComponentProps<{ProjectAddress?: string}>> = ({ match: {params: { ProjectAddress }}})  => {
    const data = useFindProject(ProjectAddress)
    const ProjectData = data[0]
    return (
        <Page>
            <Container>
                <Flex style={{width: '100%', height: '15vh'}} flexDirection="column"  justifyContent="space-between" marginTop="20px" padding="10px">
                <Heading fontSize="24px" bold> SparkLaunch </Heading>
                <CustomBreadcrumbs fontSize="14px" color="textSubtle">SparkLaunch&nbsp;<ArrowRight/>&nbsp;On Going&nbsp;<ArrowRight />&nbsp;Ownly </CustomBreadcrumbs>
                </Flex>
                <ProjectComponent  project={ProjectData} />

            </Container>
        </Page>
    )
}

export default Layout;