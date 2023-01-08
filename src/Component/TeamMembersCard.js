import React from 'react'

const TeamMembersCard = ({ employees, handleEmployeeCard, selectTeam }) => {
    return (

        <div>
            {employees && employees.map((emp) => {
                <div id={emp.id} onClick={handleEmpCard}>
                    {/* <p>{emp.fullName}</p>  */}
                    {emp.gender === 'male'}?<img src={buildup} />
                    :<img src={buildup} />
                    <img src={buildup} />
                    <div>
                        <h3>FullName:{emp.fullName}</h3>
                        <p>Designation:{emp.designation}</p>
                    </div>
                </div>
            }            
        
        </div>
    )
}

export default TeamMembersCard