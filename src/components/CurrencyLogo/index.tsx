import React, { useMemo } from 'react'
import { ETHER, Token } from '@sparkpointio/sparkswap-sdk'
import styled from 'styled-components'
import EthereumLogo from 'assets/icons/images/binance-logo.png'
import { Currency } from 'components/types'
import Logo from '../Logo'

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
`

const getTokenLogoURL = (address: string) =>
  {
    if (address === '0xC3440c10c4F36f354eB591B19FafB4906d449B75') return `${process.env.PUBLIC_URL}/images/coins/SRK.png` // SRKb
    if (address === '0x14b1166aB53A237c8cEaeE2BBc4BbCa200cb7da8') return `${process.env.PUBLIC_URL}/images/coins/SRK.png` // bSRK

    return `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/${address}/logo.png`
  }

  export default function CurrencyLogo({
    currency,
    size = '24px',
    style
  }: {
    currency?: Currency | null
    size?: string
    style?: React.CSSProperties
  }) {
    // const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined)
    const srcs: string[] = useMemo(() => {
      // if (currency === ETHER) return []

      // if (currency instanceof Token) {
        // if (currency instanceof WrappedTokenInfo) {
        //   return [...uriLocations, `${process.env.PUBLIC_URL}/images/coins/${currency?.symbol ?? 'default'}.png`, getTokenLogoURL(currency.address)]
        // }
        return [`${process.env.PUBLIC_URL}/images/coins/${(currency?.symbol?.toLowerCase()) ?? 'default'}.png`]
      // }
      // return []
    }, [currency])
    console.log(`${process.env.PUBLIC_URL}/images/coins/${currency?.symbol?.toLowerCase()}`)
    if (currency === ETHER) {
      return <StyledEthereumLogo src={EthereumLogo} size={size} style={style} />
    }
    return (currency as any)?.symbol ? (
      <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
    ) : (
      <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />
    )
  }
