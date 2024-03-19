import React from 'react'
import '../HomePage/HomePage.css';
import AppLayout from '../AppLayout/AppLayout';
import Banner from './Banner/Banner';
import Skill from './Skill/Skill';
import Introduce from './Introduce/introduce';
import Project from './Project/Project';
import Bottom from './Bottom/Bottom';

const HomePage = () => {

   
  return (
    <>
      <AppLayout/>
    <div className='AppContainer'>
      <Banner/>
      <Introduce/>
      <Skill/>
      <Project/>
      <Bottom/>
    </div>
    </>
  )
}

export default HomePage