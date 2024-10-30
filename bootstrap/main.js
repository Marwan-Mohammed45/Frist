const wordItems = document.querySelectorAll('.word-item');

wordItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all items
    wordItems.forEach(i => i.classList.remove('active'));
    
    // Add 'active' class to the clicked item
    this.classList.add('active');
  });
});
    // إضافة وظيفة إضافة إلى السلة
    document.querySelectorAll('.popphoo .product img').forEach(function(img) {
      img.addEventListener('click', function() {
          // الحصول على عنصر إضافة إلى السلة
          const addToCartButton = img.parentElement.querySelector('.add-to-cart');
          // إظهار الزر
          addToCartButton.style.display = 'block';
      });
  });

  // إضافة حدث الضغط على زر "إضافة إلى السلة"
  document.querySelectorAll('.popphoo .add-to-cart button').forEach(function(button) {
      button.addEventListener('click', function() {
          // إظهار رسالة شكر
          alert('Thank you for adding to cart!');
      });
  });
