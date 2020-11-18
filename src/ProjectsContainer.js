import React from 'react'
import ProjectItem from './ProjectItem'

export default function ProjectsContainer(props) {
  return (
    <div className="projects__container" style={ { maxHeight: props.height } }>
      { props.projects.map((project, index) => <ProjectItem project={ project } src={ project.img } key={ index } />) }
    </div>
  )
}

