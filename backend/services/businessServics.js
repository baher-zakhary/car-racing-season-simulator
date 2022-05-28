export const simulateSeason = (drivers) => {
  drivers.forEach((driver) => {
    driver.totalPoints = calculateTotalPoints(driver)
  });

  return drivers
};

const calculateTotalPoints = (driver) => {
  return ((driver.skill / 100) + driver.car.horsePower + driver.car.topSpeed + driver.car.handling) - getRandomIncident();
}

const getRandomIncident = () => {
  return Math.random() * 50;
}
