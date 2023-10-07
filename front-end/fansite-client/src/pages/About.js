import React from 'react';

function About() {
    return (
        <div
            className="container text-center mt-5"
            style={{ minHeight: '80vh' }}
        >
            <h1 className="text-primary">About Our Sassy K-pop Wonderland</h1>

            <div className="container w-75">
                <h2 className="text-secondary">
                    Hey There, K-pop Enthusiasts!
                </h2>
                <p className="text-dark">
                    Welcome to Kpop Fansite, where we're all about celebrating
                    K-pop in the sassiest way possible!
                </p>
                <div className="accordion" id="accordionExample">
                    {/* Accordion Item 1 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="false"
                                aria-controls="collapseOne"
                            >
                                What Exactly is K-pop?
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                K-pop, short for Korean pop sensation, isn't
                                just music; it's a global movement that's got
                                the world dancing, singing, and screaming
                                "Encore!" It's where catchy tunes meet
                                jaw-dropping choreography, and fashion
                                statements make runway models jealous. K-pop
                                isn't just an entertainment genre; it's a
                                lifestyle!
                            </div>
                        </div>
                    </div>

                    {/* Accordion Item 2 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseTwo"
                                aria-expanded="false"
                                aria-controls="collapseTwo"
                            >
                                A Sneak Peek Behind the Curtains
                            </button>
                        </h2>
                        <div
                            id="collapseTwo"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingTwo"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                K-pop's origin story goes way back to the '90s,
                                but it hit the international stage with a bang
                                in the late 2000s and early 2010s. Today, it's a
                                worldwide phenomenon, captivating hearts and
                                eardrums across the globe.
                            </div>
                        </div>
                    </div>

                    {/* Accordion Item 3 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                            >
                                What Makes K-pop So Darn Great?
                            </button>
                        </h2>
                        <div
                            id="collapseThree"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingThree"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <h3>What Makes K-pop So Darn Great?</h3>
                                <ul>
                                    <li>
                                        Superstar Idols: Our beloved K-pop idols
                                        are like real-life superheroes, armed
                                        with stunning vocal chops, dance moves
                                        that defy gravity, and personalities
                                        that light up the darkest night.
                                    </li>
                                    <li>
                                        Mind-Blowing Music Videos: Ever seen a
                                        music video that made you question
                                        reality? K-pop MVs are basically art
                                        installations that come to life.
                                    </li>
                                    <li>
                                        Genre Blender: K-pop refuses to be
                                        pigeonholed. It's a wild mix of genres,
                                        from hip-hop and EDM to ballads and
                                        bubblegum pop. Don't pick a favorite;
                                        you'll need them all.
                                    </li>
                                    <li>
                                        World Domination: K-pop's lyrics are a
                                        global melting pot, and many groups have
                                        members from all corners of the planet.
                                        It's like the United Nations of music,
                                        but way more fabulous.
                                    </li>
                                    <li>
                                        Fandom Frenzy: K-pop fandoms aren't just
                                        fans; they're family. They ride the
                                        K-pop rollercoaster with their idols
                                        through thick and thin.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Accordion Item 4 */}
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingFour">
                            <button
                                className="accordion-button"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseFour"
                                aria-expanded="false"
                                aria-controls="collapseFour"
                            >
                                Fun-tastic K-pop Tidbits
                            </button>
                        </h2>
                        <div
                            id="collapseFour"
                            className="accordion-collapse collapse"
                            aria-labelledby="headingFour"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <h3>Fun-tastic K-pop Tidbits</h3>
                                <ul>
                                    <li>
                                        Did you know the first-ever K-pop group,
                                        Seo Taiji and Boys, dropped their debut
                                        track in 1992? They basically planted
                                        the K-pop seed that grew into the K-pop
                                        forest we know today!
                                    </li>
                                    <li>
                                        BTS, the legendary Bangtan Boys,
                                        conquered the world and even rocked the
                                        United Nations in 2018. World leaders,
                                        take notes!
                                    </li>
                                    <li>
                                        K-pop idols have some of the quirkiest
                                        stage names in showbiz. Who wouldn't
                                        want to be called "V," "J-Hope," or
                                        "Lisa"?
                                    </li>
                                    <li>
                                        The term "Hallyu" is Korean for "wave,"
                                        and K-pop's riding it like a pro surfer,
                                        making waves of music, drama, and
                                        fashion worldwide.
                                    </li>
                                </ul>

                                <p>
                                    Explore our fansite for the hottest K-pop
                                    gossip, the sassiest interviews, and music
                                    videos that are basically visual
                                    masterpieces. Join us in celebrating the
                                    fabulousness of K-pop and the mind-blowing
                                    talents of our favorite artists!
                                </p>

                                <p>
                                    Thanks for stopping by! Let's turn up the
                                    volume and dance like nobody's watching
                                    because in K-pop, every day is a party!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
