import { Suspense } from 'react';
import ShopClient from './ShopClient';
import { products } from '@/data/products';
import styles from './page.module.css';

export const metadata = {
  title: 'Shop All | Padhmi',
  description: 'Explore the full collection of luxury Indian artisanal products.',
};

export default function ShopPage() {
  // Since this is a simple static setup for now, we pass all products to the client
  // In a real app with DB, we'd fetch here or paginate
  return (
    <div className={styles.shopLayout}>
      <div className={styles.shopHeader}>
        <div className={`container ${styles.headerInner}`}>
          <h1>Our Collections</h1>
          <p>Discover handcrafted elegance from master artisans across India.</p>
        </div>
      </div>
      
      <div className={`container ${styles.mainContent}`}>
        <Suspense fallback={<div>Loading collections...</div>}>
          <ShopClient initialProducts={products} />
        </Suspense>
      </div>
    </div>
  );
}
