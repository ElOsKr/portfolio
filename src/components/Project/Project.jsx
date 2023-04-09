import React from 'react'
import { ProjectContainter, ProjectDescription, ProjectOptions } from './ProjectStyle'

function Project({props}) {
  return (
  <ProjectContainter>
    <img src={props.photo} alt={props.id} />
    <ProjectDescription>
      <h2>{props.name}</h2>
      <p>{props.description}</p>
      <ProjectOptions>
        <a href={props.repository} target='_blank'>Repositorio</a>
        {props.website?
          <a href={props.website} target='_blank'>Sitio Web</a>
          :
          null
        }
      </ProjectOptions>
    </ProjectDescription>
  </ProjectContainter>
  )
}

export default Project