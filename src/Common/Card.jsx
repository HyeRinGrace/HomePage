import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {

    const ProjectName = {
        results:{
            0:{title : '넷플릭스' , context :'리액트, 리액트쿼리를 이용하여 만든 넷플릭스 클론페이지'},
            1:{title : '미니 가위바위보 게임' , context:'자바스크립트를 이용하여 만든 미니 가위바위보 게임'},
            2:{title : '팀프로젝트 마켓컬리' , context:'타입스크립트, Vue를 이용하여 만든 마켓컬리 클론페이지'},
            3:{title : '팀프로젝트 쇼핑몰' , context:'타입스크립트, Vue, Eslint를 이용하여 만든 팀프로젝트 쇼핑몰'}
        }}

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        {Object.values(ProjectName.results).map((item)=>(
            <div key={item.title}>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.context}</Card.Text>
            </div>
        ))}
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;
