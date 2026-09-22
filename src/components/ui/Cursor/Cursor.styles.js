import styled from 'styled-components';

export const InnerCursor = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 14px;
    height: 14px;
    margin: 0;
    border-radius: 50%;
    background: #ffffff;
    mix-blend-mode: difference;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transform-origin: center center;
`;

export const OuterCursor = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    width: 36px;
    height: 36px;
    margin: 0;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.9);
    pointer-events: none;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    mix-blend-mode: difference;
`;
