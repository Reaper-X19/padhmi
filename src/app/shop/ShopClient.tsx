'use client';

import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/data/products';
import styles from './page.module.css';

interface ShopClientProps {
  initialProducts: Product[];
}

const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'women', label: 'Women' },
  { id: 'men', label: 'Men' },
  { id: 'kids', label: 'Kids' },
  { id: 'vrushaahi', label: 'Vrushaahi Bridal' },
  { id: 'decor', label: 'Home & Decor' },
];

export default function ShopClient({ initialProducts }: ShopClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';

  const [activeCategory, setActiveCategory] = useState(categoryParam);

  // Update active category if URL changes
  useEffect(() => {
    setActiveCategory(categoryParam);
  }, [categoryParam]);

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (catId === 'all') {
      router.push('/shop');
    } else {
      router.push(`/shop?category=${catId}`);
    }
  };

  const filteredProducts = activeCategory === 'all' 
    ? initialProducts 
    : initialProducts.filter(p => p.category === activeCategory);

  return (
    <div className={styles.shopGrid}>
      {/* Sidebar Filter */}
      <aside className={styles.sidebar}>
        <h3 className={styles.filterTitle}>Categories</h3>
        <ul className={styles.filterList}>
          {CATEGORIES.map(cat => (
            <li key={cat.id}>
              <button 
                onClick={() => handleCategoryChange(cat.id)}
                className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
              >
                {cat.label}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Grid */}
      <div className={styles.productArea}>
        <div className={styles.productHeader}>
          <span>Showing {filteredProducts.length} results</span>
        </div>
        
        {filteredProducts.length > 0 ? (
          <div className={styles.gridContainer}>
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>No products found</h3>
            <p>Try selecting a different category.</p>
            <button 
              onClick={() => handleCategoryChange('all')} 
              className={styles.resetBtn}
            >
              View All Products
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
