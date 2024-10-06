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
};

// delete employee
const deleteEmp = (taiKhoan) => {
  manageEmployee.deleteEmployee(taiKhoan);
  // renderEmployee
  renderEmployee(manageEmployee.employeeList);
};
window.deleteEmp = deleteEmp;

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
          <button class="btn btn-danger" onclick="deleteEmp('${
            employee.taiKhoan
          }')">Xóa</button>
          </td>
        </tr>
    `;
  });
  getEleId("tableDanhSach").innerHTML = contentHTML;
};
