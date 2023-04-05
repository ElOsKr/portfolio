import React from 'react'
import { Stack, StackContainter, StackList } from './SingleStackStyle'

function SingleStack({props}) {
  return (
    <StackContainter>
        <h3>{props.title}</h3>
        <StackList>
            {props.items.map((item) => 
                <Stack key={item.id}>
                            <svg width={item.width} height={item.height}>
                                {item.icon.map((path, i) => 
                                    <path d={path} fill='white' key={i}></path>
                                )}
                            </svg>
                    <p>{item.name}</p>
                </Stack>
            )}
        </StackList>
    </StackContainter>
  )
}

export default SingleStack