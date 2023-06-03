import React from 'react'
import AppWelcome from './Welcome'
//import Navbar from '../../../Layout/Header/Navbar'
import { Container } from 'react-bootstrap'
import ChartUpdate from '../../../Components/chart-types/ChartUpdate'
//import AppTotalInstalled from './AppTotalInstalled'


function Statistics() {
  return (
    <div>
      {/*
      <Navbar/>*/}
      <Container>
      <AppWelcome/>
      
      <ChartUpdate/>
      
      {/*<AppTotalInstalled/>*/}
      </Container>
    </div>
  )
}

export default Statistics