import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const YOUR_SERVICE_ID = process.env.REACT_APP_YOUR_SERVICE_ID;
    const YOUR_TEMPLATE_ID = process.env.REACT_APP_YOUR_TEMPLATE_ID;
    const YOUR_PUBLIC_KEY = process.env.REACT_APP_YOUR_PUBLIC_KEY;

    const form = useRef();
    const [submit, setSubmit] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, form.current, YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setSubmit(true);
                clearForm()
            }, (error) => {
                console.log(error.text);
            });

    };
    const clearForm = () => {
        form.current.reset();
    };

    return (
        <section>
            <div className='container'>
                <h2 className='text-center'>Contact Us</h2>
                <form className='container-form' ref={form} onSubmit={sendEmail}>
                    <h2>{submit && "Success"}</h2>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Email' name='my_email'
                        required />
                    <label>Title</label>
                    <input type='text' placeholder='Enter title' name='my_title'
                        required />
                    <label className='text-feedback'>Feedback</label>
                    <textarea placeholder='Enter feedback' cols={30} rows={10} name='my_feedback' required></textarea>
                    <button type='submit' >Send Feedback</button>

                </form>
            </div>
        </section>
    )
}

export default Contact