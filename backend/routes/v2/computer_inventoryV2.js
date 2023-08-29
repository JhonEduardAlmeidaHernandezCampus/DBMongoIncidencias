import { Router } from "express";
import { limit } from "../../helpers/limit/limit.js"; 
import { version } from "../../config/variables/variables.js"; 
import passport from '../../helpers/token/passportHelp.js';

import { getAllInventory } from "../computer_inventory.js";

const appInventoryV2 = Router();
appInventoryV2.use(limit(), passport.authenticate("bearer", { session: false }));

appInventoryV2.get("/", version({
    "2.1.0": getAllInventory
  })
);

export default appInventoryV2