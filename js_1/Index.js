import Employee from "./../js_1/Employee.js";
import ManageEmployee from "./../js_1/ManageEmployee.js";

const manageEmployee = new ManageEmployee();
const getEleId = (id) => document.getElementById(id);

// set local storage: save list of employee to local storage
const setLocalStorage = () => {
  const dataString = JSON.stringify(manageEmployee.employeeList);
  localStorage.setItem("LIST_EMPLOYEES", dataString);
};

// get LIST_EMPLOYEES from local storage
const getLocalStorage = () => {
  const dataString = localStorage.getItem("LIST_EMPLOYEES");
  if (dataString) {
    // convert string to listfood
    const dataJSON = JSON.parse(dataString);
    manageEmployee.employeeList = dataJSON;
    renderEmployee(manageEmployee.employeeList);
  }
};

// get info employee
const getInfoEmployee = () => {};

// Lấy thông tin nhân viên nhập vào
getEleId("btnThemNV").onclick = () => {
  // Lấy thông tin nhân viên tù bảng
  const taiKhoan = getEleId("tknv").value;
  const hoTen = getEleId("name").value;
  const email = getEleId("email").value;
  const matKhau = getEleId("password").value;
  const ngayLam = getEleId("datepicker").value;
  const luongCoBan = getEleId("luongCB").value * 1;
  const chucVu = getEleId("chucvu").value;
  const gioLam = getEleId("gioLam").value * 1;

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

  // set local storage
  setLocalStorage();
  const closeClass = document.getElementsByClassName("modal");
  closeClass[0].click();
};

// delete employee
const deleteEmp = (taiKhoan) => {
  manageEmployee.deleteEmployee(taiKhoan);
  // renderEmployee
  renderEmployee(manageEmployee.employeeList);
};
window.deleteEmp = deleteEmp;

getEleId("btnThem").onclick = () => {
  // update title
  getEleId("header-title").innerHTML = "Thêm nhân viên";
  // show button Thêm nv
  getEleId("btnCapNhat").style.display = "none";
  getEleId("btnThemNV").style.display = "block";
  getEleId("btnThemNV").innerHTML = "Thêm";
  // reset form
  getEleId("form_1").reset();
  // enable input field
  getEleId("tknv").removeAttribute("disabled");
};

// Cap nhat Employee
getEleId("btnCapNhat").onclick = () => {
  const taiKhoan = getEleId("tknv").value;
  const hoTen = getEleId("name").value;
  const email = getEleId("email").value;
  const matKhau = getEleId("password").value;
  const ngayLam = getEleId("datepicker").value;
  const luongCoBan = getEleId("luongCB").value * 1;
  const chucVu = getEleId("chucvu").value;
  const gioLam = getEleId("gioLam").value * 1;

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
  manageEmployee.updateEmp(employee);
  renderEmployee(manageEmployee.employeeList);
  // close modal
  const closeClass = document.getElementsByClassName("modal");
  closeClass[0].click();
};

// Edit Employee
const editEmp = (taiKhoan) => {
  const employee = manageEmployee.getEmployeeByTaiKhoan(taiKhoan);
  console.log(employee);
  if (employee) {
    // update title
    getEleId("header-title").innerHTML = "Điều chỉnh thông tin";
    // hide button Thêm nv
    getEleId("btnThemNV").style.display = "none";
    getEleId("btnCapNhat").style.display = "block";
    // sett values to input fields
    getEleId("tknv").value = employee.taiKhoan;
    getEleId("tknv").setAttribute("disabled", true);
    getEleId("name").value = employee.hoTen;
    getEleId("email").value = employee.email;
    getEleId("password").value = employee.matKhau;
    getEleId("datepicker").value = employee.ngayLam;
    getEleId("luongCB").value = employee.luongCoBan;
    getEleId("chucvu").value = employee.chucVu;
    getEleId("gioLam").value = employee.gioLam;
  }
};
window.editEmp = editEmp;

// In thông tin nhân viên ra danh sách table
const renderEmployee = (employeeList) => {
  let contentHTML = "";
  employeeList.forEach((employee) => {
    employee.calTotalSalary();
    employee.rankEmployee();
    contentHTML += `
        <tr>
          <td>${employee.taiKhoan}</td>
          <td>${employee.hoTen}</td>
          <td>${employee.email}</td>
          <td>${employee.ngayLam}</td>
          <td>${employee.chucVu}</td>
          <td>${new Intl.NumberFormat("vi-VN", {
            style: "currency",
            currency: "VND",
          }).format(employee.tongLuong)}</td>
          <td>${employee.xepLoai}</td>
          <td>
          <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="editEmp('${
            employee.taiKhoan
          }')">Điều chỉnh</button> 
          <button class="btn btn-danger" onclick="deleteEmp('${
            employee.taiKhoan
          }')">Xóa</button>
          </td>
        </tr>
    `;
  });
  getEleId("tableDanhSach").innerHTML = contentHTML;
};

// filter employee
getEleId("setLoai").addEventListener("change", () => {
  const value = getEleId("setLoai").value;
  const listEmployeeFilter = manageEmployee.filterEmployee(value);
  renderEmployee(listEmployeeFilter);
});
