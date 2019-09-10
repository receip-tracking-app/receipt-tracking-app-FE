import React from 'react';
import Button from 'react-bootstrap/Button';
import '../styling/user_landing_page.css';


const UserProfile = props => {
    return (
        <div>
        <div>
        <h1 className="detail-heading">{props.user.firstName+"'s"} Profile:</h1>
        <h4 className="item-list">Name: {props.user.firstName+ " " +props.user.lastName } </h4>
        <h4 className="item-list">Birth Date: {props.user.dateOfBirth || 'Not Provided'} </h4>
        <h4 className="item-list">Email: {props.user.email}</h4>
        <h4 className="item-list">Phone: {props.user.phone || 'Not Provided'}</h4>
        <h4 className="item-list">Address: {props.user.address || 'Not Provided'}</h4>
        <h4 className="item-list">City: {props.user.city || 'Not Provided'}</h4>
        <h4 className="item-list">State: {props.user.state || 'Not Provided'}</h4>
        </div>
        <div><Button>Update Your Info</Button></div>
        </div>
    );
}

//DATA OBJECT MODEL
// userName: "user1",
// password: "password0",
// firstName: "John",
// lastName: "Finkle",
// dateOfBirth: null,
// email: "user1@email.com",
// address: "1234 Some St.",
// city: "New City",
// state: "Road Island",
// phone: "555-555-5555",


export default UserProfile;