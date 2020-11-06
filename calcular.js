function calcular(tipo, valor) {
//teste: console.log(tipo, valor)
if(tipo === 'acao'){
  if(valor === 'c'){
    //limpar o input text
    document.getElementById('resultado').value = ''
  }
  if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.'){
    //concatenar
    document.getElementById('resultado').value += valor
  }
  if(valor === '='){
    var valor_campo = eval(document.getElementById('resultado').value)
    document.getElementById('resultado').value = valor_campo
    /*teste:
    console.log(valor_campo)
    console.log(eval(valor_campo))
    */
  }
}
if(tipo === 'valor'){
  document.getElementById('resultado').value += valor
}
}