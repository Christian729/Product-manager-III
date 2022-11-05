const express = require('express');
const cors = require('cors') // we have to eventually install cors so the server and client
const app = express();
const port = 8000;
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./config/mongoose.config');
require('./routes/prod.routes')(app); // ALWAYS remember to update!!!
    
app.listen(port, () => console.log(`Listening on port: ${port}`) );