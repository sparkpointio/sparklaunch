import React, { ReactElement } from 'react'
import { RouteComponentProps } from 'react-router-dom';
import { Heading } from '@sparkpointio/sparkswap-uikit'
import Page from 'components/layout/Page';


const Layout: React.FC <RouteComponentProps<{ProjectAddress?: string}>> = ({ match: {params: { ProjectAddress }}})  => {
    return (
        <Page>
            <Heading>SparkLaunch</Heading>
            {ProjectAddress}
        </Page>
    )
}

export default Layout;