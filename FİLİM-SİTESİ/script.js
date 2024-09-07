const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length; // Her liste içindeki img öğelerini say
  console.log(imageItem);

  arrow.addEventListener("click", function () {
    clickCounter++;
    // Eğer tıklama sınırı aşılmadıysa, sola kaydırma işlemi yapılır
    if (imageItem - (4 + clickCounter) >= 0) {
      // Mevcut transform değerini almak için getComputedStyle kullan
      const style = window.getComputedStyle(movieLists[i]);
      const matrix = new DOMMatrix(style.transform);
      const currentX = matrix.m41; // m41, translateX değerini verir

      // Yeni translateX değerini ayarla
      movieLists[i].style.transform = `translateX(${currentX - 300}px)`;
    } else {
      // Sınır aşıldığında, başlangıç pozisyonuna dön
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0; // Tıklama sayacını sıfırla
    }
  });
});

/* Dark mode  */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title")

ball.addEventListener("click", function(){
    items.forEach((item) => item.classList.toggle("active"));
});
