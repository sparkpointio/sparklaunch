import React from 'react';
import styled from 'styled-components'
import { Text, Button } from '@sparkpointio/sparkswap-uikit';
import StyledContainer, { StyledHeading, ContactButton } from './styled';

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
                 <Button fullWidth margin="10px">Apply Now</Button>
                 <ContactButton fullWidth margin="10px">Contact Us</ContactButton>
             </Actions>
        </StyledContainer>
       
    )
}

export default ApplySection;