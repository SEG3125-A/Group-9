import NavigationBar from './components/NavigationBar';
import { Container, Col, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import CarouselImage from './components/Carousel';
import image_1 from '../images/home_image_1.jpg';
import image_2 from '../images/home_image_2.jpg';
import image_3 from '../images/home_image_3.jpg';
import image_4 from '../images/home_image_5.jpg';
import { useTranslation } from 'react-i18next';

const HomePage = () => {

    const images = [image_2, image_3, image_4];

    const { t } = useTranslation();

    const paragraphs = [
        {
            title: t('home.goal.title'),
            description: t('home.goal.description')
        },
        {
            title: t('home.joinUs.title'),
            description: t('home.joinUs.description')
        }
    ];

    return (
        <div className="page-container">
            <NavigationBar />
            <Container className="page">
                <Container className='title'>
                    <h2 className='text-center'>{t('home.welcomeMessage')}!</h2>
                </Container>
                <Container fluid className="custom-container px-4">
                    <div className="zigzag">
                        <Row className="align-items-center">
                            <Col md={6} className="text-center">
                                <div className='image'>
                                    <img src={image_1} alt="Home" className="img-fluid" />
                                </div>
                            </Col>
                            <Col md={6} className="order-md-1">
                                <div className="content">
                                    <h3>{paragraphs[0].title}</h3>
                                    <p style={{ textAlign: "justify" }}>{paragraphs[0].description}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="mt-5 zigzag">
                        <Row className="align-items-center">
                            <Col md={6} className="text-center order-md-2">
                                <CarouselImage images={images} />
                            </Col>
                            <Col md={6} className="order-md-1">
                                <div className="content">
                                    <h3>{paragraphs[1].title}</h3>
                                    <p style={{ textAlign: "justify" }}>{paragraphs[1].description}</p>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </Container>
            <Footer />
        </div>
    );
}

export default HomePage;
