import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import './About.css'
import { Link } from 'react-router-dom';
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import male from '../Photo/male.png';
import female from '../Photo/female.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTransgender, faFutbol, faFlag, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const About = (props) => {
    const { intFormedYear, strCountry, strSport, strGender, strTeamBadge, strTeam, strTeamBanner, strStadiumDescription, strWebsite, strTwitter, strYoutube } = props.team;
    const image = strGender === male ? <img src={male} alt="maleImageNotFound"/> : <img src={female} alt="FemaleImageNotFound"/>
    return (
        <div className="container">
            <div className="text-center mt-4 mb-4">
                <img id="banner" src={strTeamBanner} alt="" />
                <img id="image" src={strTeamBadge} alt="" />
            </div>
            <Row id="row">
                <Col sm={8}>

                    <h3>{strTeam}</h3>
                    <p> <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded : {intFormedYear}</p>

                    <p> <FontAwesomeIcon icon={faFlag} /> Country : {strCountry}</p>

                    <p> <FontAwesomeIcon icon={faFutbol} /> Sport Type : {strSport}</p>

                    <p><FontAwesomeIcon icon={faTransgender} /> Gender : {strGender}</p>
                </Col>

                <Col sm={4}>
                    <img id="male-female" src={male} alt="" />
                    <img src={image} alt=""/>
                </Col>
            </Row>
            <div className="description">
                <p>{strStadiumDescription}</p>
                <p>{strStadiumDescription}</p>
            </div>
            <div className="text-center icon">
                <Link to={`/webSite/${strWebsite}`} ><FaFacebookSquare size="3em" /></Link>
                <Link to={`/webSite/${strTwitter}`}><FaTwitterSquare size="3em" /></Link>
                <Link to={`/webSite/${strYoutube}`} ><FaYoutube size="3em" /></Link>
            </div>
        </div>
    );
};

export default About;
