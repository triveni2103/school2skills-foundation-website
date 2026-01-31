import styles from "./GetInvolved.module.css";

export default function GetInvolved() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Get Involved</h1>
          <p>
            Join us in turning education into employability. There are many ways
            you can contribute to empowering students and youth.
          </p>
        </div>
      </section>

      {/* Involvement Options */}
      <section className={styles.programs}>
        <h2>Ways to Get Involved</h2>

        <div className={styles.programGrid}>
          <div className={styles.card}>
            <h3>Volunteer With Us</h3>
            <p>
              Share your time, skills, and experience to mentor students,
              conduct workshops, or support our programs.
            </p>
          </div>

          <div className={styles.card}>
            <h3>Institutional Partnerships</h3>
            <p>
              Collaborate with us to deliver skill development and career
              guidance programs for students.
            </p>
          </div>

          <div className={styles.card}>
            <h3>CSR & Corporate Collaboration</h3>
            <p>
              Partner with us through CSR initiatives to create sustainable,
              measurable social impact.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <h2>Let’s Create Impact Together</h2>
        <p>
          Whether you are an individual, institution, or organization, your
          involvement can help shape better futures.
        </p>

        <a href="/contact" className={styles.primaryBtn}>
          Contact Us
        </a>
      </section>
    </>
  );
}
