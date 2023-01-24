import React from "react";

//styles
import styled from "styled-components";
import { devices } from "../breakpoints";

//router
import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <NavigationNav className='nav'>
            <Container>
                <NavColumns>
                    <NavColumn>
                        <NavLabel>
                            <NavContactLabel>Menu</NavContactLabel>
                            <NavLinks>
                                <li>
                                    <NavLink to='/our-flavors' exact>
                                        Our Flavors
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/about-us' exact>
                                        About us
                                    </NavLink>
                                </li>
                            </NavLinks>
                        </NavLabel>
                    </NavColumn>
                    <NavContactColumn>
                        <NavContactLabel>Contact</NavContactLabel>
                        <NavContactInfos>
                            <NavContactInfo>
                                <li>Email</li>
                                <li>info@drinkkove.com</li>
                                <li>
                                    <NavLink to='/contact' exact>
                                        Get in touch with us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/audit' exact>
                                        Try some flavors
                                    </NavLink>
                                </li>
                            </NavContactInfo>
                            <NavContactInfo>
                                <li>Location</li>
                                <li>1745 National Ave</li>
                                <li> San Diego</li>
                                <li> CA 92113</li>
                            </NavContactInfo>
                            <NavContactInfo>
                                <li>Phone</li>
                                <li>(619) 349-4842</li>
                            </NavContactInfo>
                            <NavContactInfo>
                                <li>Legal</li>
                                <li>Privacy & Cookies</li>
                            </NavContactInfo>
                        </NavContactInfos>
                    </NavContactColumn>
                </NavColumns>
            </Container>
        </NavigationNav>
    );
};

const NavigationNav = styled.nav`
    left: 0;
    top: -1px;
    width: 100%;
    height: 100%;
    z-index: 1;
    /* display: none; */
    position: fixed;
    overflow: hidden;
    background-color: #fff3d8;

    a {
        position: relative;
        &:after {
            content: "";
            position: absolute;
            width: 0;
            height: 2px;
            display: block;
            margin-top: 5px;
            right: 0;
            background: #000;
            transition: 0.4s ease;
        }
        &:hover {
            &:after {
                width: 100%;
                left: 0;
                background: #000;
            }
        }
    }
`;
const Container = styled.div`
    /* height: 100%;
    width: 100%; */
    padding: 0 105px;
    margin-top: 50px;
`;

const NavColumns = styled.div`
    transform: translateY(125px);
    display: flex;
    justify-content: space-between;
    padding: 0 32px;
    width: 100%;

    @media ${devices.mobileL} {
        flex-direction: column;
        padding: 0 16px;
    }
`;
const NavColumn = styled.div`
    width: 45%;
    &:last-child {
        width: 55%;
        @media ${devices.mobileL} {
            width: 100%;
        }
    }
    @media ${devices.mobileL} {
        width: 100%;
    }
`;
const NavLabel = styled.div`
    margin-bottom: 3rem;
    font-size: 1.2rem;
    @media ${devices.mobileL} {
        font-size: 0.875rem;
        margin-bottom: 1.2rem;
    }
`;
const NavLinks = styled.ul`
    /* border: 1px solid red; */
    padding: 0;
    margin: 0;
    li {
        list-style: none;
        margin-bottom: 2.8rem;
        @media ${devices.mobileL} {
            margin-bottom: 1.6rem;
        }
    }
    a {
        font-weight: 600;
        font-size: 2.8rem;
        text-decoration: none;
        color: #000;
        @media ${devices.mobileL} {
            font-size: 2rem;
        }
    }
`;
const NavContactColumn = styled.div`
    width: 100%;
`;

const NavContactLabel = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 4rem;
`;
const NavContactInfos = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;

    @media ${devices.mobileL} {
        justify-content: space-between;
    }
`;
const NavContactInfo = styled.ul`
    /* border: 1px solid red; */
    padding: 0;
    width: 50%;
    &:nth-child(2),
    &:nth-child(3) {
        @media ${devices.mobileL} {
            display: none;
        }
    }

    li {
        list-style: none;
        font-weight: 600;
        font-size: 1.4rem;
        margin-bottom: 1.2rem;
        padding: 7px;
        @media ${devices.mobileL} {
            font-size: 1rem;
            margin-bottom: 0.875rem;
        }
    }
    a {
        /* border: 4px solid black; */
        text-decoration: none;
        color: #000;
    }
`;

export default Navigation;
