import React from 'react';
import facebook from '../../images/Facebook.png';
import twitter from '../../images/Twitter.png'
import youtube from '../../images/YouTube.png'

const SocialMedia = (props) => {
          const { strYoutube, strFacebook, } = props.teamInfo;
          return (
                    <div>
                              <a href="https://www.youtube.com/c/jamesqquick"
                                        className="youtube social">
                                        <img src={youtube} alt="" />
                              </a>
                              <a href="https://www.facebook.com/profile.php?id=100052327922373"
                                        className="facebook social">
                                        <img src={facebook} alt="" />
                              </a>
                              <a href="https://www.twitter.com/jamesqquick" className="twitter social">
                                        <img src={twitter} alt="" />
                              </a>

                    </div>
          );
};

export default SocialMedia;