// 动态显示隐藏 Header
{
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 60) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollY = currentScrollY;
    });
}

// 返回顶部按钮
{
    const backToTopBtn = document.getElementById('backToTop');
    // 显示或隐藏返回顶部按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    // 点击按钮平滑滚动回顶部
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // 平滑滚动效果
        });
    });
}