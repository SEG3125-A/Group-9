import { Container, Row, Col, Card } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { useTranslation } from 'react-i18next';

const TeamPage = () => {

  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('team.president.name'),
      title: t('team.president.role'),
      description: t('team.president.description'),
      image: require('../images/president.jpg')
    },
    {
      name: t('team.vicePresident.name'),
      title: t('team.vicePresident.role'),
      description: t('team.vicePresident.description'),
      image: require('../images/vicepresident.jpg')
    },
    {
      name: t('team.eventCoordinator.name'),
      title: t('team.eventCoordinator.role'),
      description: t('team.eventCoordinator.description'),
      image: require('../images/eventcoordinator.jpg')
    },
    {
      name: t('team.socialMediaManager.name'),
      title: t('team.socialMediaManager.role'),
      description: t('team.socialMediaManager.description'),
      image: require('../images/socialmedia.jpg')
    }
  ];

  return (
    <>
      <NavigationBar />
      <Container className="page">
        <Container className='title'>
          <h2 className='text-center mb-3'><i className="fas fa-users m-2"></i>{t('team.title')}</h2>
        </Container>
        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} md={6} lg={3} className="mb-4">
              <Card>
                <Card.Img variant="top" src={member.image} style={{ height: '300px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>{member.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{member.title}</Card.Subtitle>
                  <br></br>
                  <Card.Text style={{height:'90px'}}>{member.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default TeamPage;