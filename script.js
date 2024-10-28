

// Thêm sự kiện di chuột qua cho mỗi phần tử
products.forEach((product) => {
  product.addEventListener('mouseover', () => {
    // Thay đổi màu sắc của phần tử khi di chuột qua
    product.style.backgroundColor = '#ccc';
  });

  product.addEventListener('mouseout', () => {
    // Khôi phục màu sắc ban đầu khi di chuột ra khỏi phần tử
    product.style.backgroundColor = '#f9f9f9';
  });
});
// Cuộn trang
window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollPosition = window.scrollY || window.pageYOffset;

    if (scrollPosition > 100) { // Điều chỉnh giá trị 100 theo ý bạn
        header.classList.add('scrolling');
    } else {
        header.classList.remove('scrolling');
    }
});

// Giỏ hàng
document.addEventListener('DOMContentLoaded', function() {
  const cartIcon = document.querySelector('.header-icons .fa-shopping-cart');
  
  if (cartIcon) {
      cartIcon.parentElement.addEventListener('click', function(e) {
          e.preventDefault();
          
          document.body.style.opacity = '0';
          
          setTimeout(function() {
              window.location.href = 'cart.html';
          }, 500);
      });
  }
});