import next from "next";
import React, { useEffect, useState } from "react";

const ProfilePage: React.FunctionComponent<{

}> = (props) => {

    const listRoles: string[] = ['Software Engineer', 'Photography Enthusiast', 'Fresh Graduate'];
    const [idxRole, setIdxRole] = useState<number>(0);
    const [role, setRole] = useState<string>('');
    const [isMaxLength, setIsMaxLength] = useState<boolean>(false);

    useEffect(() => {
        const interval = setInterval(() => {
            const typeRole = updateRole();
            setRole(typeRole);
        }, (isMaxLength === true) ? 100 : 250);
        return () => clearInterval(interval);
    }, [role]);

    const updateRole = (): string => {
        const currentRole = listRoles[idxRole];
        const length = role.length;
        if (currentRole !== undefined && currentRole !== '') {
            if (isMaxLength === true) {
                const roles = currentRole.substring(0, length - 1);
                if (roles === '') {
                    setIsMaxLength(false);
                    const idx = (idxRole === listRoles.length - 1) ? 0 : idxRole + 1;
                    setIdxRole(idx);
                }
                return roles;
            }
            const roles = currentRole.substring(0, length + 1);
            if (roles === currentRole) {
                setIsMaxLength(true);
            }
            return roles;
        }
        return '';
    }

    return (
        <div className="row m-0">
            <div className="col-lg-4 profile-intro">
                <div className="profile-name mb-4">
                    <p id="role">{role}</p>
                    <h1 id="fullname">POPO FIANTO</h1>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="photo-container">
                    <div className="photo-canvas">
                        <img src="https://ppofiant.github.io/cv-website/assets/popo.png" alt="photo" className="photo-profile"/>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 profile-desc d-flex">
                <div className="description">
                    <span className="quote">"</span>
                    Highly responsible person
                    about working and learning new
                    things. Self-motivated to
                    improve all about technology
                    and design.
                    <br />
                    <p className="logos">
                        <a href="https://www.linkedin.com/in/popo-fianto-25b678198/" target={'_blank'}><img src="https://logo.clearbit.com/linkedin.com" alt="linkedin" /></a>
                        <a href="https://github.com/ppofiant" target={'_blank'}><img src="https://logo.clearbit.com/github.com" alt="github" /></a>
                        <a href="mailto:ppofiant26@gmail.com" target={'_blank'}><img src="https://logo.clearbit.com/uchightech.com.tw" alt="gmail" /></a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;