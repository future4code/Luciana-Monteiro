import React, { useState } from 'react'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Matches from './pages/Matches'

function App() {
  const [page, setPage] = useState('home')

  const changePage = (newPage) => {
    setPage(newPage)
  }

  const switchPage = () => {
    switch(page) {
      case 'home':
        return <Home changePage={changePage} page={page} />
      case 'matches':
        return <Matches changePage={changePage} page={page} />
      default:
        return <NotFound />   
    }
  }

  return (
    <div>
      {switchPage()}
    </div>
  )
}

export default App;
