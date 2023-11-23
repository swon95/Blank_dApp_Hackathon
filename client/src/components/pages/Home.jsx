import React from "react";
import { Icon } from "@iconify/react";
import Bottom from "../pages/Bottom";

function Home() {
    return (
        <>
            <div className="flex border-2 p-4">
                <div className="header">
                    <Icon icon="mdi-light:magnify" />
                    <Icon icon="mdi-light:menu" />
                </div>
            </div>

            <div className="body h-[1900]">{/* <ImgSlide /> */}</div>

            <div className="bottom">
                <Bottom />
            </div>
        </>
    );
}

export default Home;
