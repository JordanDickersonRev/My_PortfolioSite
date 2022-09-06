function About(){
    const about = `It started back in 2019 when I began my computer information systems degree.
        I choose the CIS path to learn about programming, networking, and business. My original
        goal was to become a business analyst, project manager, or a programmer. Python was the
        first language I took a class for. After that, I knew I wanted to do something with programming.
        Between web, software, and application development, web development is my favorite. I enjoy
        the other two as well but I love the combination of problem solving and designing web pages
        the best.`;

    return (
        <div className="about">
            <h2>About Me</h2>
            <p>{about}</p>
            <a href="https://docs.google.com/document/d/1c42Q2Q_JTJv5vsUnlJVDl8G7-qhV8ccLAuBDVIPvHYI/edit">
                Click here to view my resume.
            </a>
        </div>
    )
}
export default About;