import "../sass/pages/_gallery.scss";
export default function Gallery() {
    return (
        <div id="parent">
            <main class="gallery">
                <h1>Galeri</h1>
                <ul class="gallery__list">
                    <li key="image-1">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22944_hires.jpg"
                                alt="Image 1"
                            />
                        </figure>
                    </li>
                    <li key="image-2">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23021_hires.jpg"
                                alt="Image 2"
                            />
                        </figure>
                    </li>
                    <li key="image-3">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA23004_hires.jpg"
                                alt="Image 3"
                            />
                        </figure>
                    </li>
                    <li key="image-4">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA21212_hires.jpg"
                                alt="Image 4"
                            />
                        </figure>
                    </li>
                    <li key="image-5">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22983_hires.jpg"
                                alt="Image 5"
                            />
                        </figure>
                    </li>

                    <li key="image-6">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22906_hires.jpg"
                                alt="Image 6"
                            />
                        </figure>
                    </li>
                    <li key="image-7">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22963_hires.jpg"
                                alt="Image 7"
                            />
                        </figure>
                    </li>
                    <li key="image-8">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22918_hires.jpg"
                                alt="Image 8"
                            />
                        </figure>
                    </li>
                    <li key="image-9">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22914_hires.jpg"
                                alt="Image 9"
                            />
                        </figure>
                    </li>
                    <li key="image-10">
                        <figure>
                            <img
                                src="https://www.jpl.nasa.gov/spaceimages/images/largesize/PIA22937_hires.jpg"
                                alt="Image 10"
                            />
                        </figure>
                    </li>
                </ul>
            </main>
        </div>
    );
}