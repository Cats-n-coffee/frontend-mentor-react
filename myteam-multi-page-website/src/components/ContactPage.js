import React, { useState } from 'react'
import individuals from '../images/icon-person.svg'
import implement from '../images/icon-cog.svg'
import productive from '../images/icon-chart.svg'
import ContactForm from './ContactForm'

const ContactPage = () => {
    const [name, setName] = useState({ value: '', error: '' });
    const [email, setEmail] = useState({ value: '', error: '' });
    const [company, setCompany] = useState({ value: '', error: '' });
    const [title, setTitle] = useState({ value: '', error: '' });
    const [message, setMessage] = useState({ value: '', error: '' });

    const validateName = (name) => {
        console.log(name)
        if (!name) {
            console.log('empty')
            let errorEmpty = 'This field is required';
            setName({ error: errorEmpty });
            setTimeout(() => {
                setName({ error: '' })
            }, 3000); 
        }
        if (/^[a-zA-Z\s]+$/.test(name)) {
            setName({ value: name });
        }
        if (name.length > 0 && !/^[a-zA-Z\s]+$/.test(name)) {
            let error = 'Name must contain only letters';
            setName({ value: name, error });
            setTimeout(() => {
                setName({ value: name, error: '' })
            }, 3000);
        }

        
    }

    const validateEmail = (email) => {
        console.log(email)
        if (!email) {
            let errorEmpty = 'This field is required';
            setEmail({ error: errorEmpty });
            setTimeout(() => {
                setEmail({ error: '' })
            }, 3000);
            //removeError(setEmail)
        }
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            setEmail({ value: email });
        }
        if (email.length > 0 && !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
            let error = 'Email must match this format: myemail@email.com';
            setEmail({ value: email, error });
            setTimeout(() => {
                setEmail({ value: email, error: '' })
            }, 3000);
        }
    }

    const validateCompany = (company) => {
        console.log(company)
        if (company.trim() === '') {
            let errorEmpty = 'This field is required';
            setCompany({ error: errorEmpty });
            setTimeout(() => {
                setCompany({ error: '' })
            }, 3000);
        }
        else {
            setCompany({ value: company });
        }
    }

    const validateTitle = (title) => {
        console.log(title)
        if (title.trim() === '') {
            let errorEmpty = 'This field is required';
            setTitle({ error: errorEmpty });
            setTimeout(() => {
                setTitle({ error: '' })
            }, 3000);
        }
        if (title.length > 0 && !/^[a-zA-Z\s]+$/.test(title)) {
            let error = 'Title must contain only letters';
            setTitle({ value: title, error });
            setTimeout(() => {
                setTitle({ error: '' })
            }, 3000);
        }
        if (/^[a-zA-Z\s]+$/.test(title)) {
            setTitle({ value: title });
        }
    }

    const validateMessage = (message) => {
        console.log(message)
        if (message.trim() === '') {
            let errorEmpty = 'This field is required';
            setMessage({ error: errorEmpty });
            // setTimeout(() => {
            //     setMessage({ error: '' })
            // }, 3000);
            removeError(setMessage)
        }
        else {
            setMessage({ value: message });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setName({ value: '', error: '' });
        setEmail({ value: '', error: '' });
        setCompany({ value: '', error: '' });
        setTitle({ value: '', error: '' });
        setMessage({ value: '', error: '' });
    }

    const removeError = (field) => {
        setTimeout(() => {
            return field({ error: '' });
        }, 3000);
    }

    return ( 
        <div className="contact-page">
            <div className="contact-wrapper">
                <section className="contact-text">
                    <h2>Contact</h2>
                    <h3>Ask us about</h3>
                    <ul>
                        <li><img src={ individuals } alt="person icon"/><span>The quality of our talent network</span></li>
                        <li><img src={ implement } alt="cog icon"/><span>Usage & implementation of our software</span></li>
                        <li><img src={ productive } alt="chart icon"/><span>How we help drive innovation</span></li>
                    </ul>
                </section>
                <section className="contact-form">
                    <ContactForm
                    name={ name }
                    email={ email }
                    company={ company }
                    title={ title }
                    message={ message } 
                    nameVal={ validateName }
                    emailVal={ validateEmail }
                    companyVal={ validateCompany }
                    titleVal={ validateTitle }
                    messageVal={ validateMessage }
                    submit={ handleSubmit }/>
                </section>
            </div>
        </div>
     );
}
 
export default ContactPage;