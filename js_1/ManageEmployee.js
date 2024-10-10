class ManageEmployee {
  constructor() {
    this.employeeList = [];
  }

  addEmployee(employee) {
    this.employeeList.push(employee);
  }
  getEmployeeByTaiKhoan(taiKhoan) {
    const index = this.findIndexByID(taiKhoan);
    if (index !== -1) {
      return this.employeeList[index]; //
    }
    return null;
  }

  updateEmp(employee) {
    const index = this.findIndexByID(employee.taiKhoan);
    if (index !== -1) {
      this.employeeList[index] = employee;
    }
  }
  // Find vị trí
  findIndexByID(taiKhoan) {
    const index = this.employeeList.findIndex((employee) => {
      return employee.taiKhoan === taiKhoan;
    });
    return index;
  }
  deleteEmployee(taiKhoan) {
    const index = this.findIndexByID(taiKhoan);
    if (index !== -1) {
      this.employeeList.splice(index, 1);
    }
  }
  filterEmployee(type) {
    if (type === "all") {
      return this.employeeList; // Return all employees if 'all' is selected
    } else {
      // Use the filter method and assign the result to listEmpFilter
      return this.employeeList.filter((employee) => {
        return employee.xepLoai === type; // Filter by type (Xuất sắc, Giỏi, etc.)
      });
    }
  }
}

export default ManageEmployee;
