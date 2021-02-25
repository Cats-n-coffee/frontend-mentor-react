import React from 'react'

const ContactForm = ({ name, email, company, title, message, nameVal, emailVal, companyVal, titleVal, messageVal, submit }) => {
    return ( 
        <form onSubmit={ submit }>
                        <div className={ `form-element ${ name.error ? "error" : "" }` }>
                            <label htmlFor="name">Name</label>
                            <input type="text" 
                                    id="name" 
                                    placeholder="Name"
                                    value={ name.value || '' } 
                                    onChange={ (e) => nameVal(e.target.value) } 
                                    />
                            <div className="error-div">{ name.error }</div>
                        </div>
                        <div className={ `form-element ${ email.error ? "error" : "" }` }>
                            <label htmlFor="email">Email</label>
                            <input type="email" 
                                    id="email" 
                                    placeholder="Email" 
                                    value={ email.value || '' }
                                    onChange={ (e) => emailVal(e.target.value) } 
                                    />
                            <div className="error-div">{ email.error }</div>
                        </div>
                        <div className={ `form-element ${ company.error ? "error" : "" }` }>
                            <label htmlFor="company">Company</label>
                            <input type="text" 
                                    id="company" 
                                    placeholder="Company"
                                    value={ company.value || '' }
                                    onChange={ (e) => companyVal(e.target.value) } 
                                    />
                            <div className="error-div">{ company.error }</div>
                        </div>
                        <div className={ `form-element ${ title.error ? "error" : "" }` }>
                            <label htmlFor="title">Title</label>
                            <input type="text" 
                                    id="title" 
                                    placeholder="Title"
                                    value={ title.value || '' }
                                    onChange={ (e) => titleVal(e.target.value) } 
                                    />
                            <div className="error-div">{ title.error }</div>
                        </div>
                        <div className={ `form-element ${ message.error ? "error" : "" }` }>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" 
                                        rows="4" 
                                        placeholder="Message"
                                        value={ message.value || '' }
                                        onChange={ (e) => messageVal(e.target.value) } 
                                        ></textarea>
                            <div className="error-div">{ message.error }</div>
                        </div>
                        <button type="submit" className="btn btn-secondary">submit</button>
                    </form>
     );
}
 
export default ContactForm;