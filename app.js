function goDiscover() {
  const time = document.getElementById("timeInput").value;
  const interest = document.getElementById("interestSelect").value;
  const result = document.getElementById("result");

  if (!time) {
    result.innerText = "Vui lòng nhập thời gian rảnh.";
    return;
  }

  result.innerText =
    `Với ${time} rảnh và sở thích ${interest}, bạn có thể chọn một trải nghiệm ngắn phù hợp gần bạn.`;
}
