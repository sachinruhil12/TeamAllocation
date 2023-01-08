const Header = ({ selectTeam, teamMemberCount }) => {
    return (
        <header>
            <h1>Team Member Allocation</h1>
            <h2>{selectTeam} has {teamMemberCount} {teamMemberCount === 1 ? "member" : "members"}</h2>
        </header>

    )
}
export default Header;