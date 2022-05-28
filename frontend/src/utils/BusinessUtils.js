import raceTypesEnum from "../models/raceTypesEnum";

const BusinessUtils = {
  setRaceTypeBackground: (selectedRaceType) => {
    Object.values(raceTypesEnum).forEach((raceType) => {
      document.body.classList.remove(raceType);
    });
    document.body.classList.add(selectedRaceType);
  }
}

export default BusinessUtils;
