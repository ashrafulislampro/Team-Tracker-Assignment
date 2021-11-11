import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './TeamsDetails.css';
import maleImage from '../../images/male.png';
import femaleImage from '../../images/female.png';
import SocialMedia from '../SocialMedia/SocialMedia';


const TeamsDetails = () => {
          const { idLeague } = useParams();
          const [teamInfo, setTeamInfo] = useState({});
          useEffect(() => {
                    fetch(`https://www.thesportsdb.com/api/v1/json/1/lookup_all_teams.php?id=${idLeague}`)
                              .then(res => res.json())
                              .then(data => setTeamInfo(data.teams[0]));
          }, [idLeague]);
          console.log(teamInfo);
          const { strCountry, intFormedYear, strDescriptionEN, strTeamBadge, strDescriptionES, strGender, strFacebook, strTeam, strTwitter, strYoutube } = teamInfo;
          let Male = "Male";
          const playerImg = (strGender === Male) ? maleImage : femaleImage;
          let strYoutubeLink = strYoutube + '';
          console.log(strYoutubeLink);
          console.log(strFacebook);

          return (
                    <div style={{ background: 'grey' }}>
                              <div className="teamBanner_component">
                                        <img className="banner_logo" src={strTeamBadge} alt="" />
                              </div>
                              <div className="teamDetails_component">
                                        <div className="Details_content">
                                                  <div>
                                                            <h1>{strTeam}</h1>
                                                            <p>Founded : {intFormedYear}</p>
                                                            <p>Country : {strCountry}</p>
                                                            <p>Sport Type : Football</p>
                                                            <p>Gender : {strGender}</p>
                                                  </div>
                                                  <div>
                                                            <img className="playerImg" src={playerImg} alt="" />
                                                  </div>
                                        </div>
                                        <div className="description">
                                                  <p>{strDescriptionEN}</p>
                                                  <br />
                                                  <p>{strDescriptionES}</p>
                                        </div>
                                        <div className="social-icon">
                                                 <SocialMedia teamInfo={teamInfo}></SocialMedia>
                                        </div>

                              </div>
                    </div>
          );
};

export default TeamsDetails;