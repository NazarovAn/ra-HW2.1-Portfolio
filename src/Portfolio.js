import React from 'react'
import Toolbar from './Toolbar'

export default function Portfolio() {
  return (
    <div className='portfolio__container'>
      <Toolbar
      filters={["All", "Websites", "Flayers", "Business Cards"]}
      selected="All"
      onSelectFilter={(filter) => {console.log(filter);}}    
      />
    </div>
  )
}