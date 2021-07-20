import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as RapidlaunchesIcon } from 'assets/About/Rapidlaunches.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
 
  return (
    <SvgIcon width={126} Icon={RapidlaunchesIcon} />
  )
};

export default Icon;