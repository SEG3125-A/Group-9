import React from 'react';
import '../App.css';
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';


const TeamPage = () => {
    const teamMembers = [
        {
          name: 'Rick Windermere',
          title: 'President',
          description: 'Hi! I am the president of the Windermere music club.',
          image: require('../images/president.jpg')
        },
        {
          name: 'Ilsa Lund',
          title: 'Vice President',
          description: 'Hi! I am the vice-president of the Windermere music club.',
          image: require('../images/vicepresident.jpg')
        },
        {
          name: 'Sam Smith',
          title: 'Event Coordinator',
          description: 'Hi! I am the event coordinator of the Windermere music club.',
          image: require('../images/eventcoordinator.jpg')
        },
        {
          name: 'Viktor Lazlo',
          title: 'Social Media Manager',
          description: 'Hi! I am the social media manager of the Windermere music club.',
          image: require('../images/socialmedia.jpg')
        }
      ];
    

    const navigate = useNavigate();

    return(
       <>
        <Container>
            <h1 className="text-center mb-5">Meet the team</h1>
            <Row>
                {teamMembers.map((member, index) => (
                <Col key={index} md={6} lg={3} className="mb-4">
                    <Card>
                        <Card.Img variant="top" src={member.image} style={{ height: '300px', objectFit: 'cover' }}/>
                        <Card.Body>
                            <Card.Title>{member.name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                            <Card.Text>{member.description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
        </Container>
       </>
    )

}

export default TeamPage;