import next from "next";
import React from "react";
import Image from "next/image";


const ButtonContact: React.FunctionComponent<{
    logoSrc: string;
    href: string;
    id: string;
}> = (props) => {
    return (
        <button className="btn-contact w-100" id={props.id}>
            <a href={props.href} target={'_blank'} rel="noreferrer">
                <div className="row mx-0">
                    <div className="col-1 p-0">
                        <Image className="btn-logo" src={props.logoSrc} width="100%" height="100%" layout="responsive" objectFit="contain" alt="..." />
                    </div>
                    <div className="col-11 my-auto btn-label-contact">
                        <p>{props.children}</p>
                    </div>
                </div>
            </a>
        </button>
    );
}

const ContactMePage: React.FunctionComponent<{

}> = () => {
    return (
        <div className="container container-contact d-flex align-items-center">
            <div className="contact-me-container">
                <div className="title-container">
                    <h1 className="title-contact">GET IN TOUCH</h1>
                    <p className="text-center title-description">Feel free to ask anything about me through these contact. or follow my instagram instead to see my photo collections !</p>
                </div>
                <div className="row mx-0 contact-wrapper" data-aos="zoom-out-up">
                    <div className="col-lg-6">
                        <ButtonContact id={'linkedin'} logoSrc="/images/linkedin.png" href="https://www.linkedin.com/in/popo-fianto-25b678198/">Popo Fianto</ButtonContact>
                    </div>
                    <div className="col-lg-6">
                        <ButtonContact id={'instagram'} logoSrc="/images/instagram.png" href="https://instagram.com/ppofiant">ppofiant</ButtonContact>
                    </div>
                    <div className="col-lg-6">
                        <ButtonContact id={'email'} logoSrc="/images/gmail.png" href="mailto:ppofiant26@gmail.com">ppofiant26@gmail.com</ButtonContact>
                    </div>
                    <div className="col-lg-6">
                        <ButtonContact id={'whatsapp'} logoSrc="/images/whatsapp.png" href="https://wa.wizard.id/ce580d">(+62) 812-1527-4999</ButtonContact>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMePage;