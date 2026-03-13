import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logoLink}>
            <div className={styles.logoImgWrapper}>
              <Image 
                src="/images/padhmi-logo.jpeg" 
                alt="Padhmi Secondary Logo" 
                fill
                className={styles.logoImg}
              />
            </div>
          </Link>
          <p className={styles.tagline}>A celebration of Indian artistry curated for you.</p>
        </div>
        
        <div className={styles.linksCol}>
          <h3>Shop</h3>
          <ul>
            <li><Link href="/shop?category=women">Women</Link></li>
            <li><Link href="/shop?category=men">Men</Link></li>
            <li><Link href="/shop?category=kids">Kids</Link></li>
            <li><Link href="/vrushaahi">Vrushaahi Bridal</Link></li>
            <li><Link href="/shop?category=decor">Home Decor</Link></li>
          </ul>
        </div>

        <div className={styles.linksCol}>
          <h3>Support</h3>
          <ul>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/shipping">Shipping Policy</Link></li>
            <li><Link href="/returns">Returns & Refunds</Link></li>
          </ul>
        </div>

        <div className={styles.newsletterCol}>
          <h3>Stay Connected to Tradition</h3>
          <p>Be the first to know about new collections and artisan stories.</p>
          <form className={styles.form}>
            <input type="email" placeholder="Email Address" required className={styles.input} />
            <button type="submit" className={styles.submitBtn}>Subscribe</button>
          </form>
        </div>
      </div>
      
      <div className={`container ${styles.bottomRow}`}>
        <p>&copy; {new Date().getFullYear()} Padhmi. All rights reserved.</p>
        <div className={styles.socials}>
          {/* Icons placeholder */}
          <a href="#" aria-label="Instagram">IG</a>
          <a href="#" aria-label="Facebook">FB</a>
          <a href="#" aria-label="Pinterest">PIN</a>
        </div>
      </div>
    </footer>
  );
}
