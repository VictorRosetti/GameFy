var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000;
const db = require("./db");
const { json } = require("express/lib/response");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Front/"));


/*(async () => {
    const db = require("./db");
    console.log('Começou!');

    console.log('INSERT INTO TB_TESTE');
    const result = await db.insertCustomer({
        nome:"Teo",
        sobrenome:"Baldo",
        idade:22,
        altura:1.75

    });
    console.log(result.rowCount);

    console.log('SELECT * FROM tb_teste');
    const clientes = await db.selectCustomers();
    console.log(clientes);
})();*/



app.get("/teobaldo", function(req,res){
    res.send("Bem vindo  Teobaldo!");
});

app.get("/user", async function(req,res){
    console.log("Enviei o Get");
    res.header("Access-Control-Allow-Origin", "*");
    var resultado = await db.selectCustomers("Teo");
    res.send(resultado);
});

app.post("/add", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req);
    console.log(req.body);
    console.log("Recebi um dado");
    console.log(req.body.nome);
    console.log(req.body.sobrenome);
    console.log(req.body.idade);
    console.log(req.body.altura);
    res.send("JSON Recebido!")
});

app.post("/addDB", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log(req.body);
    console.log("Recebi um dado");
    console.log(req.body.nome);
    console.log(req.body.sobrenome);
    console.log(req.body.idade);
    console.log(req.body.altura);
    res.send("JSON Recebido!")
});

app.listen(port, () => {
    console.log(`Server running at:${port}/`);
  });