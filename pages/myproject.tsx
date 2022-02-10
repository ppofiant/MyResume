import next from "next";
import React from "react";
import Image from "next/image";

export const MyProjectPage: React.FunctionComponent<{

}> = () => {
    return (
        <div className="my-project m-0">
            <div className="container">
                <div className="row mx-0 project-container justify-content-center">
                    <div className="col-lg-3 m-auto">
                        <h1 className="title-project my-5">
                            <div>
                                MY PROJECT
                            </div>
                            <div className="line-title-project" data-aos="zoom-in-right"></div>
                        </h1>
                    </div>
                    <div className="col-lg-3 column-project" data-aos="fade-right" data-aos-delay={400}>
                        <div className="card cards" style={{ border: 'none', borderRadius: '7px' }}>
                            <Image src="/images/netflix-clone.png" width="100%" height="75%" layout="responsive" alt="..." className="card-img-top" />
                            <div className="card-body">
                                <div className="mb-3">
                                    <span className="label personal">Personal</span>
                                    <span className="label complete">Finished</span>
                                </div>
                                <p className="card-title project-title">Netflix Clone</p>
                                <p className="card-text">This is my first personal project to improve my frontend development by cloning the landing page of netflix.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 column-project" data-aos="fade-right" data-aos-delay={450}>
                        <div className="card cards" style={{ border: 'none', borderRadius: '7px' }}>
                            <Image src="/images/readwaritestationary.png" width="100%" height="75%" layout="responsive" alt="..." className="card-img-top" />
                            <div className="card-body">
                                <div className="mb-3">
                                    <span className="label college">College</span>
                                    <span className="label complete">Finished</span>
                                </div>
                                <p className="card-title project-title">ReadWarite Stationary</p>
                                <p className="card-text">This is my college project that develop the stationary e-commerce. Thanks for my collagues for the teamwork.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 column-project" data-aos="fade-right" data-aos-delay={500}>
                        <div className="card cards" style={{ border: 'none', borderRadius: '7px' }}>
                            <Image src="/images/website-v1.png" width="100%" height="75%" layout="responsive" alt="..." className="card-img-top card-image" />
                            <div className="card-body">
                                <div className="mb-3">
                                    <span className="label personal">Personal</span>
                                    <span className="label complete">Finished</span>
                                </div>
                                <p className="card-title project-title">CV Wesbite v1.0</p>
                                <p className="card-text">This is my first cv website before i&apos;ve got an internship.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjectPage;