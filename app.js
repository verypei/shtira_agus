const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');


const Router = require('./routes');
console.log('OK');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res)=> res.send("Sthira"))

app.use('/', Router)




app.listen(port, ()=>console.log(`listening on port ${port}`))