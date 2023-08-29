import { Router } from "express";
import { limit } from "../../helpers/limit/limit.js"; 
import { version } from "../../config/variables/variables.js"; 
import passport from '../../helpers/token/passportHelp.js'

import { getAllReports, insertReports } from "../reports.js"; 

const appReportsV3 = Router();
appReportsV3.use(limit(), passport.authenticate("bearer", { session: false }));

appReportsV3.get("/", version({
    "3.0.0": getAllReports
  })
);

appReportsV3.post("/", version({
    "3.0.0": insertReports
  })
);

export default appReportsV3