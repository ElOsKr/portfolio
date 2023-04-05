import React from 'react'
import { Stack, StackContainter, StackImg, StackList } from './SingleStackStyle'

function SingleStack({props}) {
  return (
    <StackContainter>
        <h3>{props.title}</h3>
        <StackList>
            {props.items.map((item) => 
                <Stack key={item.id}>
                    <StackImg>
                        <img src={item.icon} alt={item.id} />
                    </StackImg>
                    <p>{item.name}</p>
                </Stack>
            )}
        </StackList>
    </StackContainter>
  )
}

export default SingleStack