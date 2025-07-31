// メインJavaScriptファイル
class KenteiBuilderLP {
  constructor() {
    this.init();
  }

  init() {
    this.setupSmoothScrolling();
    // this.setupFormHandling(); // Google Formsを使用するため削除
    this.setupScrollAnimations();
    this.setupIntersectionObserver();
  }

  // スムーススクロール設定
  setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }

  // フォーム処理（Google Formsを使用するため削除）

  // スクロールアニメーション
  setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
    });
  }

  // Intersection Observer設定
  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });
  }
}

// DOMContentLoaded後に初期化
document.addEventListener('DOMContentLoaded', () => {
  new KenteiBuilderLP();
});

// パフォーマンス監視
if ('performance' in window) {
  window.addEventListener('load', () => {
    // Core Web Vitals測定
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        list.getEntries().forEach((entry) => {
          console.log(`${entry.name}: ${entry.value}`);
        });
      });
      
      observer.observe({ entryTypes: ['measure', 'navigation'] });
    }
  });
} 