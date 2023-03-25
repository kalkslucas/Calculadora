let resultado = document.getElementById('resultado')
resultado.innerHTML = ''

function calcular(tipo, valor){
    if(tipo === 'acao'){
      if(valor === '+' || valor === '-' || valor === '*' || valor === '/'){
        resultado.value += valor
      }
      else if (valor === ''){
        resultado.value = ''
      }
      else if(valor === '=') {
        let expressao = eval(resultado.value)
        resultado.value = eval(expressao)
        console.log(expressao);
      }
    } else if(tipo === 'valor'){
      resultado.value += valor
    }
}