import React, { useState } from 'react'
import buildup from './images/buildup.jpg'
import Teams from './Teams'
import TeamMembers from './TeamMembers'

const Employee = ({ employees, selectTeam, handleEmpCard, handleTeamSelectionChange }) => {

    // const [selectTeam, setSelectTeam] = useState('TeamB')

    // const { employees, setEmployees } = useState([
    //     {
    //         id: 1,
    //         fullName: "A",
    //         designation: "JS Developer",
    //         gender: 'male',
    //         teamName: "TeamA"

    //     },
    //     {
    //         id: 2,
    //         fullName: "B",
    //         designation: "JS Developer",
    //         gender: 'female',
    //         teamName: "TeamB"

    //     },
    //     {
    //         id: 3,
    //         fullName: "c",
    //         designation: "JS Developer",
    //         gender: 'male',
    //         teamName: "TeamA"

    //     },
    //     {
    //         id: 3,
    //         fullName: "d",
    //         designation: "JS Developer",
    //         gender: 'female',
    //         teamName: "TeamB"

    //     },
    //     {
    //         id: 4,
    //         fullName: "E",
    //         designation: "JS Developer",
    //         gender: 'male',
    //         teamName: "TeamA"

    //     },
    //     {
    //         id: 5,
    //         fullName: "F",
    //         designation: "JS Developer",
    //         gender: 'Female',
    //         teamName: "TeamB"

    //     },
    //     {
    //         id: 6,
    //         fullName: "G",
    //         designation: "JS Developer",
    //         gender: 'Female',
    //         teamName: "TeamA"

    //     },
    //     {
    //         id: 7,
    //         fullName: "H",
    //         designation: "JS Developer",
    //         gender: 'male',
    //         teamName: "TeamA"

    //     },
    //     {
    //         id: 8,
    //         fullName: "j",
    //         designation: "JS Developer",
    //         gender: 'male',
    //         teamName: "TeamA"

    //     },
    //     {
    //         id: 9,
    //         fullName: "k",
    //         designation: "JS Developer",
    //         gender: 'female',
    //         teamName: "TeamB"

    //     },
    // ])

    // const handleTeamSelectionChange = (e) => {
    //     console.log(e.target.value)
    //     setSelectTeam(e.target.value);
    // }

    // const handleEmpCard = (event) => {

    //     const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
    //         ? employee.teamName === selectTeam ? { ...employee, teamName: '' }
    //             : { ...employee, teamName: selectTeam } : employee);
    //     setEmployees(transformedEmployees);
    // }
    return (
        <main>
            <div>
                <div>
                    {/* <select value={selectTeam} onChange={handleTeamSelectionChange}>
                        <option value='TeamA'>TeamA</option>
                        <option value='TeamB'>TeamB</option>
                        <option value='TeamC'>TeamC</option>
                        <option value='TeamD'>TeamD</option>


                    </select> */}
                    <Teams selectTeam={selectTeam} handleTeamSelectionChange={handleTeamSelectionChange} />
                </div>
                {/* {employees && employees.map((emp) => {
                    <div id={emp.id} onClick={handleEmpCard}>
                        {/* <p>{emp.fullName}</p>  */}
                {/* {emp.gender === 'male'}?<img src={buildup} />
                        :<img src={buildup} />
                        <img src={buildup} />
                        <div>
                            <h3>FullName:{emp.fullName}</h3>
                            <p>Designation:{emp.designation}</p>
                        </div>
                    </div> */} 
                })
                }
                <TeamMembers employees={employees}
                    handleEmployeCard={handleEmployeCard}
                    selectTeam={selectTeam}
                />
            </div>
        </main>
    )
}
export default Employee;