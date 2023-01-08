import Carousel from 'react-bootstrap/Carousel';
import '../sass/components/_commentCarousel.scss';
import profileIcon from '../assets/landingImg.jpg'

export default function CommentCarousel() {
    return (
        <Carousel variant="dark" className="container-carousel">
            <Carousel.Item interval={30000}>
                <div className='d-block'>
                    <div className='comment'>
                        <div className='comment__container'>
                            <div className='header'>
                                <img src={profileIcon} className='profileIcon' />
                                <div className='header__namedate'>
                                    <h5>Gurkan Yigit</h5>
                                    <p>01/12/2022</p>
                                </div>
                            </div>
                            <div className='text'>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nisl consequat, auctor augue et, facilisis diam. Ut euismod </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <div className='d-block'>
                    <div className='comment'>
                        <div className='comment__container'>
                            <div className='header'>
                                <img src={profileIcon} className='profileIcon' />
                                <div className='header__namedate'>
                                    <h5>Gurkan Yigit</h5>
                                    <p>01/12/2022</p>
                                </div>
                            </div>
                            <div className='text'>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nisl consequat, auctor augue et, facilisis diam. Ut euismod </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <div className='d-block'>
                    <div className='comment'>
                        <div className='comment__container'>
                            <div className='header'>
                                <img src={profileIcon} className='profileIcon' />
                                <div className='header__namedate'>
                                    <h5>Gurkan Yigit</h5>
                                    <p>01/12/2022</p>
                                </div>
                            </div>
                            <div className='text'>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nisl consequat, auctor augue et, facilisis diam. Ut euismod </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
                <div className='d-block'>
                    <div className='comment'>
                        <div className='comment__container'>
                            <div className='header'>
                                <img src={profileIcon} className='profileIcon' />
                                <div className='header__namedate'>
                                    <h5>Gurkan Yigit</h5>
                                    <p>01/12/2022</p>
                                </div>
                            </div>
                            <div className='text'>
                                <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at nisl consequat, auctor augue et, facilisis diam. Ut euismod </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};