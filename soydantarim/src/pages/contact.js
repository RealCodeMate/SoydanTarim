import React, { useState, useRef } from "react";
import Map, {
    Marker,
    ScaleControl,
    NavigationControl,
    GeolocateControl,
    FullscreenControl,
} from "react-map-gl";
import 'mapbox-gl/dist/mapbox-gl.css';
import "../sass/pages/_contact.scss";
import GoToTop from "../utils/GoToTop";
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [lng, setLng] = useState(34.54157517052495);
    const [lat, setLat] = useState(36.758216451097155);

    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const [inputs, setInputs] = useState({
        displayName: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputs((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'gmail',
            'template_63jc18j',
            form.current,
            'user_RimOnGyUfCEMCL9yCSP74'
        )
            .then((result) => {
                alert('Teşekkürler ' + inputs.displayName + '😊');
            }, (error) => {
                alert(error.text);
            });

        setInputs(
            {
                displayName: "",
                email: "",
                message: "",
            }
        )
    };

    const { displayName, email, message } = inputs;

    return (
        <div className="contact">
            <div className="contact__left">
                <div className="contact__left__form">
                    <h2>Bizimle iletişime geçin</h2>
                    <form ref={form} onSubmit={handleSubmit}>
                        <input
                            name="displayName"
                            type="text"
                            className="feedback-input"
                            placeholder="İsim-Soyisim"
                            value={displayName}
                            onChange={handleChange}
                        />
                        <input
                            name="email"
                            type="text"
                            required
                            className="feedback-input"
                            placeholder="Email"
                            value={email}
                            onChange={handleChange}
                        />
                        <textarea
                            name="message"
                            className="feedback-input-2"
                            placeholder="Mesaj"
                            value={message}
                            onChange={handleChange}
                        />
                        <input type="submit" value={'Gönder'} />
                    </form>
                </div>
            </div>
            <div className="contact__right">
                <div className="contact__right__map">
                    <Map
                        mapboxAccessToken="pk.eyJ1IjoidHQzMyIsImEiOiJjbGF1MWloZm4wMjZrM3BuMGZ1d2g1Z2p1In0.BKizdKlGEIXhMxYo-dbYWA"
                        center
                        initialViewState={{
                            longitude: lng,
                            latitude: lat,
                            zoom: 15,
                        }}
                        style={{
                            width: "100%",
                            height: "100%",
                            borderRadius: "10px",
                        }}
                        className="map"
                        mapStyle="mapbox://styles/tt33/clauy32th004814n9nvnwcabp"
                    >
                        <Marker
                            latitude={lat}
                            longitude={lng}
                            color={"red"}
                            onClick={() =>
                                openInNewTab(
                                    "https://www.google.com/maps/place/Soydan+Tar%C4%B1m/@36.7581394,34.5416731,21z/data=!4m12!1m6!3m5!1s0x0:0x2c732b27c2f62093!2sSoydan+Tar%C4%B1m!8m2!3d36.7582186!4d34.5415745!3m4!1s0x0:0x2c732b27c2f62093!8m2!3d36.7582186!4d34.5415745"
                                )
                            }
                        />
                        <ScaleControl />
                        <NavigationControl />
                        <GeolocateControl />
                        <FullscreenControl />
                    </Map>
                </div>
            </div>
            <GoToTop />
        </div>
    )
}