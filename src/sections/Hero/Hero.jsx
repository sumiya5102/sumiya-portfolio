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
          alt="Profile Picture of Sumiya Veeruru"
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
          Sumiya <br /> Veeruru
        </h1>
        <h2>Machine Learning Engineer</h2>
        <span>
          <a href="https://veerurusumiya@gmail.com" target="_blank">
            <img src={gmailIcon} alt="Gmail Icon" />
          </a>
          <a href="https://twitter.com" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/sumiya5102" target="_blank">
            <img src={githubIcon} alt="github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/sumiya-veeruru" target="_blank">
            <img src={linkedinIcon} alt="linkedin Icon" />
          </a>
        </span>
        <p className={styles.description}>
          {" "}
          Machine Learning Engineer focused on building intelligent, data-driven
          solutions using scalable models and real-world insights.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
