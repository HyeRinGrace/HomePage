import React from 'react'
import '../HomePage/HomePage.css';
import AppLayout from '../AppLayout/AppLayout';
import Banner from './Banner/Banner';
import Skill from './Skill/Skill';
import Intro from './Intro/Intro';
import Project from './Project/Project';
import Bottom from './Bottom/Bottom';

const HomePage = () => {

   
  return (
    <>
      <AppLayout/>
    <div className='AppContainer'>
      <Banner/>
      <Intro/>
      <Skill/>
      <Project/>
      <Bottom/>
    </div>
    </>
  )
}

export default HomePage
