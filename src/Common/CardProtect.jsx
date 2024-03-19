import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CardProtect.css';

function CardProtect() {
  const [projects, setProjects] = useState([]);

  const getAPI = async () => {
    try {
      const URL = "http://localhost:4000/projects";
      const response = await fetch(URL);
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    getAPI();
  }, []); // setProjects를 의존성 배열에 추가

  return (
    <div className='CardContainer'>
      {projects.map((project) => (
        <Card className='Card' key={project.id}>
          <Card.Img className='CardImage' variant="top" src={project.imageURL} />
          <Card.Body className='CardBody'>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.context}</Card.Text>
            <Button variant="warning" href={project.Link}>방문하기</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default CardProtect;