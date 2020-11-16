import React from 'react'
import ToolbarItem from './ToolbarItem'

export default function Toolbar(props) {
  return (
    <ul className='toolbar__list'>
      { props.filters.map((filter) => <ToolbarItem filter={ filter } />) }
    </ul>
  )
}