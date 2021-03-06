import React, { Component } from "react";
import { Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Nav, Modal, ModalHeader, ModalBody, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { NavLink } from 'react-router-dom';
import { ModalTitle } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen: false,
        }
    }
    toggleNav = () => {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal = () => {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin = (event) => {
        this.toggleModal();
        alert(`    Username: ${this.username.value}
    Password: ${this.password.value}
    Remember: ${this.remember.checked}`);
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/" ><img src="assets/images/logo.png" height="30px" /></NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to='/home'><span className="fa fa-home fa-lg"></span>Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/aboutus'><span className="fa fa-info fa-lg"></span>About Us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/menu'><span className="fa fa-list fa-lg"></span>Menu</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to='/contactus'><span className="fa fa-address-card fa-lg"></span>Contact</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <span className="fa fa-sign-in fa-lg">Login</span>
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <div className="Jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the world's best cuisines, and create a unique fusion experience.
                                    Our lipsmacking creations will tickle your culimary senses </p>
                            </div>
                            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                                <ModalHeader toggle={this.toggleModal} closeButton>
                                    <ModalTitle>Login</ModalTitle>
                                </ModalHeader>
                                <ModalBody>
                                    <Form onSubmit={this.handleLogin}>
                                        <FormGroup>
                                            <Label htmlFor="username">Username</Label>
                                            <Input type="text" id="username" name="username" innerRef={(input) => this.username = input} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="password">Password</Label>
                                            <Input type="text" id="password" name="password" innerRef={(input) => this.password = input} />
                                        </FormGroup>
                                        <FormGroup check>
                                            <Label check>
                                                <Input type="checkbox" name="remember" innerRef={(input) => this.remember = input} /> Remember me
                                            </Label>
                                        </FormGroup>
                                        <Button type="submit" value="submit" color="primary">Login</Button>
                                    </Form>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComponent;