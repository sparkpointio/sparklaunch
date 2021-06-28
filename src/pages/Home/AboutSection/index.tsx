import React from 'react';
import { Text, Heading, Button } from '@sparkpointio/sparkswap-uikit';
import { AboutColumn as Column } from 'components/Column';
import { StyledContainer, StyledHeading, Image, Box, BoxHeading, TierTitle, TierDetails, TierFooter } from './styled';
import DetailsList, { TierSystemList } from './config';
import { Details, TierSystem } from './types';
import PlaceHolderIcon from './icons';

const DetailBox = ({ image, title, description }: Details) => {
    return (
        <Box>
            <Image src={PlaceHolderIcon} alt="detail-icon" />
            <div style={{ textAlign: 'left', margin: '10px' }}>
                <BoxHeading>{title}</BoxHeading>
                <Text fontSize="14px" color="textSubtle">
                    {description}
                </Text>
            </div>
        </Box>
    );
};



const RenderDetails = () => {
    return DetailsList.map((item) => {
        return <DetailBox image={item.image} title={item.title} description={item.description} />;
    });
};

const RenderTierSystem = () => {
    return TierSystemList.map((item) => {
        const { title, requirement, poolWeight, guaranteedAllocation } = item;
        return (
            <TierBox
                title={title}
                requirement={requirement}
                poolWeight={poolWeight}
                guaranteedAllocation={guaranteedAllocation}
            />
        );
    });
};

const TierBox = ({ title, requirement, poolWeight, guaranteedAllocation }: TierSystem) => {
    return (
        <Box>
            <Image src={PlaceHolderIcon} alt="detail-icon" />
            <TierTitle>{title}</TierTitle>
            <TierDetails>
                <div>
                    <Text fontSize="17px">{requirement}</Text>
                    <Text fontSize="14px" color="textSubtle">
                        Staking Requirement
                    </Text>
                </div>
                <div>
                    <Text fontSize="17px">{poolWeight}</Text>
                    <Text fontSize="14px" color="textSubtle">
                        Pool Weight
                    </Text>
                </div>
                <div>
                    <Text fontSize="17px">{guaranteedAllocation}</Text>
                    <Text fontSize="14px" color="textSubtle">
                        Guaranteed Allocation
                    </Text>
                </div>
            </TierDetails>
            <TierFooter>
                <Button fullWidth>Learn More</Button>
            </TierFooter>
        </Box>
    );
};

const Section: React.FC = () => {
    return (
        <StyledContainer>
            <StyledHeading size="lg" as="h2">
                About SparkLaunch
            </StyledHeading>
            <Column>{RenderDetails()}</Column>
            <StyledHeading size="lg" as="h2">
                SparkLaunch Tiered System
            </StyledHeading>
            <Column>{RenderTierSystem()}</Column>
        </StyledContainer>
    );
};

export default Section;
