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