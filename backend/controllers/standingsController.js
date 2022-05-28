import asyncHandler from 'express-async-handler'
import RaceDriversFactory from '../models/RaceDriversFactory.js';
import { simulateSeason } from '../services/businessServics.js';

// @desc    Get race standings
// @route   GET v1/api/standings/:raceType
// @access  Public
export const getStandings = asyncHandler(async (req, res) => {
    const raceType = req.params.raceType;
    const drivers = RaceDriversFactory(raceType);
    const standings = simulateSeason(drivers);
    res.json(standings)
})