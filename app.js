function goDiscover() {
  const time = document.getElementById("timeInput").value;
  const interest = document.getElementById("interestSelect").value;
  const result = document.getElementById("result");

  if (!time) {
    result.innerHTML = "Vui lòng nhập thời gian.";
    return;
  }

  const experiences = [
    { name: "Ăn nhanh món địa phương", min: 30, max: 60, interest: "Ẩm thực" },
    { name: "Uống cà phê", min: 15, max: 30, interest: "Nghỉ ngơi" },
    { name: "Dạo phố check‑in", min: 60, max: 120, interest: "Khám phá" }
  ];

  let minutes = parseInt(time);
  if (time.includes("giờ")) minutes *= 60;

  let html = `<h3>Gợi ý:</h3><ul>`;
  let found = false;

  experiences.forEach(exp => {
    if (exp.interest === interest && minutes >= exp.min && minutes <= exp.max) {
      html += `<li>${exp.name} (${exp.min}–${exp.max} phút)</li>`;
      found = true;
    }
  });

  html += `</ul>`;
  result.innerHTML = found ? html : "Không có trải nghiệm phù hợp.";
}
