import Image from 'next/image';
import styles from './page.module.css';

export const metadata = {
  title: 'About Us | Padhmi',
  description: 'Learn about our mission to preserve Indian artisanal heritage.',
};

export default function AboutPage() {
  return (
    <div className={styles.aboutLayout}>
      <section className={styles.hero}>
        <div className="container">
          <h1 className={styles.title}>Our Story</h1>
          <p className={styles.subtitle}>Preserving heritage, one masterful creation at a time.</p>
        </div>
      </section>

      <section className={`container ${styles.contentSection}`}>
        <div className={styles.textImageSplit}>
          <div className={styles.textContent}>
            <h2>The Padhmi Mission</h2>
            <p>
              Padhmi was born out of a profound reverence for India's rich tapestry of traditional craftsmanship. 
              For centuries, artisanal skills have been passed down through generations—from the intricate weaves 
              of Kanchipuram to the masterfully carved woodwork of Saharanpur.
            </p>
            <p>
              However, in an era of fast fashion and mass production, these invaluable skills face the threat of extinction. 
              Our mission is to bridge the gap between these rural artisans and a global audience that appreciates true luxury—
              luxury that is handmade, sustainable, and deeply rooted in culture.
            </p>
          </div>
          <div className={styles.imageContent}>
            <Image 
              src="/images/about-artisan.png"
              alt="Artisan at work"
              width={600}
              height={800}
              className={styles.image}
            />
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <h2 className={styles.valuesTitle}>Our Core Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <h3>Authenticity</h3>
              <p>We source directly from artisan clusters, ensuring every piece is genuinely handcrafted using traditional techniques.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Fair Trade</h3>
              <p>We believe in equitable partnerships. Our artisans set their own prices, ensuring they are fairly compensated for their mastery.</p>
            </div>
            <div className={styles.valueCard}>
              <h3>Sustainability</h3>
              <p>We prioritize natural dyes, hand-spun yarns, and eco-friendly processes that respect the environment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
