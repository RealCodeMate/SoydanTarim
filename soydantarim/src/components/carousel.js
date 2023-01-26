import Carousel from 'react-bootstrap/Carousel';
import '../sass/components/_commentCarousel.scss';
import abdullahTurer from '../assets/commentsUser/abdullahTurer.png'
import cumaliOzdemir from '../assets/commentsUser/cumaliOzdemir.png'
import fatihYalin from '../assets/commentsUser/fatihYalin.png'
import nurKursun from '../assets/commentsUser/nurKursun.png'

export default function CommentCarousel() {
    return (
        <Carousel variant="dark" className="container-carousel">
            <Carousel.Item interval={1500}>
                <div className='d-block'>
                    <div className='comment'>
                        <div className='comment__container'>
                            <div className='header'>
                                <img src={abdullahTurer} className='profileIcon' />
                                <div className='header__namedate'>
                                    <h5>Abdullah Türer</h5>
                                    <p>6 ay önce</p>
                                </div>
                            </div>
                            <div className='text'>
                                <h2>Bol çeşit, kaliteli ürünler ve güvenilir hizmet. Tavsiye ederim.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <div className='d-block'>
                    <div className='comment'>
                        <div className='comment__container'>
                            <div className='header'>
                                <img src={cumaliOzdemir} className='profileIcon' />
                                <div className='header__namedate'>
                                    <h5>Cumali Ozdemir</h5>
                                    <p>2 yıl önce</p>
                                </div>
                            </div>
                            <div className='text'>
                                <h2>Çok samimi bir ortam.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <div className='d-block'>
                    <div className='comment'>
                        <div className='comment__container'>
                            <div className='header'>
                                <img src={nurKursun} className='profileIcon' />
                                <div className='header__namedate'>
                                    <h5>Nur Kurşun</h5>
                                    <p>1 yıl önce</p>
                                </div>
                            </div>
                            <div className='text'>
                                <h2>İletişim iyi bir satıcı</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <div className='d-block'>
                    <div className='comment'>
                        <div className='comment__container'>
                            <div className='header'>
                                <img src={fatihYalin} className='profileIcon' />
                                <div className='header__namedate'>
                                    <h5>Fatih Yalın</h5>
                                    <p>3 yıl önce</p>
                                </div>
                            </div>
                            <div className='text'>
                                <h2>Tarım onların işi.</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <Carousel.Caption className="carosuel-content"></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};