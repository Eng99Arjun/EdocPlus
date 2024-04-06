const express = require('express');
const app = express();
const cors = require('cors');


const port = 5000;
const doctorRouter = require('./routers/doctorRouter')
const patientRouter = require('./routers/patientRouter')


// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());
app.use( '/doctor', doctorRouter );
app.use( '/patient', patientRouter );


app.get('/', (req, res) => {
    res.send('response from express');
});
app.listen( port, () => { console.log('server started'); } );