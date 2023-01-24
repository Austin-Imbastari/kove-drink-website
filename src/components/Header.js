import React, { useState, useEffect } from "react";
//styles
import styled from "styled-components";
import { devices } from "../breakpoints";
// router
import { NavLink } from "react-router-dom";
// svg
import { ReactComponent as UpArrow } from "../assets/up-arrow-circle.svg";
// gsap
import gsap from "gsap";
let tl = gsap.timeline();

function Header({ dimensions, history }) {
    const [menuState, setMenuState] = useState({
        menuOpened: false,
    });

    useEffect(() => {
        // history.listen(() => {
        //     setMenuState({ menuOpened: false });
        // });

        if (menuState.menuOpened === true) {
            // run open manu animation
            gsap.to(".nav", {
                css: {
                    display: "block",
                },
            });
            gsap.to(".body", {
                css: {
                    overflow: "hidden",
                },
            });

            tl.to(".App", {
                duration: 1,
                y: dimensions.width <= 6540 ? "70vh" : dimensions.height / 2,
                ease: "expo.inOut",
            })
                .to(".hamburger-menu span", {
                    duration: 0.6,
                    delay: -1,
                    scaleX: 0,
                    transformOrigin: "50% 0%",
                    ease: "expo.inOut",
                })
                .to("#Path_1", {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 10,
                        strokeDasharray: 5,
                    },
                })
                .to("#Path_2", {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 10,
                        strokeDasharray: 20,
                    },
                })
                .to("#Line_1", {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 40,
                        strokeDasharray: 18,
                    },
                })
                .to("#circle", {
                    duration: 0.6,
                    delay: -0.8,
                    css: {
                        strokeDashoffset: 0,
                    },
                })
                .to(".hamburger-menu-close", {
                    duration: 0.6,
                    delay: -0.8,
                    css: {
                        display: "block",
                    },
                });
        } else {
            // run close menu animation

            tl.to(".App", {
                duration: 1,
                y: 0,
                ease: "expo.inOut",
            })
                .to("#circle", {
                    duration: 0.6,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: -193,
                        strokeDasharray: 227,
                    },
                })
                .to("#Path_1", {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 10,
                        strokeDasharray: 10,
                    },
                })
                .to("#Path_2", {
                    duration: 0.6,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 10,
                        strokeDasharray: 10,
                    },
                })
                .to("#Line_1", {
                    duration: 0.4,
                    delay: -0.6,
                    css: {
                        strokeDashoffset: 40,
                        strokeDasharray: 40,
                    },
                })
                .to(".hamburger-menu span", {
                    duration: 0.6,
                    delay: -0.6,
                    scaleX: 1,
                    transformOrigin: "50% 0%",
                    ease: "expo.inOut",
                })
                .to(".hamburger-menu-close", {
                    css: {
                        display: "none",
                    },
                })
                .to(".body", {
                    css: {
                        overflow: "auto",
                    },
                })
                .to(".nav", {
                    css: {
                        display: "none",
                    },
                });
        }
    });

    return (
        <HeaderContainer>
            <Container>
                <Row>
                    <Logo>
                        <NavLink to='/'>KOVÉ.</NavLink>
                    </Logo>
                    <Nav>
                        <div className='nav-toggle'>
                            <div onClick={() => setMenuState({ menuOpened: true })} className='hamburger-menu'>
                                <span></span>
                                <span></span>
                            </div>
                            <div onClick={() => setMenuState({ menuOpened: false })} className='hamburger-menu-close'>
                                <UpArrow />
                            </div>
                        </div>
                    </Nav>
                </Row>
            </Container>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;

    z-index: 69;
    @media ${devices.mobileL} {
        height: 96px;
    }
`;

const Container = styled.div`
    /* border: 1px solid purple; */
    height: 100%;
    margin: 0 auto;
    width: 90%;
`;

const Row = styled.div`
    /* border: 1px solid pink; */
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    padding: 0 32px;
`;

const Logo = styled.div`
    /* border: 1px solid green; */

    a {
        font-size: 1.2rem;
        font-weight: 700;
        text-decoration: none;
        letter-spacing: 1rem;
        color: #000;
    }
`;

const Nav = styled.div`
    /* border: 1px solid green; */

    .nav-toggle {
        cursor: pointer;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        @media ${devices.mobileS} {
            margin-right: 16px;
            width: 20px;
        }
        .hamburger-menu {
            width: 25px;
            span {
                margin-bottom: 0.3rem;
                background: #000;
                height: 2px;
                width: 100%;
                display: block;
            }
        }
        .hamburger-menu-close {
            position: absolute;
            display: none;
            svg {
                @media ${devices.mobileS} {
                    width: 48px;
                }
            }
        }
    }
`;
export default Header;
