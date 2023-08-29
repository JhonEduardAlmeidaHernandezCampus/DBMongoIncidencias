import { con } from "../config/connect/connect.js";

let db = await con();

export let getAllInventory = async(req, res) => {
    try {
        let tabla = db.collection("computer_inventory")
        let data = await tabla.aggregate().toArray();

        res.send(data)

    } catch (error) {
        res.send({status: 402, message: "Error al mostrar los datos de la tabla de inventarios"})
    }
}

/*
    {
        "id_computer": 23,
        "name_salon": "Sputnik",
        "name_area": "Review",
        "serial_cpu": "AD2023082141AC",
        "serial_monitor": "AD2023082141AC",
        "serial_keyboard": "AD2023082141AC",
        "serial_mouse": "AD2023082141AC",
        "serial_headset": "AD2023082141AC"
    }
*/
export let insertInventory = async(req, res) => {
    try {
        let tabla = db.collection("computer_inventory")
        await tabla.insertOne(req.body);

        res.send({status: 200, message: "Registro creado con exito"})

    } catch (error) {
        res.send({status: 400, message: "Error al ingresar el registro"})
    }
}