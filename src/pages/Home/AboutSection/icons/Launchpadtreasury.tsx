import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as LaunchpadtreasuryIcon } from 'assets/About/Launchpadtreasury.svg';
import { ReactComponent as LaunchpadtreasurylightIcon } from 'assets/About/Launchpadtreasury_light.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
    const theme = useContext(ThemeContext);
  
    return (
      <SvgIcon width={115} Icon={theme.isDark? LaunchpadtreasuryIcon : LaunchpadtreasurylightIcon } />
    )
};

export default Icon;