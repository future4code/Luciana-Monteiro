import React from 'react'
import styled from 'styled-components'
import {ReactComponent as MatchesIcon} from '../icons/matches.svg'
import {ReactComponent as ReturnIcon} from '../icons/return.svg'

const HeaderStyled = styled.header`
  border-bottom: 1px solid grey;
  position: relative;

  > button:last-child {
    margin-left: 90%;
    transform: translateX(-100%);
  }
`
const Logo = styled.span`
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

  > span:first-child {
    color: green;
  }

  > span:last-child {
    color: purple;
  }
`

export default function Header(props) {

  const showReturnButton = () => {
    if (props.page === 'matches') {
      return (
        <button onClick={() => {props.changePage('home')}}>
          <ReturnIcon />
        </button>
      )
    }
  }

  const showMatchesButton = () => {
    if (props.page === 'home') {
      return (
        <button onClick={() => {props.changePage('matches')}}>
          <MatchesIcon />
        </button>
      )
    }
  }

  return (
    <HeaderStyled > 
      {showReturnButton()}
      <Logo>
        <span>astro</span>
        <span>match</span>
      </Logo>
      {showMatchesButton()}
    </HeaderStyled> 
  )
}