import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";

export class RegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            fname: "",
            lname: "",
            phone: "",
            email: "",
        };
    }

    handleFirstNameChange = (e) => {
        this.setState({ fname: e.target.value });
    };

    handleLastNameChange = (e) => {
        this.setState({ lname: e.target.value });
    };

    handlePhoneChange = (e) => {
        this.setState({ phone: e.target.value });
    };

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // Perform any validation or submission logic here
        console.log("Form submitted:", this.state);
    };

    render() {
        return (
            <Container className="mt-5">
                <div>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter first name"
                                value={this.state.fname}
                                onChange={this.handleFirstNameChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter last name"
                                value={this.state.lname}
                                onChange={this.handleLastNameChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter phone"
                                value={this.state.phone}
                                onChange={this.handlePhoneChange}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Register
                        </Button>
                    </Form>
                </div>
            </Container>
        );
    }
}
