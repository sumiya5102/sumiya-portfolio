import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.jpg";
import nodejsapp from "../../assets/nodejsapp.png";
import hipsster from "../../assets/hipsster.jpeg";
import ProjectCard from "../../common/ProjectCard";
import foodmunch from "../../assets/food-munch.png";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link="" h3="Portfolio Website" p="" />
        <ProjectCard
          src={nodejsapp}
          link=""
          h3="Deployment Of Nodejs App"
          p=""
        />
        <ProjectCard
          src={foodmunch}
          link="https://saiefoodmunch.ccbp.tech/"
          h3="Food Munch Web App"
          p=""
        />
        <ProjectCard
          src={hipsster}
          link=""
          h3="AI Mock Interview App"
          p="Coming soon...."
        />
      </div>
    </section>
  );
}

export default Projects;
