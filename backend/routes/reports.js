import { con } from "../config/connect/connect.js";

let db = await con();

export let getAllReports = async(req, res) => {
    try {
        let tabla = db.collection("reports")
        let data = await tabla.aggregate().toArray();

        res.send(data)

    } catch (error) {
        res.send({status: 402, message: "Error al mostrar los datos de la tabla de reportes"})
    }
}

/*
    {
        "id_report": 1,
        "id_trainer": 1,
        "name_insidence": "Software",
        "name_level_insidence": "Leve",
        "description": "En buen estado",
        "id_computer":  1
    }
*/
export let insertReports = async(req, res) => {
    try {
        let fecha = new Date()

        let tabla = db.collection("reports")
        await tabla.insertOne({
            ...req.body,
            date_report: fecha
        });

        res.send({status: 200, message: "Registro creado con exito"})

    } catch (error) {
        res.send({status: 400, message: "Error al ingresar el registro"})
    }
}