import React from 'react'
import { MainContainer } from './PortfolioStyle'
import { portfolio } from '../../data/portfolio'
import Project from '../../components/Project/Project'

function Portfolio() {


  return (
    <MainContainer>
      <h1>Portfolio</h1>
      {portfolio.map((project,i) => 
        <Project props={project} key={i}/>
      )}
    </MainContainer>
  )
}

export default Portfolio