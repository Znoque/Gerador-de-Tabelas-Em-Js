function limpar(){
    var input_qtdLinhas = document.getElementById("qtd_linhas");    
    var input_qtdColunas = document.getElementById("qtd_colunas");    
    var res = document.getElementById("resposta");
    input_qtdLinhas.value = "";
    input_qtdColunas.value = "";
    res.innerHTML = "";
    res.style.backgroundColor = "#DCDCDC";
}

function gerarTabela(){ 

    var input_qtdLinhas = document.getElementById("qtd_linhas").value;
    var input_qtdColunas = document.getElementById("qtd_colunas").value;   
    
    if(input_qtdLinhas >=1 && input_qtdColunas >=1){    
        limpar();
        var res = document.getElementById("resposta");
        res.style.backgroundColor = "#4682B4";
        res.style.textAlign = "center";

        var titulo = '<h1>Tabela Gerada ('+input_qtdLinhas+' Linhas, '+input_qtdColunas+' Colunas)</h1>'
        res.innerHTML += titulo;

        var tabela = '<table id="tabela" border="1" align="center"><thead>';     

        /*GERANDO CABEÇALHO DA TABELA*/
        for(var c=1; c<=input_qtdColunas; c++){        
            tabela += "<td>coluna "+c+"</td>"
        }

        tabela += "<tbody>";

        /*GERANDO LINHAS DA TABELA*/
        for(var l=1; l<=input_qtdLinhas; l++){  
            tabela += "<tr>";
            for(var c=1; c<=input_qtdColunas; c++){ 
                tabela += '<td>L'+l+' da C'+c+ '</td>';
            }
            tabela += "</tr>";
        }

        tabela += "<tbody>";
        tabela += "</thead></table>";
        res.innerHTML += tabela;

    }else{
        limpar();
        alert("O Número de Linhas ou Colunas Não Pode Ser Menor Que 1");
    }
}