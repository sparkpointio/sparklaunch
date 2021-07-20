import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { ArrowRight } from 'react-feather';
import { Heading, Flex, Text, Breadcrumbs, Button } from '@sparkpointio/sparkswap-uikit'
import { useAppSelector, useFindProject as findProject, useFindProjectByAddress as findProjectByAddress, useSetProject as setProject } from 'state/hooks'
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

const Layout: React.FC <RouteComponentProps<{ProjectAddress?: string}>> = ({ match: {params: { ProjectAddress }}})  => {
    const data = setProject(ProjectAddress)
    const project = useAppSelector((state) => state.projects.data.find(p => p.address === data));
    

    return (
        <Page>
            <Container>
                <Flex style={{width: '100%', height: '10vh'}} flexDirection="column"  justifyContent="space-between" marginTop="20px" padding="10px">
                <Heading fontSize="24px" bold> SparkLaunch </Heading> 
               
                <Breadcrumbs>
                    <Text>SparkLaunch</Text>
                    <Text>On Going</Text>
                    <Text>{project?.symbol}</Text>
                    
                </Breadcrumbs>
                </Flex>                            
                <ProjectComponent />
            </Container>
        </Page>
    )
}

export default Layout;