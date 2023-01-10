const route = require('express').Router();

route.get('/server', (req, resp) => {
    resp.status(200).json({
        message: "Dashboard Server"
    })
})

const patientRoutes = require('./patient');
const patientTreatRoutes = require('./patientTreat');
const patientMedicateRoutes = require('./patientMedicate');
const wardRoutes = require('./ward');
const doctorRoutes = require('./doctor');
const assistantRoutes = require('./assistant');


route.use('/server/patients', patientRoutes)
route.use('/server/patientTreats', patientTreatRoutes)
route.use('/server/patientMedicates', patientMedicateRoutes)
route.use('/server/wards', wardRoutes)
route.use('/server/doctors', doctorRoutes)
route.use('/server/assistants', assistantRoutes)

module.exports = route;
