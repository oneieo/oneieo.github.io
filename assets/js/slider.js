// 변수 선언은 전역으로 둡니다.
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

// === 함수 정의 ===
function showSlide(n) {
  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  slides.forEach((slide) => slide.classList.remove("active"));
  dots.forEach((dot) => dot.classList.remove("active"));

  // 요소가 실제로 존재하는지 확인하여 오류 방지
  if (slides[slideIndex]) slides[slideIndex].classList.add("active");
  if (dots[slideIndex]) dots[slideIndex].classList.add("active");
}

function moveSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function goToSlide(n) {
  slideIndex = n;
  showSlide(slideIndex);
}

// === 실행 로직 (HTML 로드 후 실행) ===
// 이 부분 안에 사용자님이 질문하신 이벤트 리스너 코드가 들어갑니다.
document.addEventListener("DOMContentLoaded", () => {
  // 1. 초기 슬라이드 표시
  showSlide(slideIndex);

  // 2. 버튼 이벤트 리스너 추가 (인라인 onclick 대신 사용)
  document
    .querySelector(".slider-prev")
    ?.addEventListener("click", () => moveSlide(-1));
  document
    .querySelector(".slider-next")
    ?.addEventListener("click", () => moveSlide(1));

  // 3. 점(dot) 이벤트 리스너 추가
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.addEventListener("click", () => goToSlide(index));
  });

  // 4. 자동 슬라이드 설정
  setInterval(() => {
    slideIndex++;
    showSlide(slideIndex);
  }, 2000);
});
