import styles from "./About.module.css";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>About School2Skills Foundation</h1>
          <p>
            Bridging the gap between education and employability by empowering
            students and youth with skills, guidance, and opportunities.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className={styles.intro}>
        <div className={styles.contentBox}>
          <h2>Our Vision</h2>
          <p>
            From classroom to career — ensuring every learner has access to
            skills, confidence, and pathways needed to thrive in the real world.
          </p>

          <h2>Our Mission</h2>
          <p>
            To enable skill development, career guidance, digital literacy, and
            livelihood empowerment for students and youth through practical,
            inclusive, and impact-driven programs.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className={styles.programs}>
        <h2>Our Core Values</h2>

        <div className={styles.programGrid}>
          <div className={styles.card}>
            <h3>Skill-First Learning</h3>
            <p>
              Practical, industry-relevant skills that prepare learners for
              employment and entrepreneurship.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Equal Opportunity</h3>
            <p>
              Creating inclusive pathways so that every learner, regardless of
              background, can access opportunities.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Practical Pathways</h3>
            <p>
              Connecting education with real-world applications, careers, and
              sustainable livelihoods.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
