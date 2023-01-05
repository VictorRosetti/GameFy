var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000;
//const db = require("./db");
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'gamefy.db';
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

app.post('/cadastro', (req,res)=>{
    console.log("Dados recebidos no cadastro: "+req.body);
	let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    let titulo = req.body.titulo;
    //let professor = req.body.professor;
    let db = new sqlite3.Database(DBPATH);
    let verifica = `SELECT * FROM usuarios WHERE email=${email}`;
    let grava = `INSERT INTO usuarios VALUES ${nome},${email},${senha},${titulo},${professor}`;
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Verifica se existe o usuário no banco
    db.all(sql, [], (err,rows) =>{
        if (err)
        {
            //Se der erro na verificação, retorna o erro
            res.send("Erro na busca: "+err);
        }else if (rows.length==1)
        {
            //Se houver um usuário, retorna a mensagem abaixo
            res.send("Usuário já existe!");
        }else
        {
            //Se não houver usuário com o e-mail acima, grave o cadastro
            db.all(grava, [], (err, rows)=> {
                if(err)
                {
                    res.send("Erro na gravação: "+err);
                }else
                {
                    res.send("Usuário cadastrado!");
                }
            });
        }
    });
    db.close();

});
app.get('/login', (req, res) => {
	console.log("Dados recebidos no login: "+req.body);
	let login = req.body.login;
	let senha = req.body.senha;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var db = new sqlite3.Database(DBPATH); // Abre o banco
  	var sql = `SELECT * FROM tbUser WHERE login=${login}`;
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    res.send(err);
		}else if(rows.length==1)
		{
			db.all("SELECT * FROM tbUser", [], (err, rows) => {
				if(err)
				{
					res.send(err);
				}
				res.json(rows);
			});
			
		}else
		{
			res.send("Erro de user!");
		}
		
		
	});
	db.close(); // Fecha o banco
});

app.get("/", function(req,res){
    return res.redirect('/cadastro');
});

app.get("/cadastro", function(req,res){
    res.sendFile('cadastro.html', {root: "Front/"});
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