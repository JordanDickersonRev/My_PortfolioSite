import './contact.css';
import {send} from 'emailjs-com';
import { useState } from 'react';

function Contact(){

    const [disabled, setDisable] = useState(false);
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Jordan Dickerson',
        message: '',
        reply_to: '',
    })

    function onSubmit(e){ 
        e.preventDefault(); 

        if(toSend.from_name === '' || toSend.to_name === ''
        || toSend.message === '' || toSend.reply_to === ''){
            document.getElementById('error').innerHTML = `Error, blank field(s).`;
        }
        else{
            send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                toSend,
                process.env.REACT_APP_USER_ID
            ).then((response)=>{ 
                if(response.status >= 200 && response.status <= 299)
                {
                    document.getElementById('error').innerHTML = `Thank you for contacting me,
                I will respond as soon as possible.`;
                    setDisable(true);
                }

            }).catch((err)=>{document.getElementById('error').innerHTML = `FAILED..., ${err}`;});
        }
    };

    function handleChange(e){ setToSend({...toSend, [e.target.name]: e.target.value });}

    return (
        <div className="contact">
            <h1>Contact Me</h1>
            
            <form onSubmit={onSubmit}>
                <div className='contact-section1'>
                    <input
                        className='contact-item1'
                        type='text'
                        name='from_name'
                        placeholder='From name'
                        value={toSend.from_name}
                        onChange={handleChange}
                    />
                    <input
                        className='contact-item2'
                        type='text'
                        name='to_name'
                        hidden
                        disabled
                        value={toSend.to_name}
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    className='contact-item3'
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                <input
                    className='contact-item4'
                    type='email'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                {!disabled ? 
                    <button type='submit'>Submit</button>
                    :
                    <button hidden={true}>Submit</button>
                }
            </form>
            <div id='error'></div>
        </div>
    )
}
export default Contact;