import { Link } from "react-router";

export default function Home() {
    return (
        <>
            <p>
                This is a website that include the content of HungHsu(Allen) Chen's Resume.
                Visit <em><Link to={"/about"}>About Me</Link></em> to find out more about me.
                Visit <em><Link to={"/edu"}>Education</Link></em> to know my educational history, 
                and <em><Link to={"/exp"}>Experience</Link></em> for my employment history.
                I also have done some projects that may interest you, and they are located at <em><Link to={"/projects"}>Projects</Link></em>.
                I listed my skills under <em><Link to={"/skill"}>Skills</Link></em>.
            </p>
            <p>
                If you want to know more about me, please feel welcome to send me a text to me at&nbsp;
                <u>(530)364-7623</u> or send me an email at <u>chhchen@bu.edu</u>. Also you can visit
                my <em><a href="http://www.linkedin.com/in/chhallen/" target="_blank">LinkedIn</a></em>, 
                or you can visit my <em><a href="https://allenlqve.github.io/e-portfolio/" target="_blank">E-Portfolio</a></em>
            </p>
        </>
    )
}