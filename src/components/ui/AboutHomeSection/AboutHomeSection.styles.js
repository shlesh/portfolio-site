import styled, { keyframes } from 'styled-components';

const arrowButton = keyframes`
  0% { transform: translateX(0rem) }
  50% { transform: translateX(.5rem) }
  100% { transform: translateX(0rem) }
`;

export const Section2 = styled.section`
    padding: 0 60px;
    height: 100vh;

    .container {
        position: fixed;
        z-index: 1;
        top: 50%;
        left: 50%;
        width: 85%;
        transform: translate(-50%, -50%);
    }
    .container h2 {
        width: 60%;
        font-size: 2.8rem;
        font-weight: 600;
        transition: 0.5s 0s;
        transform: scaleY(0);
        /* padding-left: 60px; */
    }
    .container h2:nth-child(2) {
        margin: 2rem 0 4rem;
    }
    .container span {
        position: relative;
    }
    .container .bt {
        transform: scaleY(0);
        transition: 0.3s;
    }

    a {
        display: inline-block;
        font-size: 1.4rem;
        padding: 1rem 2rem;
        text-align: center;
        position: relative;
        border: 1px solid #000;
        transition: 300ms ease-out;
        background: #161619;
        font-weight: 500;
        color: #fff;
        z-index: 1;
    }

    a:before {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background: #fff;
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 300ms ease-out;
    }

    a:hover {
        border-color: #161619;
        color: #161619;
    }

    a:hover:before {
        transform: scaleX(1);
        transform-origin: left;
    }
    img {
        width: 3rem;
        z-index: 2;
        height: 1.5rem;
        object-fit: cover;
        margin-bottom: -0.15rem;
        margin-left: 0rem;
        margin-right: -1.5rem;
        transition: 0.3s;
        animation: ${arrowButton} 1s ease-in-out infinite;
        filter: invert(0);
    }
    a:hover img {
        filter: invert(1);
    }

    @media only screen and (max-width: 768px) {
        height: 50vh;
        position: relative;
        background: #fff;
        .container {
            position: absolute;
            z-index: 3;
            width: 90%;
            top: 45%;
            margin: 0 !important;
            /* height: 23rem; */
        }
        .container h2 {
            width: 100%;
            margin: 3rem 0;
            font-size: 2rem;
            transform: scaleY(1);
        }
        .container .bt {
            transform: scaleY(1);
        }
    }
`;
