import { useRef, useEffect } from "react";
import useOnScreen from "../../hooks/userOnscreen";
import Laptop from "../../assets/laptop.svg";
import "./index.styles.scss";

const Header = ({ setActive }: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    isVisible && setActive("home");
  }, [isVisible, setActive]);

  const handleRedirect = () => {
    const element = document.getElementById("contact");
    element && element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="page-header" id="home" ref={ref}>
      <div className="section">
        <div className="left-content">
          <div className="title">Hi There,</div>
          <div className="title"> Fellow Developer!!</div>
          <button className="connect" onClick={handleRedirect}>
            Let's talk
          </button>
        </div>
        <img src={Laptop} alt="" className="laptop" />
      </div>
      <div className="section">
        <div className="terminal">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="close">
                <span></span>
              </span>
              <span className="minimize"></span>
              <span className="maximize"></span>
            </div>
            <p className="terminal-title">{` ~/root`}</p>
          </div>
          <div className="terminal-inner">
            <p className="facts-name">Hii ! I'm Nilesh 💻</p>
            <p className="facts-title">Here's some facts about me:</p>
            <ul className="facts-list">
              <li className="red">Web Developer</li>
              <li className="green">Tech Enthusiast</li>
              <li className="yellow">Photographer</li>
            </ul>
            <div className="social-buttons">
              <a
                href="https://www.instagram.com/whois_nilesh/"
                target="blank"
                className="social-margin"
              >
                <div className="social-icon instagram">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/nilesh-sinha-564a50186/"
                className="social-margin"
                target="blank"
              >
                <div className="social-icon linkedin">
                  <i className="fa fa-linkedin" aria-hidden="true"></i>
                </div>
              </a>
              <a
                href="https://github.com/Nilesh-01"
                target="blank"
                className="social-margin"
              >
                <div className="social-icon github">
                  <i className="fa fa-github-alt" aria-hidden="true"></i>
                </div>
              </a>
            </div>
            <div className="terminal-footer">
              <div className="dimension">90 x 27</div>
              <div className="footer-text">Nilesh's Laptop</div>
              <div className="time">{new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
