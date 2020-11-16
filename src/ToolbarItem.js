import React from 'react'

export default function ToolbarItem(props) {
  return (
    <li className='toolbar__item' key={ props.filter }>{ props.filter }</li>
  )
}