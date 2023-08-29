import { rateLimit } from "express-rate-limit";

export let limit = () => {
    return rateLimit({
        windowMs: 10 * 1000,
        max: 10,
        standardHeaders: true,
        legacyHeaders: false,
        message: (req, res) => {
            res.status(429).send({status: 429, message: "Ha alcanzado el limite de peticiones permitidas, espera un poco"})
        }
    })
}

export let limitLogin = () => {
    return rateLimit({
        windowMs: 10 * 1000,
        max: 5,
        standardHeaders: true,
        legacyHeaders: false,
        message: (req, res) => {
            res.status(429).send({status: 429, message: "Ha alcanzado el limite de peticiones permitidas para iniciar sesion, espera un poco"})
        }
    })
}