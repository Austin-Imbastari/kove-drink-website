import React, { useEffect, useState } from "react";
//styles
import GlobalStyles from "../Global.styles";
// componenets
import IntroOverlay from "../components/IntroOverlay";
import Banner from "../components/Banner";
import Cases from "../components/Cases";
// animation
import gsap from "gsap";
const tl = gsap.timeline();

const homeAnimation = (completeAnimation) => {
    //timeline
    tl.from(".line span", 1.8, {
        opacity: 0,
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
            amount: 0.3,
        },
    })
        .to(".overlay-top", 1.6, {
            height: 0,
            ease: "Power0.easeNone",
            stagger: 0.4,
        })
        .to(".overlay-bottom", 1.6, {
            width: 0,
            ease: "Power0.easeNone",
            delay: -0.8,
            stagger: {
                amount: 0.8,
            },
        })
        .to(".intro-overlay", 0, {
            css: {
                display: "none",
            },
        })
        .from(".case-image video", 1.6, {
            scale: 1.5,
            ease: "Power0.easeNone",
            delay: -2,
            stagger: {
                amount: 0.4,
            },
            onComplete: completeAnimation,
        });
};

function Home() {
    const [animationComplete, setAnimationComplete] = useState(false);

    const completeAnimation = () => {
        setAnimationComplete(true);
        console.log("animation complete");
    };

    useEffect(() => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        homeAnimation(completeAnimation);
    }, []);

    return (
        <>
            <GlobalStyles />
            {animationComplete === false ? <IntroOverlay /> : ""}
            <Banner />
            <Cases />
        </>
    );
}

export default Home;
