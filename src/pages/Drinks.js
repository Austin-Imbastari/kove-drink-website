import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
//Data
import casesArr from "../data";

function Drinks() {
    const [flavor, setFlavor] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        for (let i = 0; i < casesArr.length; i++) {
            if (parseInt(id) === casesArr[i].id) {
                setFlavor([casesArr[i]]);
            }
        }
    }, [id]);

    return (
        <>
            {flavor.map((el) => (
                <Container style={{ background: el.bg }} key={el.id}>
                    <Row>
                        <CaseImage>
                            <video
                                id='myVideo'
                                src={`${el.img}`}
                                type='video/mp4'
                                controls
                                muted
                                autoPlay={"autoplay"}
                                loop
                            />
                        </CaseImage>
                        <Details>
                            <h3>{el.title}</h3>
                            <p>{el.p}</p>
                            <h3>Ingredients</h3>
                            <p>{el.ing}</p>
                        </Details>
                    </Row>
                </Container>
            ))}
        </>
    );
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`;

const Row = styled.div`
    /* border: 1px solid blue; */
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`;

const CaseImage = styled.div`
    video {
        width: 50%;
        height: 50%;
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

const Details = styled.div`
    /* border: 1px solid hotpink; */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    font-size: 1.2rem;
    text-align: center;
`;

export default Drinks;
