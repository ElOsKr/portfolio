import React from 'react'
import { MainContainer, StackContainer } from './StackStyle'
import stack from '../../data/stack.json';
import SingleStack from '../../components/SingleStack/SingleStack';

function Stack() {
  return (
    <MainContainer>
        <h1>Stack</h1>
        <StackContainer>
          {stack.map((stack) => 
              <SingleStack props={stack} key={stack.title}/>
          )}          
        </StackContainer>
    </MainContainer>
  )
}

export default Stack