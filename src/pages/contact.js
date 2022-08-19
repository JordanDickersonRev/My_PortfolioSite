import { Button, Form } from 'react-bootstrap';
import {send} from 'emailjs-com';
import { useState } from 'react';

function Contact(){

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        reply_to: '',
    })

    function onSubmit(e){ 
        e.preventDefault();

        send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            toSend,
            process.env.REACT_APP_USER_ID
        ).then((response)=>{console.log('SUCCESS!', response.status, response.text);
        }).catch((err)=>{console.log('FAILED...', err);});
    };

    function handleChange(e){ setToSend({...toSend, [e.target.name]: e.target.value });}

    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='from_name'
                    placeholder='from name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='to_name'
                    placeholder='to name'
                    value={toSend.to_name}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default Contact;