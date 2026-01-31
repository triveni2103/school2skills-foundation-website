import styles from "./Impact.module.css";

export default function Impact() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Impact & Activities</h1>
          <p>
            Our work focuses on creating long-term impact by enabling students
            and youth with skills, guidance, and opportunities.
          </p>
        </div>
      </section>

      {/* Impact Overview */}
      <section className={styles.intro}>
        <div className={styles.contentBox}>
          <h2>Our Approach to Impact</h2>
          <p>
            School2Skills Foundation focuses on measurable, sustainable impact
            through skill-based workshops, career guidance sessions, digital
            literacy programs, and institutional collaborations.
          </p>
        </div>
      </section>

      {/* Key Activities */}
      <section className={styles.programs}>
        <h2>Key Activities</h2>

        <div className={styles.programGrid}>
          <div className={styles.card}>
            <h3>Skill Development Workshops</h3>
            <p>
              Hands-on workshops designed to build practical and
              industry-relevant skills.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Career Guidance Sessions</h3>
            <p>
              Structured guidance to help students make informed career choices.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Digital Literacy Programs</h3>
            <p>
              Training programs focused on digital tools, technology awareness,
              and online safety.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Institutional Collaborations</h3>
            <p>
              Partnering with schools, colleges, NGOs, and corporates to expand
              reach and impact.
            </p>
          </div>
        </div>
      </section>

      {/* Future Impact */}
      <section className={styles.future}>
        <h2>Looking Ahead</h2>
        <p>
          As we grow, our focus remains on scaling our programs, deepening
          partnerships, and ensuring that more learners are prepared for
          employment and livelihood opportunities.
        </p>
      </section>
    </>
  );
}
