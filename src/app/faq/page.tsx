'use client';

import { useState } from 'react';
import styles from './page.module.css';

const faqs = [
  {
    category: 'Orders',
    questions: [
      { q: 'How do I track my order?', a: 'Once your order ships, you will receive a tracking number via email.' },
      { q: 'Can I modify my order?', a: 'Orders can only be modified within 2 hours of placement. Please email support immediately.' },
    ]
  },
  {
    category: 'Shipping & Delivery',
    questions: [
      { q: 'What countries do you ship to?', a: 'We currently ship to Canada, USA, and select international destinations.' },
      { q: 'How long does delivery take?', a: 'Canada: 5-10 days, USA: 7-14 days, International: 14-21 days.' },
      { q: 'Is free shipping available?', a: 'Yes, on all orders over CAD $150 within Canada and USA.' },
    ]
  },
  {
    category: 'Returns & Refunds',
    questions: [
      { q: 'What is your return policy?', a: 'We accept returns within 14 days of delivery for unworn items in original packaging. Vrushaahi bridal items are final sale.' },
      { q: 'How do I initiate a return?', a: 'Please contact support@padhmi.com with your order number to request a return label.' },
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  return (
    <div className={styles.faqLayout}>
      <section className={styles.hero}>
        <div className="container">
          <p className={styles.breadcrumb}>Home &rarr; FAQ</p>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <p className={styles.subtitle}>Everything you need to know about your order and our collections.</p>
        </div>
      </section>

      <section className={`container ${styles.contentSection}`}>
        <div className={styles.pills}>
          {faqs.map(cat => (
            <a key={cat.category} href={`#${cat.category.replace(/\s+/g, '-').toLowerCase()}`} className={styles.pillBtn}>
              {cat.category}
            </a>
          ))}
        </div>

        <div className={styles.accordionContainer}>
          {faqs.map((cat, catIdx) => (
            <div key={cat.category} id={cat.category.replace(/\s+/g, '-').toLowerCase()} className={styles.categoryBlock}>
              <h2 className={styles.categoryTitle}>{cat.category}</h2>
              
              <div className={styles.questionsList}>
                {cat.questions.map((item, qIdx) => {
                  const id = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === id;
                  
                  return (
                    <div key={id} className={styles.accordionItem}>
                      <button 
                        className={styles.questionBtn} 
                        onClick={() => toggleAccordion(id)}
                        aria-expanded={isOpen}
                      >
                        <span className={styles.questionText}>{item.q}</span>
                        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
                      </button>
                      
                      <div className={`${styles.answerWrapper} ${isOpen ? styles.open : ''}`}>
                        <div className={styles.answerInner}>
                          <p>{item.a}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
