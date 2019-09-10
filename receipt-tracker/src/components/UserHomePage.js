import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import TabContainer from 'react-bootstrap/TabContainer';
import TabContent from 'react-bootstrap/TabContent';
import TabPane from 'react-bootstrap/TabPane';
import '../styling/user_landing_page.css';
import UserProfile from './UserProfile';
import Receipts from './Receipts';
import Categories from './Categories';
import { fetchUser , fetchCategories } from '../actions';


class UserHomePage extends Component {

    state = {

    };

componentDidMount(){
    console.log('int the CDM')
   this.props.fetchUser(3);
   this.props.fetchCategories();
}

    render() {

        return (
            <div className="user-homepage-main-wrapper">
                <div className='header-wrapper'>
                    <h2>Welcome to your account: { `${this.props.user.firstName} ${this.props.user.lastName}`}</h2>
                </div>    
        
                <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item >
                        <Nav.Link eventKey="profile">Profile</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="receipts">Receipts</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                      <Nav.Link eventKey="categories">Catergories</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="add_receipt">Add Receipt</Nav.Link>
                  </Nav.Item>
                    </Nav>
                  </Col>
                

                  <Col sm={8}>
                    <Tab.Content>

                         <Tab.Pane eventKey="profile">
                             <UserProfile user={this.props.user} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="receipts">
                             <Receipts />
                        </Tab.Pane>

                        <Tab.Pane eventKey="categories">
                              <Categories categories = {this.props.categories} />
                        </Tab.Pane>

                        <Tab.Pane eventKey="add_receipt">
                           
                        </Tab.Pane>

                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        user: state.user,
        categories: state.categories,
        isFetchingUserData: false,
    }
}


export default connect(mapStateToProps, {fetchUser , fetchCategories})(UserHomePage);