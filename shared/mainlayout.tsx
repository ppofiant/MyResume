import next from "next";
import React, { useEffect, useState } from "react";

export const MainLayout: React.FunctionComponent<{

}> = (props) => {

    const [theme, setTheme] = useState<string>('🌙');

    useEffect(() => {
        renderTheme();
    }, [theme]);

    const renderTheme = () => {
        const html = document.documentElement;
        html.className = (theme === '🌙') ? 'dark' : 'light';
    }

    const changeTheme = () => {
        if (theme === '🌙') {
            setTheme('🌞');
        } else {
            setTheme('🌙');
        }
    }

    return (
        <div id="root">
            <div className="toggle-theme-wrapper">
                <div className="toggle-wrapper">
                    <button className="toggle" onClick={changeTheme}>{theme}</button>
                </div>
            </div>
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default MainLayout;