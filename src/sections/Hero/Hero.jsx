import styles from './HeroStyles.module.css';
import heroImg from '../../assets/ol-modified.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/SANJHALI SRIVASTAVA - RESUME.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImg} alt="Profile picture of Sanjhali Srivastava" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>
                    Sanjhali
                    <br />
                    Srivastava
                </h1>
                <h2>Web Developer</h2>
                <span>
                    <a href="https://github.com/" target="_blank">
                        <img src={githubIcon} alt="Github icon" />
                    </a>
                    <a href="https://linkedin.com/" target="_blank">
                        <img src={linkedinIcon} alt="Linkedin icon" />
                    </a>
                </span>
                <div className={styles.descriptionBox}>
                    <p className={styles.description}>
                        I am a <strong>B.Tech student at IIT Jammu</strong>, graduating in <strong>2026</strong>, with a passion for developing modern and user-friendly web applications.  
                        As a <strong>full-stack web developer</strong>, I specialize in creating <strong>efficient, scalable, and visually appealing</strong> digital solutions for commercial businesses.  
                        I thrive on solving <strong>complex problems</strong>, optimizing <strong>user experiences</strong>, and continuously learning <strong>new technologies</strong> to stay ahead in the ever-evolving tech landscape.
                    </p>
                </div>
                <a href={CV} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
