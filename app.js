var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000;
//const db = require("./db");
const sqlite3 = require('sqlite3').verbose();
const DBPATH = 'gamefy.db';
var db = new sqlite3.Database(DBPATH); // Abre o banco
const { json } = require("express/lib/response");
const res = require("express/lib/response");
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Front/"));

var email;
var senha;
var data;
var KeepAlive = [];
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
    var tudo = req.body;
	let nome = req.body.nome;
    let email = req.body.email;
    let senha = req.body.senha;
    let titulo = req.body.titulo;
    //let professor = req.body.professor;
    let professor = 0;
    console.log("Dados recebidos no cadastro: "+tudo);
    //let db = new sqlite3.Database(DBPATH);
    let verifica = `SELECT * FROM usuarios WHERE email="${email}"`;
    let grava = `INSERT INTO usuarios (nome,email,senha,titulo,professor) VALUES ("${nome}","${email}","${senha}","${titulo}",${professor})`;
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Verifica se existe o usuário no banco
    db.all(verifica,[], (err,rows) =>{
        console.log("Quantidade de itens: "+verifica);
        console.log("Quantidade de itens: "+grava);
        console.log("Quantidade de itens: "+rows.length);
        if (rows.length==1)
        {
            //Se houver um usuário, retorna a mensagem abaixo
            res.send("Usuário já existe!");
        }else if (rows.length<=1)
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
        }else
        {
            //Se der erro na verificação, retorna o erro
            res.send("Erro na busca: "+err);
        }
    });
    //db.close();

});

app.post('/cadastroPergunta', (req,res)=>{
    let tudo = req.body;
	let tipo = req.body.tipo;
    let disciplina = req.body.disciplina;
    let tema = req.body.tema;
    let tentativas = req.body.tentativas;
    let pergunta = req.body.pergunta;
    let resposta_1 = req.body.resposta_1;
    let resposta_2 = req.body.resposta_2;
    let resposta_3 = req.body.resposta_3;
    let resposta_4 = req.body.resposta_4;
    let resposta_5 = req.body.resposta_5;
    let resposta_correta = req.body.resposta_correta;

    console.log("Dados recebidos no cadastro: "+tudo);
    console.log("Tipo recebidos no cadastro: "+tipo);
    //let db = new sqlite3.Database(DBPATH);
    let verifica = `SELECT * FROM atividades WHERE pergunta="${pergunta}"`;
    let grava = `INSERT INTO atividades (tipo,disciplina,tema,tentativas,pergunta,resposta_1,resposta_2,resposta_3,resposta_4,resposta_5,resposta_correta) VALUES (${tipo},"${disciplina}","${tema}",${tentativas},"${pergunta}","${resposta_1}","${resposta_2}","${resposta_3}","${resposta_4}","${resposta_5}",${resposta_correta})`;
    res.setHeader('Access-Control-Allow-Origin', '*');
    //Verifica se existe o usuário no banco
    db.all(verifica,[], (err,rows) =>{
        console.log("Quantidade de itens: "+verifica);
        console.log("Quantidade de itens: "+grava);
        console.log("Quantidade de itens: "+rows.length);
        if (rows.length==1)
        {
            //Se houver um usuário, retorna a mensagem abaixo
            res.send("Pergunta já existe!");
        }else if (rows.length<=1)
        {
            //Se não houver usuário com o e-mail acima, grave o cadastro
            db.all(grava, [], (err, rows)=> {
                if(err)
                {
                    console.log("Erro na gravação: "+err);
                    res.send("Erro na gravação: "+err);
                    
                }else
                {
                    console.log("Pergunta cadastrada!");
                    res.send("Pergunta cadastrada!");
                }
            });
        }else
        {
            //Se der erro na verificação, retorna o erro
            res.send("Erro na busca: "+err);
        }
    });
    //db.close();

});
app.post('/login', (req, res) => {
	console.log("Dados recebidos no login: "+req.body.nome);
	email = req.body.email;
	senha = req.body.senha;
	res.setHeader('Access-Control-Allow-Origin', '*');
	
  	var sql = `SELECT * FROM usuarios WHERE email="${email}" AND senha="${senha}"`;
	db.all(sql, [],  (err, rows ) => {
		if (err) {
		    res.send(err);
		}else if(rows.length==1)
		{
			db.all("SELECT * FROM usuarios", [], (err, rows) => {
				if(err)
				{
					res.send(err);
				}
                rows.forEach((row) => {
                    console.log(row.nome);
                  });
				//var resposta = res.json(rows);
                let randomPassword = Math.random().toString(36).slice(-8);
                console.log("Senha gerada: "+randomPassword);
                KeepAlive.push(randomPassword);
                res.send(randomPassword);
                //res.redirect('dashboard_aluno.html');
			});
			
		}else
		{
			res.json("0");
		}
		
		
	});
	//db.close(); // Fecha o banco
});

app.get("/exercicios", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Estou aqui!");
    //res.sendFile('dashboard_aluno.html', {root: "Front/"});
    db.all(`SELECT * FROM atividades`, [], (err, rows) => {
        //db.all(`SELECT * FROM usuarios WHERE email="t@b.com" AND senha="baldo"`, [], (err, rows) => {    
        if(err)
        {
            console.log("aqui 2");
            res.send(err);
        }
        /*rows.forEach((row) => {
            console.log("Linhas: "+row)
            console.log("Nome: "+row.nome);
            console.log("Email: "+row.email);
            console.log("Senha: "+row.senha);
            console.log("Titulo: "+row.titulo);
            console.log("Professor: "+row.professor);
          });*/
        //var resposta = res.json(rows);
        console.log("Linhas: "+rows)
        //res.send(rows);
        res.send(rows);
        //data = rows;
        
    });
});

app.get("/all", function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    console.log("Estou aqui!");
    //res.sendFile('dashboard_aluno.html', {root: "Front/"});
    db.all(`SELECT * FROM usuarios WHERE email="${email}" AND senha="${senha}"`, [], (err, rows) => {
        //db.all(`SELECT * FROM usuarios WHERE email="t@b.com" AND senha="baldo"`, [], (err, rows) => {    
        if(err)
        {
            console.log("aqui 2");
            res.send(err);
        }
        /*rows.forEach((row) => {
            console.log("Linhas: "+row)
            console.log("Nome: "+row.nome);
            console.log("Email: "+row.email);
            console.log("Senha: "+row.senha);
            console.log("Titulo: "+row.titulo);
            console.log("Professor: "+row.professor);
          });*/
        //var resposta = res.json(rows);
        console.log("Linhas: "+rows[0])
        //res.send(rows);
        res.send(rows[0]);
        //data = rows;
        
    });
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