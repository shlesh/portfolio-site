import styled from 'styled-components';

export const Main = styled.main`
    position: relative;
    z-index: 1;
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
        background-image:
            radial-gradient(circle at 85% 20%, rgba(92, 246, 255, 0.16), transparent 36%),
            radial-gradient(circle at 20% 80%, rgba(155, 107, 255, 0.22), transparent 40%),
            radial-gradient(circle at right, rgba(215, 198, 255, 0.18), var(--lightBackground));
    }
    &:before {
        right: 0;
        background:
            radial-gradient(circle at 30% 25%, rgba(255, 79, 216, 0.45), transparent 34%),
            radial-gradient(circle at 80% 70%, rgba(92, 246, 255, 0.22), transparent 32%),
            radial-gradient(circle at 50% 50%, rgba(91, 42, 209, 0.9), var(--darkBackground) 70%);
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
