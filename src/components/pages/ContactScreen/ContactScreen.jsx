import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { topObserver } from '../../../utils/intersectionObserver';
import { ContactForm, ContactTitle, Container } from './ContactScreen.styles';

const ContactScreen = () => {
    const { contact } = useSelector(state => state.data.pageContent);
    const [status, setStatus] = useState('');

    useEffect(() => {
        window.scrollTo(0, 0);
        topObserver();
        document.title = 'Contact | Shailesh Tiwari';
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        const name = form.to_name.value.trim();
        const email = form.from_name.value.trim();
        const subject = form.affair.value.trim();
        const message = form.message.value.trim();
        const body = encodeURIComponent(`From: ${name} <${email}>\n\n${message}`);
        const mailto = `mailto:23shlesh@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
        window.location.href = mailto;
        setStatus('Opening your email client...');
        form.reset();
    };

    return (
        <>
            <ContactTitle id="top">
                <Container className="container">
                    <h1>{contact.title}</h1>
                    <p>
                        Do you want to work or communicate with me? <br /> Send me a direct message by{' '}
                        <a
                            className="email"
                            target="_blank"
                            rel="noreferrer"
                            href="https://www.linkedin.com/in/shailesh-t/"
                        >
                            linkedin
                        </a>{' '}
                        or any of my social accounts. You can also do so by filling this form.
                    </p>
                </Container>
            </ContactTitle>
            <ContactForm onSubmit={handleSubmit}>
                <Container className="container">
                    <input placeholder={contact.fname} required type="text" name="to_name" />
                    <input placeholder={contact.femail} required type="email" name="from_name" />
                    <input placeholder={contact.fsubject} required type="text" name="affair" />
                    <textarea placeholder={contact.ftext} required name="message" />
                    <button type="submit">{contact.fbutton}</button>
                    {status ? <p className="form-status">{status}</p> : null}
                </Container>
            </ContactForm>
        </>
    );
};

export default ContactScreen;
