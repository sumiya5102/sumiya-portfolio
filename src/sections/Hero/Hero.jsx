import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import gmailDark from "../../assets/gmail-light.svg";
import gmailLight from "../../assets/gmail-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const gmailIcon = theme === "light" ? gmailLight : gmailDark;
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Srikar Kalvakuntla"
        ></img>
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color Mode ICon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Srikar Reddy <br /> Kalvakuntla
        </h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://srikar.reddy2909@gmail.com" target="_blank">
            <img src={gmailIcon} alt="Gmail Icon" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/srikar2909" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/srikarreddykalvakuntla"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          {" "}
          With a passion for developing modern full stack web application for
          commercial bussiness
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
