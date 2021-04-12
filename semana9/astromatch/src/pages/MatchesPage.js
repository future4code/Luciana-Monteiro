import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import styled from 'styled-components'
import { baseUrl } from '../components/BaseUrl'
import axios from 'axios'

const Section = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    display: flex;
    align-items: center;
    margin-left: 10px;
    padding: 10px;

    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }

    >h1 {
      font-size: 16px;
      margin-left: 10px;
      font-weight: 300;
    }

  }
`

const ClearButton = styled.div`
  border-bottom: 1px solid grey;
  background-color: #FC86AA;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  border-radius: 5%;

  :hover {
    background-color: purple;
    cursor: pointer;
    color: white;

  }
`


export default function MatchesPage (props) {
  const [matches, setMatches] = useState([])

const getMatches = () => {
  axios
  .get(`${baseUrl}matches`)
  .then((res) => setMatches(res.data.matches))
  .catch((err) => console.log(err))
  }

  useEffect(() => {
    getMatches()
  }, [])

  const matchesList = 
  matches.map((matches) => {
    return (
      <div>
        <img src={matches.photo} /> 
        <h1>{matches.name}</h1>
      </div>
    )
  })

  const delMatches = () => {
    axios
    .put(`${baseUrl}clear`)
    .then(() => getMatches())
    .catch((err) => console.log(err))
  }


  return (
    <div>
      <Header changePage={props.changePage} page={props.page} />
        <Section>{matchesList}</Section>
        <div>
          <ClearButton onClick={delMatches}>Excluir matches</ClearButton>
        </div>
      
    </div>
  )}
