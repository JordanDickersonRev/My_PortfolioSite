import { Button, Form } from 'react-bootstrap';

function Contact(){
    return (
        <div className="contact">
            <h2>Contact Me</h2>
            <Form className='contactForm'>
                <Form.Group>
                    <Form.Control className='input1'
                    type='text'
                    placeholder='Name'/>
                </Form.Group>
                <Form.Group>
                    <Form.Control className='input2'
                    type='text'
                    placeholder='Email'/>
                </Form.Group>
                <Form.Group>
                    <Form.Control className='input3'
                    type='text'
                    placeholder='Subject'/>
                </Form.Group>
            </Form>
        </div>
    )
}
export default Contact;