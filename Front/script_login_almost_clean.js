

//Para esconder os campos do cadastro de perguntas/respostas
var tipo;
var tema;
var titulo;
var pagina=0;
var paginaMax=100;
var atividade_id_server=0;
var resposta_certa=0;
var resposta_escolhida=0;
var arrayAlive=[];
var timeOut;

$(document).ready(function() {$('input:radio').click(function () {
  if($(this).attr('name')=="tema")
  {
    tema = $(this).attr('id');
    console.log("Tema1:"+tema);
  } 
})});

$(document).ready(function() {
  console.log("É professor: "+titulo);
  if(titulo=="1")
  {
    $('#prof').show();
  }else
  {
    $('#prof').hide();
  }
});




function online() {
  $.get("http://127.0.0.1:3000/all", function (resultado) {
    //$("#json").html(JSON.stringify(resultado));
    $("#nome").html(resultado.nome);
    $("#email").html(resultado.email);
    $("#senha").html(resultado.senha);
    $("#titulo").html(resultado.titulo);
    $("#professor").html(resultado.professor);
    titulo = resultado.titulo;
    console.log("Passei no resultado"+resultado);
    //console.log("resultado:");
  });
}

function SendData() {
  var titulo = "0";
  console.log("Dado do professor:" + $("#titulo").is(':checked'));
  if ($("#titulo").is(':checked')) {
    titulo = "1";
  }
  var json = {
    "nome": $("#nome").val(),
    "email": $("#email").val(),
    "senha": $("#senha").val(),
    "titulo": titulo
  };
  console.log(json);
  $.post("http://127.0.0.1:3000/cadastro",
    json
    , function (msg) {
      $("#resposta").html(msg);
    })
}

function Login() {
  $.post("http://127.0.0.1:3000/login",
    {
      "email": $("#email").val(),
      "senha": $("#senha").val()
    }
    , function (msg) {
      console.log("Senha do servidor: "+msg);
      arrayAlive.push(msg);
      localStorage.setItem("Teste",msg);
      if (msg != 0) {
        window.location = `http://127.0.0.1:3000/dashboard_aluno.html`;
      }
    })
}

function KeepAlive()
{
  console.log("Timeout ativo");
}

function Atividade() {
  
        window.location = `http://127.0.0.1:3000/exercicios.html`;
      
}

function CadastrarAtividade() {
  
  window.location = `http://127.0.0.1:3000/cadastro_questao.html`;

}