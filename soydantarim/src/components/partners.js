import '../sass/components/_partners.scss';
import hektasLogo from "../assets/partnersLogo/hektasLogo.png";
import bayerLogo from "../assets/partnersLogo/bayerLogo.png";
import dogatechLogo from "../assets/partnersLogo/dogatechLogo2.png";
import akcLogo from "../assets/partnersLogo/akcLogo.png";
import biolchimLogo from "../assets/partnersLogo/biolchimLogo.png";
import octaviusLogo from "../assets/partnersLogo/octaviusLogo.png";
export default function Partners() {
    return (
        <div className='partners'>
            <h1>Partner Firmalar</h1>
            <div className='partners__company'>
                <div className='logo'>
                    <img src={hektasLogo} className="companyImg" alt='hektas_Logo' />
                </div>
                <div className='logo'>
                    <img src={bayerLogo} className="companyImg" alt='bayer_Logo' />
                </div>
                <div className='logo'>
                    <img src={octaviusLogo} className="companyImg" alt='octavius_Logo' />
                </div>
                <div className='logo'>
                    <img src={akcLogo} className="companyImg" alt='akc_Logo' />
                </div>
                <div className='logo'>
                    <img src={biolchimLogo} className="companyImg" alt='biolchim_Logo' />
                </div>
                <div className='logo'>
                    <img src={dogatechLogo} className="companyImg" alt='dogatech_Logo' />
                </div>
            </div>

        </div>
    );
};