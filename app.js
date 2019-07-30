const express = require('express');
const app = express();
var isServerUp = false;
app.get('/',(req,res) =>{
    res.send('ci with traviss');
})

function getServerStatus() {
    return isServerUp;
}
const server = app.listen(process.env.PORT, () =>{
    console.log(`server listening on address ${server.address().port}`);
    isServerUp = true;
})

module.exports = server;