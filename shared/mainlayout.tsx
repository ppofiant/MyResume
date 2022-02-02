import next from "next";
import React from "react";

export const MainLayout: React.FunctionComponent<{

}> = (props) => {
    return (
        <div id="root">
            <div>
                {props.children}
            </div>
        </div>
    );
}

export default MainLayout;