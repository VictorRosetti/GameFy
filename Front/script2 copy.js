

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
function EscondeBotao()
{
  if(pagina==0)
  {
    $('#voltar').hide();
    BuscarPergunta();
    GetRespostaForm();
    console.log("entrei aqui: "+pagina);
  }else if (pagina<paginaMax)
  {
    $('#voltar').show();
    BuscarPergunta();
    GetRespostaForm();
    console.log("entrei aqui 4: "+pagina);
  }
}
$(document).ready(function () {
  EscondeBotao();
  if($('#avancar').click(function()
  {
    pagina++;
    EscondeBotao();
    console.log("entrei aqui 2: "+pagina);
  }));
  if($('#voltar').click(function()
  {
    pagina--;
    EscondeBotao();
    console.log("entrei aqui 3: "+pagina);
  }));
  
  $("div.desc").hide();
  $("input[name$='tipo']").click(function () {
    var test = $(this).val();
    $("div.desc").hide();
    switch (test) {
      case "0":
        $("#" + "objetivas").show();
        tipo=0;
        break;
      case "1":
        $("#" + "objetivas").show();
        tipo=1;
        break;
      case "2":
        $("#" + "complete").show();
        tipo=2;
        break;
      case "3":
        $("#" + "discursiva_pura").show();
        tipo=3;
        break;

    }

  });
});
function GetRespostaForm()
{
  $('input:radio').click(function () {
    if($(this).attr('name')=="resposta")
    {
        resposta_escolhida = $(this).attr('value')
        console.log("Resposta escolhida:"+resposta_escolhida);
    }
  })
}
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

function CadastrarPergunta() {
  var disciplina="programacao";
  var tentativas;
  var pergunta;
  var resp1;
  var resp2;
  var resp3;
  var resp4;
  var resp5;
  var correta;

  
  
  switch(tipo)
  {
    case 0:
    case 1:
      tentativas=$("#tentativas").val();
      pergunta=$("#pergunta_objetiva").val();
      resp1=$("#resp_1").val();
      resp2=$("#resp_2").val();
      resp3=$("#resp_3").val();
      resp4=$("#resp_4").val();
      resp5=$("#resp_5").val();
      for(i=1; i<6; i++)
      {
        if($('#chk_'+i).is(":checked"))
        {
          correta=i;
        }
      }
      break;
    case 2:
      tentativas=1;
      pergunta=$("#pergunta_complete").val();
      resp1=$("#campo_1").val();
      resp2=$("#campo_2").val();
      resp3=$("#campo_3").val();
      resp4=$("#campo_4").val();
      resp5=$("#campo_5").val();
      correta=0;
      break;
    case 3:
      tentativas=1;
      pergunta=$("#pergunta_pura").val();
      resp1="0";
      resp2="0";
      resp3="0";
      resp4="0";
      resp5="0";
      correta=0;
      break;

  }

  var json = {
    "tipo": tipo,
    "disciplina": disciplina,
    "tema": tema,
    "tentativas": tentativas,
    "pergunta": pergunta,
    "resposta_1": resp1,
    "resposta_2": resp2,
    "resposta_3": resp3,
    "resposta_4": resp4,
    "resposta_5": resp5,
    "resposta_correta": correta
  };
  console.log("Olha o JSON aqui:"+json);
  $.post("http://127.0.0.1:3000/cadastroPergunta",
    json
    , function (msg) {
      $("#resposta").html(msg);
    })
}

function SalvarResposta() {
  var usuario_id=1;
  var atividade_id=atividade_id_server;
  

  var pergunta;
  var resp1;
  var resp2;
  var resp3;
  var resp4;
  var resp5;
  var correta;

  
  
  switch(tipo)
  {
    case 0:
    case 1:
      tentativas=$("#tentativas").val();
      pergunta=$("#pergunta_objetiva").val();
      resp1=$("#resp_1").val();
      resp2=$("#resp_2").val();
      resp3=$("#resp_3").val();
      resp4=$("#resp_4").val();
      resp5=$("#resp_5").val();
      for(i=1; i<6; i++)
      {
        if($('#chk_'+i).is(":checked"))
        {
          correta=i;
        }
      }
      break;
    case 2:
      tentativas=1;
      pergunta=$("#pergunta_complete").val();
      resp1=$("#campo_1").val();
      resp2=$("#campo_2").val();
      resp3=$("#campo_3").val();
      resp4=$("#campo_4").val();
      resp5=$("#campo_5").val();
      correta=0;
      break;
    case 3:
      tentativas=1;
      pergunta=$("#pergunta_pura").val();
      resp1="0";
      resp2="0";
      resp3="0";
      resp4="0";
      resp5="0";
      correta=0;
      break;

  }

  var json = {
    "tipo": tipo,
    "disciplina": disciplina,
    "tema": tema,
    "tentativas": tentativas,
    "pergunta": pergunta,
    "resposta_1": resp1,
    "resposta_2": resp2,
    "resposta_3": resp3,
    "resposta_4": resp4,
    "resposta_5": resp5,
    "resposta_correta": correta
  };
  console.log("Olha o JSON aqui:"+json);
  $.post("http://127.0.0.1:3000/cadastroPergunta",
    json
    , function (msg) {
      $("#resposta").html(msg);
    })
}

function BuscarPergunta() {
  $.get("http://127.0.0.1:3000/exercicios", function (resultado) {
    
    console.log(JSON.stringify(resultado));
    paginaMax = resultado.length;
    let tipo_pergunta = resultado[pagina].tipo;
    atividade_id_server = resultado[pagina].atividade_id;
    resposta_certa = resultado[pagina].resposta_correta;
    console.log("o tipo de pergunta é:"+paginaMax);
    let questao = "";
    //$("#json").html(JSON.stringify(resultado));
    switch(tipo_pergunta)
    {
      case 0:
      case 1:
            questao = "<h3>Disciplina:"+resultado[pagina].disciplina+"</h3>";
            questao += "<h3>Tema:"+resultado[pagina].tema+"</h3>";
            questao += "<h1>Problema:"+resultado[pagina].pergunta+"</h1>";
            questao += "<div><p>Selecione a resposta:</p>";
            questao += '<input type="radio" id="resposta_1" name="resposta" value=0>';
            questao += '<label for="resposta_1">'+resultado[pagina].resposta_1+'</label><br>';
            questao += '<input type="radio" id="resposta_2" name="resposta" value=1>';
            questao += '<label for="resposta_2">'+resultado[pagina].resposta_2+'</label><br>';
            questao += '<input type="radio" id="resposta_3" name="resposta" value=3>';
            questao += '<label for="resposta_3">'+resultado[pagina].resposta_3+'</label><br>';
            questao += '<input type="radio" id="resposta_4" name="resposta" value=4>';
            questao += '<label for="resposta_4">'+resultado[pagina].resposta_4+'</label><br>';
            questao += '<input type="radio" id="resposta_5" name="resposta" value=5>';
            questao += '<label for="resposta_5">'+resultado[pagina].resposta_5+'</label><br>';
            break;
      case 2:
            let texto = resultado[pagina].pergunta;
            let textoFinal = texto.replace(/CAMPO/g,'<input id="resposta_1" name="resposta" placeholder="Texto da Questão">' )
            questao = "<h3>Disciplina:"+resultado[pagina].disciplina+"</h3>";
            questao += "<h3>Tema:"+resultado[pagina].tema+"</h3>";
            questao += "<div><p>Digite as palavras nos campos:</p>";
            questao += textoFinal;
            break;
      case 3:
            questao = "<h3>Disciplina:"+resultado[pagina].disciplina+"</h3>";
            questao += "<h3>Tema:"+resultado[pagina].tema+"</h3>";
            questao += "<h1>Problema:"+resultado[pagina].pergunta+"</h1>";
            questao += "<div><p>Digite sua resposta:</p>";
            questao += '<textarea id=resposta_1" name="resposta" rows="8" cols="50"></textarea><br>';
            break;
        default:
            questao = "ERRO";
            break;
    }
    document.getElementById("exercicios").innerHTML = questao;
    titulo = resultado.titulo;
    console.log("Passei no resultado"+resultado);
    //console.log("resultado:");
  });
}

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
      timeOut = setTimeout(KeepAlive,15000);
      if (msg != 0) {
        //window.location = `http://127.0.0.1:3000/dashboard_aluno.html`;
        console.log("Fazendo algo");
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



/*function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("tipo");
  filter = input.value.toUpperCase();
  div = document.getElementById("myDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}*/