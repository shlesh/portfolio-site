import styled from 'styled-components';

export const InnerCursor = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    background: #fff;
    mix-blend-mode: difference;
    border-radius: 50%;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transform-origin: center center;
    transition: width 0.3s ease, height 0.3s ease;

    &.grow {
        width: 6rem;
        height: 6rem;
    }
`;

export const OuterCursor = styled.div``;
