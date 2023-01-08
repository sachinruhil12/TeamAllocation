import React from 'react'

const Teams = ({ selectTeam, handleTeamSelectionChange }) => {
    return (
        <>
            <select value={selectTeam} onClick={handleTeamSelectionChange}>
                <option value='TeamA'>TeamA</option>
                <option value='TeamB'>TeamB</option>

                <option value='TeamC'>TeamC</option>
                <option value='TeamD'>TeamD</option>

            </select>
        </>
    )
}

export default Teams