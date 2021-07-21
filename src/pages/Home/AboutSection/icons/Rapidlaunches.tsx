import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as RapidlaunchesIcon } from 'assets/About/Rapidlaunches.svg';
import { ReactComponent as RapidlauncheslightIcon } from 'assets/About/Rapidlaunches_light.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
    const theme = useContext(ThemeContext);

    return (
      <SvgIcon width={128} Icon={theme.isDark? RapidlaunchesIcon : RapidlauncheslightIcon} />
    )
};

export default Icon;