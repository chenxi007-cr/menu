// 合并所有DOMContentLoaded事件监听器为一个
document.addEventListener('DOMContentLoaded', function() {
  // 1. 导航状态设置
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link').forEach(link => {
    const linkPath = link.getAttribute('href');
    if ((currentPath === '' && linkPath === 'index.html') || (currentPath === linkPath)) {
      link.classList.add('active', 'clicked');
    }
    
    // 点击导航链接效果
    link.addEventListener('click', function(e) {
      if(this.classList.contains('active')) {
        e.preventDefault();
        return;
      }
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('clicked'));
      this.classList.add('clicked');
    });
  });

  // 2. 轮播图初始化
  const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 3000,
    },
  });

  // 3. 弹窗功能
  function openPopup() {
    const popup = document.getElementById('novemberPopup');
    popup.style.display = 'flex';
    // 添加防抖动样式（可选）
    popup.classList.add('show');
  }

  function closePopup() {
    const popup = document.getElementById('novemberPopup');
    popup.style.display = 'none';
    // 移除防抖动样式（可选）
    popup.classList.remove('show');
  }

  // 显式绑定关闭按钮事件（关键修复）
  const closeButton = document.querySelector('#novemberPopup .popup-close');
  if (closeButton) {
    closeButton.addEventListener('click', closePopup);
  } else {
    console.error('未找到弹窗关闭按钮，请检查HTML结构');
  }

  // 点击弹窗外部关闭
  const popup = document.getElementById('novemberPopup');
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === this) closePopup();
    });
  }

  // 11月自动显示弹窗
  const now = new Date();
  if (now.getMonth() === 10) { // 10表示11月
    openPopup();
  }
});

// 语言切换功能（保持不变）
function switchLang(lang) {
  const contents = document.querySelectorAll('.lang-content');
  const buttons = document.querySelectorAll('.lang-toggle button');
  contents.forEach(p => {
    p.style.display = p.getAttribute('data-lang') === lang ? 'block' : 'none';
  });
  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(lang));
  });
}