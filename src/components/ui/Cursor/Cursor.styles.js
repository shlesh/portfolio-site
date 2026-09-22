import styled from 'styled-components';

export const InnerCursor = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    background: #fff;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    will-change: transform;
`;

export const OuterCursor = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 3.6rem;
    height: 3.6rem;
    border-radius: 50%;
    border: 0.12rem solid rgba(255, 255, 255, 0.85);
    box-shadow: 0 0 1.6rem rgba(191, 128, 255, 0.35);
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    will-change: transform, opacity;
`;
