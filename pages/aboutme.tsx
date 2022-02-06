import next from "next";
import React from "react";


const AboutMePage: React.FunctionComponent<{

}> = () => {
    return (
        <div className="about-me">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-lg-6">
                        <h1 className="about-me-title">
                            <div>
                                ABOUT ME
                            </div>
                            <div className="line-title"></div>
                        </h1>
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col-lg-6 mx-0">

                    </div>
                    <div className="col-lg-6 mx-0 about-right">
                        <p className="fw-bold">
                            My Name is Popo Fianto. I have been studying Computer Science in BINUS Unversity since 2018 - 2022.
                        </p>
                        <p className="">
                            Photography is my confidence. Every moment that i like must have some photo to memorize. Beside photography, i also confidence with coding and app development.
                        </p>
                        <p className="">
                            Lately in 2021 i've working as an <span className="highlight">Fullstack Developer</span> intern at <span className="highlight">Accelist Lentera Indonesia</span>. I'd love to work with other people and friends most.
                        </p>
                        <p className="">
                            I also have an experience with several programming language: C#, C++, Java, Javascript, Typescript.
                        </p>
                        <p className="">
                            <a href="resume.pdf" target={'_blank'}><button className="btn-resume">View Resume</button></a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMePage;