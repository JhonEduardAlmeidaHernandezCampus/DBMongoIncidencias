import { Router } from "express";
import { limit } from "../../helpers/limit/limit.js"; 
import { version } from "../../config/variables/variables.js"; 
import passport from '../../helpers/token/passportHelp.js'

import { getAllTrainers, insertTrainer } from "../trainers.js";

const appTrainersV3 = Router();
appTrainersV3.use(limit(), passport.authenticate("bearer", { session: false }));

appTrainersV3.get("/", version({
    "3.0.0": getAllTrainers
  })
);

appTrainersV3.post("/", version({
  "3.0.0": insertTrainer
})
);

export default appTrainersV3



/*
import { Router } from "express";
import { limit } from "../../helpers/limit/limit.js"; 
import { version } from "../../config/variables/variables.js"; 
import passport from '../../helpers/token/passportHelp.js';

import { getAllTrainers, insertTrainer } from "../trainers.js";

const appTrainersV2 = Router();
appTrainersV2.use(limit(), passport.authenticate("bearer", { session: false }));

appTrainersV2.get("/", version({
      "2.1.0": getAllTrainers
    })
);

appTrainersV2.post("/", version({
  "2.1.0": insertTrainer
})
);

export default appTrainersV2


*/