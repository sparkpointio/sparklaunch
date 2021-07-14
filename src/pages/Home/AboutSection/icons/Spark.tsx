import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as SparkIcon } from 'assets/Tiers/Spark.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
 
  return (
    <SvgIcon width={94.5} Icon={SparkIcon} />
  )
};

export default Icon;