import Image from 'next/image';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/ui/ProductCard';
import { getProductsByCategory } from '@/data/products';
import styles from './page.module.css';

export const metadata = {
  title: 'Vrushaahi Bridal Collection | Padhmi',
  description: 'Handcrafted luxury bridal sarees and jewelry for your special day.',
};

export default function VrushaahiPage() {
  const bridalProducts = getProductsByCategory('vrushaahi');

  return (
    <div className={styles.vrushaahiLayout}>
      {/* Cinematic Hero */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>Vrushaahi</h1>
          <p className={styles.heroSubtitle}>The Bridal Collection</p>
          <div className={styles.heroDivider}></div>
          <div className={styles.heroActions}>
            <Button href="#collection" variant="bridal">Explore Collection</Button>
            <Button href="#story" variant="ghost" className={styles.ghostBtn}>Our Story</Button>
          </div>
        </div>
      </section>

      {/* Story Split */}
      <section id="story" className={styles.storySection}>
        <div className={styles.ghostText}>VRUSHAAHI</div>
        <div className={`container ${styles.storySplit}`}>
          <div className={styles.storyImageWrapper}>
            <Image 
              src="/images/vrushaahi-story.png" 
              alt="Vrushaahi Bride" 
              fill 
              className={styles.storyImg} 
            />
          </div>
          <div className={styles.storyContent}>
            <h2>Born for the Bride</h2>
            <p className={styles.tagline}>A symphony of silk, gold, and tradition.</p>
            <p>
              The Vrushaahi collection represents the pinnacle of Padhmi's artisanship. 
              Each piece is meticulously crafted over months by our master weavers, utilizing 
              pure zari and heritage motifs passed down through generations.
            </p>
            <p>
              Designed not just for a single day, but to be treasured as an heirloom.
            </p>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section id="collection" className={`section container ${styles.collectionSection}`}>
        <h2 className={styles.sectionTitle}>The Bridal Trousseau</h2>
        
        <div className={styles.gridContainer}>
          {bridalProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* The Experience */}
      <section className={styles.experienceSection}>
        <div className="container">
          <div className={styles.experienceGrid}>
            <div className={styles.expItem}>
              <div className={styles.expIcon}>✨</div>
              <h3>Master Artisans</h3>
              <p>Handpicked weavers with decades of generational expertise.</p>
            </div>
            <div className={styles.expItem}>
              <div className={styles.expIcon}>🪡</div>
              <h3>Customization</h3>
              <p>Bespoke alterations and custom blouse tailoring available.</p>
            </div>
            <div className={styles.expItem}>
              <div className={styles.expIcon}>📦</div>
              <h3>White Glove Delivery</h3>
              <p>Premium insured shipping packaging for your bridal pieces.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
