import { Link } from "react-router-dom";
const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <link>Home</link>

                </li>
                <li>
                    <link to="/GroupTeamMember">Team</link>
                </li>
            </ul>

        </nav>
    )
}
export default Nav;