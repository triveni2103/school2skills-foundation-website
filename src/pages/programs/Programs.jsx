import styles from "./Programs.module.css";

export default function Programs() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Our Programs</h1>
          <p>
            Our programs are designed to bridge education and employability
            through practical skills, guidance, and real-world exposure.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className={styles.programs}>
        <div className={styles.programGrid}>
          
          <div className={styles.card}>
            <h2>Skill Development</h2>
            <p>
              Hands-on training programs focused on industry-relevant and
              employability-oriented skills to prepare students for the
              workforce.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Career Pathways & Guidance</h2>
            <p>
              Career awareness, mentorship, and guidance sessions that help
              learners identify clear and achievable career paths.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Digital Literacy</h2>
            <p>
              Programs that build essential digital skills, technology awareness,
              and confidence in using modern digital tools.
            </p>
          </div>

          <div className={styles.card}>
            <h2>Livelihood Empowerment</h2>
            <p>
              Supporting youth in building sustainable livelihood opportunities
              through skills, training, and exposure.
            </p>
          </div>

        </div>
      </section>

      {/* Closing Section */}
      <section className={styles.closing}>
        <h2>Designed for Impact</h2>
        <p>
          All our programs are adaptable and delivered in collaboration with
          educational institutions, NGOs, and corporate partners to ensure
          relevance and long-term impact.
        </p>
      </section>
    </>
  );
}
