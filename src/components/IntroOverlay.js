import React from "react";
//styles
import styled from "styled-components";
import { devices } from "../breakpoints";
function IntroOverlay() {
    return (
        <IntroOverlayContainer className='intro-overlay'>
            <Top>
                <OverlayTop className='overlay-top'></OverlayTop>
                <OverlayTop className='overlay-top'></OverlayTop>
                <OverlayTop className='overlay-top'></OverlayTop>
                <OverlayTop className='overlay-top'></OverlayTop>
            </Top>
            <Bottom>
                <OverlayBottom className='overlay-bottom'></OverlayBottom>
                <OverlayBottom className='overlay-bottom'></OverlayBottom>
                <OverlayBottom className='overlay-bottom'></OverlayBottom>
                <OverlayBottom className='overlay-bottom'></OverlayBottom>
            </Bottom>
        </IntroOverlayContainer>
    );
}

const IntroOverlayContainer = styled.div``;

const Top = styled.div`
    /* border: 4px solid red; */
    height: 70vh;
    height: calc(var(--vh, 1vh) * 50);
    position: absolute;
    width: 100%;
    z-index: 8;
`;

const OverlayTop = styled.div`
    position: absolute;
    height: 50vh;
    width: 25vw;
    background: #000;
    left: 0;
    right: 0;
    &:nth-child(2) {
        left: 25%;
        /* background: pink; */
    }
    &:nth-child(3) {
        left: 50%;
        /* background: #8ab9d3; */
    }
    &:nth-child(4) {
        left: 75%;
        /* background: beige; */
    }
`;

const Bottom = styled.div`
    /* border: 4px solid blue; */
    height: 70vh;
    height: calc(var(--vh, 1vh) * 70);
    position: absolute;
    bottom: 0;
    top: 50%;
    width: 100%;
    z-index: 8;
`;

const OverlayBottom = styled.div`
    position: absolute;
    height: 100%;
    width: 25vw;
    background: #000;
    bottom: 0;
    right: 75%;
    &:nth-child(2) {
        right: 50%;
    }
    &:nth-child(3) {
        left: 50%;
    }
    &:nth-child(4) {
        left: 75%;
    }
`;

export default IntroOverlay;
