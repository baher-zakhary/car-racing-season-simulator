import express from "express";
import { getStandings } from "../controllers/standingsController.js";

const router = express.Router()

router.route('/standings/:raceType').get(getStandings)

export default router;