// 加载 header 和 footer
document.addEventListener("DOMContentLoaded", async function() {
    // 异步加载 header 和 footer
    try {
        const headerElement = document.querySelector(".header");
        const footerElement = document.querySelector(".footer");
        const headerResponse = await fetch("./module/header.html");
        if (headerResponse.ok) {
            headerElement.innerHTML = await headerResponse.text();
        } else {
            headerElement.innerHTML = "无法加载 header.html";
        }
        const footerResponse = await fetch("./module/footer.html");
        if (footerResponse.ok) {
            footerElement.innerHTML = await footerResponse.text();
        } else {
            headerElement.innerHTML = "无法加载 footer.html";
        }
    } catch (error) {
        console.error("加载失败:", error);
    }

    // 动态显示隐藏 Header
    const header = document.getElementById('header');
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY && currentScrollY > 80) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        lastScrollY = currentScrollY;
    });

    // 返回顶部按钮
    const backToTopBtn = document.getElementById('backToTop');
    // 显示或隐藏返回顶部按钮
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
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


    // 设置当前界面对应的超链接选中
    const currentPage = window.location.pathname.split('/').pop();
    const links = document.querySelectorAll('.header-nav a');
    links.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});