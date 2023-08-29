import { con } from "../config/connect/connect.js";

let db = await con();

export let getAllTrainers = async(req, res) => {
    try {
        let tabla = db.collection("trainers")
        let data = await tabla.aggregate().toArray();

        res.send(data)

    } catch (error) {
        res.send({status: 402, message: "Error al mostrar los datos de la tabla de trainers"})
    }
}

/*
    {
        "id_trainer": 1,
        "name_trainer": "Miguel",
        "email_personal_trainer": "miguel@gmail.com",
        "email_corporativo_trainer": "miguel@gmail.com",
        "mobile_phone": "+57 3002215451",
        "home_phone": 6552154,
        "business_phone":  "+57 3002215451",
        "business_mobile_phone":  "+57 3002215451"
    }
*/
export let insertTrainer = async(req, res) => {
    try {
        let tabla = db.collection("trainers")
        await tabla.insertOne(req.body);

        res.send({status: 200, message: "Registro creado con exito"})

    } catch (error) {
        res.send({status: 400, message: "Error al ingresar el registro"})
    }
}