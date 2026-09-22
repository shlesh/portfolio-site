import styled from 'styled-components';

export const FooterSection = styled.section`
    position: relative;
    z-index: 2;
    height: 100%;
    background: radial-gradient(circle at 20% 0%, rgba(255, 79, 216, 0.22), transparent 40%),
        var(--darkBackground);
    padding: 0 60px;

    .container {
        padding: 8rem 0 12rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 3rem;
    }
    .contact-left h3 {
        width: 90%;
        color: var(--lightBackground);
        font-size: 5rem;
        font-weight: 700;
        color: #fff;
        text-shadow: 0 0 1.8rem rgba(92, 246, 255, 0.35);
    }
    .contact-right p {
        color: var(--textColorLight);
        font-size: 2rem;
        font-weight: 300;
        line-height: 2.7rem;
        margin-bottom: 2rem;
    }
    .contact-right .x {
        margin: 3rem 0 2rem;
    }
    .contact-right a {
        color: var(--textColorLight);
        border-bottom: 1px solid #5cf6ff;
        font-size: 2rem;
        font-weight: 500;
    }
    .contact-footer-social {
        display: flex;
        width: fit-content;
    }
    .icon-footer {
        width: 4rem;
        height: 4rem;
        margin-right: 2rem;
        background: var(--iconSurface);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        box-shadow: 0 0 1.2rem rgba(92, 246, 255, 0.28);
    }
    .icon-footer a {
        border: none;
    }
    .icon-footer img {
        margin-top: 6px;
        width: 4rem;
        padding: 1rem;
    }

    @media only screen and (max-width: 768px) {
        z-index: 3;
        .container {
            width: 90%;
            margin: auto;
            padding: 8rem 0;
            grid-template-columns: 1fr;
        }
        .contact-left h3 {
            font-size: 3rem;
            width: 100%;
        }
        .contact-left {
            margin-bottom: 2rem;
        }
        .contact-right p {
            font-size: 1.6rem;
        }
        .contact-right a {
            font-size: 1.6rem;
        }
    }
`;
