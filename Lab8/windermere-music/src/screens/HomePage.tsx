import React from 'react';
import { useNavigate } from "react-router-dom";
import NavigationBar from './components/NavigationBar';
import { Container, Col, Row, Carousel } from 'react-bootstrap';
import CarouselImage from './components/Carousel';
import image_1 from '../images/home_image_1.jpg';
import image_2 from '../images/home_image_2.jpg';
import image_3 from '../images/home_image_1.jpg';
import './HomePage.css';

const HomePage = () => {
    const navigate = useNavigate();
    const images: string[] = [image_1, image_2, image_3]; 
    return (
        <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
            <NavigationBar />
            <Container className="d-flex align-items-center justify-content-center">
                <h2>Welcome</h2>
            </Container>

            <Row className="align-items-center">
                <Col md={4} className="text-center">
                    <img src={image_1} alt="Home Image" style={{ maxWidth: "100%", height: "auto" }} />
                </Col>
                <Col md={8}>
                    <p>
                        At Windermere Music Club, we orchestrate unforgettable experiences through the enchanting power of music! Our club is not merely a venue; it's a vibrant community where melodies intertwine with moments, creating memories that last a lifetime. 
                    </p>
                </Col>
            </Row>

            <Container fluid className="bg-secondary text-white" style={{ flex: 1 }}>

            <Row className="align-items-center">
                <Col md={8}>
                    <p>
                    Windermere Music Club is more than just a performance space. It's a hub of creativity and collaboration, where aspiring musicians find their voice and seasoned artists ignite inspiration. Our workshops, masterclasses, and jam sessions provide a platform for talent and connections to grow.
                    </p>
                </Col>
                <Col md={4} className="text-center">
                    <CarouselImage images={images} />
                </Col>
            </Row>
            </Container>
        </body>
    )
}

export default HomePage;
