import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

// import { Flex } from 'rebass'
// import Link from '../Link'
import { RowFixed } from '../Row'
// import Logo from '../../assets/logo_white.svg'
// import Wordmark from '../../assets/wordmark_white.svg'
import WanSwapLogo from '../../assets/ANAYLITICSlogo.svg'

import { BasicLink } from '../Link'
import { useMedia } from 'react-use'

const TitleWrapper = styled.div`
  text-decoration: none;
  z-index: 10;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`

// const UniIcon = styled(Link)`
//   transition: transform 0.3s ease;
//   :hover {
//     transform: rotate(-5deg);
//   }
// `

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText }) => (activeText ? 1 : 0.6)};
  color: ${({ theme }) => theme.white};
  display: flex;
  margin-left: 12px;
  :hover {
    opacity: 1;
  }
`
const CustomFlex = styled.div`

  box-sizing: border-box;
  margin: 0;
  min-width: 0;

  align-items: center;
  display: flex;

  @media screen and (max-width: 500px) {
    flex-direction:column;
  }
 
`
const Logo = styled.div`
  
  img
  {
    max-width:140px;
    width:140px;
    @media screen and (max-width: 500px) {
      margin-bottom:20px;
    }
  }
`

export default function Title() {
  const history = useHistory()
  const below1080 = useMedia('(max-width: 1080px)')

  return (
    <TitleWrapper>
      <CustomFlex alignItems="center" style={{ justifyContent: 'space-between' }}>
        <RowFixed>
          {/* <UniIcon id="link" onClick={() => history.push('/')}>
            <img width={'24px'} src={Logo} alt="logo" />
          </UniIcon> */}
          <Logo>
            <BasicLink to="/home">
              <img style={{ marginLeft: '8px', marginTop: '0px' }} src={WanSwapLogo} alt="logo" />
            </BasicLink>
          </Logo>
        </RowFixed>
        {below1080 && (
          <RowFixed style={{ alignItems: 'flex-end' }}>
            <BasicLink to="/home">
              <Option activeText={history.location.pathname === '/home' ?? undefined}>Overview</Option>
            </BasicLink>
            <BasicLink to="/tokens">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'tokens' ||
                    history.location.pathname.split('/')[1] === 'token') ??
                  undefined
                }
              >
                Tokens
              </Option>
            </BasicLink>
            <BasicLink to="/pairs">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'pairs' ||
                    history.location.pathname.split('/')[1] === 'pair') ??
                  undefined
                }
              >
                Pairs
              </Option>
            </BasicLink>

            <BasicLink to="/accounts">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'accounts' ||
                    history.location.pathname.split('/')[1] === 'account') ??
                  undefined
                }
              >
                Accounts
              </Option>
            </BasicLink>
          </RowFixed>
        )}
      </CustomFlex>
    </TitleWrapper>
  )
}
