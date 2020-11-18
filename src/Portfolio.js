import React, { useState } from 'react'
import Toolbar from './Toolbar'
import ProjectsContainer from './ProjectsContainer'
import allProjects from './allProjects';

export default function Portfolio() {
  const [ projects, setProjects ] = useState(allProjects);
  const [ selectedFilter, setSelectedFilter ] = useState('All');
  const [ height, setHeight ] = useState ('1320px');

  function getHeight(filter) {
    switch (filter) {
      case 'Websites':
        return '840px';
      case 'Business Cards':
        return '480px';
      case 'Flayers':
        return '400px';
      default:
        return '1320px';
    }
  }

  function getFilteredProjects(filter) {
    setSelectedFilter(filter);
    setHeight(getHeight(filter));

    if (filter === 'All') {
      return setProjects(allProjects);
    }
    
    const filtered = allProjects.filter((project) => project.category === filter);
    return setProjects(filtered);
  }

  return (
    <div className='portfolio__container' >
      <Toolbar
        filters={ ["All", "Websites", "Flayers", "Business Cards"] }
        selected= { selectedFilter }
        onSelectFilter={ (filter) => getFilteredProjects(filter) }
        />
      <ProjectsContainer projects={ projects } height={ height } />
    </div>
  )
}