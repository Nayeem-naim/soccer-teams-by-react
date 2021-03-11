import React, { useEffect, useState } from 'react';
import Teams from '../Teams/Teams';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../Photo/banner.png';
import './Home.css';

const Home = () => {
   const [teams, setTeams] = useState([])
   const  team2 = teams.slice(0,12)
   useEffect(()=>{
       const url = 'https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League'
       fetch(url)
       .then(res => res.json())
       .then(data => setTeams(data.teams))
   },[])
  
    return (
        <div className="container  mt-5">
            <div>
                <img className="image" src={banner} alt=""/>
            </div>
            
            <div className="team-name">
            <h2>THE BEST SOCCER TEAM HERE</h2>
            <p>You can Explore your dream Team</p>
            </div>

            <div className="row">
            {
                team2.map(team => <Teams team={team} key={team.idTeam}></Teams>)
            }
        </div>
        </div>
    );
};

export default Home;