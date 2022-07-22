const express = require ('express');
const path = require('path');
const app = express();
const port = 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res) => res.sendFile(path.resolve(__dirname,'views','home.html')));
app.get('/detalle',(req,res) => res.sendFile(path.resolve(__dirname,'views','productDetail.html')));

app.listen(port, () => console.log(`Se levantó con exito el servidor en http://localhost:${port}`));