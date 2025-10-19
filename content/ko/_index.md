---
title: "Home"
date: 2024-10-01
type: landing

design:
  # Default section spacing
  spacing: "4rem"

# Note: `username` refers to the user's folder name in `content/authors/`

# Page sections
sections:
  - block: biography
    content:
      username: admin
      # Show a call-to-action button under your biography? (optional)
      button:
        text: 포트폴리오 다운받기
        url: uploads/Jiwon_Portfolio.pdf
    design:
      banner:
        # Upload your cover image to the `assets/media/` folder and reference it here
        filename: andrew-small-EfhCUc_fjrU-unsplash.jpg
      biography:
        # Customize the style of your biography text
        style: "text-align: justify; font-size: 0.8em;"
      # Avatar customization
      avatar:
        size: large # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: markdown
    content:
      title: ""
      text: |
        <div class="hero-slider">
          <div class="slider-container">
            <div class="slide active">
              <img src="/assets/media/andrew-small-EfhCUc_fjrU-unsplash.jpg" alt="환영합니다">
              <div class="slide-content">
                <h1>👋 환영합니다</h1>
                <p>저희가 하고 있는 일을 살펴보세요...</p>
              </div>
            </div>
            <div class="slide">
              <img src="/assets/media/logo.png" alt="함께 배우기">
              <div class="slide-content">
                <h1>☕️ 함께 배우기</h1>
                <p>지식을 공유하고 새로운 주제를 탐구하세요!</p>
              </div>
            </div>
            <div class="slide">
              <img src="/assets/media/trophy.png" alt="연구실">
              <div class="slide-content">
                <h1>세계적인 연구실</h1>
                <p>지난달에 오픈했습니다!</p>
                <a href="../contact/" class="slide-btn">Join Us</a>
              </div>
            </div>
          </div>
          <button class="slider-prev" onclick="moveSlide(-1)">&#10094;</button>
          <button class="slider-next" onclick="moveSlide(1)">&#10095;</button>
          <div class="slider-dots">
            <span class="dot active" onclick="goToSlide(0)"></span>
            <span class="dot" onclick="goToSlide(1)"></span>
            <span class="dot" onclick="goToSlide(2)"></span>
          </div>
        </div>
        <style>
        .hero-slider{position:relative;width:100%;height:500px;overflow:hidden;margin-bottom:3rem;border-radius:12px}
        .slider-container{position:relative;width:100%;height:100%}
        .slide{position:absolute;width:100%;height:100%;opacity:0;transition:opacity 1s ease-in-out}
        .slide.active{opacity:1}
        .slide img{width:100%;height:100%;object-fit:cover;filter:brightness(0.7)}
        .slide-content{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;color:white;z-index:2;width:80%}
        .slide-content h1{font-size:3rem;font-weight:700;margin-bottom:1rem;text-shadow:2px 2px 8px rgba(0,0,0,0.8);color:white}
        .slide-content p{font-size:1.5rem;margin-bottom:2rem;text-shadow:1px 1px 4px rgba(0,0,0,0.8);color:#f0f0f0}
        .slide-btn{display:inline-block;padding:1rem 2rem;background:#3b82f6;color:white;text-decoration:none;border-radius:8px;font-weight:600;transition:all 0.3s}
        .slide-btn:hover{background:#2563eb;transform:translateY(-2px);box-shadow:0 10px 20px rgba(59,130,246,0.3)}
        .slider-prev,.slider-next{position:absolute;top:50%;transform:translateY(-50%);background:rgba(255,255,255,0.3);color:white;border:none;padding:1rem 1.2rem;font-size:1.8rem;cursor:pointer;z-index:10;transition:background 0.3s;border-radius:4px}
        .slider-prev:hover,.slider-next:hover{background:rgba(255,255,255,0.5)}
        .slider-prev{left:20px}
        .slider-next{right:20px}
        .slider-dots{position:absolute;bottom:30px;left:50%;transform:translateX(-50%);display:flex;gap:12px;z-index:10}
        .dot{width:12px;height:12px;border-radius:50%;background:rgba(255,255,255,0.5);cursor:pointer;transition:all 0.3s}
        .dot:hover{background:rgba(255,255,255,0.8)}
        .dot.active{background:white;width:30px;border-radius:6px}
        @media (max-width:768px){.hero-slider{height:350px}.slide-content h1{font-size:2rem}.slide-content p{font-size:1.1rem}.slider-prev,.slider-next{padding:0.6rem 1rem;font-size:1.4rem}}
        </style>
        <script>
        let slideIndex=0;const slides=document.querySelectorAll('.slide');const dots=document.querySelectorAll('.dot');function showSlide(n){if(n>=slides.length)slideIndex=0;if(n<0)slideIndex=slides.length-1;slides.forEach(slide=>slide.classList.remove('active'));dots.forEach(dot=>dot.classList.remove('active'));slides[slideIndex].classList.add('active');dots[slideIndex].classList.add('active')}function moveSlide(n){slideIndex+=n;showSlide(slideIndex)}function goToSlide(n){slideIndex=n;showSlide(slideIndex)}setInterval(()=>{slideIndex++;showSlide(slideIndex)},2000);showSlide(slideIndex);
        </script>
    design:
      spacing:
        padding: ["0", "0", "0", "0"]
  - block: skills
    content:
      title: 전공 및 기술스택
      username: admin
  # - block: markdown
  #   content:
  #     title: 경력
  #     subtitle: ""
  #   design:
  #     spacing:
  #       padding: ["0", "0", "0", "0"]
  - block: experience
    content:
      username: admin
    design:
      # Hugo date format
      date_format: "January 2006"
      # Education or Experience section first?
      is_education_first: false

  - block: awards
    content:
      title: 수상경력
      username: admin
  # - block: languages
  #   content:
  #     title: Languages
  #     username: admin
  - block: markdown
    content:
      title: 연락처 및 위치
      text: |

        <div>
          <p>boywonderof@jbnu.ac.kr</p>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1219545114177!2d127.13304212555703!3d35.846013044096786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35702330dc920b9d%3A0x1d0d425396006646!2z7KCE67aB64yA7ZWZ6rWQIOqzteqzvOuMgO2VmSA37Zi46rSA!5e0!3m2!1sko!2skr!4v1760381832335!5m2!1sko!2skr"
           width="100%"
           height="450"
          style="border:0;"
           allowfullscreen=""
           loading="lazy"
           referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
    design:
      columns: "2"
---
