import React from 'react';

class EmployeeTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { id: 1, name: 'John', role: 'React Developer' },
        { id: 2, name: 'Jane', role: 'JS Developer' },
        { id: 3, name: 'Jack', role: 'Java Developer' },
        { id: 4, name: 'ram', role: 'React Developer' },
        { id: 5, name: 'Jole', role: 'JS Developer' },
        { id: 6, name: 'sam', role: 'Java Developer' },
        { id: 7, name: 'hanu', role: 'React Developer' },
        { id: 8, name: 'puli', role: 'JS Developer' },
        { id: 9, name: 'sema', role: 'Java Developer' },
        { id: 10, name: 'werner', role: 'React Developer' },
        { id: 11, name: 'rolls', role: 'React Developer' },
        { id: 12, name: 'baje', role: 'Java Developer' }
      ],
      employees2: [
        { id: 1, name: 'John', role: 'React Developer' },
        { id: 2, name: 'Jane', role: 'JS Developer' },
        { id: 3, name: 'Jack', role: 'Java Developer' },
        { id: 4, name: 'ram', role: 'React Developer' },
        { id: 5, name: 'Jole', role: 'JS Developer' },
        { id: 6, name: 'sam', role: 'Java Developer' },
        { id: 7, name: 'hanu', role: 'React Developer' },
        { id: 8, name: 'puli', role: 'JS Developer' },
        { id: 9, name: 'sema', role: 'Java Developer' },
        { id: 10, name: 'werner', role: 'React Developer' },
        { id: 11, name: 'rolls', role: 'React Developer' },
        { id: 12, name: 'baje', role: 'Java Developer' }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(role) {
    const filteredEmployees = this.state.employees2.filter((employee) => employee.role === role);
    this.setState({ employees: filteredEmployees });
  }
  handleClick2(role){
    const filteredEmployees2 = this.state.employees2.filter((employee) => employee.role !== role);
    this.setState({employees:filteredEmployees2})
  }

  render() {
    const employeeRows = this.state.employees.map((employee) => (
      <tr key={employee.id}>
        <td>{employee.id}</td>
        <td>{employee.name}</td>
        <td>{employee.role}</td>
      </tr>
    ));

    return (
      <div>
        <button onClick={() => this.handleClick2('hh')} className="btn btn-secondary m-3">Show All Developer Table</button>
        <button onClick={() => this.handleClick('React Developer')} className="btn btn-primary m-3">Show React Developer Table</button>
        <button onClick={() => this.handleClick('JS Developer')} className="btn btn-danger m-3">Show JS Developer Table</button>
        <button onClick={() => this.handleClick('Java Developer')} className="btn btn-dark m-3">Show Java Developer Table</button>


        <table className="table table-bordered w-5 table-danger">
          <thead>
            <tr>
                <th>ID</th>
              <th>Name</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {employeeRows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default EmployeeTable;
