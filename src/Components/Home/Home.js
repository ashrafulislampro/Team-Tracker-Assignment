import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import './Home.css';

const Home = () => {
          const [teams, setTeams] = useState([]);
          useEffect(() =>{
                    fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?c=Spain&s=Soccer')
                    .then(res => res.json())
                    .then(data => {
                              let teamsArray = data.teams;
                              const newTeamsArray = teamsArray.slice(0, 9);
                              setTeams(newTeamsArray);
                    })
          },[]);

          return (
                    <div className="home_component">
                              <div className="img-container">
                                        <h1 className="text">Football League Tracker</h1>
                              </div>
                              <div className="team_component">
                                        {
                                                  teams.map(team => <Teams team={team} ></Teams>)
                                        }
                              </div>
                    </div>
          );
};

export default Home;