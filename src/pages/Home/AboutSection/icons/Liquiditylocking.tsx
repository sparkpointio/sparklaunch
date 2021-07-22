import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as LiquiditylockingIcon } from 'assets/About/Liquiditylocking.svg';
import { ReactComponent as LiquiditylockinglightIcon } from 'assets/About/Liquiditylocking_light.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
    const theme = useContext(ThemeContext);

    return (
      <SvgIcon width={129} Icon={theme.isDark? LiquiditylockingIcon : LiquiditylockinglightIcon} />
    )
};

export default Icon;