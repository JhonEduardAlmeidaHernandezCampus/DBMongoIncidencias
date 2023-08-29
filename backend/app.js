import { my_config } from "./config/variables/variables.js";
import express from "express";
import { generarToken } from "./helpers/token/token.js";

import appInventoryV1 from "./routes/v1/computer_inventoryV1.js";
import appInventoryV2 from "./routes/v2/computer_inventoryV2.js";
import appInventoryV3 from "./routes/v3/computer_inventoryV3.js";

import appReportsV2 from "./routes/v2/reportsV2.js";
import appReportsV3 from "./routes/v3/reportsV3.js";

import appTrainersV3 from "./routes/v3/trainersV3.js";

import { limitLogin } from "./helpers/limit/limit.js";

let app = express()
app.use(express.json())

app.get("/login", limitLogin(), generarToken)

app.use("/trainers", appTrainersV3)
app.use("/reports", appReportsV2, appReportsV3)
app.use("/computer_inventory", appInventoryV1, appInventoryV2, appInventoryV3)


app.listen(my_config, () => console.log(`hhtp://${my_config.hostname}:${my_config.port}`))