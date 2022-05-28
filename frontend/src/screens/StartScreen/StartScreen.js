import React, { useContext, useEffect, useState } from "react";
import raceTypesEnum from "../../models/raceTypesEnum";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./StartScreen.css";
import { useNavigate } from "react-router-dom";
import { BusinessUtilsContext } from "../../App";

const StartScreen = () => {
  const navigate = useNavigate();
  const [raceType, setRaceType] = useState(localStorage.getItem('raceType') ? localStorage.getItem('raceType') : raceTypesEnum.NASCAR);
  const BusinessUtils = useContext(BusinessUtilsContext);

  const onRaceTypeChange = (selectedRaceType) => {
    setRaceType(selectedRaceType);
    BusinessUtils.setRaceTypeBackground(selectedRaceType);
    localStorage.setItem("raceType", selectedRaceType);
  };

  useEffect(() => {
    document.body.classList.add(raceType);
  });

  const onSimulate = (e) => {
    e.preventDefault();
    navigate(`/results/${raceType}`);
    BusinessUtils.setRaceTypeBackground(raceType);
    localStorage.setItem("raceType", raceType);
  };

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
              <option key={value} value={value}>
                {key}
              </option>
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
