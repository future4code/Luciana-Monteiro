import React, { useState } from 'react'
import styled from 'styled-components'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import Matches from './pages/Matches'

const Container = styled.div`
  border-radius: 5px;
  margin: 0 auto;
  width: 400px;
  border: 1px solid grey;
`  

function App() {
  const [page, setPage] = useState('profile')

  const changePage = (newPage) => {
    setPage(newPage)
  }

  const switchPage = () => {
    switch(page) {
      case 'profile':
        return <Profile changePage={changePage} page={page} />
      case 'matches':
        return <Matches changePage={changePage} page={page} />
      default:
        return <NotFound />   
    }
  }

  return (
    <Container>
      {switchPage()}
    </Container>
  )
}

export default App;
