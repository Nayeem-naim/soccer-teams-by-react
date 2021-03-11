
import React from 'react';
import { Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {Link} from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import './Team.css';



const Teams = (props) => {
    const { strSport, idTeam, strTeamBadge,strTeam } = props.team;
    return (
        <div className="col-md-3 my-3 text-center card-style">
            <Card className="bg-secondary">
                <Card.Img variant="top" id="Card-Img" src={strTeamBadge}/>
                <Card.Body>
                    <Card.Title>{strTeam}</Card.Title>
                    <Card.Text>Sport Type : {strSport}</Card.Text>
                    <Button as={Link} to={`/about/${idTeam}`} className="bg-success">Explore <FaArrowRight/></Button>
                </Card.Body>

            </Card>
        </div>
    );
};

export default Teams;