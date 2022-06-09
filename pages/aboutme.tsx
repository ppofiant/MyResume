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
                            <div className="col-lg-2 about-left-container text-center" data-aos="flip-left">
                                <div className="college-container">
                                    <Image className="college-icon" src="/images/age.png" width="80%" height="80%" objectFit="contain" alt="#" />
                                    <p className="college-label">{renderAge()}</p>
                                </div>
                                <div className="college-container">
                                    <Image className="college-icon" src="/images/college.png" width="80%" height="80%" objectFit="contain" alt="#" />
                                    <p className="college-label">Joined 2018</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mx-0 about-right" data-aos="fade-right" data-aos-delay={400}>
                        <p className="fw-bold">
                            My Name is Popo Fianto, currently working as Fullstack Developer
                        </p>
                        <p className="">
                            Lately in 2021 i&apos;ve working as an <span className="highlight">Fullstack Developer</span> at <span className="highlight">Accelist Lentera Indonesia</span>.
                            I&apos;d love to work with other people and friends most.
                        </p>
                        <p className="">
                            I have many experience in many kind of project like: Employee Management System, Customer care system, Web Game System, and many project including web / mobile apps
                        </p>
                        <p className="">
                            Beside of the project experience, i also unlocked my skills with several programming language: C#, C++, Java, Javascript, Typescript. and also several frameworks using that language.
                        </p>
                        <p className="">
                            To know me better, you can click this button below and see my detail experiences.
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