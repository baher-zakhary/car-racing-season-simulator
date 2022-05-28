import formula1Drivers from "../data/formula1Drivers.js";
import nascarDrivers from "../data/nascarDrivers.js";
import raceTypesEnum from './raceTypesEnum.js';

const RaceDriversFactory = (raceType) => {
  if (raceType === raceTypesEnum.NASCAR) {
    return nascarDrivers;
  } else if (raceType === raceTypesEnum.F1) {
    return formula1Drivers;
  }
};

export default RaceDriversFactory;
