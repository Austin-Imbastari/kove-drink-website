import React from "react";
//styles
import styled from "styled-components";
import { devices } from "../breakpoints";
//svgs
import { ReactComponent as RightArrow } from "../assets/arrow-right.svg";

function Banner() {
    return (
        <BannerContainer>
            <Container>
                <Row>
                    <h2>
                        <Line className='line'>
                            <span>Made From Plants.</span>
                        </Line>
                        <Line className='line'>
                            <span>Made For Living.</span>
                        </Line>
                    </h2>
                    <BtnRow>
                        <a href='/'>
                            Find Kové <RightArrow />
                        </a>
                    </BtnRow>
                </Row>
            </Container>
        </BannerContainer>
    );
}

const BannerContainer = styled.div`
    /* border: 2px solid red; */
    height: 50vh;
    height: calc(var(--var, 1vh) * 50);
    background-color: #fff;
`;

const Container = styled.div`
    height: 100%;
    margin: 0 auto;
    width: 90%;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
    padding: 0 32px;

    h2 {
        font-size: 3rem;
        line-height: 4.2rem;
        font-weight: 700;
        z-index: 10;
        color: #fff;
        mix-blend-mode: difference;

        @media ${devices.mobileL} {
            margin-top: 72px;
            font-size: 1.7rem;
            line-height: 2.2rem;
        }
    }
`;
const Line = styled.div`
    margin-bottom: 8px;
    height: 56px;
    position: relative;
    overflow: hidden;

    span {
        position: absolute;
    }

    @media ${devices.mobileL} {
        height: 56px;
    }
`;
const BtnRow = styled.div`
    /* border: 2px solid red; */
    margin-top: 2.5rem;
    width: 256px;
    position: relative;
    z-index: 2;

    a {
        color: #000;
        text-decoration: none;
        display: flex;
        align-items: center;
        font-size: 1.6rem;
        font-weight: 600;
    }

    svg {
        margin-left: 16px;
        border: 2px solid black;
        padding: 12px;
        height: 45px;
        width: 45px;
        border-radius: 100px;
        transition: 0.4s ease-in-out;

        @media ${devices.mobileL} {
            padding: 6px;
            width: 30px;
            height: 30px;
        }
    }

    &:hover {
        svg {
            background-color: #000;
            color: #fff;
        }
    }

    @media ${devices.mobileL} {
        font-size: 1.1rem;
    }
`;
export default Banner;
