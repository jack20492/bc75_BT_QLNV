import Employee from "./../js_1/Employee.js";
import ManageEmployee from "./../js_1/ManageEmployee.js";

const manageEmployee = new ManageEmployee();

const getEleId = (id) => document.getElementById(id);

// Lấy thông tin nhâ nviên nhập vào
getEleId("btnThemNV").onclick = () => {
  // Lấy thông tin nhân viên tù bảng
  const taiKhoan = getEleId("tknv").value;
  const hoTen = getEleId("name").value;
  const email = getEleId("email").value;
  const matKhau = getEleId("password").value;
  const ngayLam = getEleId("datepicker").value;
  const luongCoBan = getEleId("luongCB").value;
  const chucVu = getEleId("chucvu").value;
  const gioLam = getEleId("gioLam").value;

  // Create new Employee object
  const employee = new Employee(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam
  );

  manageEmployee.addEmployee(employee);

  renderEmployee(manageEmployee.employeeList);
};

// In thông tin nhân viên ra danh sách table

const renderEmployee = (employeeList) => {
  let contentHTML = "";
  employeeList.foreach((employee) => {
    contentHTML += `
        <tr>
          <td>${employee.taiKhoan}</td>
          <td>${employee.hoTen}</td>
          <td>${employee.email}</td>
          <td>${employee.ngayLam}</td>
          <td>${employee.chucVu}</td>
          <td>${employee.tongLuong}</td>
          <td>${employee.xepLoai}</td>
        </tr>
    `;
  });
  getEleId("tableDanhSach").innerHTML = contentHTML;
};
