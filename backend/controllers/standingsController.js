import asyncHandler from 'express-async-handler'

// @desc    Get race standings
// @route   GET v1/api/standings/:raceType
// @access  Public
export const getStandings = asyncHandler(async (req, res) => {
    const raceType = req.params.raceType;
    console.log('race type', raceType)
    res.json({raceType})
})