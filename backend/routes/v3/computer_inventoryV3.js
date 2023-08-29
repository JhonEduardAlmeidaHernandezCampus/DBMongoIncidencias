import { Router } from "express";
import { limit } from "../../helpers/limit/limit.js"; 
import { version } from "../../config/variables/variables.js"; 
import passport from '../../helpers/token/passportHelp.js';

import { getAllInventory, insertInventory } from "../computer_inventory.js";

const appInventoryV3 = Router();
appInventoryV3.use(limit(), passport.authenticate("bearer", { session: false }));

appInventoryV3.get("/", version({
    "3.0.0": getAllInventory
  })
);

appInventoryV3.post("/", version({
    "3.0.0": insertInventory
  })
);

export default appInventoryV3