class ManageEmployee {
  constructor() {
    this.employeeList = [];
  }

  addEmployee(employee) {
    this.employeeList.push(employee);
  }
  editEmployee() {}

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
  searchEmployee() {}
}

export default ManageEmployee;
