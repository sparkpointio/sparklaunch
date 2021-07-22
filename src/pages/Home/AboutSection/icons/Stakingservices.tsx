import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as StakingservicesIcon } from 'assets/About/Stakingservices.svg';
import { ReactComponent as StakingserviceslightIcon } from 'assets/About/Stakingservices_light.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
    const theme = useContext(ThemeContext);

    return (
      <SvgIcon width={100} Icon={theme.isDark? StakingservicesIcon : StakingserviceslightIcon} />
    )
};

export default Icon;