import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link }  from 'react-router-dom';
import '../styling/landingPage.css';


const LandingPage = (props) => {
    return(
        <div class="landingpage-main-wrapper">
            <div>
                <div class="hero-content">
                    <h1>Recipt Tracker</h1>
                    <h2>If you have receipts we have your solution!</h2>
                    <div class="button-wrapper"><Link to= '/usershomepage'><Button>Login</Button></Link> <Button>Sign Up</Button></div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;