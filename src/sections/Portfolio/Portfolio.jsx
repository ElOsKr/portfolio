import React from 'react'
import { MainContainer, PortfolioContainer } from './PortfolioStyle'
import { portfolio } from '../../data/portfolio'
import Project from '../../components/Project/Project'

function Portfolio() {


  return (
    <MainContainer>
      <h1>Portfolio</h1>
      <PortfolioContainer>
        {portfolio.map((project,i) => 
          <Project props={project} key={i}/>
        )}        
      </PortfolioContainer>
    </MainContainer>
  )
}

export default Portfolio