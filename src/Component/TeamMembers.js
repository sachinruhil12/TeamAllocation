import React from 'react'

const TeamMembers = ({ employees, handleEmployeCard, selectTeam }) => {
    return (
        employees.map((emp) => {
            <TeamMemberCard handleEmployeCard={handleEmployeCard} selectTeam={selectTeam} />
        })
    )
}

export default TeamMembers