import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getProductById, products } from '@/data/products';
import Button from '@/components/ui/Button';
import styles from './page.module.css';

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all known products
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.slug);
  if (!product) return { title: 'Product Not Found | Padhmi' };
  
  return {
    title: `${product.name} | Padhmi`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductById(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className={`container ${styles.productLayout}`}>
      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <a href="/">Home</a> &rarr; <a href="/shop">Shop</a> &rarr; <span>{product.name}</span>
      </div>

      <div className={styles.productGrid}>
        {/* Left: Image Gallery */}
        <div className={styles.gallery}>
          <div className={styles.mainImageWrapper}>
            <Image 
              src={product.image} 
              alt={product.name} 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
              className={styles.mainImage} 
            />
          </div>
          {/* Note: in a real app, thumbnail gallery would go here */}
        </div>

        {/* Right: Product Info */}
        <div className={styles.info}>
          {product.badges && product.badges.length > 0 && (
            <div className={styles.badges}>
              {product.badges.map(badge => (
                <span key={badge} className={styles.badge}>{badge}</span>
              ))}
            </div>
          )}
          
          <h1 className={styles.title}>{product.name}</h1>
          <p className={styles.price}>CAD ${product.price.toFixed(2)}</p>
          
          <div className={styles.divider}></div>
          
          <div className={styles.description}>
            <p>{product.description}</p>
          </div>

          <div className={styles.actions}>
            <Button 
              className={`snipcart-add-item ${styles.addToCartBtn}`}
              variant="primary"
              fullWidth
              disabled={!product.inStock}
              // Snipcart Data Attributes
              data-item-id={product.id}
              data-item-price={product.price}
              data-item-url={`/shop/${product.id}`}
              data-item-description={product.description}
              data-item-image={product.image}
              data-item-name={product.name}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>
          </div>

          <div className={styles.detailsAccordion}>
            <details className={styles.detailBlock} open>
              <summary>Product Details</summary>
              <div className={styles.detailContent}>
                <ul>
                  <li>Authentic handcrafted product</li>
                  <li>Category: <span style={{textTransform: 'capitalize'}}>{product.category}</span></li>
                  {product.subCategory && <li>Type: {product.subCategory}</li>}
                  <li>Product ID: {product.id}</li>
                </ul>
              </div>
            </details>
            <details className={styles.detailBlock}>
              <summary>Shipping & Returns</summary>
              <div className={styles.detailContent}>
                <p>Free shipping on orders over CAD $150 in Canada and the USA.</p>
                <p>14-day return policy for unworn items in original packaging. Bridal items are final sale.</p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}
