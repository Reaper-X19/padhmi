import Button from '@/components/ui/Button';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact Us | Padhmi',
  description: 'Get in touch with the Padhmi team for support, bridal consultations, or general inquiries.',
};

export default function ContactPage() {
  return (
    <div className={styles.contactLayout}>
      <div className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Get in Touch</h1>
          <p className={styles.subtitle}>We are here to assist you with orders, styling, and bridal consultations.</p>
        </div>
      </div>

      <div className={`container ${styles.contentWrapper}`}>
        <div className={styles.contactInfo}>
          <h2>Contact Information</h2>
          
          <div className={styles.infoBlock}>
            <h3>Customer Support</h3>
            <p>Email: support@padhmi.com</p>
            <p>Phone: +1 (800) PADHMI-9</p>
            <p>Hours: Mon - Fri, 9am - 6pm EST</p>
          </div>

          <div className={styles.infoBlock}>
            <h3>Vrushaahi Bridal Studio</h3>
            <p>Email: bridal@padhmi.com</p>
            <p>For custom trousseau curation, please email our bridal stylists directly or fill out the form.</p>
          </div>

          <div className={styles.infoBlock}>
            <h3>Follow Us</h3>
            <div className={styles.socialLinks}>
              <a href="#">Instagram</a>
              <a href="#">Pinterest</a>
              <a href="#">Facebook</a>
            </div>
          </div>
        </div>

        <div className={styles.formSection}>
          <h2>Send us a Message</h2>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" required />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject">Subject</label>
              <select id="subject" required>
                <option value="">Select a topic...</option>
                <option value="order">Order Inquiry</option>
                <option value="bridal">Vrushaahi Bridal Consultation</option>
                <option value="returns">Returns & Exchanges</option>
                <option value="other">General Question</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={6} required></textarea>
            </div>

            <Button type="submit" fullWidth>Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
