function goDiscover() {
  const time = document.getElementById("timeInput").value;
  const interest = document.getElementById("interestSelect").value;
  const result = document.getElementById("result");

  if (!time) {
    result.innerHTML = "<p>Vui lòng nhập thời gian rảnh.</p>";
    return;
  }

  const experiences = [
    {
      name: "Ăn nhanh món địa phương",
      duration: "30–60 phút",
      type: "Short",
      interest: "Ẩm thực"
    },
    {
      name: "Uống cà phê gần bạn",
      duration: "15–30 phút",
      type: "Micro",
      interest: "Nghỉ ngơi"
    },
    {
      name: "Dạo phố & check-in",
      duration: "60–120 phút",
      type: "Medium",
      interest: "Khám phá"
    }
  ];

  let html = `<h3>Gợi ý cho ${time} (${interest})</h3>
              <div class="cards">`;

  experiences.forEach(exp => {
    if (exp.interest === interest) {
      html += `
        <div class="card">
          <h4>${exp.name}</h4>
          <p>⏱ ${exp.duration}</p>
          <span class="tag">${exp.type}</span>
        </div>
      `;
    }
  });

  html += "</div>";
  result.innerHTML = html;
}
