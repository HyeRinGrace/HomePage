import React from 'react'
import '../Introduce/Introduce.css';
import {Container,Row,Col} from 'react-bootstrap';

const introduce = () => {
  return (
    <Container className='IntroduceContainer'>
      <Row>
        <h3 className='header'>Experience</h3>
        <Col className='Box'>
          <div class='experienceBox'>
          <p >컴퓨터공학과 졸업</p>
          <p>2014.03 ~ 2019.06</p>
          </div>
          <Container className='Context'>
            <p>엄청나게 다양핸드폰이 나오던 시절, 이때부터 였던것 같습니다. 제가 기계에 관심을 가진게 디바이스별로 사양체크하고, 분해하고 조립했던 것을 좋아하던 저는 컴퓨터공학과를 선택하여 많은 것을 배워야하겠다. 생각하였습니다. </p>
          </Container>

          <div class='experienceBox'>
          <p >전국 대학교 창업 300팀 진출</p>
          <p>2014.03 ~ 2019.06</p>
          </div>
          <Container className='Context'>
            <p>대학생활 2학년이 끝날쯤 무렵, 회전각 산출 마우스를 개발하여 친구들 2명과 같이 학교내 창업동아리를 개설하여 전국대학교 창업대회에 참가하였습니다.  운이 좋게도 전국 300팀안에 들며, 상장을 받은 경험이 있습니다. </p>
          </Container>

        </Col>
        
        <Col className='Box'>
          <div class='experienceBox'>
          <p >다양한 아르바이트 경험</p>
          <p>2014.03 ~ 2019.06</p>
          </div>
          <Container className='Context'>
            <p>고등학교 3학년떄부터 취업하는날까지 저는 안해본 아르바이트가 없을 정도로 다양한 아르바이트를 경험했습니다. 그중에서도 가장 기억에 남는 아르바이트는 PC방 아르바이트입니다. 약 3년간 PC방 아르바이트를 진행해오면서 우여곡절도 많고, 사기도 당할뻔한 재미있는 에피소드도 많지만, 그 당시 어린저에게 사회의 경험을 알려준 고마운 경험이였습니다.</p>
          </Container>

          <div class='experienceBox'>
          <p >IT 회사 QA 임무</p>
          <p>2014.03 ~ 2019.06</p>
          </div>
          <Container className='Context'>
            <p>학교에서 취업연계로 QA업무를 임하며, 엔글이라는 회사에서 외주 IT기업 스마일게이트, 데브시스터즈 등 다양한 회사에서 QA를 진행하였으며, 최근까지 카카오브이엑스회사에서 트랭글(등산어플리케이션) QA를 진행했습니다. </p>
          </Container>
        </Col>

      </Row>
    </Container>
  )
}

export default introduce
