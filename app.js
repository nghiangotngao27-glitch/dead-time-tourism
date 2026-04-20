function goDiscover() {
  const time = document.getElementById("timeInput").value;
  const interest = document.getElementById("interestSelect").value;

  if (!time) {
    document.getElementById("result").innerText = "Vui lòng nhập thời gian.";
    return;
  }

  document.getElementById("result").innerText =
    `Với ${time} rảnh và sở thích ${interest}, bạn có thể chọn một trải nghiệm ngắn phù hợp gần bạn.`;
}
``
