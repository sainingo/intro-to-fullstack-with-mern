const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('hello from backend');
});
app.get('/server-res', (req, res) => {
    res.send("Hello responding from server");
});

app.listen('3001', () => {
    console.log('server running');
});