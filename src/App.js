import React, { useState, useEffect } from "react";

//styles
import GlobalStyles from "./Global.styles";

//components
import Header from "./components/Header";
import Home from "./pages/Home";
import CaseStudies from "./pages/CaseStudies";
import OurFlavors from "./pages/OurFlavors";
import Services from "./pages/Services";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import Drinks from "./pages/Drinks";

// routes`
import { Route, Routes } from "react-router-dom";
const routes = [
    { path: "/", name: "Home", Component: Home },
    { path: "/case-studies", name: "CaseStudies", Component: CaseStudies },
    { path: "/our-flavors", name: "OurFlavors", Component: OurFlavors },
    { path: "/services", name: "Services", Component: Services },
    { path: "/about-us", name: "About Us", Component: About },
    { path: "/drinks/:id", name: "drinks", Component: Drinks },
];

function debounce(fn, ms) {
    let timer;
    return () => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

function App() {
    const [dimensions, setDimensions] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    useEffect(() => {
        let vh = dimensions.height * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);

        const debounceHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }, 1000);

        window.addEventListener("resize", debounceHandleResize);
        return () => {
            window.removeEventListener("resize", debounceHandleResize);
        };
    });
    return (
        <>
            <GlobalStyles />
            <Header dimensions={dimensions} />
            <div className='App'>
                {routes.map(({ path, Component, name }) => (
                    <Routes key={name}>
                        <Route key={path} exact path={path} element={<Component />}></Route>
                    </Routes>
                ))}
            </div>
            <Navigation />
        </>
    );
}

export default App;
