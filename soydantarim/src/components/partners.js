import '../sass/components/_partners.scss';
import image from "../assets/landingImg.jpg";
export default function Partners() {
    return (
        <div className='partners'>
            <h1>Partner Firmalar</h1>
            <div className='partners__company'>
                <div className='messi'>
                    <img src={image} className="companyImg" />
                </div>
                <div>
                    <img src={image} className="companyImg" />
                </div>
                <div>
                    <img src={image} className="companyImg" />
                </div>
                <div>
                    <img src={image} className="companyImg" />
                </div>
                <div>
                    <img src={image} className="companyImg" />
                </div>
                <div>
                    <img src={image} className="companyImg" />
                </div>
            </div>

        </div>
    );
};