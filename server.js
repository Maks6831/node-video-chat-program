const express = require('express');
// express is a backend web application framework.
const app = express();
const path = require('path');

const server = require('http').Server(app);
const { v4: uuidv4 } = require('uuid');

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect(`/${uuidv4()}`);
})

app.get('/:room', (req, res) =>{
    res.render('room', {roomId: req.params.room});
} )



server.listen(3030);
// server is going to be local host - port is 3030

// this is my first node js app.