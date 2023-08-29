import { Router } from "express";
import { limit } from "../../helpers/limit/limit.js"; 
import { version } from "../../config/variables/variables.js"; 
import passport from '../../helpers/token/passportHelp.js';

import { getAllReports, insertReports } from "../reports.js";

const appReportsV2 = Router();
appReportsV2.use(limit(), passport.authenticate("bearer", { session: false }));

appReportsV2.get("/", version({
        "2.1.0": getAllReports
    })
);

appReportsV2.post("/", version({
        "2.1.0": insertReports
    })
);

export default appReportsV2