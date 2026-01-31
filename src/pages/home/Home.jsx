import styles from "./Home.module.css";
import heroImage from "../../assets/hero.jfif";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Turning Education into Employability</h1>
          <p>
            School2Skills Foundation works to bridge the gap between education
            and employability by enabling skill development, career pathways,
            digital literacy, and livelihood empowerment for students and youth.
          </p>

          <div className={styles.ctaGroup}>
            <a href="/get-involved" className={styles.primaryBtn}>
              Collaborate
            </a>
            <a href="/get-involved" className={styles.secondaryBtn}>
              Volunteer
            </a>
            <a href="/contact" className={styles.outlineBtn}>
              Partner With Us
            </a>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.intro}>
        <h2>Bridging Education to Skills & Careers</h2>
        <p>
          We collaborate with students, institutions, and partners to create
          practical learning pathways that lead to real-world skills,
          meaningful careers, and sustainable livelihoods.
        </p>
      </section>

      {/* Focus Areas */}
      <section className={styles.programs}>
        <h2>Our Focus Areas</h2>

        <div className={styles.programGrid}>
          <div className={styles.card}>
            <h3>Skill Development</h3>
            <p>
              Industry-aligned skill programs designed to improve employability
              and workplace readiness.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Career Pathways & Guidance</h3>
            <p>
              Structured guidance, mentorship, and clarity from classroom to
              career.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Digital Literacy</h3>
            <p>
              Essential digital and technology skills for the modern workforce.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Livelihood Empowerment</h3>
            <p>
              Supporting sustainable income opportunities and self-reliance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
