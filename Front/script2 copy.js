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
function sendData(){
    $.post("https://pure-gorge-84152.herokuapp.com/add",
    {"nome" : $("#nomeI").val(),
"sobrenome" : $("#sobrenomeI").val(),
"idade" : $("#idadeI").val(),
"altura" : $("#alturaI").val() }
    , function(msg){
        $("#result").html(msg);
    })
}