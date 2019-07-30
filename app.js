const express = require('express');
const app = express();
var isServerUp = false;
app.get('/',(req,res) =>{
    res.send('ci with traviss');
})

function getServerStatus() {
    return isServerUp;
}
const server = app.listen(3000, () =>{
    console.log('server running on port 3000');
    isServerUp = true;
})

module.exports = server;