import React from 'react';
import { useNavigate } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import { Container, Col, Row } from 'react-bootstrap';
import Footer from './components/Footer';
import CarouselImage from './components/Carousel';
import image_1 from '../images/home_image_1.jpg';
import image_2 from '../images/home_image_2.jpg';
import image_3 from '../images/home_image_3.jpg';
import image_4 from '../images/home_image_5.jpg';

const HomePage = () => {
    const navigate = useNavigate();
    const images = [image_2, image_3, image_4];
    const titles = ["What we do", "Join us!"];
    const paragraphs = [
        {
            title: "What we do",
            description: "At Windermere Music Club, we orchestrate unforgettable experiences through the enchanting power of music! Our club is not merely a venue; it's a vibrant community where melodies intertwine with moments, creating memories that last a lifetime."
        },
        {
            title: "Join us",
            description: "Windermere Music Club is more than just a performance space. It's a hub of creativity and collaboration, where aspiring musicians find their voice and seasoned artists ignite inspiration. Our workshops, masterclasses, and jam sessions provide a platform for talent and connections to grow."
        }
    ];

    return (
        <div className="home-page">
            <NavigationBar />
            <Container className='title'>
                <h2 className='text-center'>Welcome to the Windermere Music Club</h2>
            </Container>
            <Container fluid className="custom-container px-4">
                <div className="zigzag">
                    <Row className="align-items-center">
                        <Col md={6} className="text-center">
                            <div className='image'>
                                <img src={image_1} alt="Home Image" className="img-fluid" />
                            </div>
                        </Col>
                        <Col md={6} className="order-md-1">
                            <div className="content">
                                <h3>{paragraphs[0].title}</h3>
                                <p>{paragraphs[0].description}</p>
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
                                <p>{paragraphs[1].description}</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Footer />
        </div>
    );
}

export default HomePage;
