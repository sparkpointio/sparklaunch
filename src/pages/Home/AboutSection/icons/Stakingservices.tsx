import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as StakingservicesIcon } from 'assets/About/Stakingservices.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
 
  return (
    <SvgIcon width={100} Icon={StakingservicesIcon} />
  )
};

export default Icon;