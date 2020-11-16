import React from 'react'
import ToolbarItem from './ToolbarItem'

export default function Toolbar(props) {
  return (
    <ul className='toolbar__list' >
      { props.filters.map((filter) => <ToolbarItem selected={filter === props.selected} filter={ filter } key={ filter } callback={ props.onSelectFilter } />) }
    </ul>
  )
}