import next from "next";
import Image from "next/image";
import React from "react";


const AboutMePage: React.FunctionComponent<{

}> = () => {

    const renderAge = (): number => {
        const dateNow = new Date(Date.now());
        if (dateNow.getMonth() >= 8 && dateNow.getDate() >= 26) {
            // kalau udah tanggal ulang tahun, tambah umur 1 tahun 
            return dateNow.getFullYear() - 2000;
        }
        return dateNow.getFullYear() - 2000 - 1;
    }

    return (
        <div className="about-me">
            <div className="container">
                <div className="row mx-0">
                    <div className="col-lg-6">
                        <h1 className="about-me-title">
                            <div>
                                ABOUT ME
                            </div>
                            <div className="line-title" data-aos="zoom-out-right"></div>
                        </h1>
                    </div>
                </div>
                <div className="row mx-0">
                    <div className="col-lg-6 mx-0 my-auto about-left">
                        <div className="row mx-0 justify-content-end">
                            <div className="col-lg-2 about-left-container text-center" data-aos="fade-left">
                                <div className="college-container">
                                    <Image className="college-icon" src="/images/age.png" width="80%" height="80%" objectFit="contain" />
                                    <p className="college-label">{renderAge()}</p>
                                </div>
                                <div className="college-container">
                                    <Image className="college-icon" src="/images/college.png" width="80%" height="80%" objectFit="contain" />
                                    <p className="college-label">Joined 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mx-0 about-right" data-aos="fade-right" data-aos-delay={400}>
                        <p className="fw-bold">
                            My Name is Popo Fianto. I have been studying Computer Science in BINUS Unversity since 2018 - 2022.
                        </p>
                        <p className="">
                            Photography is my confidence. Every moment that i like must have some photo to memorize. Beside photography, i also confidence with coding and app development.
                        </p>
                        <p className="">
                            Lately in 2021 i&apos;ve working as an <span className="highlight">Fullstack Developer</span> intern at <span className="highlight">Accelist Lentera Indonesia</span>. I&apos;d love to work with other people and friends most.
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