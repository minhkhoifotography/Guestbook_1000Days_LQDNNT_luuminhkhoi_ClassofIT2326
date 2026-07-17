// 1. HIỆU ỨNG: Kiểm tra khi người dùng cuộn trang để cho hiện nội dung
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Section hiện ra khi 15% diện tích của nó lọt vào màn hình
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Thêm class 'visible' để kích hoạt CSS chuyển động mờ dần
                entry.target.classList.add('visible');
                // (Tùy chọn) Bỏ comment dòng dưới nếu muốn hiệu ứng chỉ chạy 1 lần
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Bắt đầu theo dõi tất cả các phần tử có class 'animate-on-scroll'
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    scrollElements.forEach(el => observer.observe(el));
});

// 2. XỬ LÝ NHẠC NỀN & NÚT TƯƠNG TÁC
const musicToggle = document.getElementById('music-toggle');
const audio = document.getElementById('bg-music');
let isPlaying = false;

musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        musicToggle.innerHTML = '🎵';
        musicToggle.classList.remove('playing'); // Dừng xoay
    } else {
        audio.play().catch(function(error) {
            console.log("Trình duyệt chặn tự động phát. Bắt buộc người dùng click.", error);
        });
        musicToggle.innerHTML = '🎶'; // Đổi icon khi phát
        musicToggle.classList.add('playing'); // Bắt đầu xoay icon
    }
    isPlaying = !isPlaying;
});

// 3. XỬ LÝ FORM LƯU BÚT
const guestbookForm = document.getElementById('guestbook-form');

guestbookForm.addEventListener('submit', function(event) {
    event.preventDefault(); 

    const formData = new FormData(guestbookForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    const responseMessage = `Cảm ơn ${data.name} đã để lại những lời nhắn vô cùng ý nghĩa! Lưu bút của bạn đã được ghi nhận.`;
    
    alert(responseMessage);
    guestbookForm.reset(); 
});
