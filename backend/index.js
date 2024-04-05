const express = require('express');
const cors = require('cors');


const app = express();
const port = 5000;
const postRouter = require('./routers/postRouter')
const patientRouter = require('./routers/patientRouter')


// middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));



app.use(express.json());
app.use( '/post', postRouter );
app.use( '/patient', patientRouter );


app.get('/', (req, res) => {
    res.send('response from express');
});

app.get('/add', (req, res) => {
    res.send('add response from express');
});

app.listen( port, () => { console.log('server started'); } );