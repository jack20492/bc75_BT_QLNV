class Employee {
  constructor(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  ) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.chucVu = chucVu;
    this.luongCoBan = luongCoBan;
    this.gioLam = gioLam;
    this.tongLuong = 0;
    this.xepLoai = "";
  }

  // Tính tổng luong
  calTotalSalary() {
    if (this.chucVu === "Giám đốc") {
      this.tongLuong = this.luongCoBan * 3;
    } else if (this.chucVu === "Trưởng Phòng") {
      this.tongLuong = this.luongCoBan * 2;
    } else {
      this.tongLuong = this.luongCoBan;
    }
  }

  // Xếp loại nhân viên
  rankEmployee() {
    if (this.gioLam >= 192) {
      this.xepLoai = "Xuất sắc";
    } else if (this.gioLam >= 176) {
      this.xepLoai = "Giỏi";
    } else if (this.gioLam >= 160) {
      this.xepLoai = "Khá";
    } else {
      this.xepLoai = "Trung bình";
    }
  }
}

export default Employee;
