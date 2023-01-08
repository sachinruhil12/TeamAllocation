import React from 'react'

const GroupTeamMember = ({ employees, selectTeam, setTeam }) => {

    const [groupEmployees, setGroupedData] = useState(groupTeamMember())

    const groupTeamMember = () => {
        var teams = []
        let teamAMembers = employees.filter((emp) => { emp.teamName === "TeamA" })
        let TeamA = { teamA: 'TeamA', teamAMembers: "teamAMember", collapsed: selectTeam === "TeamA" ? false : true }
        teams.push(TeamA);

        let teamBMembers = employees.filter((emp) => { emp.teamName === "TeamA" })
        let TeamB = { teamB: 'TeamB', teamBMembers: "teamBMember", collapsed: selectTeam === "TeamA" ? false : true }
        teams.push(TeamB);

        let teamCMembers = employees.filter((emp) => { emp.teamName === "TeamA" })
        let TeamC = { teamC: 'TeamC', teamCMembers: "teamCMember", collapsed: selectTeam === "TeamA" ? false : true }
        teams.push(TeamC);

        let teamDMembers = employees.filter((emp) => { emp.teamName === "TeamA" })
        let TeamD = { teamD: 'TeamD', teamDMembers: "teamDMember", collapsed: selectTeam === "TeamA" ? false : true }
        teams.push(TeamD);

        return teams;

    }

    const handleTeamClick = (event) => {

        let newGoupData = groupEmployees.map((groupedData) => groupedData.team === event.currentTarget.id
            ? { ...groupedData, collapsed: !groupedData.collapsed }
            : groupedData
        )
        setGroupedData(newGoupData);
        setTeam(event.currentTarget.id)
    }
    return (
        <div>
            <h1>Group Team Member</h1>
            {groupEmployees.map((item) => {
                return (
                    <div key={item.team}>
                        <h4 id={item.team} onClick={handleTeamClick}>
                            TeamName:{item.team}
                        </h4>
                        <div id={"collapse" + item.team}>
                            {
                                item.members.map(member => {
                                    return (
                                        <div>
                                            <h5>
                                                <span>name:{member.fullName}</span>
                                            </h5>
                                            <p>designation:{member.designation}</p>
                                        </div>
                                    )
                                )}
                            }

                        </div>
                        )
            })}
                    </div>
                )
            }

export default GroupTeamMember