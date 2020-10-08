// 禁止页面滚动
export  function disableScroll() {
    let m = function (e) {
        e.preventDefault();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('touchmove', m, {
        passive: false
    });
}

// 开启页面滚动
export  function openScroll() {
    let m = function (e) {
        e.preventDefault();
    };
    document.body.style.overflow = '';
    document.removeEventListener('touchmove', m, {
        passive: true
    });
}
