import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
//import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
//import { useTheme } from '../../common/ThemeContext';

function Skills() {
  //const { theme } = useTheme();
  //const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="HTML" />
        <SkillList src={checkMarkIcon} skill="CSS" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="MongoDb" />
        <SkillList src={checkMarkIcon} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="Redux" />
        
        <SkillList src={checkMarkIcon} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Nextjs" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="ExpressJS" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
      </div>
      <hr />

      {/* Non-Technical Skills */}
      <h4 className="sectionTitle">Non-Technical Skills</h4>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Communication" />
        <SkillList src={checkMarkIcon} skill="Problem-Solving" />
        <SkillList src={checkMarkIcon} skill="Teamwork" />
        <SkillList src={checkMarkIcon} skill="Time Management" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Attention to Detail" />
        <SkillList src={checkMarkIcon} skill="Creativity" />
        <SkillList src={checkMarkIcon} skill="Critical Thinking" />
        
      </div>
      <hr />
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="Adaptability" />
      <SkillList src={checkMarkIcon} skill="Leadership" />
      <SkillList src={checkMarkIcon} skill="Learning" />
      <SkillList src={checkMarkIcon} skill="Project Management" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;