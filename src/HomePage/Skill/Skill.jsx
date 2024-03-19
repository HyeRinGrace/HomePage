import React from 'react'
import '../Skill/Skill.css';
import {Container,Row,Col} from 'react-bootstrap'
import JsImage from '../../assets/JsImage.svg';
import CssImage from '../../assets/CssImage.svg';
import HtmlImage from '../../assets/htmlImage.svg';
import ReactImage from '../../assets/ReactImage.svg';
import GitImage from '../../assets/GitHubImage.svg';
import Vercel from '../../assets/VercelImage.svg';

const Skill = () => {

  
  return (
    <Container className='SkillContainer'>
      <Row>
        <h3 className='header'>Skill's</h3>
        <Col className='skills'>
          <img className ="SkillImages" src={JsImage}/>
          <img className ="SkillImages" src={CssImage}/>
          <img className ="SkillImages" src={HtmlImage}/>
          <img className ="SkillImages" src={ReactImage}/>
          <img className ="SkillImages" src={GitImage}/>
          <img className ="SkillImages" src={Vercel}/>
          <img className ="SkillImages" src='https://cdn.iconscout.com/icon/free/png-256/free-npm-3521612-2945056.png'/>
          <img className='reduxIcon' src='https://velog.velcdn.com/images/river-m/post/f6c12d75-cdee-4572-a5a8-92144be196b3/image.png'/>
          <img className='reactQueryIcon' src='https://vectorseek.com/wp-content/uploads/2023/09/React-Query-Logo-Vector.svg-.png'/>
        </Col>



      </Row>
    </Container>
  )
}

export default Skill