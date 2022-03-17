import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as BlastIcon } from 'assets/Tiers/Blast.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
 
  return (
    <SvgIcon width={150} Icon={BlastIcon} />
  )
};

export default Icon;