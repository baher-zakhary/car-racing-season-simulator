import React, { useEffect, useState } from "react";
import raceTypesEnum from "../../models/raceTypesEnum";
import Form from "react-bootstrap/Form";
import {Button} from 'react-bootstrap';
import './StartScreen.css';

const StartScreen = () => {
  const [raceType, setRaceType] = useState(raceTypesEnum.NASCAR);

  const onRaceTypeChange = (selectedRaceType) => {
    setRaceType(selectedRaceType);
    Object.values(raceTypesEnum).forEach((raceType) => {
      document.body.classList.remove(raceType);
    });
    document.body.classList.add(selectedRaceType);
  };

  useEffect(() => {
    document.body.classList.add(raceType);
  });

  const onSimulate = (e) => {
    e.preventDefault();
    console.log(e)
  }

  return (
    <div className="container d-flex align-content-center justify-content-center">
      <div className="start-form my-auto">
        <h1>Select Race Type:</h1>
        <Form className="d-flex flex-column" onSubmit={onSimulate}>
          <Form.Select
            aria-label="select Race Type"
            value={raceType}
            onChange={(e) => onRaceTypeChange(e.target.value)}
          >
            <option disabled>Select Race Type</option>
            {Object.entries(raceTypesEnum).map(([key, value], index) => (
              <option key={value} value={value}>{key}</option>
            ))}
          </Form.Select>
          <Button variant="danger" type="submit" className="mt-3">
            Simulate
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default StartScreen;
