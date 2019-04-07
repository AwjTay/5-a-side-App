import React from 'react'

const TeamField = ({ teamName, teamPlayers }) => {
  return (
    <React.Fragment>
      <div className='team_field'>
        <h4>{ teamName }</h4>
        <ul className='list-group'>
          { teamPlayers.map((player, i) => (
            <li className='list-group-item' key={i}>{ player }</li>
          )) }
        </ul>
      </div>
    </React.Fragment>
  )
}
export default TeamField
