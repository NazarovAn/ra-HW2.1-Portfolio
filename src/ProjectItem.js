import React from 'react'

export default function ProjectItem(props) {
  return (
    <img className='project_img' alt='' src={props.project.img} />
  )
}