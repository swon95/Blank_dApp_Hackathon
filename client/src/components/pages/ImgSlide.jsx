import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "./../../img/1.png" },
    { url: "./../../img/2.png" },
    { url: "./../../img/3.png" },
    { url: "./../../img/4.png" },
];

const ImgSlide = () => {
    return (
        <div className="relative">
            <SimpleImageSlider
                width={390}
                height={137}
                left={21}
                top={342}
                images={images}
                showBullets={true}
                showNavs={true}
                className="rounded-md overflow-hidden"
            />
        </div>
    );
};

export default ImgSlide;
