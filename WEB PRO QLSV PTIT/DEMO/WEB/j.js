// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
      item.classList.remove("hovered");
    });
    this.classList.add("hovered");
  }
  list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
  };
  
  
  // thêm sáng tối cho web 
  
  document.addEventListener("DOMContentLoaded", function() {
    // Chọn nút chuyển đổi chế độ bằng id "toggle-theme"
    const toggleButton = document.getElementById("toggle-theme");
  
    // Kiểm tra chế độ lưu trữ từ trước (nếu có)
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme) {
        document.body.classList.add(currentTheme);
    }
  