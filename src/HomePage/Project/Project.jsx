import React from 'react';
import '../Project/Project.css';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import CardProtect from '../../Common/CardProtect';
import '../Project/Project.css';

const Project = () => {
  return (
    <Container className='ProjectContainer'>
      <h3 className='header'>Project's</h3>
      <Col className='ColContainer'>
        <Row className="g-4">
          <Col>
            <CardProtect />
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Project;
