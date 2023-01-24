import React from "react";
//styles
import styled from "styled-components";
import { devices } from "../breakpoints";

function CaseStudies() {
    return (
        <Pages>
            <Container>
                <Row>
                    <h3>This is the our Case studies page</h3>
                </Row>
            </Container>
        </Pages>
    );
}

const Pages = styled.div`
    /* border: 2px solid red; */
    height: 100vh;
    width: 100%;
    background: #fff;
`;

const Container = styled.div`
    /* border: 2px solid red; */
`;

const Row = styled.div`
    display: flex;
    align-items: center;
    /* border: 2px solid red; */
    /* height: 50vh;
    height: calc(var(--var, 1vh) * 50);
    background-color: #fff; */
`;

export default CaseStudies;
