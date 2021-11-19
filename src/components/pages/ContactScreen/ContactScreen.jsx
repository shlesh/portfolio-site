import React, { useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useSelector } from 'react-redux';
import { topObserver } from '../../../utils/intersectionObserver';
import { ContactForm, ContactTitle, Container } from './ContactScreen.styles';

const ContactScreen = () => {
    const { contact } = useSelector(state => state.data.pageContent);

    window.scrollTo(0, 0);
    useEffect(() => {
        topObserver();
        document.title = 'Contact | Shailesh Tiwari';
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        // emailjs.sendForm('service_code', 'template_smthn', e.target, 'user_code').then(
        //     result => {
        //         alert('Email sent Successfully!');
        //         document.querySelector('form').reset();
        //     },
        //     error => {
        //         // console.log(error.text);
        //         alert(error.text);
        //     }
        // );
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
                            {' '}
                            linkedin
                        </a>{' '}
                        or any of my social accounts. You can also do so by filling template_smthn form.
                    </p>
                </Container>
            </ContactTitle>
            <ContactForm onSubmit={handleSubmit}>
                <Container className="container">
                    <input placeholder={contact.fname} required type="text" name="to_name" />
                    <input placeholder={contact.femail} required type="email" name="from_name" />
                    <input placeholder={contact.fsubject} required type="text" name="affair" />
                    <textarea placeholder={contact.ftext} required type="text" name="message" />
                    <button type="submit">{contact.fbutton}</button>
                </Container>
            </ContactForm>
        </>
    );
};

export default ContactScreen;
