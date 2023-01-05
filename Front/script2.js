function EnviarResposta(){
    
}

function online(){
    $.get("https://pure-gorge-84152.herokuapp.com/user", function(resultado){
        $("#json").html(resultado);
        var objeto = JSON.parse(resultado);
        $("#nome").html(objeto.nome);
        $("#sobrenome").html(objeto.sobrenome);
        $("#idade").html(objeto.idade);
        $("#altura").html(objeto.altura);
        console.log(resultado);
        console.log("resultado:");
    });
}
function SendData(){
    var titulo = 0;
    console.log("Dado do professor:"+$("#titulo").checked);
    if($("#titulo").checked)
    {
        titulo = 1;
    }
    $.post("https://k569z2-3000.preview.csb.app/cadastro",
    {"nome" : $("#nome").val(),
    "email" : $("#email").val(),
    "senha" : $("#senha").val(),
    "titulo": titulo}
    , function(msg){
        $("#resposta").html(msg);
    })
}

function Login(){
    $.post("https://k569z2-3000.preview.csb.app/login",
    {"email" : $("#email").val(),
    "senha" : $("#senha").val()}
    , function(msg){
        $("#resposta").html(msg);
    })
}