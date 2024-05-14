const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;
const doctorRouter = require('./routers/doctorRouter')
const patientRouter = require('./routers/patientRouter')
const utilRouter = require('./routers/utilRouter')
const slotRouter = require('./routers/slotRouter')
const appointmentRouter = require('./routers/appointmentRouter')
const reportRouter = require('./routers/reportRouter')
const feedbackRouter = require('./routers/feedbackRouter')

// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use( '/doctor', doctorRouter );
app.use( '/patient', patientRouter );
app.use( '/util', utilRouter );
app.use( '/slot', slotRouter );
app.use( '/appointment', appointmentRouter );
app.use( '/report', reportRouter );
app.use('/feedback', feedbackRouter);

app.use(express.static('./static/uploads'));


app.get('/', (req, res) => {
    res.send('response from express');
});
app.listen( port, () => { console.log('server started'); } );