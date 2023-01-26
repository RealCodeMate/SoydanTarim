import Carousel from 'react-bootstrap/Carousel';
import '../sass/components/_landingCarousel.scss';

export default function LandingCarousel() {
    return (
        <Carousel variant="dark" className="container-carousel2" fade>
            <Carousel.Item interval={2500}>
                <div className='d-block1'>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <div className='d-block2'>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <div className='d-block3'>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2500}>
                <div className='d-block4'>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};