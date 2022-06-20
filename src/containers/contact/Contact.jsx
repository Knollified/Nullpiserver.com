import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_01ifxdn', 'template_9fetzh5', form.current, 'S3l9vmOC9MJrAeNtL')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        form.current.reset();
    };

    return (
        <div className='nullpi__contact section__margin'>

            <div className="nullpi__contact-content">
                <div className="nullpi__contact-text">
                    <h1 className='gradient__text'>Contact</h1>
                </div>
            </div>

            <div className='nullpi__contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <div className='nullpi__contact-form__label'>
                        <label>Name: </label>
                        <input type="text" name="user_name" />
                    </div>
                    <div className='nullpi__contact-form__label'>
                        <label>Email: </label>
                        <input type="email" name="user_email" />
                    </div>
                    <div className='nullpi__contact-form__label'>
                        <label>Message: </label>
                        <textarea name="message" />
                        <input type="submit" value="Send" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default Contact;