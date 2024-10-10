// Hàm kiểm tra tài khoản
function kiemTraTaiKhoan(taiKhoan) {
  const regex = /^\d{4,6}$/;
  const spanThongBao = document.getElementById("tbTKNV");

  if (!taiKhoan.match(regex)) {
    spanThongBao.innerHTML =
      "Tài khoản phải chứa từ 4 đến 6 ký số và không để trống.";
    spanThongBao.style.display = "inline"; // Hiển thị thẻ span nếu có lỗi
    return false;
  }
  spanThongBao.innerHTML = "";
  spanThongBao.style.display = "none"; // Ẩn thẻ span nếu không có lỗi
  return true;
}

// Hàm kiểm tra tên nhân viên
function kiemTraTenNhanVien(ten) {
  const regex = /^[a-zA-Z\s]+$/;
  const spanThongBao = document.getElementById("tbTen");

  if (!ten.match(regex)) {
    spanThongBao.innerHTML = "Tên nhân viên chỉ chứa chữ và không để trống.";
    spanThongBao.style.display = "inline"; // Hiển thị thẻ span nếu có lỗi
    return false;
  }
  spanThongBao.innerHTML = "";
  spanThongBao.style.display = "none"; // Ẩn thẻ span nếu không có lỗi
  return true;
}

// Hàm kiểm tra email
function kiemTraEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const spanThongBao = document.getElementById("tbEmail");

  if (!email.match(regex)) {
    spanThongBao.innerHTML = "Email phải đúng định dạng và không để trống.";
    spanThongBao.style.display = "inline"; // Hiển thị thẻ span nếu có lỗi
    return false;
  }
  spanThongBao.innerHTML = "";
  spanThongBao.style.display = "none"; // Ẩn thẻ span nếu không có lỗi
  return true;
}

// Hàm kiểm tra mật khẩu
function kiemTraMatKhau(matKhau) {
  const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[@#$%^&+=]).{6,10}$/;
  const spanThongBao = document.getElementById("tbMatKhau");

  if (!matKhau.match(regex)) {
    spanThongBao.innerHTML =
      "Mật khẩu phải chứa từ 6-10 ký tự, ít nhất 1 số, 1 ký tự viết hoa, 1 ký tự đặc biệt và không để trống.";
    spanThongBao.style.display = "inline"; // Hiển thị thẻ span nếu có lỗi
    return false;
  }
  spanThongBao.innerHTML = "";
  spanThongBao.style.display = "none"; // Ẩn thẻ span nếu không có lỗi
  return true;
}

// Hàm kiểm tra ngày làm việc
function kiemTraNgayLam(ngay) {
  const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
  const spanThongBao = document.getElementById("tbNgay");

  if (!ngay.match(regex)) {
    spanThongBao.innerHTML =
      "Ngày làm phải có định dạng mm/dd/yyyy và không để trống.";
    spanThongBao.style.display = "inline"; // Hiển thị thẻ span nếu có lỗi
    return false;
  }
  spanThongBao.innerHTML = "";
  spanThongBao.style.display = "none"; // Ẩn thẻ span nếu không có lỗi
  return true;
}

// Hàm kiểm tra lương cơ bản
function kiemTraLuongCoBan(luong) {
  const luongSo = parseFloat(luong);
  const spanThongBao = document.getElementById("tbLuongCB");

  if (isNaN(luongSo) || luongSo < 1000000 || luongSo > 20000000) {
    spanThongBao.innerHTML =
      "Lương cơ bản phải từ 1,000,000 đến 20,000,000 và không để trống.";
    spanThongBao.style.display = "inline"; // Hiển thị thẻ span nếu có lỗi
    return false;
  }
  spanThongBao.innerHTML = "";
  spanThongBao.style.display = "none"; // Ẩn thẻ span nếu không có lỗi
  return true;
}

// Hàm kiểm tra chức vụ
function kiemTraChucVu(chucVu) {
  const danhSachChucVu = ["Sếp", "Trưởng phòng", "Nhân viên"];
  const spanThongBao = document.getElementById("tbChucVu");

  if (!danhSachChucVu.includes(chucVu)) {
    spanThongBao.innerHTML =
      "Vui lòng chọn chức vụ hợp lệ (Sếp, Trưởng phòng, Nhân viên).";
    spanThongBao.style.display = "inline"; // Hiển thị thẻ span nếu có lỗi
    return false;
  }
  spanThongBao.innerHTML = "";
  spanThongBao.style.display = "none"; // Ẩn thẻ span nếu không có lỗi
  return true;
}

// Hàm kiểm tra số giờ làm
function kiemTraGioLam(gioLam) {
  const gioSo = parseFloat(gioLam);
  const spanThongBao = document.getElementById("tbGioLam");

  if (isNaN(gioSo) || gioSo < 80 || gioSo > 200) {
    spanThongBao.innerHTML =
      "Số giờ làm phải từ 80 đến 200 giờ và không để trống.";
    spanThongBao.style.display = "inline"; // Hiển thị thẻ span nếu có lỗi
    return false;
  }
  spanThongBao.innerHTML = "";
  spanThongBao.style.display = "none"; // Ẩn thẻ span nếu không có lỗi
  return true;
}

// Hàm kiểm tra toàn bộ form
function kiemTraForm() {
  const taiKhoan = document.getElementById("tknv").value;
  const ten = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const matKhau = document.getElementById("password").value;
  const ngayLam = document.getElementById("datepicker").value;
  const luongCoBan = document.getElementById("luongCB").value;
  const chucVu = document.getElementById("chucvu").value;
  const gioLam = document.getElementById("gioLam").value; // Thêm số giờ làm

  let isValid = true;

  // Kiểm tra từng phần của form và cập nhật isValid
  if (!kiemTraTaiKhoan(taiKhoan)) isValid = false;
  if (!kiemTraTenNhanVien(ten)) isValid = false;
  if (!kiemTraEmail(email)) isValid = false;
  if (!kiemTraMatKhau(matKhau)) isValid = false;
  if (!kiemTraNgayLam(ngayLam)) isValid = false;
  if (!kiemTraLuongCoBan(luongCoBan)) isValid = false;
  if (!kiemTraChucVu(chucVu)) isValid = false;
  if (!kiemTraGioLam(gioLam)) isValid = false;

  return isValid;
}

// Thêm sự kiện input cho các trường nhập
document.getElementById("tknv").addEventListener("input", function () {
  kiemTraTaiKhoan(this.value);
});
document.getElementById("name").addEventListener("input", function () {
  kiemTraTenNhanVien(this.value);
});
document.getElementById("email").addEventListener("input", function () {
  kiemTraEmail(this.value);
});
document.getElementById("password").addEventListener("input", function () {
  kiemTraMatKhau(this.value);
});
document.getElementById("datepicker").addEventListener("input", function () {
  kiemTraNgayLam(this.value);
});
document.getElementById("luongCB").addEventListener("input", function () {
  kiemTraLuongCoBan(this.value);
});
document.getElementById("chucvu").addEventListener("change", function () {
  kiemTraChucVu(this.value);
});
document.getElementById("gioLam").addEventListener("input", function () {
  kiemTraGioLam(this.value);
});

// Gắn sự kiện vào nút "Thêm người dùng"
document.getElementById("btnThemNV").addEventListener("click", function () {
  if (kiemTraForm()) {
    alert("Thêm nhân viên thành công!");
    // Logic thêm nhân viên ở đây (nếu hợp lệ)
  } else {
    alert("Vui lòng nhập đúng thông tin hợp lệ.");
  }
});
