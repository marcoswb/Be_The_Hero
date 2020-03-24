const express = require('express')
const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/incidentController')
const sessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/profile', incidentController.listEspecificIncident)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

routes.post('/session', sessionController.create)
module.exports = routes