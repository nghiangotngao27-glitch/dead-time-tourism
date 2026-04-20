function goDiscover() {
  const timeText = document.getElementById("timeInput").value;
  const interest = document.getElementById("interestSelect").value;
  const result = document.getElementById("result");

  if (!timeText) {
    result.innerHTML = "Vui lòng nhập thời gian.";
    return;
  }

  // Lấy số phút từ input
  let minutes = parseInt(timeText);
  if (timeText.includes("giờ")) {
    minutes = parseInt(timeText) * 60;
  }

  const experiences = [
    {
      name: "Uống cà phê gần bạn",
      min: 15,
      max: 30,
      interest: "Nghỉ ngơi"
    },
    {
      name: "Ăn nhanh món địa phương",
      min: 30,
      max: 60,
      interest: "Ẩm thực"
    },
    {
      name: "Dạo phố & check‑in",
      min: 60,
      max: 120,
      interest: "Khám phá"
    }
  ];

  let found = false;
  let html = `<p>Gợi ý cho ${minutes} phút (${interest}):</p><ul>`;

  experiences.forEach(exp => {
    if (
      exp.interest === interest &&
      minutes >= exp.min &&
      minutes <= exp.max
    ) {
      found = true;
      html += `<li>${exp.name} (${exp.min}–${exp.max} phút)</li>`;
    }
  });

  html += "</ul>";

  if (!found) {
    html = "Không có trải nghiệm phù hợp với thời gian này.";
  }

  result.innerHTML = html;
}
