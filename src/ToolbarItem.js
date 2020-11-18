import React from 'react'

export default function ToolbarItem(props) {
  return (
    <li 
      className={ `toolbar__item ${ props.selected ? 'active' : '' }` } 
      onClick={ () => props.callback( props.filter ) }
    >
      { props.filter }
    </li>
  )
}