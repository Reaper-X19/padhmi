import Link from 'next/link';
import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerInner}`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image 
              src="/images/padhmi-logo.jpeg" 
              alt="Padhmi Logo" 
              width={160} 
              height={40} 
              className={styles.logoImg}
              priority
            />
          </Link>
        </div>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/shop">SHOP</Link></li>
            <li><Link href="/vrushaahi">VRUSHAAHI</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <button className={`snipcart-checkout ${styles.cartBtn}`} aria-label="Cart">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className={`snipcart-items-count ${styles.cartCount}`}>0</span>
          </button>
        </div>
      </div>
    </header>
  );
}
