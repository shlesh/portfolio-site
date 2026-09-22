import styled, { keyframes } from 'styled-components';

const spinRev = keyframes`
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(-360deg); }
`;
const pulse = keyframes`
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.9; }
    50% { transform: translate(-50%, -50%) scale(1.12); opacity: 1; }
`;
const orbit = keyframes`
    from { transform: rotate(0deg) translateX(var(--d)) rotate(0deg); }
    to { transform: rotate(360deg) translateX(var(--d)) rotate(-360deg); }
`;

export const Mark = styled.div`
    position: relative;
    width: 42rem;
    height: 42rem;
    pointer-events: none;
    will-change: transform;

    .core {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 7rem;
        height: 7rem;
        border-radius: 50%;
        background: radial-gradient(circle, #fff 0%, #5cf6ff 35%, #9b6bff 68%, transparent 72%);
        animation: ${pulse} 3.2s ease-in-out infinite;
        box-shadow: 0 0 2.4rem #5cf6ff;
    }
    .ring {
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        border: 1px dashed rgba(255, 255, 255, 0.45);
        animation: ${spinRev} 36s linear infinite;
    }
    .ring-a {
        width: 16rem;
        height: 16rem;
        border-color: rgba(92, 246, 255, 0.7);
    }
    .ring-b {
        width: 26rem;
        height: 26rem;
        border-style: solid;
        border-color: rgba(255, 79, 216, 0.35);
        animation-duration: 52s;
    }
    .ring-c {
        width: 38rem;
        height: 38rem;
        border-color: rgba(155, 107, 255, 0.55);
        animation-duration: 72s;
    }
    .planet {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 1.2rem;
        height: 1.2rem;
        margin: -0.6rem;
        border-radius: 50%;
        background: #fff;
        animation: ${orbit} linear infinite;
    }
    .p1 {
        --d: 8rem;
        background: #5cf6ff;
        animation-duration: 9s;
    }
    .p2 {
        --d: 13rem;
        background: #ff4fd8;
        width: 1.6rem;
        height: 1.6rem;
        margin: -0.8rem;
        animation-duration: 16s;
    }
    .p3 {
        --d: 19rem;
        background: #d7c6ff;
        animation-duration: 24s;
    }

    @media only screen and (max-width: 768px) {
        width: 26rem;
        height: 26rem;
        .ring-c { width: 24rem; height: 24rem; }
        .ring-b { width: 17rem; height: 17rem; }
        .p3 { --d: 12rem; }
    }
`;
