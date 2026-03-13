import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/data/products';
import styles from './ProductCard.module.css';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card}>
      <Link href={`/shop/${product.id}`} className={styles.imageLink}>
        <div className={styles.imageWrapper}>
          <Image 
            src={product.image} 
            alt={product.name} 
            fill 
            className={styles.image} 
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          
          {/* Badges */}
          {product.badges && product.badges.length > 0 && (
            <div className={styles.badges}>
              {product.badges.map(badge => (
                <span key={badge} className={styles.badge}>{badge}</span>
              ))}
            </div>
          )}
          
          {/* Quick View Overlay (Hover) */}
          <div className={styles.overlay}>
            <span className={styles.quickViewText}>View Details</span>
          </div>
        </div>
      </Link>
      
      <div className={styles.info}>
        <Link href={`/shop/${product.id}`}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <div className={styles.priceRow}>
          <span className={styles.price}>CAD ${product.price.toFixed(2)}</span>
          <button 
            className={`snipcart-add-item ${styles.addBtn}`}
            data-item-id={product.id}
            data-item-price={product.price}
            data-item-url={`/shop/${product.id}`}
            data-item-description={product.description}
            data-item-image={product.image}
            data-item-name={product.name}
            disabled={!product.inStock}
          >
            {product.inStock ? '+ Add' : 'Sold Out'}
          </button>
        </div>
      </div>
    </div>
  );
}
