import React from 'react'
import styled from 'styled-components'
import {ReactComponent as MatchesIcon} from '../icons/matches.svg'
import {ReactComponent as ReturnIcon} from '../icons/return.svg'

const HeaderStyled = styled.header`
  border-bottom: 1px solid #000133;
  position: relative;
  padding: 10px;

  > button:first-child {
    border: none;
    background-color: #D8DCD6;
  }

  > button:last-child {
    margin-left: 100%;
    transform: translateX(-100%);
    border: none;
    background-color: #D8DCD6;
    outline: none;
  }

  > button {
    :hover {
      cursor: pointer;
      background-color: #FC86AA;
    }
      outline: none;
  }
`

const Logo = styled.span`
  font-weight: 600;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;

  > span:first-child {
    color: #FC86AA;
  }

  > span:last-child {
    color: #000133;
  }
`

export default function Header(props) {

  const showReturnButton = () => {
    if (props.page === 'matches') {
      return (
        <button onClick={() => {props.changePage('profile')}}>
          <ReturnIcon />
        </button>
      )
    }
  }

  const showMatchesButton = () => {
    if (props.page === 'profile') {
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