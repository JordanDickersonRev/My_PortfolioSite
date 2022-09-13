function About(){

    const about = `It started back in 2019 when I began my computer information systems degree.
        I chose the CIS path to learn about programming, networking, and business. My original
        goal was to become a business analyst, project manager, or a programmer. Python was the
        first language I took a class for, after that, I knew I wanted to do something with programming.
        Between web, software, and application development, web development is my favorite. I enjoy
        the other two as well but I love the combination of problem solving and designing web pages
        the best.`;

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