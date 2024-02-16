import './App.css';
import { useState, useEffect } from 'react';
import Header from './Header';
import Nav from './Nav';
import NotFound from './NotFound';
import Footer from './Footer';
import Employees from './Employees';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupedTeamMembers from './GroupedTeamMembers';

function App() {

  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");
  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [{
    id: 1,
    fullName: "Javascript Dev1",
    designation: "Developer",
    gender: 'Male',
    teamName: "TeamA"
  },
  {
    id: 2,
    fullName: "Javascript Dev2",
    designation: "Architect",
    gender: 'Male',
    teamName: "TeamB"
  },
  {
    id: 3,
    fullName: "Javascript Dev3",
    designation: "Designer",
    gender: 'Female',
    teamName: "TeamB"
  },
  {
    id: 4,
    fullName: "Javascript Dev4",
    designation: "Developer",
    gender: 'Male',
    teamName: "TeamA"
  },
  {
    id: 5,
    fullName: "Javascript Dev5",
    designation: "Architect",
    gender: 'Female',
    teamName: "TeamC"
  },
  ]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));
  })

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees));
  })

  function handleTeamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
      ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam }
      : employee);
    console.log(employees);
    setEmployees(transformedEmployees);

  }

  return (
    <div>
      <Router>
        <Nav />
        <Header
          selectedTeam={selectedTeam}
          teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
        />
        <Routes>
          <Route path="/"
            element={
              <Employees
                employees={employees}
                selectedTeam={selectedTeam}
                handleEmployeeCardClick={handleEmployeeCardClick}
                handleTeamSelectionChange={handleTeamSelectionChange}
              />
            }>
          </Route>
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees} selectedTeam={selectedTeam} setTeam={setTeam} />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
