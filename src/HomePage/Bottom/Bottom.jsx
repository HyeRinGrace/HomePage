import React from 'react'
import '../Bottom/Bottom.css';
import {Container,Row,Col} from 'react-bootstrap';

const Bottom = () => {
  return (
    <Container className='BottomContainer'>
        <Row>
            <Col>
                <div>이메일 : kdjsanh0217@naver.com</div>
                <div>연락처 : 010-6385-7618</div>
            </Col>
        </Row>
    </Container>
  )
}

export default Bottom
