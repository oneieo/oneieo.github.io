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
