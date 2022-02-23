const express = require ('express');
const cors = require('cors');




const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) =>{
  res.send("Hello World!");
});


app.listen(3000);