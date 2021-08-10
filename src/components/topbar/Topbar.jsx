import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Carlos | Developer</a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+244 914 348 699</span>
                        <Mail className="icon" />
                        <span>carlos.costa.pimentel@gmail.com</span>
                        <a href="https://www.linkedin.com/in/carlos-pimentel-5a3aa841/" target="_blank" rel="noreferrer" alt="linkedin profile">
                            <LinkedInIcon className="icon" />
                        </a>
                        <a href="https://github.com/CarlosPimentel10" target="_blank" rel="noreferrer">
                            <GitHubIcon className="icon" />
                        </a>

                    </div>
                </div>

                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
