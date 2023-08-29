import { SignJWT, jwtVerify } from "jose";
import { con } from '../../config/connect/connect.js'
import { my_jwt } from "../../config/variables/variables.js";
import { ObjectId } from "mongodb";

let db = await con();

export let generarToken = async (req, res, next) => {
    if(Object.keys(req.body).length === 0) return res.status(400).send({status: 400, message: "No ha enviado los datos pertinentes"})

    const {User, Password} = req.body;

    let tabla = db.collection("roles")
    let data = await tabla.findOne({cc: User, password: Password})

    if(!data) return res.status(402).send({status: 402, message: "Error en el usuario o contraseña"})

    const encoder = new TextEncoder();
    const datos = data;

    const createToken = await new SignJWT({datos})
    .setProtectedHeader({alg: "HS256", typ: "JWT"})
    .setIssuedAt()
    .setExpirationTime("30h")
    .sign(encoder.encode(my_jwt));

    req.data = res.send({status: 200, message: createToken})
    next()
}

export let validarToken = async(req, token) => {
    try {
        const encoder = new TextEncoder();
        const jwtData = await jwtVerify(token, encoder.encode(my_jwt))

        let res = await db.collection("roles").findOne({
            _id: new ObjectId(jwtData.payload.datos._id),
            [`permisos.${req.baseUrl}`]: `${req.headers["accept-version"]}`
        });

        let {_id, permisos, ...usuario} = res

        return usuario;

    } catch (error) {
        return false;
    }
}