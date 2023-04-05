import React from 'react'
import { MainContainer } from './StackStyle'
import stack from '../../data/stack.json';
import SingleStack from '../../components/SingleStack/SingleStack';

function Stack() {
  return (
    <MainContainer>
        <h1>Stack</h1>
        {stack.map((stack) => 
            <SingleStack props={stack} key={stack.title}/>
        )}
    </MainContainer>
  )
}

export default Stack