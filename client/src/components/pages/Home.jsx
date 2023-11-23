import React from "react";
import { Icon } from "@iconify/react";
import Bottom from "../common/Bottom";
import ImgSlide from "./ImgSlide";

function Home() {
    return (
        <>
            <div className="header flex items-center justify-between px-4 py-2">
                <Icon icon="mdi-light:magnify" className="text-xl" />
                <Icon icon="mdi-light:menu" className="text-xl" />
            </div>

            <div className="body max-w-screen-sm mx-auto mt-4 p-4">
                <p className="text-lg font-semibold mb-2">
                    Suggested survey for you
                </p>
                <ImgSlide />
                <p className="text-lg font-semibold mb-2">Now trending 🔥</p>
                <ImgSlide />
            </div>

            <div className="bottom">
                <Bottom />
            </div>
        </>
    );
}

export default Home;
