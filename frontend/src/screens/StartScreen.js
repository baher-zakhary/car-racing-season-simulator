import React, { useEffect, useState } from "react";
import raceTypesEnum from "../models/raceTypesEnum";
import Form from 'react-bootstrap/Form'

const StartScreen = () => {

  const [raceType, setRaceType] = useState(raceTypesEnum.NASCAR);

  const onRaceTypeChange = (selectedRaceType) => {
    setRaceType(selectedRaceType);
    Object.values(raceTypesEnum).forEach(raceType => {
      document.body.classList.remove(raceType);
    });
    document.body.classList.add(selectedRaceType);
  }

  useEffect(() => {
    document.body.classList.add(raceType);
  });

  return (
    <div>
      <Form.Select aria-label="select Race Type" value={raceType} onChange={(e) => onRaceTypeChange(e.target.value)}>
        <option disabled>Select Race Type</option>
        {
          Object.entries(raceTypesEnum).map(([key, value], index) => (
            // (index === 0) ? (
            //   <option value={value} selected>{key}</option>
            // ) : (
              <option value={value}>{key}</option>
            // )
          ))
        }
      </Form.Select>
    </div>
  );
};

export default StartScreen;
