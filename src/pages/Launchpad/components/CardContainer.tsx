import React from 'react';
import { CardGroup } from '../styled';
import Card from './LaunchCard';
import { IProjects } from '../../../config/constants/type';
import {useLaunchpadContract} from "../../../hooks/useContracts";

interface Props {
    ProjectList?: Array<IProjects>
}

const CardContainer: React.FC<Props> = (props) => {
    const { ProjectList } = props;
    const pages = ProjectList?.map((item) => {
        return (
            <Card
                {... item}
            />
        );
    })
    return (
        <CardGroup>
            {pages}
        </CardGroup>
    );
};

export default CardContainer;
