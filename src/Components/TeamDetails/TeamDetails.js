import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import About from '../About/About';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamDetails = () => {
        const{teamId} = useParams();
        const [team,setTeam] =useState({});
        useEffect(()=> {
            const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`
                fetch(url)
                .then(res => res.json())
                .then(data => setTeam(data.teams[0]))
        },[teamId])
    return (
        <div className="row">
            {
                <About team={team}></About>
            }  
        </div>
    );
};

export default TeamDetails;