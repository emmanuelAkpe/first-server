// Import , instantiate and then listen

const express = require('express')
const app = express()
PORT = 5000


app.get('/', (req, res) => {
    res.send("Hello Ghana");
});
app.listen(PORT, ()=>{
    console.log(`🚀 server running at port ${PORT}` );
} )
