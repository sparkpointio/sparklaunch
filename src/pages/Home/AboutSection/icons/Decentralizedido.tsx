import React, { SVGAttributes, useContext } from "react";
import { ThemeContext } from "styled-components";
import { SvgProps } from 'components/SvgIcon/types';
import { ReactComponent as DecentralizedidoIcon } from 'assets/About/Decentralizedido.svg';
import { ReactComponent as DecentralizedidolightIcon } from 'assets/About/Decentralizedidolight.svg';
import SvgIcon from "components/SvgIcon";

const Icon: React.FC<SvgProps> = (props) => {
    const theme = useContext(ThemeContext);

    return (
      <SvgIcon width={118.5} Icon={theme.isDark? DecentralizedidoIcon : DecentralizedidolightIcon } />      
    )
};

export default Icon;