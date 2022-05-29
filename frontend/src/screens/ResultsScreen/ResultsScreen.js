import React, { useState, useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./ResultsScreen.css";
import axios from "axios";
import { CONTEXT } from "../../constants/constants";
import { useParams } from 'react-router-dom';

const ResultsScreen = () => {
  const [standings, setStandings] = useState([]);
  const { raceType } = useParams();

  const getStandings = async () => {
    const { data } = await axios.get(`${CONTEXT}/standings/${raceType}`);
    setStandings(data);
  };

  useEffect(() => {
    getStandings()
  }, [raceType])

  return (
    <div className="d-flex flex-column justify-content-between m-4">
      <div>
        <LinkContainer to={`/start`}>
          <Button variant="danger" className="btn-sm">
            Go back
          </Button>
        </LinkContainer>
      </div>
      <div className="mt-3">
        <Table className="results-table" striped hover>
          <thead>
            <tr>
              <th>POS</th>
              <th>Driver</th>
              <th>Car</th>
              <th>Pts</th>
            </tr>
          </thead>
          <tbody>
            {
              standings.map((driver, index) => (
                <tr key={driver.name}>
                  <td>{index + 1}</td>
                  <td>{driver.name}</td>
                  <td>{driver.car.manufacturer} {driver.car.model ? driver.car.model : null}</td>
                  <td>{driver.totalPoints}</td>
                </tr>
              ))
              
            }
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ResultsScreen;
