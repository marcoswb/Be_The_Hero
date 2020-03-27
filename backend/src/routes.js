const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const sessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/ongs', ongController.index)

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city: Joi.string().required(),
        uf: Joi.string().required().min(2).max(2)
    })
}), ongController.create)

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), incidentController.listEspecificIncident)

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    })
}), incidentController.index)
routes.post('/incidents', incidentController.create)

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), incidentController.delete)

routes.post('/session', sessionController.create)

module.exports = routes