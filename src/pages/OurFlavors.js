import React from "react";
//styles
import styled from "styled-components";
import { devices } from "../breakpoints";
// data
import casesArr from "../data";
// route
import { Link } from "react-router-dom";
function Cases() {
    return (
        <Case>
            <ContainerFluid>
                <Row>
                    <CaseContainer>
                        {casesArr.map((cases) => (
                            <CaseInfoContainer className='case-image' key={cases.id}>
                                <Link className='link' to={`/drinks/${cases.id}`}>
                                    <CaseInfo>
                                        <span>{cases.title}</span>
                                        <h2>{cases.type}</h2>
                                    </CaseInfo>
                                    <CaseImage>
                                        <video id='myVideo' src={`${cases.img}`} type='video/mp4' controls muted />
                                    </CaseImage>
                                </Link>
                            </CaseInfoContainer>
                        ))}
                    </CaseContainer>
                </Row>
            </ContainerFluid>
        </Case>
    );
}

const Case = styled.section`
    /* border: 12px solid green; */
    height: 50vh;
    height: calc(var(--vh, 1vh) * 50);
`;

const ContainerFluid = styled.div``;

const Row = styled.div`
    /* border: 1px solid blue; */
`;
const CaseContainer = styled.div`
    /* border: 1px solid blue; */
    display: flex;
    flex-wrap: wrap;
    position: relative;
    @media ${devices.mobileL} {
        flex-direction: column;
    }
`;

const CaseInfoContainer = styled.div`
    /* border: 1px solid orange; */
    position: relative;
    background: #000;
    cursor: pointer;
    transition: all 0.5s ease-in-out;
    &:hover {
        video {
            opacity: 0.4;
        }
    }

    .link {
        text-decoration: none;
    }
`;
const CaseInfo = styled.div`
    /* border: 1px solid blue; */
    width: 25vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 32px;
    z-index: 1;
    position: relative;
    height: calc(var(--vh, 1vh) * 100);

    @media ${devices.mobileL} {
        padding: 16px;
    }
    span {
        margin-top: 156px;
        font-size: 1.6rem;
        opacity: 0.7;
        color: #fff;
        font-weight: 600;
        @media ${devices.mobileL} {
            font-size: 1rem;
            line-height: 2.2rem;
            width: 250px;
        }
    }
    h2 {
        font-size: 2.4rem;
        line-height: 3.4rem;
        width: 85%;
        margin-top: 16px;
        color: #fff;
        @media ${devices.mobileL} {
            font-size: 1.7rem;
            line-height: 2.2rem;
            margin-top: 8px;
            width: 250px;
        }
    }
`;
const CaseImage = styled.div`
    /* border: 1px solid blue; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: absolute;
    opacity: 0.65;
    transition: 0.4s cubic-bezier(0.6, -0.05, 0.1, 0.99);

    video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.5s ease-in-out;
    }

    audio::-webkit-media-controls-timeline,
    video::-webkit-media-controls-timeline {
        display: none;
    }
    audio::-webkit-media-controls,
    video::-webkit-media-controls {
        display: none;
    }
`;

export default Cases;
