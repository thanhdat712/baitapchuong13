// Toggle menu mobile: Tailwind không có sẵn hành vi JS như Bootstrap,
// nên ta tự bật/tắt class "hidden" / "flex" khi bấm icon hamburger.
const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
  const dangMo = menu.classList.contains('flex');
  menu.classList.toggle('hidden', dangMo);
  menu.classList.toggle('flex', !dangMo);
  btn.setAttribute('aria-expanded', String(!dangMo));
});

// Đóng menu khi chọn một liên kết (tiện cho điện thoại)
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.add('hidden');
  menu.classList.remove('flex');
  btn.setAttribute('aria-expanded', 'false');
}));

// Hiệu ứng nhỏ: đổ bóng thanh điều hướng khi cuộn xuống
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('shadow-md', window.scrollY > 10);
});
