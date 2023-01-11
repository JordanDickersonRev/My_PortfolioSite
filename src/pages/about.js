function About(){

    const about = `It started back in 2019 when I began my computer information systems degree.
        I chose the CIS path to learn about programming, networking, and business. My original
        goal was to become a business analyst, project manager, or a programmer. Python was the
        first language I took a class for, after that, I knew I wanted to do something with programming.
        Between web, software, and application development, web development is my favorite. I enjoy
        the other two as well but I love the combination of problem solving and designing web pages
        the best.
        
        `;


        /*I am a full-stack .NET software developer with experience building front-end web applications and web APIs using .NET, React, and a multitude of different technologies.  I graduated from Henry Ford College with an Associate Degree in Computer Information Systems. I am looking for a job where my colleagues are respectful, receptive, and dependable. I chose this career because I have a passion for learning and I enjoy collaborative team environments where I can learn from others. 

Interesting Facts About Me
I have a passion for technology, so I enjoy creating scalable and flexible solutions using industry-standard tools.
I have strong listening skills, I understand the importance of genuinely demonstrating concern, listening without judging or jumping to conclusions, keeping eye contact, and staying focused.
I am receptive and flexible, so I am open to new ideas or changes, open to constructive criticism/feedback, and not set in my ways. 
 */

    return (
        <div className="about">
            <h2>About Me</h2>
            <p>{about}</p>
            <a href="https://docs.google.com/document/d/1Szxt_yNPuAC-2yKfrk46MG3lueX3RqWo447xgCWp9OQ/edit?usp=sharing">
                View Resume
            </a>
        </div>
    )
}
export default About;