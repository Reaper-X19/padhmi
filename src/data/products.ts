export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'women' | 'men' | 'kids' | 'vrushaahi' | 'decor';
  subCategory?: string;
  image: string;
  gallery?: string[];
  badges?: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: 'saree-kanchipuram-01',
    name: 'Royal Kanchipuram Silk Saree',
    description: 'A masterpiece woven by master artisans, featuring pure zari work and rich temple borders.',
    price: 350.00,
    category: 'women',
    subCategory: 'Silk Sarees',
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=800',
    badges: ['Best Seller'],
    inStock: true
  },
  {
    id: 'bridal-maroon-01',
    name: 'Vrushaahi Heritage Bridal Saree',
    description: 'The definitive bridal experience. Woven with authentic gold threads and traditional motifs.',
    price: 850.00,
    category: 'vrushaahi',
    subCategory: 'Bridal Sarees',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&q=80&w=800',
    badges: ['Vrushaahi Wedding Collection', 'Limited Edition'],
    inStock: true
  },
  {
    id: 'necklace-temple-01',
    name: 'Antique Temple Necklace',
    description: 'Intricately carved deity motifs in a pure 1g gold plated finish. Perfect for festive occasions.',
    price: 120.00,
    category: 'women',
    subCategory: 'Jewelry',
    image: 'https://images.unsplash.com/photo-1599643478524-fb66fa5320e5?auto=format&fit=crop&q=80&w=800',
    badges: ['New Arrival'],
    inStock: true
  },
  {
    id: 'mens-kurta-01',
    name: 'Handloom Cotton Kurta Set',
    description: 'Breathable, perfectly tailored handloom cotton kurta with subtle thread embroidery.',
    price: 85.00,
    category: 'men',
    subCategory: 'Apparel',
    image: 'https://images.unsplash.com/photo-1598911540307-e837fbf97274?auto=format&fit=crop&q=80&w=800',
    inStock: true
  },
  {
    id: 'kids-lehenga-01',
    name: 'Festive Silk Lehenga for Girls',
    description: 'Bright block prints on soft silk, comfortable and festive for the little ones.',
    price: 65.00,
    category: 'kids',
    subCategory: 'Apparel',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
    badges: ['Kids Festive Collection'],
    inStock: true
  },
  {
    id: 'decor-brass-lamp',
    name: 'Artisan Carved Brass Diya',
    description: 'A heavy, intricately carved pure brass oil lamp. Height: 12 inches.',
    price: 45.00,
    category: 'decor',
    subCategory: 'Home Decor',
    image: 'https://images.unsplash.com/photo-1601614769018-8f85f34bd851?auto=format&fit=crop&q=80&w=800',
    badges: ['Supporting Artisans'],
    inStock: true
  },
  {
    id: 'saree-cotton-01',
    name: 'Indigo Block Print Cotton Saree',
    description: 'Perfect for everyday elegance. Lightweight and naturally dyed.',
    price: 85.00,
    category: 'women',
    subCategory: 'Cotton Sarees',
    image: 'https://images.unsplash.com/photo-1583391733958-d15f1108ce8a?auto=format&fit=crop&q=80&w=800',
    inStock: true
  },
  {
    id: 'bridal-jewelry-01',
    name: 'Vrushaahi Kundan Choker Set',
    description: 'Heavy Kundan bridal piece with matching oversized earrings.',
    price: 250.00,
    category: 'vrushaahi',
    subCategory: 'Bridal Jewelry',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    badges: ['Vrushaahi Wedding Collection'],
    inStock: false
  }
];

export function getProductsByCategory(category: string) {
  if (category === 'all') return products;
  return products.filter(p => p.category === category);
}

export function getProductById(id: string) {
  return products.find(p => p.id === id);
}
