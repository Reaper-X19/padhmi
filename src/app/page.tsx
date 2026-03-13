import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}></div>
        <div className={`container ${styles.heroContent}`}>
          <h1 className={styles.heroTitle}>PADHMI</h1>
          <p className={styles.heroSubtitle}>A celebration of Indian artistry curated for you.</p>
          <div className={styles.heroActions}>
            <Button href="/shop">Shop Now</Button>
            <Button href="/vrushaahi" variant="ghost">Vrushaahi Bridal</Button>
          </div>
        </div>
      </section>

      {/* Shop by Category */}
      <section className={`section container ${styles.categoriesSection}`}>
        <h2 className={styles.sectionTitle}>Explore Our Collections</h2>
        <div className={styles.categoryGrid}>
          {[
            { name: 'Women', image: '/images/category-women.png', link: '/shop?category=women' },
            { name: 'Vrushaahi', image: '/images/category-bridal.png', link: '/vrushaahi' },
            { name: 'Kids', image: '/images/category-kids.png', link: '/shop?category=kids' },
            { name: 'Men', image: '/images/category-men.png', link: '/shop?category=men' },
          ].map((cat) => (
            <Link href={cat.link} key={cat.name} className={styles.categoryCard}>
              <Image 
                src={cat.image} 
                alt={cat.name} 
                width={800} 
                height={cat.name === 'Women' ? 1000 : cat.name === 'Kids' ? 900 : 1200}
                className={styles.categoryImg} 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div className={styles.categoryOverlay}>
                <h3>{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Brand Story Split Section */}
      <div className={`container`}><div className="goldDivider"></div></div>
      <section className={styles.storySection}>
        <div className={styles.ghostText}>PADHMI</div>
        <div className={`container ${styles.storySplit}`}>
          <div className={styles.storyImageWrapper}>
            <Image 
              src="/images/brand-story.png" 
              alt="Indian Artisan Handloom" 
              fill 
              className={styles.storyImg} 
            />
          </div>
          <div className={styles.storyContent}>
            <h2>Our Story</h2>
            <p>
              Padhmi was born from a deep respect for the hands that weave India's cultural fabric. 
              We travel directly to artisan clusters across the country to bring you authentic, 
              handcrafted pieces that carry generations of skill.
            </p>
            <p>
              By choosing Padhmi, you are not just purchasing a product; you are empowering the 
              artisan community and helping preserve our magnificent heritage.
            </p>
            <Button href="/about" variant="secondary">Read Our Story</Button>
          </div>
        </div>
      </section>

      {/* Vrushaahi Bridal Highlight */}
      <div className={`container`}><div className="goldDivider"></div></div>
      <section className={styles.bridalHighlight}>
        <div className={`container ${styles.bridalContent}`}>
          <h2 className={styles.bridalTitle}>Vrushaahi Wedding Collection</h2>
          <p className={styles.bridalSubtitle}>Handcrafted for the most important day of your life.</p>
          <Button href="/vrushaahi" variant="bridal">Explore Vrushaahi</Button>
        </div>
      </section>
    </>
  );
}
