import React from 'react';
import styled from 'styled-components'
import { Text, Button } from '@sparkpointio/sparkswap-uikit';
import StyledContainer, { StyledHeading } from './styled';

const Actions = styled.div`
    width: 100%;
    max-width: 500px;
    display: flex;
    justify-content: space-around;
    padding: 15px;
`

const ApplySection: React.FC = () => {
    return (
        <StyledContainer>
             <StyledHeading  size="lg" as="h2">Got a Project?</StyledHeading>
             <Text>Apply for an IDO on SparkLaunch, submit your project and get a response within 24 hours.</Text>
             <Actions>
                 <Button as="a" href="https://forms.gle/hXZPr93vC8TEmsoh8" fullWidth margin="10px">Apply Now</Button>
                 <Button as="a" href= "mailto: support@sparkpoint.io" fullWidth margin="10px" style={{backgroundColor: '#7a1ba3'}}>Contact Us</Button>
             </Actions>
        </StyledContainer>
       
    )
}

export default ApplySection;