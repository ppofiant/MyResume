import next from "next";
import React, { JSXElementConstructor, useEffect, useState } from "react";
import Image from "next/image";
import { ICard } from "models/ICard";
import { ProjectType } from "public/enums";


const CardProject: React.FunctionComponent<{
    cardDetail: ICard;
}> = (props) => {


    const renderProjectType = (): any => {
        if(props.cardDetail.projectType === ProjectType.personal) {
            return <span className="label personal">{ProjectType.personal}</span>;
        } else if(props.cardDetail.projectType === ProjectType.college) {
            return <span className="label college">{ProjectType.college}</span>;
        } else if(props.cardDetail.projectType === ProjectType.company) {
            return <span className="label private-company">{ProjectType.company}</span>;
        } else if(props.cardDetail.projectType === ProjectType.intern) {
            return <span className="label intern">{ProjectType.intern}</span>;
        }
        return null;
    }

    const renderFinishedLabel = (): any => {
        if(props.cardDetail.isCompleted === true) {
            return <span className="label complete">Finished</span>;
        }
        return null;
    }

    return (
        <div className="card cards" style={{ border: 'none', borderRadius: '7px' }}>
            <Image src={props.cardDetail.imageUrl} width="100%" height="75%" layout="responsive" alt="..." className="card-img-top img-card" />
            <div className="card-body">
                <div className="mb-3">
                    {renderProjectType()}
                    {renderFinishedLabel()}
                </div>
                <div className="card-desc">
                    <p className="card-title project-title">{props.cardDetail.projectName}</p>
                    <p className="card-text">{props.cardDetail.projectDesc}</p>
                </div>
                {
                    props.cardDetail.demoUrl !== null && props.cardDetail.demoUrl !== undefined &&
                    <a href={props.cardDetail.demoUrl} target={'_blank'} className="btn-view me-2" rel="noreferrer">View Demo</a> 
                }
                {
                    props.cardDetail.codeUrl !== null && props.cardDetail.codeUrl !== undefined &&
                    <a href={props.cardDetail.codeUrl} target={'_blank'} className="btn-view me-2" rel="noreferrer">View Code</a>
                }
            </div>
        </div>
    );
}


export const MyProjectPage: React.FunctionComponent<{

}> = () => {

    const initializeProject = (): ICard[] => {
        let listProject: ICard[] = [
            {
                imageUrl: '/images/netflix-clone.png',
                isCompleted: true,
                projectDesc: 'This is my first personal project to improve my frontend development by cloning the landing page of netflix.',
                projectName: 'Netflix Clone',
                projectType: ProjectType.personal,
                demoUrl: 'https://ppofiant.github.io/Netflix-Clone/',
                codeUrl: 'https://github.com/ppofiant/Netflix-Clone'
            },
            {
                imageUrl: '/images/readwaritestationary.png',
                isCompleted: true,
                projectDesc: 'This is my college project that develop the stationary e-commerce. Thanks for my collagues for the teamwork.',
                projectName: 'ReadWarite Stationary',
                projectType: ProjectType.college,
                codeUrl: 'https://github.com/ppofiant/ReadandWariteStationary',
            },
            {
                imageUrl: '/images/website-v1.png',
                isCompleted: true,
                projectDesc: `This is my first cv website before i've got an internship.`,
                projectName: 'CV Wesbite v1.0',
                projectType: ProjectType.personal,
                demoUrl: 'https://ppofiant.github.io/cv-website/',
                codeUrl: 'https://github.com/ppofiant/cv-website'
            },
            {
                imageUrl: '/images/employee-system.jpg',
                isCompleted: true,
                projectDesc: `Handle employee's management like leave request, leave quota, etc both in website and mobile.`,
                projectName: 'Employee System Management',
                projectType: ProjectType.company
            },
            {
                imageUrl: '/images/cmx.png',
                isCompleted: true,
                projectDesc: `Game mobile-web based using Phaser 5 as front end with user's requirements`,
                projectName: 'Conflict Management Simulation',
                projectType: ProjectType.intern
            }
        ]
        return listProject;
    }

    const [listProject, setListProject] = useState<ICard[]>(initializeProject());

    const renderCard = (): any => {
        let i = 400;
        return listProject.map((q, index) => {
            i+=100;
            return (
                <div key={index} className="col-lg-4 column-project mb-4" data-aos="fade-right" data-aos-delay={i}>
                    <CardProject cardDetail={q}/>
                </div>
            );
        })
    }

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
                    <div className="col-lg-9 m-auto">
                        <div className="row mx-0">
                            {renderCard()}
                            <div className="col-lg-4 column-project mb-4 d-flex align-items-center justify-content-center">
                                <h5 className="m-auto text-center">and etc..</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProjectPage;