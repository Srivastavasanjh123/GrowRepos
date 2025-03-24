import styles from './ProjectsStyles.module.css';
import webtoon from '../../assets/webtoon.jpeg';
import Food from '../../assets/food.png';
import Codepen from '../../assets/codepen.webp';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={webtoon}
          link="https://srivastavasanjh123.github.io/webtoon/"
          h3="Webtoon"
          p="Using HTML,CSS,JAVASCRIPT"
        />
        <ProjectCard
          src={Food}
          link="https://srivastavasanjh123.github.io/Landingpage/"
          h3="FOODIE"
          p="Latest Trending Foodie landing page Using React"
        />
        <ProjectCard
          src={Codepen}
          link="https://srivastavasanjh123.github.io/codepen/"
          h3="CODE WITH ME!"
          p="A Next.js App"
        />
        
      </div>
    </section>
  );
}

export default Projects; 