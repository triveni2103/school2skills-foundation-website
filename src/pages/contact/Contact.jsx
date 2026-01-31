import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Contact Us</h1>
          <p>
            We would love to hear from you. Reach out to collaborate, volunteer,
            or partner with School2Skills Foundation.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className={styles.contactSection}>
        <div className={styles.contactGrid}>
          
          {/* Contact Info */}
          <div className={styles.infoBox}>
            <h2>Get in Touch</h2>
            <p>
              For partnerships, volunteering, or general inquiries, please
              contact us using the details below.
            </p>

            <div className={styles.infoItem}>
              <strong>Email (General):</strong>
              <span>info@school2skills.org</span>
            </div>

            <div className={styles.infoItem}>
              <strong>Email (Administration):</strong>
              <span>admin@school2skills.org</span>
            </div>

            <div className={styles.infoItem}>
              <strong>Location:</strong>
              <span>India</span>
            </div>

            <div className={styles.socialLinks}>
              <a href="#" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" aria-label="Twitter">Twitter</a>
              <a href="#" aria-label="Instagram">Instagram</a>
            </div>
          </div>

          {/* Contact Form */}
          <div className={styles.formBox}>
            <h2>Send Us a Message</h2>

            <form className={styles.form}>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <input type="text" placeholder="Subject" />
              <textarea
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">Submit</button>
            </form>
          </div>

        </div>
      </section>
    </>
  );
}
