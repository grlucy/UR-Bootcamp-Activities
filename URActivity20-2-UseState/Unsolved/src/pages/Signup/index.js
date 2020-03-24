import React, { useState } from "react";
import Container from "../../components/Container";
import Col from "../../components/Col";
import Row from "../../components/Row";

const Signup = () => {
  const [userState, setUserState] = useState({
    name: "Gina",
    password: "password"
  });

  const updateUsernameState = e => {
    setUserState({
      ...userState,
      name: e.target.value
    });
  };

  const updatePasswordState = e => {
    setUserState({
      ...userState,
      password: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(userState.name, userState.password);
  };

  return (
    <div>
      <div className="mt-4">
        <h2>Sign Up</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <Container className="mt-3 px-5">
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="text"
                placeholder="Username"
                name="username"
                onChange={updateUsernameState}
              />
            </Col>
          </Row>
          <Row className="form-group">
            <Col size="12">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={updatePasswordState}
              />
            </Col>
          </Row>
          <button className="btn btn-success" type="submit">
            Submit
          </button>
        </Container>
        <Container className="mt-4">
          <h3>Hello {userState.name}!</h3>
          <p>
            I probably shouldn't tell you this, but your password is&nbsp;
            {userState.password}!
          </p>
        </Container>
      </form>
    </div>
  );
};

export default Signup;
