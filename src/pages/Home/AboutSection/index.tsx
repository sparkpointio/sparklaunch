import React, {useContext} from 'react';
import { Text, Heading, Button } from '@sparkpointio/sparkswap-uikit';
import { AboutColumn as Column, TwoColumn } from 'components/Column';
import { SvgProps } from 'components/SvgIcon/types';
import { ThemeContext } from "styled-components";
import { StyledContainer, StyledHeading, StyledTitle, Image, Box, BoxHeading, TierTitle, TierDetails, TierFooter, StyledLink } from './styled';
import DetailsList, { TierSystemList } from './config';
import { Details, TierSystem } from './types';
import * as IconModule from './icons';

const Icons = (IconModule as unknown) as {[key: string]: React.FC<SvgProps>}
const Tiers = (IconModule as unknown) as {[key: string]: React.FC<SvgProps>}
/* Update and create separate Tier component */

const DetailBox = ({ image, title, description }: Details) => {
    const Icon = Icons[image];
    const iconElement:React.ReactElement = <Icon width="24px" mr="8px" height="24"/>
    return (
        <Box>
           {iconElement}
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
        return <DetailBox  key={item.title} image={item.image} title={item.title} description={item.description}/>;
    });
};

const TierBox = ({ image, title, requirement, poolWeight, guaranteedAllocation }: TierSystem) => {
    const Tier = Tiers[image];
    const tierElement:React.ReactElement = <Tier width="24px" mr="8px" height="24" />

    return (
        <Box>
            {tierElement}
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
            <Button as="a" href="https://medium.com/p/140532e2d1e/" fullWidth>Learn More</Button>
            </TierFooter>
        </Box>
    );
};

const RenderTierSystem = () => {
    return TierSystemList.map((item) => {
       // const { image, title, requirement, poolWeight, guaranteedAllocation } = item;
        return (
            <TierBox
                key={item.title}
                image={item.image}
                title={item.title}
                requirement={item.requirement}
                poolWeight={item.poolWeight}
                guaranteedAllocation={item.guaranteedAllocation}
            />
        );
    });
};

const RenderRoundTwo = () => {
       const round2Icon = `${process.env.PUBLIC_URL}/images/icons/2FCFS.png`;
       const round2Icon_light = `${process.env.PUBLIC_URL}/images/icons/2FCFS_light.png`;
       const theme = useContext(ThemeContext);

       return (
           <>
                <div>
                    <img src={theme.isDark? round2Icon : round2Icon_light } alt="roundtwo" style={{position: 'relative', width:"102%", height:"102%", marginTop: "-2vh"}}/>
                </div>
                <div className="row">
                    <Text> All unsold tokens from the first round will be sold to all Tiered participants, and there will be NO LIMIT on how much a tiered participant can buy! </Text> &nbsp;
                    <Text> Tiered participants will be able to buy the remaining tokens on the same page where the first round was conducted, and at the same time regardless of the tier. </Text> &nbsp;
                    <Text> This round will remain open until all tokens are sold. Once all tokens are sold, that signals the end of the IDO sale.</Text> &nbsp;
                    <Text> Once the IDO sale has been concluded, the platform will prepare the tokens for release. Once the necessary preparations are done, participants can now proceed with claiming.
                        Just click the Claim buttons designated for the first and second rounds of the sale found on the same page where the sale was conducted. Participants may choose to participate in the
                        <StyledLink href="https://stake.sparkswap.finance/#/farms"> Liquidity Staking </StyledLink>
                        options that will be launched after the sale to earn extra token rewards.
                    </Text> &nbsp;
                </div>
            </>
       )
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
            <StyledTitle>ROUND 1 - ALLOCATION ROUND</StyledTitle>
            <Column>{RenderTierSystem()}</Column>
            &nbsp;
            <StyledTitle>ROUND 2 - FCFS ROUND</StyledTitle>
            &nbsp;
            <TwoColumn>{RenderRoundTwo()}</TwoColumn>
        </StyledContainer>
    );
};

export default Section;
