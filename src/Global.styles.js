import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
font-family: 'Josefin Sans', sans-serif;
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
    }

    body,
    html {
    ${"" /* visibility: hidden; */}
    ${"" /* user-select: none; */}
    ${"" /* overscroll-behavior: none; */}
    background: #fff;
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    }
    
    
    .App {
        z-index:2;
        transform: translateY(0);
        position: relative;
    }
`;

// Media Query BreakPoints
const sizes = {
    mobileS: "320px",
    mobileM: "375px",
    mobileL: "500px",
    tablet: "900px",
    laptop: "1024px",
    laptopL: "1440px",
    desktop: "2560px",
};
export const devices = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
};
