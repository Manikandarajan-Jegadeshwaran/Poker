import React from 'react';
import Team from './team';

export const Teams = (props) => {
    return(
        <div className='col-12'>
            <div className="card bg-light text-dark">
                <div className='card-header'>
                    {props.header}
                </div>
                <div className="card-body">
                    <ul className='list-group'>
                        {
                            props.teams.map((team,index) => 
                            <Team
                            key={index}
                            name={team.name}
                            user={props.user}
                            estimated={props.estimated}
                            number={props.point}/>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};