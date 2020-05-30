import React, { useState } from "react";
import { Row, Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
export const InputForm = (props) => {
  const { updateLeaderboardArray } = props;
  const initialInputState = { player: "", score: "" };
  const [eachEntry, setEachEntry] = useState(initialInputState);
  const { player, score } = eachEntry;

  const handleInputChange = (e) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value });
  };

  const handleFinalSubmit = (e) => {
    updateLeaderboardArray(eachEntry);
  };

  return (
    <div>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }} className="text-center">
          <h2>Serverless Leaderboard</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form>
            <FormGroup>
              <Label for="player">Player</Label>
              <Input
                name="player"
                placeholder="Ex: Player 1"
                onChange={handleInputChange}
                value={player}
              ></Input>
            </FormGroup>
            <FormGroup>
              <Label for="score">Score</Label>
              <Input
                name="score"
                placeholder="Ex: 2345"
                onChange={handleInputChange}
                value={score}
              ></Input>
            </FormGroup>
            <Button onClick={handleFinalSubmit}>Submit</Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
