import styled from 'styled-components';

export const Main = styled.main`
    &:after,
    &:before {
        content: '';
        position: fixed;
        z-index: -1;
        width: 50%;
        height: 100vh;
        top: 0;
        transition: 1s;
    }
    &:after {
        left: 0;
        background-image: radial-gradient(circle at right, var(--borders), var(--lightBackground));
    }
    &:before {
        right: 0;
        background: var(--darkBackground);
    }
    &.active:after {
        width: 77%;
    }
    &.active:before {
        width: 23%;
    }

    .container {
        max-width: 105rem;
        margin: auto;
    }

    &.active .sect-1 .picture {
        right: calc(23% - 30rem);
    }

    &.active .sect-1 .name-container .name,
    &.active .sect-1 .name-container .prof,
    &.active .sect-1 .portf-container .name {
        opacity: 0;
        transform: scaleY(0);
        transition: 0.3s;
    }

    &.active .sect-2 .container h2,
    &.active .sect-2 .container a,
    &.active .sect-2 .container .bt {
        transform: scaleY(1);
        transition: transform 0.3s 0.6s;
    }
    /* @media only screen and (min-width: 1441px) {
    &.active .sect-1 .picture {
      right: calc(23% - 35rem);
    }
  } */
    @media only screen and (max-width: 1440px) {
        &.active .sect-1 .picture {
            right: calc(23% - 23rem);
        }
    }

    @media only screen and (max-width: 768px) {
        &:after,
        &:before {
            width: 80%;
        }
        &.active:after {
            width: 100%;
        }
        &.active:before {
            width: 0;
        }
        &.active .sect-1 .picture {
            left: calc(100% - 30.5rem);
        }
        &.active .sect-1 .name-container .name,
        &.active .sect-1 .name-container .prof,
        &.active .sect-1 .portf-container .name {
            opacity: 1;
            transform: scaleY(1);
            transition: 0.3s;
        }
    }
`;
