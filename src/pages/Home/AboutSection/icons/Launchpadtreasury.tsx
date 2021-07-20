import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as LaunchpadtreasuryIcon } from 'assets/About/Launchpadtreasury.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
 
  return (
    <SvgIcon width={115} Icon={LaunchpadtreasuryIcon} />
  )
};

export default Icon;