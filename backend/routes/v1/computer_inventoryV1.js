import { Router } from "express";
import { limit } from "../../helpers/limit/limit.js"; 
import { version } from "../../config/variables/variables.js"; 
import passport from '../../helpers/token/passportHelp.js';

import { getAllInventory } from "../computer_inventory.js";

const appInventoryV1 = Router();
appInventoryV1.use(limit(), passport.authenticate("bearer", { session: false }));

appInventoryV1.get("/", version({
    "1.0.0": getAllInventory
  })
);

export default appInventoryV1