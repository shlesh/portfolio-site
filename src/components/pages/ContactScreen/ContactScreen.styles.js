import styled from 'styled-components';

export const ContactTitle = styled.section`
    background: rgba(11, 7, 36, 0.78);
    padding: 0 60px;
`;
export const Container = styled.div`
    padding: 0 60px;
    min-height: 37vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    h1 {
        font-size: 6rem;
        margin-bottom: 1rem;
        color: #fff;
        text-shadow: 0 0 1.4rem rgba(155, 107, 255, 0.45);
    }
    p {
        font-size: 1.8rem;
        line-height: 3rem;
        margin-bottom: 3rem;
        color: #b7a8d9;
    }
    a {
        color: #5cf6ff;
        text-decoration: underline;
    }
    a:hover {
        color: #ff4fd8;
    }
    @media only screen and (max-width: 768px) {
        min-height: 40vh;
        width: 90%;
        padding-top: 5rem;
        h1 {
            font-size: 3rem;
        }
        p {
            font-size: 1.4rem;
            margin-bottom: 0;
        }
    }
`;
export const ContactForm = styled.form`
    padding: 0 60px;
    background: rgba(8, 5, 26, 0.72);
    min-height: 70vh;
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    input,
    textarea {
        width: 100%;
        border: none;
        margin: 2rem 0;
        font-size: 1.8rem;
        padding: 1rem;
        outline: none;
        color: #f3eeff;
        background: transparent;
        border-bottom: 3px solid rgba(155, 107, 255, 0.35);
        transition: 0.3s;
    }
    input:hover,
    textarea:hover,
    input:focus,
    textarea:focus {
        border-bottom: 3px solid #5cf6ff;
    }
    button {
        width: fit-content;
        background: #120824;
        color: #fff;
        outline: none;
        padding: 1rem 2rem;
        text-transform: uppercase;
        margin-top: 3rem;
        border: 1px solid #5cf6ff;
        box-shadow: 0 0 1.4rem rgba(92, 246, 255, 0.25);
    }
    button:hover {
        border-color: #ff4fd8;
        box-shadow: 0 0 1.6rem rgba(255, 79, 216, 0.35);
    }
    @media only screen and (max-width: 768px) {
        padding-bottom: 5rem;
        input,
        textarea {
            font-size: 1.6rem;
        }
    }
`;
