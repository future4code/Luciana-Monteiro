import React from 'react'
import Header from '../components/Header'

export default function Home (props) {
  
  return (
    <div><Header changePage={props.changePage} page={props.page}/></div> 
  )
}