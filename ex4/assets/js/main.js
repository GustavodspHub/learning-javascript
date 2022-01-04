//Capturar evento do submit do formulário

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#peso')
  const inputAltura = e.target.querySelector('#altura')  

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value)

  if(!peso && !altura){
    setMensagem("Peso ou altura inválidos", false)
    return;
  }

  const imc = getImc(peso, altura);
  const levelImc = getLevel(imc)
  const msg = `O seu imc é ${imc} ${levelImc}`

  setMensagem(msg, true)
});

function getImc (peso, altura){
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}
function criarP () {
  const p = document.createElement('p')
  return p;
}

function setMensagem (msg, isValid){
  const resultado = document.querySelector('#resultado');
  resultado.innerHTML = '';
  const p = criarP();

  if(!isValid){
    p.classList.add('bad')            
  }

  p.classList.add('paragrafo-resultado')
  p.innerHTML = msg;
  resultado.appendChild(p)
}

function getLevel (level){

  const imcLevels = { LEVEL_1: "abaixo do peso", LEVEL_2: "peso normal", 
  LEVEL_3: "sobrepeso", LEVEL_4: "Obresidade grau 1", LEVEL_5: "Obesidade grau 2", LEVEL_6: "Obesidade grau 3"}

  if(level >= 39.0) return imcLevels['LEVEL_6']
  if(level >= 34.9) return imcLevels['LEVEL_5']
  if(level >= 29.9) return imcLevels['LEVEL_4']
  if(level >= 24.9) return imcLevels['LEVEL_3']
  if(level >= 18.5) return imcLevels['LEVEL_2']
  if(level < 18.5) return imcLevels['LEVEL_1']
}