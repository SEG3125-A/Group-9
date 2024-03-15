import React from 'react';
import { Carousel } from 'react-bootstrap';

interface CarouselImageProps {
    images: string[];
}

export default function CarouselImage({ images }: CarouselImageProps) {
    return (
        <Carousel>
            {images.map((image: string, index: number) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100 rounded"
                        src={image}
                        alt={`Slide ${index + 1}`}
                        style={{ width: '100%', height: '400px', objectFit: 'cover'}}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
