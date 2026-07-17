// Khởi tạo album ảnh Swiper.js
var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    effect: "fade", // Thêm hiệu ứng fade mượt mà mang phong cách hiện đại
    loop: true,
});

// Xử lý biểu mẫu Lưu Bút (Guestbook)
const guestbookForm = document.getElementById('guestbook-form');

guestbookForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn trang tải lại

    const formData = new FormData(guestbookForm);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    // Code gửi dữ liệu lên Database (Firebase/Supabase...) sẽ được viết ở đây.
    // Tạm thời hiển thị thông báo đã gửi thành công:
    const responseMessage = `Cảm ơn ${data.name} đã để lại những lời nhắn vô cùng ý nghĩa! Lưu bút của bạn đã được ghi nhận.`;
    
    alert(responseMessage);
    guestbookForm.reset(); // Làm trống form sau khi gửi
});

// Xử lý nhạc nền
const musicToggle = document.getElementById('music-toggle');
const audio = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'); // Nhạc mẫu (Bạn thay link nhạc thực tế vào đây)
audio.loop = true; // Lặp lại bài hát
let isPlaying = false;

musicToggle.addEventListener('click', function() {
    if (isPlaying) {
        audio.pause();
        musicToggle.innerHTML = '&#9835;'; // Icon nốt nhạc
        musicToggle.style.backgroundColor = 'var(--primary-color)';
    } else {
        audio.play().catch(function(error) {
            console.log("Trình duyệt chặn tự động phát.", error);
        });
        musicToggle.innerHTML = '&#10074;&#10074;'; // Icon tạm dừng (Pause)
        musicToggle.style.backgroundColor = '#475569'; // Đổi màu nút khi đang phát nhạc
    }
    isPlaying = !isPlaying;
});
