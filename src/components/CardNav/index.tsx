import React, {useContext} from 'react'
import styled, {ThemeContext} from 'styled-components'
import { Link} from 'react-router-dom'
import { Button, ButtonMenu, ButtonMenuItem, useModal } from '@sparkpointio/sparkswap-uikit'

const StyledNav = styled.div`
  display: flex;
  height: 7vh;
  width: 100%;
  margin-top: 15px;
  border-bottom: 3px solid ${({theme}) => theme.colors.primary};
`

const StyledButtonMenu = styled(ButtonMenu)`
  & {
    width: 100%;
    flex: 2;
    background-color: ${({theme}) => theme.colors.background};
  }
`
const StyledButton = styled(Button)`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.textSubtle};
  height: 7vh;
`

const Nav = ({ activeIndex = 0 }: { activeIndex?: number }) => {
    const theme = useContext(ThemeContext)

  
    return (
    <StyledNav>
      <StyledButtonMenu size="md" activeIndex={activeIndex}  variant='primary'>
        <ButtonMenuItem fullWidth id="swap-nav-link" to="/launch/projects" as={Link} style={{height: '7vh', ...theme.isDark && {color: `${theme.isDark && theme.colors.text}`}}} >
          LaunchPad
        </ButtonMenuItem>
        <ButtonMenuItem fullWidth id="pool-nav-link" to="/launch/staking" as={Link} style={{height: '7vh', ...theme.isDark && {color: `${theme.isDark && theme.colors.text}`} }}  >
          Staking
        </ButtonMenuItem>
      </StyledButtonMenu>
    </StyledNav>
  )}
  
  export default Nav