import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.jpg";
import Credit from "../../assets/Credit.jpg";
import hipsster from "../../assets/hipsster.jpeg";
import ProjectCard from "../../common/ProjectCard";
import facial from "../../assets/facial.webp";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={Credit}
          link=""
          h3="Credit Risk Prediction System"
          p=""
        />
        <ProjectCard src={viberr} link="" h3="Portfolio Website" p="" />

        <ProjectCard
          src={facial}
          link=""
          h3="Facial Emotion Recognition"
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
