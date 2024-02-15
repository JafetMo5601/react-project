import { useState } from 'react';
import femaleProfile from './images/femaleProfile.jpg'
import maleProfile from './images/maleProfile.jpg'

const Employees = () => {
  const [selectedTeam, setTeam] = useState("TeamB");
  const [employees, setEmployees] = useState([
    {
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
  ])

  function handleteamSelectionChange(event) {
    setTeam(event.target.value);
  }

  function handleEmployeeCardClick(event) {
    const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
                                              ?(employee.teamName === selectedTeam)?{...employee, teamName:''}:{...employee, teamName: selectedTeam}
                                              :employee);
    console.log(employees);
    setEmployees(transformedEmployees);

  }

  return (
    <main className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className="col-6">
          <select className='form-select form-select-lg' value={selectedTeam} onChange={handleteamSelectionChange}>
            <option value="TeamA">TeamA</option>
            <option value="TeamB">TeamB</option>
            <option value="TeamC">TeamC</option>
          </select>
        </div>

      </div>
      <div
       className="row justify-content-center mt-3 mb-3">
        <div className="col-8">
          <div className='card-collection'>
            {
              employees.map((employee) => (
                <div id={employee.id} className={(employee.teamName === selectedTeam ? 'card m-2 standout' : 'card m-2')} style={{ cursor: "pointer" }} onClick={handleEmployeeCardClick}>
                  {(employee.gender === "Male") ? <img src={maleProfile} className='card-img-top' />
                    : <img src={femaleProfile} className='card-img-top' />
                  }
                  <div className='card-body'>
                    <h5 className='card-title'>Fullname: {employee.fullName}</h5>
                    <p className='card-text'><b>Designation:</b> {employee.designation}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div> 
      </div>
      <h1>Employees</h1>
    </main>
  )
}
export default Employees;