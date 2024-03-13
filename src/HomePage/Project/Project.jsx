import React from 'react'
import '../Project/Project.css';
import {Container,Row,Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Card from '../../Common/Card';

const Project = () => {


  return (
    <Container className='ProjectContainer'>
    <Row>
        <h3 className='header'>Project's</h3>
      <Col>
        <Card/>
      </Col>
      <Col>
        <Card/>
      </Col>
    </Row>
    <Row>
        <Col>
            <Card/>
        </Col>
        <Col>
            <Card/>
        </Col>
    </Row>
    <Row>
        <Col>
            <Card/>
        </Col>
    </Row>
  </Container>
  )
}

export default Project
