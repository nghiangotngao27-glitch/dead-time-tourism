function goDiscover() {
  const timeText = document.getElementById("timeInput").value;
  const interest = document.getElementById("interestSelect").value;
  const result = document.getElementById("result");

  // Kiểm tra input
  if (!timeText) {
    result.innerHTML = "<p>Vui lòng nhập thời gian.</p>";
    return;
  }

  // Chuẩn hóa số phút
  let minutes = Number.parseInt(timeText);
  if (timeText.includes("giờ")) {
    minutes = Number.parseInt(timeText) * 60;
  }

  if (isNaN(minutes)) {
    result.innerHTML = "<p>Thời gian không hợp lệ.</p>";
    return;
  }

  // Dữ liệu trải nghiệm
  const experiences = [
    {
      name: "Ăn nhanh món địa phương",
      min: 30,
      max: 60,
      interest: "Ẩm thực"
    },
    {
      name: "Uống cà phê",
      min: 15,
      max: 30,
      interest: "Nghỉ ngơi"
    },
    {
      name: "Dạo phố check‑in",
      min: 60,
      max: 120,
      interest: "Khám phá"
    }
  ];

  let found = false;

  // Bắt đầu render card
  let html = `<div class="cards">`;

  experiences.forEach(exp => {
    if (
      exp.interest.trim() === interest.trim() &&
      minutes >= exp.min &&
      minutes <= exp.max
    ) {
      found = true;
      html += `
        <div class="card">
          <strong>${exp.name}</strong><br>
          ⏱ ${exp.min}–${exp.max} phút<br>
          <span class="tag">${exp.interest}</span>
        </div>
      `;
    }
  });

  html += `</div>`;

  // In kết quả
  result.innerHTML = found
    ? html
    : "<p>Không có trải nghiệm phù hợp với thời gian này.</p>";
}
