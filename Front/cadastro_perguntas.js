$(document).ready(function () {
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