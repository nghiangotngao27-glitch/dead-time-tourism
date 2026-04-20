function goDiscover() {
  const time = document.getElementById("timeInput").value;
  const interest = document.getElementById("interestSelect").value;
  const result = document.getElementById("result");

  result.innerHTML = `
    <div style="border:1px solid #0066ff; padding:10px; margin-top:10px">
      <strong>Ăn nhanh món địa phương</strong><br>
      Thời gian: 30–60 phút<br>
      Sở thích: Ẩm thực
    </div>
  `;
}
