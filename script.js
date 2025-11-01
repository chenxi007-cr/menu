document.addEventListener('DOMContentLoaded', function() {
    // 设置当前页面导航状态
    const currentPath = window.location.pathname.split('/').pop();
    document.querySelectorAll('.nav-link').forEach(link => {
        const linkPath = link.getAttribute('href');
        if ((currentPath === '' && linkPath === 'index.html') || 
            (currentPath === linkPath)) {
            link.classList.add('active', 'clicked');
        }
    });

    // 点击导航链接效果
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是当前页面链接则阻止默认行为
            if(this.classList.contains('active')) {
                e.preventDefault();
                return;
            }
            
            // 移除所有clicked类
            document.querySelectorAll('.nav-link').forEach(l => {
                l.classList.remove('clicked');
            });
            // 为当前点击的链接添加clicked类
            this.classList.add('clicked');
        });
    });
});

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

  function openPopup() {
  const popup = document.getElementById('novemberPopup');
  popup.style.display = 'flex';
}

function closePopup() {
  const popup = document.getElementById('novemberPopup');
  popup.style.display = 'none';
}

// 页面加载后自动显示弹窗
document.addEventListener('DOMContentLoaded', function() {
  // 检查是否是11月份（实际部署时可删除注释）
  const now = new Date();
  if (now.getMonth() === 10) { // 10表示11月（月份从0开始计数）
    openPopup();
  }
  
  // 点击弹窗外部关闭
  document.getElementById('novemberPopup').addEventListener('click', function(e) {
    if (e.target === this) closePopup();
  });
});
