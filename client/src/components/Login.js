// eslint-disable-next-line
import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import "./login.css";

class LoginForm extends Component {
  state = {
    email: "",
    password: ""
  };

  handleEmail = e => {
    this.setState({ email: e.target.value });
  };

  handlePassword = e => {
    this.setState({ password: e.target.value });
  };

  onClick = () => {
    fetch("http://localhost:8080/user/create/account", {
      method: "post",

      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),

      headers: {
        Accept: "application/json"
      },

      credentials: "same-origin", // send cookies
      credentials: "include" // send cookies, even in CORS
    })
    .then((r) => console(r));
  };

  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                onChange={this.handleEmail}
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                onChange={this.handlePassword}
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button onClick={this.onClick}>Submit</Button>
        </Form>
      </Container>
    );
  }
}

export default LoginForm;