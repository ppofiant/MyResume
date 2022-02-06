import next from "next";
import React from "react";


const ButtonContact: React.FunctionComponent<{
    logoSrc: string;
}> = (props) => {
    return (
        <button className="btn-contact w-100">
            <div className="row mx-0">
                <div className="col-1 p-0">
                    <img className="btn-logo" src={props.logoSrc} alt="..." />
                </div>
                <div className="col-11 my-auto btn-label-contact">
                    <p>{props.children}</p>
                </div>
            </div>
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
                <div className="row mx-0">
                    <div className="col-lg-6">
                        <ButtonContact logoSrc="image/linkedin.png">Popo Fianto</ButtonContact>
                    </div>
                    <div className="col-lg-6">
                        <ButtonContact logoSrc="image/instagram.png">ppofiant</ButtonContact>
                    </div>
                    <div className="col-lg-6">
                        <ButtonContact logoSrc="image/gmail.png">ppofiant26@gmail.com</ButtonContact>
                    </div>
                    <div className="col-lg-6">
                        <ButtonContact logoSrc="image/whatsapp.png">(+62) 812-1527-4999</ButtonContact>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactMePage;