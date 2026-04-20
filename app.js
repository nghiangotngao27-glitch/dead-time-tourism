function goDiscover() {
  const timeText = document.getElementById("timeInput").value;
  const interest = document.getElementById("interestSelect").value;
  const result = document.getElementById("result");

  const minutes = timeText.includes("giờ")
    ? parseInt(timeText) * 60
    : parseInt(timeText);

  const experiences = [
    { name: "Ăn nhanh món địa phương", min: 30, max: 60, interest: "Ẩm thực" },
    { name: "Uống cà phê", min: 15, max: 30, interest: "Nghỉ ngơi" },
    { name: "Dạo phố check‑in", min: 60, max: 120, interest: "Khám phá" }
  ];

  let html = "<div class='cards'>";
  let found = false;

  experiences.forEach(exp => {
    if (exp.interest === interest && minutes >= exp.min && minutes <= exp.max) {
      html += `
        <div class="card">
          <strong>${exp.name}</strong><br>
          ⏱ ${exp.min}-${exp.max} phút<br>
          <span class="tag">${exp.interest}</span>
        </div>`;
      found = true;
    }
  });

  html += "</div>";
  result.innerHTML = found ? html : "Không có trải nghiệm phù hợp.";
}
``
